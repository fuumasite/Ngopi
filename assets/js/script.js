// toggle class active
const navbarNav = document.querySelector('.navbar-nav')

// ketika hamburger kita klik maka navbar muncul
document.querySelector('#hamburger-menu').onclick = () => {
    navbarNav.classList.toggle('active')
}

// klik luar sidebar untuk menghilangkan sidebar
const hamburger = document.querySelector('#hamburger-menu')

document.addEventListener('click', function(e) {
    if(!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove('active')
    }
})

const tabLinks = document.querySelectorAll('.tab-link');
const tabItems = document.querySelectorAll('.tab-item');

tabLinks.forEach(link => {
  link.addEventListener('click', () => {
    tabLinks.forEach(l => l.classList.remove('active'));
    link.classList.add('active');

    const target = link.getAttribute('data-target');
    tabItems.forEach(item => item.classList.remove('active'));
    document.querySelector(`.${target}`).classList.add('active');
  });
});
