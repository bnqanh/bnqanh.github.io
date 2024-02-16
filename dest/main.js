// show scroll up
const scrollUp = () => {
    const scrollUp = document.getElementById('scroll-up')
    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll') : scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)
//scroll sections active link
const sections = document.querySelectorAll('section[id]')
const scrollActive = () => {
    const scrollY = window.pageYOffset
    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 58,
            sectionId = current.getAttribute('id'),
            sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            sectionsClass.classList.add('active-link')
        } else {
            sectionsClass.classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)
//Previously selected topic (if user selected)
// dark light theme
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = '--dark'
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')
//we obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark-theme' : ''
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? '--dark' : ''
//we validate if the user previously chose a topic
if (selectedTheme) {
    document.body.classList[selectedTheme === 'dark-theme' ? 'add' : 'remove'](darkTheme)
    themeButton.classList[selectedIcon === '--dark' ? 'add' : 'remove'](iconTheme)
}
//activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    //add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    //we save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})

// email js
const contactForm = document.getElementById('contact-form'),
        contactMessage = document.getElementById('contact-message')
const sendEmail = (e)=>{
    e.preventDefault()
    // serviceID - templateID - #form - publickey
    emailjs.sendForm('service_rozcgws','template_bcg648v','#contact-form','zUR-LeVb5ffUCEgBO')
    .then(()=>{
        // show sent message
        contactMessage.textContent = 'Message sent successfully ✅'
        //Remove message after five seconds
        setTimeout(() =>{contactMessage.textContent = ''}, 5000)
        //clear input field
        contactForm.reset()
    },()=>{
        // show error message
        contactMessage.textContent = 'Message not sent (service error) ❌'
    })
}
contactForm.addEventListener('submit', sendEmail)

//scroll reveal animation
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 200,
    //reset: true // Animation repeat
})
 
 sr.reveal('.home__hero-blob', {origin: 'left'})
 sr.reveal('.home__hero-text', {origin: 'right'})
 sr.reveal('.home__resume-left, .home__resume-right, .footer__wrapper')