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

            document.querySelector('body')
                .style.overflow = "hidden"
        })
}
doB()

document.querySelector('body').addEventListener('keypress', function(e) {

    if(e.key === 'Enter') {
        const ok = document.querySelector('.ok')
        ok.click()
    }

    else if(e.key === 'a' || e.location === 27) {
        const cancel = document.querySelectorAll('.close')
        cancel.forEach((i) => {
            i.click()
        })
    }
})