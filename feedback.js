
const container = document.querySelector('.container');
const emoji = document.querySelector('.emoji');
const textArea = document.querySelector('.textArea');

emoji.addEventListener('click',(e) =>{
    if(e.target.className.includes('emoji')) return;

    textArea.classList.add('textArea--active');
})

container.addEventListener('mouseleave',() =>{
    textArea.classList.remove('textArea--active');
})
