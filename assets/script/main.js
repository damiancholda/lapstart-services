const navLinks = document.querySelector('.navlinks');
const burger = document.querySelector('.burger');

burger.addEventListener('click',()=>{
    burger.classList.toggle('active');
    navLinks.classList.toggle('active');

    navLinks.addEventListener('click',()=>{
        if(burger.classList.contains('active')){
            burger.classList.remove('active');
            navLinks.classList.remove('active');
        }
    })
})