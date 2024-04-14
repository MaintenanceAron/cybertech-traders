/*================Sticky Navigation Bar===============*/
let navbar = document.getElementById('nav')
let navPos = navbar.getBoundingClientRect().top

window.addEventListener('scroll', e => {
  let scrollPos = window.scrollY
  if (scrollPos > navPos) {
    navbar.classList.add('sticky')
  }
  else {
    navbar.classList.remove('sticky')
  }
})


/*================Navigation Bar Open/Close Toggle===============*/
const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId)
  nav = document.getElementById(navId)
  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      nav.classList.toggle('show')
    })
  }
}
showMenu('nav-toggle', 'nav--menu')
/*================Close Navigation Bar on Link Click===============*/

const navLink = document.querySelectorAll('.nav__link')
navLink.forEach(link => link.addEventListener('click', () => {
  const nav = document.querySelector('#nav--menu')
  nav.classList.remove('show')
}))

/*================Testimonial Swiper initialization and configuration===============*/
var swiper = new Swiper(".mySwiper", {
  cssMode: true,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
  },
  mousewheel: true,
  keyboard: true,
});

/*================Scroll Reveal Animations===============*/
const martScroll = ScrollReveal({
  origin: 'top',
  distance: '80px',
  duration: 2000,
  reset: true
})

// scroll Home
martScroll.reveal('.home__data-title', {})
martScroll.reveal('.home__data-desc', {})
martScroll.reveal('.home__btn', {})
martScroll.reveal('.home__image', {})

//scroll About
martScroll.reveal('.about__img', {})
martScroll.reveal('.about__data', {})
//why choose us
martScroll.reveal('.whychooseus__tag', {})
martScroll.reveal('.whychooseus__title', {})
martScroll.reveal('.whychooseus__data', {})

//services

martScroll.reveal('.services__tag', {})
martScroll.reveal('.services__title', {})
martScroll.reveal('.services__single', {})
martScroll.reveal('.services__buttons', {})
//testimonials
martScroll.reveal('.testimonials__tag', {})
martScroll.reveal('.testimonials__title', {})
martScroll.reveal('.swiper', {})
//contact
martScroll.reveal('.contact__tag', {})
martScroll.reveal('.contact__title', {})
martScroll.reveal('.contact__form', {})
//footer

martScroll.reveal('.footer__container', {})
