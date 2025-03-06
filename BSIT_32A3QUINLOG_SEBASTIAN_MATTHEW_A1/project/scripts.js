// Hobbies Button
document.getElementById('hobbiesBtn').addEventListener('click', function() {
    const hobbies = ['Reading', 'Coding', 'Sports', 'Music']; // Replace with your hobbies
    alert('My Hobbies:\n' + hobbies.join('\n'));
});

// Form Validation
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;
    
    if (name && email && subject && message) {
        alert('Thank you for your message! I will get back to you soon.');
        this.reset();
    } else {
        alert('Please fill in all fields.');
    }
});