'use strict'

document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('.form');
   
    form.addEventListener('submit', formSend);

    async function formSend(e) {
        e.preventDefault();

        let formData = new FormData(form);
        
        let resopnce = await fetch('send.php', {
            method: 'POST',
            body: formData
        }) 
    }
})