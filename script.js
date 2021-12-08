'use strict';

const list = document.querySelectorAll('.list');
const indicator = document.getElementById('indicator');

list.forEach((el, idx) => {
    el.addEventListener('click', () => {
        console.log('hh');
        removeActive();
        el.classList.add('active');
        indicator.style.left = `${idx * 70}px`;
    });
});

function removeActive() {
    list.forEach(el => {
       el.classList.remove('active');
    });
}