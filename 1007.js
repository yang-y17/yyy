
// 导航栏平滑滚动
const navLinks = document.querySelectorAll('nav a');
navLinks.forEach(function(link) {
    link.addEventListener('click', function(event) {
        event.preventDefault();
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);

        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

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

// 卡片背景切换功能
let croonerczy = document.getElementsByClassName('crooner-czy');
let croonerzrt = document.getElementsByClassName('crooner-zrt');
let croonerwhl = document.getElementsByClassName('crooner-whl');

for(let i=0; i< croonerczy.length; i++) {
    croonerczy[i].addEventListener('click', function() {
        this.classList.toggle('czyy');
    })
}

for(let i=0; i< croonerzrt.length; i++) {
    croonerzrt[i].addEventListener('click', function() {
        this.classList.toggle('zrtt');
    })
}

for(let i=0; i< croonerwhl.length; i++) {
    croonerwhl[i].addEventListener('click', function() {
        this.classList.toggle('whll');
    })
}
