const Bar = {
    open() {
      document.querySelector(".options").classList.add("active");
    },
    close() {
        document.querySelector(".options").classList.remove("active");
      },
}

const AUDIO = document.querySelector('.CAD')
const VIDEO = document.querySelector('.IVI')
const SHARE_SCREEN = document.querySelector('.CTE')
const PARTICIPANTS = document.querySelector('.PAR')
const MORE = document.querySelector('.MOR')
// ADD
AUDIO.addEventListener('click', () => {
  document.querySelector('.conect').classList.add('on')
})

VIDEO.addEventListener('click', () => {
  document.querySelector('.video_info').classList.add('on')
})

SHARE_SCREEN.addEventListener('click', () => {
  document.querySelector('.share').classList.add('on')
})

PARTICIPANTS.addEventListener('click', () => {
  document.querySelector('.participants').classList.add('on')
})

// REMOVE
document.querySelector('.participants .close').addEventListener('click', () => {
  document.querySelector('.participants').classList.remove('on')
})

document.querySelector('.conect .close').addEventListener('click', () => {
  document.querySelector('.conect').classList.remove('on')
})

document.querySelector('.close').addEventListener('click', () => {
  document.querySelector('.participants').classList.remove('on')
})

document.querySelector('.share .close').addEventListener('click', () => {
  document.querySelector('.share').classList.remove('on')
})

document.querySelector('.video_info .close').addEventListener('click', () => {
  document.querySelector('.video_info').classList.remove('on')
})

// Get Name
// let getName = prompt("Coloque Seu nome")
// let get = document.getElementById("name");

//  get.addEventListener("click", atualizarNome);

// function atualizarNome() {
//   let nome = getName;
//   get.textContent = nome;
// }

let selectClick = document.getElementById("name");
let header = document.getElementById("name");

function userName() {
  let name = prompt("Por favor, digite seu nome.");

  if (!name || name === null) {
    userName();
  } 
  else {
    localStorage.setItem("nome", name);
    header.innerHTML = name;
  }
}

  if (!localStorage.getItem("nome")) {
    userName();
  } 
  else {
    let nameStorage = localStorage.getItem("nome");
    header.textContent = nameStorage;
  }

  selectClick.onclick = function () {
    userName();
  };

// function start(ID) {
//   const shield = document.querySelector(ID);
//   if(shield) {
//     shield.classList.add('active');
//     shield.addEventListener('click', (e) => {
//       if(e.target.id == ID || e.target.className == '') {
//         shield.classList.remove('active')
//       }
//     });
//   }
// }

function shieldOpen() {
  const SHIELD = document.querySelector('div.shield svg')
  const BO_SH = document.querySelector('.meet.security')
  SHIELD.addEventListener('click', () => {
    BO_SH.classList.toggle('active')
  })
}

shieldOpen()

// const button = document.querySelector('.shield');
// button.addEventListener('click', () => ID(''))

function InsertName() {
  let init = prompt('Coloque seu Nome')
  var name_ = init
  let meet = document.querySelector('.value_name')
  const COMPLETE = "Reunião de " + init

  meet.innerHTML = COMPLETE

  let name = document.querySelector('#name')
  name.innerHTML = init

  function FormatName() {
    const FormatName = document.querySelector('.logo_name')
    if(name_.includes(" ") === true) {
      let first = name_.slice(0, 1)
      let get_Les = name_.indexOf(" ")
      let last = name_.slice(get_Les+1, get_Les+2)
      let name_Formated = [first, last]

      FormatName.innerHTML = name_Formated.join('')
    } else {
      // let nit = slice(1, undefined).toLowerCase()
      let simple = name_.slice(0, 2)
      FormatName.innerHTML = simple
    }
  }

  FormatName()
}

InsertName()

