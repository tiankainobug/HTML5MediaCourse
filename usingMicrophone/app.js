new Vue({
    el:'.audioDiv',
    data:{
        audioInputDevices:[],
        selectedAudioDevicesIndex:0
    },
    mounted(){
        this.getInputDevices()
    },
    methods:{
        async getInputDevices() {
            let allMediaDevices = await navigator.mediaDevices.enumerateDevices();
            console.log('allMediaDevices',allMediaDevices)
            this.audioInputDevices.length = 0;
            this.audioInputDevices.push(...allMediaDevices.filter(item => item.kind === 'audioinput'));
            console.log(this.audioInputDevices)
            this.showSelectAudioDevices()
        },
        async showSelectAudioDevices() {
            let device = this.audioInputDevices[this.selectedAudioDevicesIndex]
            let stream = await navigator.mediaDevices.getUserMedia({video:false,audio:device})
            document.querySelector('audio').srcObject = stream;
        }
    },
    watch:{
        selectedAudioDevicesIndex(val,oldVal){
            this.showSelectAudioDevices()
        }
    }
})
