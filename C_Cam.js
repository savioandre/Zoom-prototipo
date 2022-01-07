function mediaDeviceCell () {
    let miCam = { video: {facingMode: "user"}}
    // const backCam = { video: { facingMode: { exact: "environment" } } }

    $('#IV').click(function () {
        if ($('#mic_mt').text() === 'Iniciar Video') {
            $('#mic_mt').text('Desligar Video')
            miCam = { video: { facingMode: { exact: "environment" } } }
        }
        else if ($('#mic_mt').text() === 'Desligar Video') {
            $('#mic_mt').text('Iniciar Video')
            miCam = { video: {facingMode: "user"}}
        }
    })

    navigator
        .mediaDevices
        .getUserMedia(miCam)
        .then(stream => {
            const VIDEO = document.querySelector('#video')
            VIDEO.srcObject = stream
            
        })
        .catch(() => {
            
        })
}
mediaDeviceCell()