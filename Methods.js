function seeOpt() {
    document.querySelectorAll('.container_name').forEach((i) => {
        i.addEventListener('mouseover', () => {
            document.querySelectorAll('.opt-end')
                .forEach((a) => {
                    a.style.opacity = 1
                })
        })
    })

    document.querySelectorAll('.container_name').forEach((i) => {
        i.addEventListener('mouseout', () => {
            document.querySelectorAll('.opt-end')
                .forEach((a) => {
                    a.style.opacity = 0
                })
        })
    })
}
seeOpt()

function doB() {

    document.querySelector('body')
        .addEventListener('dblclick', () => {
            document.querySelector('#container')
                .classList.toggle('db')

            document.querySelector('body').classList.toggle('RO')
        })
}
doB()

document.addEventListener('keydown', (e) => {
    var code = e.key

    if (code === 'Enter') {
        const ok = document.querySelector('.ok')
        ok.click()
    }

    else if (code === 'Escape') {
        const cancel = document.querySelectorAll('.close')
        cancel.forEach((i) => {
            i.click()
        })

        const act = document.querySelector('.meet.security')
        act.classList.remove('active')
    }
})

function colorsUpName() {

    document.querySelector('.data-name').addEventListener('keyup', () => {
        let s_Alter = document.querySelector('.data-name').value
        let color

        if (s_Alter.match(/[a-d]+/) || s_Alter.match(/[A-D]+/)) {
            color = 'rgb(240, 166, 36)'
        }
        else if (s_Alter.match(/[e-h]+/) || s_Alter.match(/[E-F]+/)) {
            color = 'rgb(35, 205, 111)'
        }
        else if (s_Alter.match(/[g-j]+/) || s_Alter.match(/[G-J]+/)) {
            color = 'rgb(230, 31, 26)'
        }
        else if (s_Alter.match(/[k-n]+/) || s_Alter.match(/[K-N]+/)) {
            color = 'rgb(178, 218, 229)'
        }
        else if (s_Alter.match(/[o-t]+/) || s_Alter.match(/[O-T]+/)) {
            color = 'rgb(231, 9, 220)'
        }
        else if (s_Alter.match(/[u-z]+/) || s_Alter.match(/[U-Z]+/)) {
            color = 'rgb(173, 204, 8)'
        }
        else if (s_Alter.match(/[0-9]+/)) {
            color = 'rgb(155, 83, 48)'
        }
        else {
            color = '#0E71EB'
        }


        const UPDT_B = document.querySelectorAll('.logo_name')
        UPDT_B.forEach((c) => {
            c.style.background = color
        })

    })

}

const InitHelp = {
    InitHelp: document.querySelector(".btn_hlp").addEventListener('click', () => {
        const IOH = document.querySelector('.na_po')

        function openHelp() {
            IOH.style.animation = "none"
            IOH.style.opacity = 1

            IOH.innerHTML = `
                <ul class="ul_hlp">
                    <div class="he_opt">
                        <h3>Selecione uma Opção:</h3>
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M5.29289 6L0.646446 10.6464L1.35355 11.3536L6 6.70711L10.6464 11.3536L11.3536 10.6464L6.70711 6L11.3536 1.35355L10.6464 0.646447L6 5.29289L1.35355 0.646447L0.646447 1.35355L5.29289 6Z" fill="white"></path></svg>
                    </div>
                
                    <li class="opt_hlp un">Ligar Áudio</li>
                    <li class="opt_hlp cm">Ligar Câmera</li>
                    <li class="opt_hlp rm">Renomear</li>
                    <li class="opt_hlp ct">Enviar Mensagem</li>
                </ul>
                `

            audioHlp()
            unmute()
        }

        function audioHlp() {
            const IOH = document.querySelector('.un')
            IOH.addEventListener('click', () => {

                const MO_UL = document.querySelector('.na_po')
                MO_UL.innerHTML = `
                <ul class="ul_hlp">
                  <h3>Ligar Áudio</h3>
          
                  <li class="opt_hlp ">⚠ Você precisa ter um microfone conectado</li>
                  <li class="opt_hlp l_on">1️⃣ Clique em <u>'Desligar Mudo'</u> para ativar o microfone</li>
                  <li class="opt_hlp l_tw">2️⃣ Clique em <u>'Ativar Mudo'</u> para desativar o microfone</li>
                  <li class="opt_hlp bk">🔙 Voltar</u></li>
                </ul>
                `
            })
        }

        function unmute() {
            document.querySelector('.un')
                .addEventListener('click', () => {

                    let nk = document.createElement('div')
                    nk.classList.add('nk')
                    nk.innerHTML = "1"

                    const CAD = document.querySelector('.CAD')
                    CAD.appendChild(nk)

                    const li_one = document.querySelector('.l_on')
                    li_one.addEventListener('click', (a) => {
                        CAD.click()
                    })

                    const BK = document.querySelector('.bk')
                    BK.addEventListener('click', () => {
                        openHelp()
                        let nka = document.querySelector('.nk')
                        let reChild = CAD.removeChild(nka)
                    })
                })
        }

        function closeHelp() {
            document.querySelector('.he_opt svg').addEventListener('click', () => {
                IOH.style.opacity = 0
            })
        }

        openHelp()
        closeHelp()
    })

}

function copy() {
    // copyInvite = document.querySelector('.invite_meet'),
    let name_ = document.querySelector('#name').value
    let id_ = document.querySelector('.id_meet').value
    let password_ = document.querySelector('.pass_meet').value

    function getValues() {
        let a = `${name_} está convidando você;<br>
        Id da reunião: ${id_}<br>
        Senha da reunião: ${password_}<br>`

        document.querySelector('.invite_meet')
            .addEventListener('click', () => {
                console.log(a)
            })
    }
    getValues()
}

function screenShare() {
    document.querySelector('.share_button')
        .addEventListener('click', () => {
            stream = navigator.mediaDevices.getDisplayMedia({
                video: {
                    mediaSource: "screen"
                }
            })

            document.querySelector('.share .close').click()
        })
}
screenShare()
colorsUpName()