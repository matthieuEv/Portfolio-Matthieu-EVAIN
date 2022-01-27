window.addEventListener('scroll', function(){
    var header = document.querySelector('header');
    header.classList.toggle('sticky',window.scrollY > 0);
    });
function toogleMenu(){
    var menuToggle = document.querySelector('.toogle');
    var menu = document.querySelector('.menu');
    var sectioncardhover = document.querySelector('section .card:hover');
    menuToggle.classList.toggle('active');
    menu.classList.toggle('active');
    sectioncardhover.classList.toggle('active');
}
function getAge(date) { 
    var diff = Date.now() - date.getTime();
    var age = new Date(diff); 
    return Math.abs(age.getUTCFullYear() - 1970);
}