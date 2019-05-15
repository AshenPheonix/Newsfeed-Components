
const toggleMenu = () => {
  // Toggle the "menu--open" class on your menu refence. 
  menu.classList.toggle('menu--open')
}

// Start Here: Create a reference to the ".menu" class
const menu = document.querySelector('.menu');
// create a reference to the ".menu-button" class
const menuButton=document.querySelector('.menu-button');
// Using your menuButton reference, add a click handler that calls toggleMenu
const menuUl=menu.querySelector('ul')

menuButton.addEventListener('click',(e)=>{
  toggleMenu()
})

menu.addEventListener('transitionstart',(e)=>{
    menuUl.classList.add('hide')
})
menu.addEventListener('transitionend',(e)=>{
  if(Array.from(e.target.classList).includes('menu--open'))
    menuUl.classList.toggle('hide')
})