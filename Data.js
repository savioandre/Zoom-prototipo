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

function msn() {
  $('.ok').click(() => {
    let na = document.querySelector('#data-name').value
    let val = document.querySelector('#msg').value

    document.addEventListener('keypress', (e) => {
      let key = e.key
      if (key === 'Enter' && val.length >= 1) {
        const ms_send = document.querySelector('.sen_')
        const Creat_MSG = document.createElement('p')
        Creat_MSG.classList.add('msn')
        Creat_MSG.innerHTML = val
        ms_send.appendChild(Creat_MSG)
        val = ''
        $('#msg').val('')
      }
    })
  })
}

let selectClick = document.getElementById("name")
let rename_ = document.getElementById("name")

function InsertName() {
  let getName = document.querySelector('.ok')

  getName.addEventListener('click', () => {
    var init = document.querySelector('#data-name').value

    if (init.length <= 0) {
      document.querySelector('input#data-name')
        .style.border = "2px solid red"

      InsertName()
    } else {
      document.querySelector('input#data-name')
        .style.border = "2px solid #0e71eb"

      RemoveTab()
    }

    var name_ = init
    let meet = document.querySelector('.value_name')
    const COMPLETE = "Reunião de " + name_

    meet.innerHTML = COMPLETE
    let name = rename_
    name.innerHTML = name_

    function userName() {
      document.querySelector('.rename')
        .addEventListener('click', () => {
          document.querySelector('.get_name')
            .classList.add('on')
        })
    }

    function insertBack() {
      const nameBack = document.querySelector('h1.back')
      nameBack.innerHTML = document.querySelector('#data-name').value
      if (init.length >= 14) {
        let na_end = name_.slice(0, 17)
        const NA_END = `${na_end}...`
        document.querySelector('#name').innerHTML = NA_END

        let ba_end = name_.slice(0, 10)
        const BA_END = `${ba_end}...`
        document.querySelector('.back').innerHTML = BA_END
      }
    }

    userName()
    insertBack()
  })

}

function formatName() {
  const FormatName = document.querySelectorAll('.logo_name')
  let edt_Name = document.getElementsByClassName('.data-name').value

  const ok = document.querySelectorAll('.ok')
  ok.forEach((a) => {
    a.addEventListener('click', () => {

      edt_Name.forEach((i) => {
        let opr = i

        if (opr.includes(" ")) {
          let first = opr.slice(0, 1)
          let get_Les = opr.indexOf(" ")
          let last = opr.slice(get_Les + 1, get_Les + 2)
          let name_Formated = [first, last]

          FormatName.forEach((i) => {
            i.innerHTML = name_Formated.join('')
          })
        } else {
          let simple = opr.slice(0, 2)
          FormatName.forEach((i) => {
            i.innerHTML = simple
          })
        }
      })
    })
  })
}
formatName()

function RemoveTab() {
  var localName = document.querySelector('.get_name')
    .classList.remove('on')

  document.querySelectorAll('.get_name .close, .get_name .cancel')
    .forEach((i) => {
      i.addEventListener('click', () => {
        document.querySelector('.get_name ').classList.remove('on')
      })
    })

  initFrame()
}

function newPart() {

  function img() {
    document.querySelector('input[type="file"]').addEventListener('change', function () {
      let img = document.querySelectorAll('img.up')
      img.forEach((i) => {
        // i.onload = () => {
        //   URL.revokeObjectURL(i.src)
        // }

        i.src = URL.createObjectURL(this.files[0])
      })
    })
  }
  img()

  let qnt = 1

  document.querySelector('.new_').addEventListener('click', () => {
    let new_Na = document.querySelector('#new_name').value
    let plce = document.querySelector('.participants')
    const CN_P = document.createElement('div')

    if (new_Na.length >= 1) {
      let newP = `
        <!-- <img src="" class="up" width="40px" height="40px" title="Imagem de ${new_Na}" alt=""Img> -->
            <p class="logo_name">${new_Na}</p>
            <p class="name" id="name">${new_Na}</p>

            <div class="opt-end" style="opacity: 0;">
                <p class="mute">Mute</p>
                <p class="rename" style="opacity: 0;">Renomear</p>
            </div>
        `
      let creatOpt = document.createElement('option')
      creatOpt.innerHTML = new_Na
      document.querySelector('#sl_en').appendChild(creatOpt)

      CN_P.classList.add('container_name')
      CN_P.innerHTML = newP
      plce.appendChild(CN_P)

      qnt++
      document.querySelector('.participants span').innerHTML = `Participantes (${qnt.toString()})`

    } else {
      document.querySelector('input#new_name')
        .style.border = "2px solid red"
    }
  })

}

newPart()
numberIdRandom()
numberPassRandom()
msn()
InsertName()