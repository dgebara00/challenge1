const selectBtn = document.querySelector('.container__btn');
const selectMenu = document.querySelector('.container-window');

selectBtn.addEventListener('click', function(){
    selectBtn.classList.toggle('container__btn--is-active');
    selectMenu.classList.toggle('container-window--is-active');
})
