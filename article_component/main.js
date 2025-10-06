const sharedButton = document.getElementById('shareButton')
const shareGroup = document.getElementById('shareGroup')
sharedButton.addEventListener('click',(e) =>{
    console.log('clicked :>> ', e);
    shareGroup.innerHTML = "<p>share</p>"

})