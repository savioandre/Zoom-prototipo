function numberIdRandom() {
    var array = new Uint32Array(1)
    window.crypto.getRandomValues(array)

    for (var i = 0; i < array.length; i++) {

        var numb = array[i]
        let nsa = numb.toString()
        var formated = nsa.slice(0, 3) + " " + nsa.slice(3, 6) + " " + nsa.slice(6, 11)
        const NFO = document.querySelector('.received_meet .id_meet')
        NFO.innerHTML = formated
    }
}

function numberPassRandom() {
    var randomPass = Math.random().toString(36).slice(-8)
    const SRA = document.querySelector('.received_meet .pass_meet')
    SRA.innerHTML = randomPass
}

numberIdRandom()
numberPassRandom()