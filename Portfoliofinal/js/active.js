const toogleButton=document.getElementsByClassName('toogle-button')[0]
const navlist=document.getElementsByClassName('navlist')[0]

toogleButton.addEventListener('click',()=>{
    navlist.classList.toggle('active')
})