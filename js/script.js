
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the form from submitting normally
        
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const interest = document.getElementById('interest').value;

        if (name && email && interest) {
            // Perform actions after form validation
            alert(`Thank you, ${name}! We will contact you within 24 hours regarding your interest in ${interest}.`);
            
            // Clear the form after submission
            form.reset();
        } else {
            alert('Please fill out all fields before submitting.');
        }
    });
});

