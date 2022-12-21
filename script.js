const button = document.querySelector('.button');
button.addEventListener('click', function(){
    confirm('Klik \"OK untuk berbelanja');
    button.style.backgroundColor = 'crimson';
})

button.addEventListener('click', function(){
    button.style.backgroundColor = 'crimson';
})

button.addEventListener('click', function(){
    button.style.color = 'white';
})



//* Humburger Menu 

const navUl = document.querySelector('nav ul');

const menuToggle = document.querySelector('.menu-toggle input');
menuToggle.addEventListener('click', function(){
    navUl.classList.toggle('slide');
})