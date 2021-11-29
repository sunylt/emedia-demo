import EmediaSDK from "./EmediaSDK"

const username = localStorage.getItem("emedia_username")|| "ae_" + (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1) /// 随机一个名字
const serverUrl = "https://private-preview-media.easemob.com"
const appId = "827212690214645824"
const appKey = "Y25Sak9nbnVlN1pLv3Bm5FCJBquhPsL5csn06k3AOlQ"
let userSig = ""
let localStream = null
let localSharedDesktopStream = null
let currentMainScreenItem = null
let cachedStreams =  window.cachedStreams = {}
let cachedMembers = window.cachedMembers = {}

const $videoMain = $("#ui-video-main video") // 主视频
const $videoList = $('#ui-video-list') // 成员列表

localStorage.setItem("emedia_username", username)

function $(selector) {
	return document.querySelector(selector)
}

function swithVideoToMain(item){
	// 交换id 跟 srcObject 即可
	// const videoMainStream = $videoMain.srcObject
	// const mainId = $videoMain.id
	// $videoMain.srcObject = videoTag.srcObject
	// $videoMain.id = videoTag.id
	// videoTag.srcObject = videoMainStream
	// videoTag.id = mainId
	// videoTag.title = getUsername(mainId)
	if(currentMainScreenItem){
		currentMainScreenItem.className = ""
	}
	item.className = "mainScreen"
	currentMainScreenItem = item;

}

function createMiniVideoPalyer(id, name){
	if($('#' + id)){
		return $('#' + id)
	}
	const item = document.createElement("div")
	const videoTag = document.createElement("video")
	const nameTag = document.createElement("span")
	videoTag.id = id
	videoTag.autoplay = true
	videoTag.playsInline = true
	nameTag.innerText = name
	item.addEventListener("click", () => {
		swithVideoToMain(item)
	})
	item.appendChild(videoTag)
	item.appendChild(nameTag)
	$videoList.appendChild(item)
	return item
}

function removeVideoPlayer(id){
	const mainItem= document.querySelector('.mainScreen video')
  const videoTag = $("#" + id)
	if(!videoTag) return
	if(mainItem && mainItem.id === id){ // 如果被移除的id在主画面 把主画面替换成localStream
		const localUserPlayer = $("#" + localStream.id).parentElement
		swithVideoToMain(localUserPlayer)
	}
	$videoList.removeChild(videoTag.parentElement)
}

const emedia = window.emedia = new EmediaSDK({
	config: {
    LOG_LEVEL: 5
	}
})

const service = window.service = new emedia.Service({
	listeners: {
		onMeExit(...rest) {
			console.log('触发onMeExit，原因:', ...rest)
			localStream = null
			currentMainScreenItem = null
			$videoList.innerHTML = ""
			cachedStreams = {}

			console.log("reset all...")
		},

		onAddMember(member) {
			console.log("member add>>>>", member)
			const name = member.ext.nickname || member.nickName || member.name || member.memName 
			// 成员播放器创建
			createMiniVideoPalyer(member.id, name)
			cachedMembers[member.id] = member
		},

		onRemoveMember(member) {
			console.log("member remove>>>>", member)
			removeVideoPlayer(member.id)
			delete cachedMembers[member.id]
		},


		// 流的增加，仅用于统计人数，不处理流
		onAddStream(stream) {
			console.log("stream add>>>>", stream)
			const nickname = stream.located() ? "我" : stream.owner.ext.nickname || stream.owner.name
			// 针对桌面共享单独处理
			if(stream.type == 1){
				createMiniVideoPalyer(stream.id, nickname + "的桌面")
			}
		},

		// 某成员的流退出（包含本地流、音视频流，共享桌面等）
		onUpdateStream(stream, updateObj) {
			console.log("stream update>>>>", stream)
			const mediaStream = stream.getMediaStream()
			cachedStreams[stream.id] = stream
			
			// 针对桌面共享单独处理
			if(stream.type == 1){
				$("#" + stream.id).srcObject = mediaStream
			}
			if(stream.type == 0){
				if(stream.located()){
					localStream = stream
					const item = createMiniVideoPalyer("localstream", `我(${stream.owner.ext.nickname || stream.owner.name})`)
					$("#localstream").srcObject = mediaStream
					if(!currentMainScreenItem){
						swithVideoToMain(item)
					}
				}else{
					$("#" + stream.memId).srcObject = mediaStream
				}
			}
		},

		// 某成员的流退出（包含本地流、音视频流，共享桌面等）
		onRemoveStream(stream) {
			console.log("stream remove>>>>", stream)
			cachedStreams[stream.id] = null
			delete cachedStreams[stream.id]

			// 桌面共享的流单独处理，因为不会触发onRemoveMember
			if(stream.type == 1){

				// 清除缓存的本地共享流
				if(stream.located()){
					localSharedDesktopStream = null;
				}

				removeVideoPlayer(stream.id)
			}
		},

		onNotifyEvent(evt) {
			console.log("event>>>>", evt)
		}
	}
})

