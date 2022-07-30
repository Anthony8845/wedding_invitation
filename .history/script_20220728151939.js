'use strict'

document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('.form');
    
    form.addEventListener('submit', formSend);

    async function formSend(e) {
        e.preventDefault();

        let formData = Object.fromEntries(new FormData(e.target).entries());
        console.log(formData)
       
        form.classList.add('_sending')

        // let responce = await fetch('send.php', {
        //     method: 'POST',
        //     body: formData
        // }) 
        // if(responce.ok) {
        //     let result = await responce.json();
        //     form.reset()
        // }else{
        //     alert('Error')
        // }
    }
})