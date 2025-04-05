// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Mobile Navigation Toggle
    const toggleBtn = document.querySelector('.toggle-btn');
    const navMenu = document.querySelector('nav ul');

    if (toggleBtn && navMenu) {
        toggleBtn.addEventListener('click', function() {
            navMenu.classList.toggle('active');
        });
    }

    // Close mobile menu when clicking on a nav link
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('active');
        });
    });

    // Highlight active menu item based on scroll position
    function highlightNav() {
        const sections = document.querySelectorAll('.section');
        const navItems = document.querySelectorAll('nav ul li a');
        
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (window.pageYOffset >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });
        
        navItems.forEach(item => {
            item.classList.remove('active');
            if (item.getAttribute('href') === `#${current}`) {
                item.classList.add('active');
            }
        });
    }
    
    window.addEventListener('scroll', highlightNav);
    
    // Form Submission
    const contactForm = document.getElementById('contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const phone = document.getElementById('phone').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;
            
            // In a real application, you would send this data to a server here
            // For now, we'll just show an alert
            alert('Form submitted successfully!');
            
            // Reset form
            contactForm.reset();
        });
    }
    
    // Type animation for the profession in the home section
    function typeAnimation() {
        const textSpan = document.querySelector('.home-text h3 span');
        
        if (textSpan) {
            const text = textSpan.textContent;
            let speed = 100; // Typing speed in milliseconds
            let idx = 0;
            
            // Clear the text first
            textSpan.textContent = '';
            
            // Start typing
            function typeWriter() {
                if (idx < text.length) {
                    textSpan.textContent += text.charAt(idx);
                    idx++;
                    setTimeout(typeWriter, speed);
                }
            }
            
            // Start the animation after a brief delay
            setTimeout(typeWriter, 500);
        }
    }
    
    // Call the animation when the page loads
    typeAnimation();
});