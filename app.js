const bracdrop = document.querySelector('.bracdrop')
const button = document.querySelectorAll('.plan button')
const model = document.querySelector('.modal')
const modalAction = document.querySelector('.modal__action--negative')
const toggleButtonBtn = document.querySelector('.toggle-button')
const mobileNav = document.querySelector('.mobile-nav')



if (button) {
    for (let i = 0; i < button.length; i++) {
        button[i].addEventListener('click', function() {
            model.style.display = 'block'
            bracdrop.style.display = 'block'
        })
    }
}

if (modalAction) {
    modalAction.addEventListener('click', close)
}


toggleButtonBtn.addEventListener('click', function() {
    mobileNav.style.display = 'block'
    bracdrop.style.display = 'block'
})


console.log(1);


bracdrop.addEventListener('click', close)




bracdrop.addEventListener('click', function() {
    mobileNav.style.display = 'none'
    bracdrop.style.display = 'none'
})

function close() {
    model.style.display = 'none'
    bracdrop.style.display = 'none'
}