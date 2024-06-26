function initMap() {
  const mapOptions = {
      center: { lat: 40.7128, lng: -74.0060 },
      zoom: 10
  };
  const map = new google.maps.Map(document.getElementById('map'), mapOptions);
}

document.addEventListener('DOMContentLoaded', (event) => {
  const form = document.getElementById('contact-form');
  form.addEventListener('submit', function(event) {
      event.preventDefault();
      alert('Form submitted!');
  });
});
document.addEventListener('DOMContentLoaded', (event) => {
  // Example JavaScript functionality
  const footer = document.querySelector('.footer');
  footer.style.backgroundColor = '#444'; // Change background color on load
});
let slideIndex = 0;

function showSlides() {
    const slides = document.querySelectorAll('.gallery-slide img');
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    slides[slideIndex-1].style.display = "block";  
    setTimeout(showSlides, 3000); // Change image every 3 seconds
}

function moveSlide(n) {
    showSlides(slideIndex += n);
}

document.addEventListener('DOMContentLoaded', showSlides);
document.addEventListener('DOMContentLoaded', () => {
  const whatsappBtn = document.getElementById('whatsapp-btn');
  whatsappBtn.addEventListener('click', () => {
      const phoneNumber = '7056265393'; // Replace with your WhatsApp phone number
      const message = 'Hello, I would like to connect with you.';
      const whatsappURL = `https://wa.me/${7056265393}?text=${encodeURIComponent(message)}`;
      window.open(whatsappURL, '_blank');
  });
});


