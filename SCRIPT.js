console.log('JavaScript file loaded'); // Add this line


// Toggle the mobile menu

function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
}

// AOS initialization for scroll animations
AOS.init({
    duration: 1000,
    once: true
});

// Smooth scroll for service links
document.querySelectorAll('.service-item a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);

        window.scrollTo({
            top: targetSection.offsetTop,
            behavior: 'smooth' // Smooth scroll animation
        });
    });
});

// Appointment form submission


document.getElementById('appointment-form').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent default form submission
    console.log('Form submitted'); // Add this line to confirm submission




    // Retrieve form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;

    // Check if the form fields are filled correctly
    if (!name || !email || !phone || !date || !time) {
        alert('Veuillez remplir tous les champs.');
        return;
    }

    // Send email using EmailJS
    emailjs.send("service_yuu61mk", "template_8tyq7ak", {
        name: name,
        email: email,
        phone: phone,
        date: date,
        time: time
    })
        .then(function (response) {
            alert('Votre demande de rendez-vous a été envoyée avec succès !');
            document.getElementById('appointment-form').reset(); // Reset the form after successful submission
        }, function (error) {
            alert('Une erreur est survenue. Veuillez réessayer.');
            console.error('EmailJS Error: ', error);
        });
});

// Google Maps link click event tracking
document.querySelector('.map-link .btn').addEventListener('click', function () {
    console.log('Map link clicked'); // Track or handle event
});

