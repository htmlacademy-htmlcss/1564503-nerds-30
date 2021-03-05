let button = document.getElementById('write')
let modal = document.getElementById('modal')
let closeBtn = document.getElementById('close')


button.addEventListener('click',function(e) {
    e.preventDefault()
    modal.classList.add('active')
})


closeBtn.addEventListener('click',function(e) {
    e.preventDefault()
    modal.classList.remove('active')
})

console.log()