// getUserSig接口 可以根据项目经理提供的文档在自己服务实现，此处接口服务仅作演示使用
function getUserSig(userId) {
	return fetch(`https://private-preview-media.easemob.com/management/room/player/usersig?name=${userId}&sdkAppId=${appId}&sdkAppKey=${appKey}`)
	.then(res => res.text())
}

function getTicket(roomId) {
	return fetch(`${serverUrl}/emedia/enter_room?app_id=${appId}&user_sig=${userSig}&room_id=${roomId}&user_id=${username}&_=${+new Date}`).then(res => res.json())
}

function joinRtcRoom(roomId) {

	if(!roomId){
		return
	}
	
	// 获取进入指定房间的ticket
	getTicket(roomId).then(result => {

		// 设置要加入房间ticket
		service.setup(result.ticket, { role: '', avatar: '', nickname: username })

		// 加入房间并打开设备推流
		service.join(() => {
			// 流配置
			const pubS = new service.AVPubstream({
				constaints: {
					audio: true,
					video: true
				},
				aoff: 0,
				voff: 0,
				name: 'video'
			})

			// 打开设备
			service.openUserMedia(pubS).then(() => {
				// 推流
				service.push(pubS, () => {}, () => {})
			})
		})
	})
}

// 获取并保存用户签名
getUserSig(username).then(res => userSig = res)

// 加入（创建）房间
$("#joinRoom").addEventListener("click", () => {

	// 自己起个roomId
	const roomId = document.querySelector("input").value

	joinRtcRoom(roomId)

})

// 自己退
$("#exitRoom").addEventListener("click", () => {
	service.exit()
})

// 解散房间
$("#destroyRoom").addEventListener("click", () => {
	service.exit(true)
})

$("#changeCamera").addEventListener("click", () => {
		let videoOptions = null

		if(!localStream) return
		
		if(localStream.constaints.video === true) {
			videoOptions = { facingMode: { exact: "environment" } }
		}else if(typeof localStream.constaints.video === "object"){
			if(typeof localStream.constaints.video.facingMode  === "object"){
				videoOptions = { facingMode: "user"}
			}else{
				videoOptions = { facingMode: { exact: "environment" } }
			}
		}

		const	_pubS = new service.AVPubstream({
			constaints: {
				audio: true,
				video: videoOptions
			},
			aoff: 0,
			voff: 0,
			name: 'userSwitch'
		})

		service.openUserMedia(_pubS).then(function () {
			service.push(_pubS, function(stream){
				service.hungup(localStream.id)
			}, function(){
				alert('推流失败')
			})
		}, function(){
			alert('摄像头切换失败')
		})

})

$("#voff").addEventListener("click", () => {
	localStream && service.voff(localStream, !localStream.voff)
})

$('#shareDesktop').addEventListener("click", () => {

	// 无开启的会议
	if(!localStream || localSharedDesktopStream){
		return
	}

	// 配置共享桌面选项
	const shareStream = new service.ShareDesktopPubstream({
    voff: 0,
    aoff: 0,
    isAgentShare: true,
    ext: {},
    screenOptions: ['screen', 'window', 'tab']
  })

	// 打开设备并推流
	service.openUserMedia(shareStream).then(() => {
		service.push(shareStream, localShareStream => {

			const deskMediaStream = localShareStream.getLocalMediaStream()

			// 监听桌面共享被取消
			deskMediaStream.getVideoTracks()[0].onended = function(){
				service.hungup(localShareStream.id)
			}
			localSharedDesktopStream = localShareStream
		}, (

		) => {})
	})

})

$("#stopShareDesktop").addEventListener("click", () => {
	localSharedDesktopStream && service.hungup(localSharedDesktopStream.id)
})