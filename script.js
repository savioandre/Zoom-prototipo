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

function shieldOpen() {
  const SHIELD = document.querySelector('div.shield svg')
  const BO_SH = document.querySelector('.meet.security')
  SHIELD.addEventListener('click', () => {
    BO_SH.classList.toggle('active')
  })
}

closeModal()
OpenModal()
shieldOpen()