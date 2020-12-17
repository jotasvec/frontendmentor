const accBtn = document.getElementsByClassName('accordion-btn');

Array.from(accBtn).forEach(btn => {
    const accPanel = btn.nextElementSibling
    btn.addEventListener('click', () =>{
        btn.classList.toggle('acc-active');
        accPanel.style.maxHeight = accPanel.style.maxHeight?  null : accPanel.scrollHeight+'px';
    })
})