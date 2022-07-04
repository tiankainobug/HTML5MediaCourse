new Vue({
    el:'#vueapp',
    data:{
        currentVideoData:null
    },
    mounted(){
        this.initApp()
    },
    methods:{
        async initApp(){
            let stream = await navigator.mediaDevices.getDisplayMedia()
            this.$refs.video.srcObject = stream
            this.recorder = new MediaRecorder(stream,{mimeType:'video/webm;codecs=h264'})
            this.recorder.ondataavailable = this.recorder_onDataAvailableHandler.bind(this)
        },
        recorder_onDataAvailableHandler(e){
            console.log(e)
            this.currentVideoData = e.data

        },
        btnStart(){
            this.recorder.start()
        },
        btnEnd(){
            this.recorder.stop()
        },
        btnPlay(){
            this.playRecorderVideo();
        },
        playRecorderVideo(){
            this.$refs.play.src = URL.createObjectURL(this.currentVideoData)
        }
    }
})
