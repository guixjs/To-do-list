const openButton = document.querySelectorAll(".buttonModal")
const closeButton = document.querySelectorAll(".closeModal")

openButton.forEach( button => {
    button.addEventListener('click', () =>{
        const modalId = button.getAttribute("data-modal")
        const modal = document.getElementById(modalId)
        modal.showModal()
    })
})


closeButton.forEach( button => {
    button.addEventListener('click', () =>{
        const modalId = button.getAttribute("data-modal")
        const modal = document.getElementById(modalId)

        modal.close()
    })
})
