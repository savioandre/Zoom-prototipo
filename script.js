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
  document.querySelector('.video_cast').classList.add('on')
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


  let active_bar = document.getElementById("select_button").classList.add("nav_bar_active");

   active_bar.addEventListener("click", select);

  //  function select() {
  //    active_bar

  //  }

function start(ID) {
  const shield = document.querySelector(ID);
  if(shield) {
    shield.classList.add('active');
    shield.addEventListener('click', (e) => {
      if(e.target.id == ID || e.target.className == '') {
        shield.classList.remove('active')
      }
    });
  }
}

const button = document.querySelector('.shield');
button.addEventListener('click', () => ID(''))