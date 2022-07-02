new Vue({
    el:'#vueapp',
    data:{
        currentWebmData:null
    },
    mounted(){
        this.initApp()
    },
    methods:{
        async initApp(){
            this.stream = await navigator.mediaDevices.getUserMedia({video:false,audio:true})
            this.recorder = new MediaRecorder(this.stream,{mimeType:'video/webm;codecs=h264'})
            this.recorder.ondataavailable = this.recorder_dataAvailableHandler.bind(this)
        },
        recorder_dataAvailableHandler(e){
            this.currentWebmData = e.data
        },
        btnStart(){
            this.recorder.start()
        },
        btnPause(){},
        btnConsume(){},
        btnStop(){
            this.recorder.stop()
        },
        btnPlay(){
            this.$refs.audio.src = URL.createObjectURL(this.currentWebmData)
        },
    }
})
