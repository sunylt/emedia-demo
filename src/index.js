import EmediaSDK from "./EmediaSDK"

const username = localStorage.getItem("emedia_username")|| "ae_" + (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1) /// 随机一个名字
const serverUrl = "https://private-preview-media.easemob.com"
const appId = "827212690214645824"
const appKey = "Y25Sak9nbnVlN1pLv3Bm5FCJBquhPsL5csn06k3AOlQ"
let userSig = ""
let localStream = null
let localSharedDesktopSteam = null

localStorage.setItem("emedia_username", username)

function $(selector) {
	return document.querySelector(selector)
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
			$("#localStream").srcObject = null
			$("#list").innerHTML = ""
		},

		// 流的增加，仅用于统计人数，不处理流
		onAddStream(stream) {
			console.log("stream add>>>>", stream)
		},

		onAddMember(member) {
			console.log("member add>>>>", member)
			const videoTag = document.createElement("video")
			videoTag.id = "media_" + member.id
			videoTag.autoplay = true
			videoTag.playsInline = true
			$("#list").appendChild(videoTag)
		},

		onRemoveMember(member) {
			console.log("member remove>>>>", member)
			const tag = $("#media_" + member.id)
			tag.srcObject = null
			$("#list").removeChild(tag)
		},

		// 某成员的流退出（包含本地流、音视频流，共享桌面等）
		onUpdateStream(stream, updateObj) {
			console.log("stream update>>>>", stream)
			const mediaStream = stream.getMediaStream()
			if(stream.type == 0){
				if(stream.located()){
					localStream = stream
					$("#localStream").srcObject = mediaStream
				}else{
					$("#media_" + stream.memId).srcObject = mediaStream
				}
			}else{
				if(!$("#desktop_" + stream.id)){
					const videoTag = document.createElement("video")
					videoTag.id = "desktop_" + stream.id
					videoTag.autoplay = true
					videoTag.playsInline = true
					$("#list").appendChild(videoTag)
				}
				$("#desktop_" + stream.id).srcObject = mediaStream
			}
		},

		// 某成员的流退出（包含本地流、音视频流，共享桌面等）
		onRemoveStream(stream) {
			console.log("stream remove>>>>", stream)

			// 桌面共享的流单独处理，因为不会触发onRemoveMember
			if(stream.type == 1){

				// 清楚缓存的本地共享流
				if(stream.located()){
					localSharedDesktopSteam = null;
				}
				
				const tag = $("#desktop_" + stream.id)
				tag.srcObject = null
				$("#list").removeChild(tag)
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
	return fetch(`${serverUrl}/emedia/enter_room?app_id=${appId}&&user_sig=${userSig}&room_id=${roomId}&user_id=${username}`).then(res => res.json())
}

function joinRtcRoom(roomId) {

	if(!roomId){
		return
	}
	
	// 获取进入指定房间的ticket
	getTicket(roomId).then(result => {

		// 设置要加入房间ticket
		service.setup(result.ticket, { role: '' })

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
	localStream && service.changeCamera(localStream.id)
})

$("#voff").addEventListener("click", () => {
	localStream && service.voff(localStream, !localStream.voff)
})

$('#shareDesktop').addEventListener("click", () => {

	// 无开启的会议
	if(!localStream){
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
			localSharedDesktopSteam = localShareStream
		}, (

		) => {})
	})

})

$("#stopShareDesktop").addEventListener("click", () => {
	localSharedDesktopSteam && service.hungup(localSharedDesktopSteam.id)
})