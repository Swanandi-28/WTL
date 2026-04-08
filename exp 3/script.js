// 1. Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const target = this.getAttribute('href');
        document.querySelector(target).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


// 2. Button click alert (Get Started)
document.querySelector('.home button').addEventListener('click', () => {
    alert("Welcome! Let's get started 🚀");
});


// 3. Form validation
document.querySelector('form').addEventListener('submit', function(e) {
    const name = document.querySelector('input[type="text"]').value;
    const email = document.querySelectorAll('input[type="text"]')[1].value;
    const message = document.querySelector('textarea').value;

    if (name === "" || email === "" || message === "") {
        alert("Please fill all fields!");
        e.preventDefault();
    } else {
        alert("Message sent successfully!");
    }
});


// 4. Navbar background change on scroll
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.style.background = "#222";
    } else {
        header.style.background = "#333";
    }
});


// 5. Simple animation on scroll (services cards)
const cards = document.querySelectorAll('.card');

window.addEventListener('scroll', () => {
    cards.forEach(card => {
        const position = card.getBoundingClientRect().top;
        const screenHeight = window.innerHeight;

        if (position < screenHeight - 50) {
            card.style.transform = "translateY(0)";
            card.style.opacity = "1";
        }
    });
});