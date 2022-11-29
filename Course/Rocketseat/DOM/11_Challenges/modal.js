// const body = document.querySelector('body')
// body.style.backgroundColor = 'gray'

const buttonOpenModal = document.querySelector('#openModal')
const modalWrapper = document.querySelector('.modal-wrapper')


buttonOpenModal.addEventListener('click', showModal) 
document.addEventListener('keydown', hideModal)

function showModal() {
    // modalWrapper.classList.remove('invisible')
    modalWrapper.style.visibility = 'visible';
}

function hideModal(event) {
    // console.log(event)
    const isEscKey = event.key === 'Escape'
    
    if(isEscKey) {
        modalWrapper.style.visibility = 'hidden';
    }
}
