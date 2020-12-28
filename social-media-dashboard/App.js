const toggleBtn = document.getElementById('toggle-btn')
const toggleBtnTitle = document.querySelector('.dl-toggle').firstChild



toggleBtn.addEventListener('click', ()=>{
    const body = document.querySelector('body')
    const nav = document.querySelector('nav').firstElementChild
    const card = document.querySelectorAll('.card')
    body.classList.toggle('light')
    nav.classList.toggle('light-nav')
    card.forEach(item => {
        item.classList.toggle('light')
    });

    if(body.className === 'light'){
        toggleBtnTitle.textContent = 'Dark Mode'
    }else{
        toggleBtnTitle.textContent = 'Ligth Mode'
    }
    
})