window.onload = async function (){
    let stream = await navigator.mediaDevices.getUserMedia({video:true,audio:false})
    document.querySelector('video').srcObject = stream;
}
