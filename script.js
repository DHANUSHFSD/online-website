const MenuIcon =  document.querySelector('.menu-icon')
const MenuForm = document.querySelector('.navbar')
const close = document.querySelector('.close');
MenuIcon.addEventListener('click',()=>{
    MenuForm.classList.add('active')
})
close.addEventListener('click',()=>{
    MenuForm.classList.remove('active')
})

