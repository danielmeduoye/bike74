
document.addEventListener('DOMContentLoaded', function() {
    const menuBar = document.querySelector('.menu-bar');
    const menuMobile = document.querySelector('.menu-mobile');
    const closeMenu = document.querySelector('.close-menu');

    menuBar.addEventListener('click', function() {
        menuMobile.classList.add('show');
    });

    closeMenu.addEventListener('click', function() {
        menuMobile.classList.remove('show');
    });
});




let currentSlide = 0;
const slides = document.querySelectorAll('.hero-slide');
const indicators = document.querySelectorAll('.indicator');
const totalSlides = slides.length;

function showSlide(index) {
    if (index >= totalSlides) currentSlide = 0;
    else if (index < 0) currentSlide = totalSlides - 1;
    else currentSlide = index;

    const offset = -currentSlide * 100;
    document.querySelector('.hero-carousel').style.transform = `translateX(${offset}%)`;

    // Update indicators
    indicators.forEach((indicator, i) => {
        indicator.classList.toggle('active', i === currentSlide);
    });
}

function nextSlide() {
    showSlide(currentSlide + 1);
}

function prevSlide() {
    showSlide(currentSlide - 1);
}

// Initialize the first slide
showSlide(currentSlide);

// Auto-slide functionality
setInterval(nextSlide, 5000); // Change slide every 5 seconds

// Event listeners for controls
document.querySelector('.carousel-control.next').addEventListener('click', nextSlide);
document.querySelector('.carousel-control.prev').addEventListener('click', prevSlide);

// Event listeners for indicators
indicators.forEach((indicator, i) => {
    indicator.addEventListener('click', () => showSlide(i));
});

// this is for the about us section in the homepage
document.addEventListener('DOMContentLoaded', () => {
    const img = document.querySelector('.about-image img');

    const checkVisibility = () => {
        const section = document.querySelector('.about-us');
        const rect = section.getBoundingClientRect();
        const windowHeight = window.innerHeight || document.documentElement.clientHeight;

        if (rect.top < windowHeight && rect.bottom >= 0) {
            img.classList.add('visible'); // Trigger animation when section is in view
        }
    };

    // Check visibility on scroll and resize
    window.addEventListener('scroll', checkVisibility);
    window.addEventListener('resize', checkVisibility);

    // Initial check
    checkVisibility();
});

//this is for the category slider section
document.addEventListener('DOMContentLoaded', () => {
    const categoryWrapper = document.querySelector('.category-wrapper');

    // Clone the first set of cards to create an infinite effect
    const firstSet = Array.from(categoryWrapper.children);
    firstSet.forEach(card => {
        categoryWrapper.appendChild(card.cloneNode(true));
    });
});

//this is the javascript for the enquiry form
// Intersection Observer for image animation
document.addEventListener("DOMContentLoaded", function () {
    const image = document.querySelector(".enquiry-image img");

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("in-view");
                }
            });
        },
        { threshold: 0.1 }
    );

    if (image) {
        observer.observe(image);
    }
});


// script.js for the store page

document.getElementById('filter-form').addEventListener('submit', function(event) {
    event.preventDefault();
    // Implement filtering logic here
    alert('Filtering products...');
});

document.querySelector('.prev-page').addEventListener('click', function() {
    // Implement pagination logic for previous page
    alert('Previous page...');
});

document.querySelector('.next-page').addEventListener('click', function() {
    // Implement pagination logic for next page
    alert('Next page...');
});
