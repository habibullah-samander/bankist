'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////

// Navbar
const navbar = document.querySelector('#navbar');
const navLis = document.querySelectorAll('.nav-li');
navbar.addEventListener('click', e => {
  if (e.target.classList.contains('nav-link')) {
    // e.preventDefault();
    navLis.forEach(li => li.classList.remove('current'));
    e.target.closest('.nav-li').classList.add('current');
    // ===
    // e.target.parentElement.classList.add('current');
  }
});

// Carousel
const imgs = document.querySelector('#imgs');
const rightBtn = document.querySelector('#right');
const leftBtn = document.querySelector('#left');

const imagesLength = document.querySelectorAll('#imgs img').length;

if (imgs) {
  let idx = 0;

  let interval = setInterval(run, 2000);

  function run() {
    idx++;
    changeImages();
  }

  function changeImages() {
    if (idx > imagesLength - 1) {
      idx = 0;
    } else if (idx < 0) {
      idx = imagesLength - 1;
    }
    imgs.style.transform = `translateX(${-idx * 500}px)`;
  }

  function restInterval() {
    clearInterval(interval);
    interval = setInterval(run, 2000);
  }
  rightBtn.addEventListener('click', () => {
    idx++;
    changeImages();
    restInterval();
  });

  leftBtn.addEventListener('click', () => {
    idx--;
    changeImages();
    restInterval();
  });
}
