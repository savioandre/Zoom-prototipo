function audio() {
    const MOD = { audio: true }
    let mediaRecorder

    navigator
        .mediaDevices
        .getUserMedia(MOD)
        .then(stream => {
            mediaRecorder = new MediaRecorder(stream)

            const videoElement = document.querySelector('#webcam')
            videoElement.srcObject = stream

            $('.CAD').click(function () {
                if ($('#mic_mt').text() === 'Desligar Mudo') {
                    $('#mic_mt').text('Ligar Mudo')
                    $('.no_on').css('opacity', 0)
                }
                else if ($('#mic_mt').text() === 'Ligar Mudo') {
                    $('#mic_mt').text('Desligar Mudo')
                    $('.no_on').css('opacity', 1)
                }
            })

        }).catch(error => {
            const AUDIO = document.querySelector('.CAD')
            AUDIO.addEventListener('click', () => {
                document.querySelector('.conect').classList.add('on')
            })

            const ERRO_AUDIO = document.querySelector('.join')
            let messageAudio = `
        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-alert-triangle" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M12 9v2m0 4v.01"></path>
            <path d="M5 19h14a2 2 0 0 0 1.84 -2.75l-7.1 -12.25a2 2 0 0 0 -3.5 0l-7.1 12.25a2 2 0 0 0 1.75 2.75"></path>
        </svg> 
        <span>Falha ao detectar seu microfone. Por favor teste as propriedades do seu microfone.</span>`

            const LC = document.createElement('div')
            LC.classList.add('erro_audio')
            LC.innerHTML = messageAudio

            ERRO_AUDIO.appendChild(LC)
        })
}

audio()