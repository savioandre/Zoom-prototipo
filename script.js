const Bar = {
    open() {
      document.querySelector(".options").classList.add("active");
    },
    close() {
        document.querySelector(".options").classList.remove("active");
      },
} 

const People = {
    open() {
      document.querySelector(".participants").classList.add("active");
    },
    close() {
        document.querySelector(".participants").classList.remove("active");
      },
} 


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