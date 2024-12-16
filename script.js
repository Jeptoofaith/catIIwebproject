document.getElementById('shopNow').addEventListener('click', function () {
    window.location.href = '#products';
});


    // Hamburger menu functionality
const hamburger = document.querySelector('.hamburger');
const navigation = document.querySelector('.navigation');
const home = document.querySelector('.home');

hamburger.addEventListener('click', toggleMenu);

// Close mobile menu when a link is clicked
document.querySelectorAll('.navigation li').forEach(link => {
link.addEventListener('click', toggleMenu);
});

function toggleMenu() {
hamburger.classList.toggle('active');
navigation.classList.toggle('active');
home.classList.toggle('blur');

// Disable scroll when menu is open
document.body.style.overflow = navigation.classList.contains('active') ? 'hidden' : '';
}

// Close menu when clicking outside
home.addEventListener('click', function() {
if (navigation.classList.contains('active')) {
    toggleMenu();
}
});
