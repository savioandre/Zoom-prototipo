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