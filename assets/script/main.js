
const navbar = document.querySelector('.navbar');
const hero = document.querySelector('.hero');
const navLinks = document.querySelector('.navlinks');
const burger = document.querySelector('.burger');

const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                navbar.classList.add('onscroll');
            } else {
                navbar.classList.remove('onscroll');
                burger.classList.remove('active');
                navLinks.classList.remove('active');
            }
        });
    },
    {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    }
);

observer.observe(hero);

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