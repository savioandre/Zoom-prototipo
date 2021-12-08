function startVideo() {
    const MOD = {video: true, aspectRatio:16/9}


    navigator.mediaDevices.getUserMedia(MOD).then(stream=>{

        const videoElement = document.querySelector('#video')
        videoElement.srcObject = stream

    }).catch(error=>{
        document.querySelector('.status_error')
            .innerHTML = "Erro na Câmera " + error
    })
}

window.addEventListener("DOMContentLoaded", startVideo)