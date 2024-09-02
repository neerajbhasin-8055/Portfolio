let ham = document.getElementById('ham');
let cross = document.getElementById('cross');
let hamMenu = document.querySelector('.ham-menu');

ham.addEventListener('click', function() {
    hamMenu.classList.add('show');
    ham.style.display = 'none'; 
    cross.style.display = 'block'; 
});

cross.addEventListener('click', function() {
    hamMenu.classList.remove('show'); 
    cross.style.display = 'none'; 
    ham.style.display = 'block'; 
});
