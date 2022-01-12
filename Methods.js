function seeOpt() {
    document.querySelector('.container_name')
        .addEventListener('mouseover', () => {
            document.querySelectorAll('.opt-end, .rename')
                .forEach((a) => {
                    a.style.opacity = 1
                })
        })

    document.querySelector('.container_name')
        .addEventListener('mouseout', () => {
            document.querySelectorAll('.opt-end, .rename')
                .forEach((a) => {
                    a.style.opacity = 0
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
    // let r = parseInt(Math.random() * 255);
    // let g = parseInt(Math.random() * 255);
    // let b = parseInt(Math.random() * 255);
    // const form_Back = `rgba(${r}, ${g}, ${b})`

    document.querySelector('.data-name').addEventListener('keyup', () => {
    let s_Alter = document.querySelector('.data-name').value
    let color

    if(s_Alter.match(/[a-d]+/) || s_Alter.match(/[A-D]+/)) {
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
    else if (s_Alter.match(/[0-9]+/)){
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
colorsUpName()

// function fisrtAgr() {

//     const creatAttr = document.createElement('div')
//     creatAttr.classList.add('at_one')

//     const bar_and = document.createElement('div')
//     bar_and.classList.add('bt_at')

//     const nam = document.createElement('p')
//     nam.innerHTML = 'Clique na Tela'

//     document.querySelector('#position')
//         .appendChild(creatAttr)

//     document.querySelector('.at_one')
//         .appendChild(nam)

//     document.querySelector('.at_one')
//         .appendChild(bar_and)

//     setOut()

// }
// fisrtAgr()

// function setOut() {

//     setTimeout(() => {
//         document.querySelector('.at_one')
//             .classList.add('re')
//     }, 3010)

// }

// function helpMode() {
//     let btnInit = document.querySelector('.btn_hlp')
//     const name_ = document.querySelector('#data-name').value
//     if(name_.length = 0) {
//         document.querySelector('.na_po')
//             .style.opacity = 1
//     }
// }
// helpMode()

const InitHelp = {
    InitHelp: document.querySelector(".btn_hlp").addEventListener('click', () => {

        function openHelp() {
            const IOH = document.querySelector('.na_po')
            IOH.style.animation = "none"
            IOH.style.opacity = 1

            IOH.innerHTML = `
                <ul class="ul_hlp">
                    <h3>Selecione uma Opção:</h3>
                
                    <li class="opt_hlp un">Ligar Áudio</li>
                    <li class="opt_hlp cm">Ligar Câmera</li>
                    <li class="opt_hlp rm">Renomear</li>
                    <li class="opt_hlp ct">Enviar Mensagem</li>
                </ul>`

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
          
                  <li class="opt_hlp l_on">1️⃣ Clique em <u>'Conectar Audio'</u></li>
                  <li class="opt_hlp l_tw">2️⃣ Clique em <u>'Conectar por Audio do Dispositivo'</u></li>
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

        openHelp()
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

            // let blob = new Blob([texto], { type: "video/mpeg;charset=utf-8" });
            // saveAs(blob, titulo + ".mpeg");

            document.querySelector('.share .close')
                .click()
        })
}
screenShare()