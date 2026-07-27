
var yky = document.getElementById('yky');
var yy =yky.querySelectorAll('a');
yy.forEach(function(yy) {
    yy.addEventListener('click', function(event) {
        event.preventDefault();
        const targetId = yy.getAttribute('href');
        const targetSection = document.querySelector(targetId);

        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: 'smooth'
            
            });
        }
    })
})

var totop = document.getElementById('to-top');

window.addEventListener('scroll', function() {
    if (window.pageYOffset > 300) {
        totop.style.display = 'block';
    } else {
        totop.style.display = 'none';
    }
});

totop.addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
})