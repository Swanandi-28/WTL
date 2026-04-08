// Smooth scroll
document.querySelectorAll('nav a').forEach(link => {
  link.onclick = function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href'))
      .scrollIntoView({ behavior: "smooth" });
  }
});

// Button click
document.querySelector('.home button').onclick = () => {
  alert("Welcome! Let's get started...");
};

// Form submit
document.querySelector('form').onsubmit = function() {
  alert("Message sent!");
};