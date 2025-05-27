const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close');

if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu');
    })
}

if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
    })
}

const navLink = document.querySelectorAll('.nav__link');

const linkAction = () => {
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.remove('show-menu');
}

navLink.forEach(n => n.addEventListener('click', linkAction));


let swiperProjects = new Swiper(".projects__container", {
    loop: true,
    spaceBetween: 24,

    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
    },
    breakpoints: {
        1200: {
            slidesPerView: 2,
            spaceBetween: -56,
        }
    }
});

let swiperTestimonial = new Swiper(".testimonial__container", {
    grabCursor: true,

    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    }
})

// const contactForm = document.getElementById('contact-form'),
//         contactName = document.getElementById('contact-name'),
//         contactEmail = document.getElementById('contact-email'),
//         contactProject = document.getElementById('contact-project'),
//         contactMessage = document.getElementById('contact-message');

// const sendEmail = (e) => {
//     e.preventDefault();
//     // Check if the field has a value
//     if (contactName.value === '' || contactEmail.value === '' || contactProject.value === '') {
//         // Add and remove color
//         contactMessage.classList.remove('color-blue');
//         contactMessage.classList.add('color-red');

//         // show message
//         contactMessage.textContent = 'Write all the input fields 📖';
//     } else {
//         emailjs.sendForm('service_7xo7i0c', 'template_9dz48o2', '#contact-form', 'ICMDxcI-rZSXd9FCH').then(() => {
//                 contactMessage.classList.add('color-blue');
//                 contactMessage.textContent = 'Message sent ✅';

//                 // Remove message after five seconds
//                 setTimeout(() => {
//                     contactMessage.textContent = '';
//                 }, 5000);   
//             }, (error) => {
//                 alert('OOPS! SOMETHING HAS FAILED...', error);
//             })

//             // to clear the input fields
//             contactName.value = '';
//             contactEmail.value = '';
//             contactProject.value = '';
//     }
// }

// contactForm.addEventListener('submit', sendEmail);

const sections = document.querySelectorAll('section[id]');

const scrollActive = () => {
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 58,
            sectionId = current.getAttribute('id'),
            sectionClass = document.querySelector('.nav__menu a[href*=' + sectionId);

            if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                sectionClass.classList.add('active-link');
            } else {
                sectionClass.classList.remove('active-link');
            }
    })
}
window.addEventListener('scroll', scrollActive);

const scrollUp = () => {
        const scrollUp = document.getElementById('scroll-up');
        this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
                            : scrollUp.classList.remove('show-scroll');
} 

window.addEventListener('scroll', scrollUp);




const themeButton = document.getElementById('theme-button');
const darkTheme = 'dark-theme';
const iconTheme = 'ri-sun-line';

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light';
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'ri-moon-line' : 'ri-sun-line';

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
themeButton.classList[selectedIcon === 'bx bx-moon' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})


const scrollHeader = () => {
    const header = document.getElementById('header');
    this.scrollY >= 50 ? header.classList.add('bg-header')
                        : header.classList.remove('bg-header');
} 
window.addEventListener('scroll', scrollHeader);


const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 200,
    // reset: true /* Animations Repeat */
});

sr.reveal(`.home__data, .projects__container, .testimonial__container, .footer__container`);
sr.reveal(`.home__info div`, {delay: 600, origin: 'bottom', interval: 100});
sr.reveal(`.skills__content, .contact__content:nth-child(1)`, {origin: 'left'});
sr.reveal(`.contact__content:nth-child(2)`, {origin: 'right'});
sr.reveal(`.qualification__content, .services__card`, {interval: 100});

