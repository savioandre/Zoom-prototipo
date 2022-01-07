function initFrame() {
  const Bar = document.querySelector('.prototipo_computer')

  Bar.addEventListener('click', () => {
    document.querySelector(".options").classList.add("active")
  })

}

function OpenModal() {
  // const AUDIO = document.querySelector('.CAD')
  // const VIDEO = document.querySelector('.IVI')
  const SHARE_SCREEN = document.querySelector('.CTE')
  const PARTICIPANTS = document.querySelector('.PAR')
  const MORE = document.querySelector('.MOR')
  const CHAT = document.querySelector('.CHT')
  // ADD
  // AUDIO.addEventListener('click', () => {
  //   document.querySelector('.conect').classList.add('on')
  // })

  // VIDEO.addEventListener('click', () => {
  //   document.querySelector('.video_cast').classList.add('on')
  // })
  CHAT.addEventListener('click', () => {
    document.querySelector('.chat').classList.add('on')
  })

  SHARE_SCREEN.addEventListener('click', () => {
    document.querySelector('.share').classList.add('on')
  })

  PARTICIPANTS.addEventListener('click', () => {
    document.querySelector('.participants').classList.add('on')
  })
}

function closeModal() {
  document.querySelector('.participants .close').addEventListener('click', () => {
    document.querySelector('.participants').classList.remove('on')
  })

  document.querySelector('.conect .close').addEventListener('click', () => {
    document.querySelector('.conect').classList.remove('on')
  })

  document.querySelector('.close').addEventListener('click', () => {
    document.querySelector('.participants').classList.remove('on')
  })

  document.querySelector('.chat .close').addEventListener('click', () => {
    document.querySelector('.chat').classList.remove('on')
  })

  document.querySelector('.share .close').addEventListener('click', () => {
    document.querySelector('.share').classList.remove('on')
  })

  // document.querySelector('.video_cast .close').addEventListener('click', () => {
  //   document.querySelector('.video_cast').classList.remove('on')
  // })
}

let selectClick = document.getElementById("name")
let rename_ = document.getElementById("name")

function shieldOpen() {
  const SHIELD = document.querySelector('div.shield svg')
  const BO_SH = document.querySelector('.meet.security')
  SHIELD.addEventListener('click', () => {
    BO_SH.classList.toggle('active')
  })
}

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

      // if (!name_ || name_ === null || name_ === undefined) {
      //   InsertName();
      // }
      // else {
      //   localStorage.setItem("nome", name_);
      //   rename_.innerHTML = name_;
      // }
    }

    function rename() {
      // if (!localStorage.getItem("nome")) {
      //   userName();
      // }
      // else {
      //   let nameStorage = localStorage.getItem("nome");
      //   rename_.textContent = nameStorage;
      // }

      // selectClick.onclick = function () {
      //   userName();
      // };
    }

    function formatName() {
      const FormatName = document.querySelectorAll('.logo_name')
      if (name_.includes(" ") === true) {
        let first = name_.slice(0, 1)
        let get_Les = name_.indexOf(" ")
        let last = name_.slice(get_Les + 1, get_Les + 2)
        let name_Formated = [first, last]

        FormatName.forEach((i) => {
          i.innerHTML = name_Formated.join('')
        })
      } else {
        let simple = name_.slice(0, 2)
        FormatName.forEach((i) => {
          i.innerHTML = simple
        })
      }
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
    rename()
    formatName()
    insertBack()
  })

}

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

InsertName()
closeModal()
OpenModal()
shieldOpen()