const typed = new Typed('.multi-text', {
    strings: ['Front-End Developer', 'Back-End Developer', 'Web Desinger', 'YouTuber'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});


// scroll reveal start 

ScrollReveal({
    // reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.ani1', { origin: 'left' });

ScrollReveal().reveal('.about-me, .resume, .service, .my-skills, .my-project, .contact-me', { origin: 'top' });

ScrollReveal().reveal('.resume-box1, .box1', { origin: 'top' });

ScrollReveal().reveal('.progress-bar', { origin: 'left' });

ScrollReveal().reveal('.number', { origin: 'top' });



// nav bar show when cursor scroll in sections

// let sections = document.querySelectorAll('.section');
// let navLinks = document.querySelectorAll('.nav-item a');

// window.onscroll = () => {
//     sections.forEach(sec => {
//         let top = window.scrollY;
//         let offset = sec.offsetTop + 670;
//         let height = sec.offsetHeight;
//         let id = sec.getAttribute('id');

//         if (top >= offset && top < offset + height) {
//             navLinks.forEach(links => {
//                 links.classList.remove('active');      
//                 document.querySelector('.nav-items a[href*="# + id + "]').classList.add('active');
//             });
//         };
//     });
// };