new Vue({
    el:'#vueapp',
    mounted(){
        this.initVideoDevice()
    },
    methods:{
        async initVideoDevice(){
            this.$refs.video.srcObject = await navigator.mediaDevices.getUserMedia({video:true,audio:false})
            this._context2d = this.$refs.canvas.getContext('2d')
        },
        takePhoto(){
            this._context2d.drawImage(this.$refs.video,0,0,400,300)
        }
    }
})
