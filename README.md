# EmediaSDK demo及集成
# demo 运行
```shell
npm install 或 npm install -g parcel-bundler
npm start
```

## 一、EmediaSDK 集成

### 1.1 获取SDK并在代码中引入SDK

可以通过script或者require/import 引入emediaSDK

```javascript
// <script src="path/EmediaSDK.js"></script>

// or
var EmediaSDK = require("path/EmediaSDK") 
// or
import EmediaSDK from "path/EmediaSDK"

var emedia = new EmediaSDK({...})
```

### 1.2 配置及初始化

```javascript
import EmediaSDK from "EmediaSDK"

const emedia = new EmediaSDK({
	config: {
		getCopyIntervalMillis: 5000,
    	LOG_LEVEL: 5
	}
})

const service = new emedia.Service({
	listeners: {
		// 退出，服务端强制退出，进入会议失败，sdk重连失败等 均会调用到此处
		onMeExit(reason) {
			log.warn('触发onMeExit，原因:', ...rest)

		},

		// 流的增加，仅用于统计人数，不处理流
		onAddStream(stream) {
			
		},
		// 某人进入会议
		onAddMember(member) {
			
		},
		// 某人退出会议
		onRemoveMember(member) {
			
		},

		// 更新 一个流 （音视频流，共享桌面等）。
		// 可能是 断网后，重新获取到远端媒体流，或者对方静音或关闭摄像头
		onUpdateStream(stream, updateObj) {
			
		},

		// 某人 取消 一个流 （音视频流，共享桌面等）（包含本地流）
		onRemoveStream(stream) {
			
		},
		// 这个事件比较多，以后业务拓展时，根据需要再给开放一些回调，目前忽略
		onNotifyEvent(evt) {
			// 接听 打开本地摄像头 并成功推流
		if(evt instanceof window.emedia.event.PushSuccess){}
		// 接听 打开本地摄像头 推流失败
		else if(evt instanceof window.emedia.event.PushFail){
			service.exit();
		}
		// 接听 打开摄像头失败
		else if(evt instanceof window.emedia.event.OpenMediaError){
			service.exit();
		}
		}
	}
})

```

### 1.3 创建（加入）会议

```javascript

// 1、根据用户名获取userSig

// 2、根据项目经理提供的服务地址 appId appKey 以及上面获取的 userSig 调用 enter_room 接口获取 ticket
fetch(`${serverUrl}/emedia/enter_room?app_id=${appId}&&user_sig=${userSig}&room_id=${roomId}&user_id=${userId}`).then(res => res.json())

// 3、设置ticket并加入房间
service.setup(result.ticket, { role: '' })
service.join(() => {

	// 配置加入流
	var pubS = service.AVPubstream({
		constaints: {
			audio: true,
			video: true
		},
		aoff: 0,
		voff: 0,
		name: 'video',
		ext: {
			// browser: app.appname
		}
	})
		
	// 打开设备并推流
	service.openUserMedia(pubS).then(function() {
		service.push(pubS, function() {
				
		}, function() {
			
		})
	})
		
})
```

### 1.4 退出（解散）会议

```javascript
service.exit() // 仅自己离开
service.exit(true) // 解散会议，房间内成员都会被退出

```

### 1.5 切换摄像头
```javascript
service.changeCamera(stream.id)

```

### 1.6 关闭/打开自己的音(视)频

```javascript
service.aoff(currentStream, false) // false 关闭声音. true 打开声音，关闭后对方只显示图像
service.voff(currentStream, false) // false 关闭图像  true 打开图像, 关闭后对方只显示声音
```

### 1.7 本地静音

```javascript
videoTag.setAttribute("muted", true) // 本地静音 对方无任何影响
videoTag.removeAttribute("muted") // 解除静音
```

##  二、kefu-webim集成音视频SDK定制开发


### 2.1 音视频功能
文件：`src/js/app/modules/emedia/videoChat.js`

* 负责SDK的引入以及初始化工作
* initEmedia()  初始化音视频SDK
* handleInit()  音视频业务的一些初始化逻辑

文件：`src/js/app/modules/emedia/videoPanel.js`

* 音视频功能UI

文件：`src/js/app/modules/emedia/miniVideoWin`

* 单个音视频流播放与流移除的实现


### 2.2 收发消息
文件位置：`src/js/app/modules/channel.js`

#### 发送消息 _sendText(message:String, ext:Object) 

```javascript
// 发送文本消息 message为发送的文本内容 ext为消息的扩展字段
// 示例
var channel = require("./channel");
channel.send("邀请您进行音视频聊天", {
	ext: {
		rtcEventType: 1
		roomId: "123"
		fromUser: "test001"
	}
})
```

#### 接收消息 _handleMessage(msg:Object, options:Object)

```javascript
// 处理IM接收消息 
function _handleMessage(msg, options){
	// ...
	var rtcEventType = utils.getDataByPath(msg, "ext.rtcEventType")
	if(rtcEventType){
		if(rtcEventType === 1){
			// 处理音视频邀请
		}
	}
	// ....
}
```

