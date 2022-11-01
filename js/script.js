const Sidbar = document.querySelector('.side-bar');
const btn = document.querySelector('.btn');

btn.addEventListener('click', function(){
    Sidbar.classList.toggle('activ');
})