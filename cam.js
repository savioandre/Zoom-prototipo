function startVideo() {

    const MOD = { video: true }

    navigator.mediaDevices.getUserMedia(MOD).then(stream => {

        const videoElement = document.querySelector('#webcam')
        videoElement.srcObject = stream

    }).catch(error => {

        const VIDEO = document.querySelector('.IVI')
        VIDEO.addEventListener('click', () => {
            document.querySelector('.video_cast')
                .classList.add('on')
        })

        document.querySelector('.video_cast .close')
            .addEventListener('click', () => {
                document.querySelector('.video_cast')
                    .classList.remove('on')
            })

        const messageError = `
            <h2 class="status_error">Zoom is unable to detect a camera</h2>
            <p>Make sure that your camera is powered on and 
            is connected to your computer</p>
        `
        document.querySelector('.catch_error')
            .innerHTML = messageError
    })

    function Back() {
        const bntCam = document.querySelector('.IVI')
        bntCam.addEventListener('click', () => {
            document.querySelector('#webcam')
                .classList.toggle('off')
        })
    }
    Back()

}


window.addEventListener("DOMContentLoaded", startVideo)