
const toggle = document.getElementById('toggleDark');
const body = document.querySelector('body');
const backtotop = document.getElementById('Bottom');

toggle.addEventListener('click', function(){
    this.classList.toggle('bi-moon');
    if(this.classList.toggle('bi-brightness-high-fill')){
        body.style.background = 'white';
        body.style.color = 'black';
        backtotop.style.color="black";
        body.style.transition = '2s';
    }else{
        body.style.background = '#1d212b';
        body.style.color = 'white';
        body.style.transition = '2s';
    }
});