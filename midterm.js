document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contact-form');
    
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        alert(`Cảm ơn bạn, ${name}! Chúng tôi sẽ liên lạc với bạn qua email: ${email}.`);
        
        form.reset();
    });
});
document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('.banner-images img');
    let currentIndex = 0;

    function changeBanner() {
        images[currentIndex].classList.remove('active');
        currentIndex = (currentIndex + 1) % images.length;
        images[currentIndex].classList.add('active');
    }

    setInterval(changeBanner, 5000); // Thay đổi hình ảnh sau mỗi 5 giây
});



