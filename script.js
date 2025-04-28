// Countdown Timer
document.addEventListener('DOMContentLoaded', function() {
    // Set the target date (48 hours from now)
    const countdownDate = new Date();
    countdownDate.setHours(countdownDate.getHours() + 48);
    
    // Update the countdown every second
    const countdownTimer = setInterval(function() {
        const now = new Date().getTime();
        const distance = countdownDate - now;
        
        // Calculate days, hours, minutes and seconds
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
        // Display the result
        document.querySelector('.countdown-item:nth-child(1) .number').textContent = days.toString().padStart(2, '0');
        document.querySelector('.countdown-item:nth-child(2) .number').textContent = hours.toString().padStart(2, '0');
        document.querySelector('.countdown-item:nth-child(3) .number').textContent = minutes.toString().padStart(2, '0');
        document.querySelector('.countdown-item:nth-child(4) .number').textContent = seconds.toString().padStart(2, '0');
        
        // If the countdown is finished, display expired message
        if (distance < 0) {
            clearInterval(countdownTimer);
            document.querySelector('.countdown').innerHTML = "<h3 class='expired'>OFFER EXPIRED!</h3>";
        }
    }, 1000);
    
    // Update Telegram link with actual username
    const telegramLinks = document.querySelectorAll('a[href*="t.me"]');
    // Ensure all Telegram links point to the correct address
    telegramLinks.forEach(link => {
        link.href = "https://t.me/+niyaR1SdE_M2MzFl";
    });
});

// Add smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add animation on scroll
window.addEventListener('scroll', function() {
    const features = document.querySelectorAll('.feature');
    const testimonials = document.querySelectorAll('.testimonial');
    const faqItems = document.querySelectorAll('.faq-item');
    
    const triggerBottom = window.innerHeight * 0.8;
    
    function checkElements(elements) {
        elements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            
            if (elementTop < triggerBottom) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    }
    
    // Set initial styles for elements
    features.forEach(feature => {
        feature.style.opacity = '0';
        feature.style.transform = 'translateY(20px)';
        feature.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });
    
    testimonials.forEach(testimonial => {
        testimonial.style.opacity = '0';
        testimonial.style.transform = 'translateY(20px)';
        testimonial.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });
    
    faqItems.forEach(item => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(20px)';
        item.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });
    
    // Check elements position on scroll
    checkElements(features);
    checkElements(testimonials);
    checkElements(faqItems);
});

// Function to update Telegram links (now automatically executed on page load)
function updateTelegramUsername() {
    const telegramLinks = document.querySelectorAll('a[href*="t.me"]');
    telegramLinks.forEach(link => {
        link.href = "https://t.me/+niyaR1SdE_M2MzFl";
    });
}

// Call this when the page loads
// updateTelegramUsername(); 