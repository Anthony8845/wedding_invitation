


// 'use strict'

// document.addEventListener('DOMContentLoaded', function () {
//     const form = document.querySelector('.form');
    
//     form.addEventListener('submit', formSend);

//     async function formSend(e) {
//         e.preventDefault();

//         let formData = new FormData(form)
        
       
//         form.classList.add('_sending')

//         let responce = await fetch('send.php', {
//             method: 'POST',
//             body: formData
//         }) 
//         console.log(responce)
//         if(responce.ok) {
//             let result = await responce.json();
//             console.log(result.message)
//             form.reset()
//             form.classList.remove('_sending')
            
//         }else{
//             alert('Error бл')
//         }
//     }
// })