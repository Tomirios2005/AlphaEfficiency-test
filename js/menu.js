const menuButton=document.getElementById('menu-toggle');
const menuDiv=document.getElementById('menu');

menuButton.addEventListener('click', () => {
    const isOpen=menuDiv.classList.toggle('show');
    menuButton.setAttribute('aria-expanded', isOpen);

 });