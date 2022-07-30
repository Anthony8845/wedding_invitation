var endDate = new Date("Oct 15, 2022 12:00:00").getTime();
var timer = setInterval(function() {
    let now = new Date().getTime();
    let t = endDate - now;
    
    if (t >= 0) {
    
        let days = Math.floor(t / (1000 * 60 * 60 * 24));
        let hours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let mins = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
        
    
        document.getElementById("timer-days").innerHTML = days +
        "<span class='label'></span>";
    
        document.getElementById("timer-hours").innerHTML = ("0"+hours).slice(-2) +
        "<span class='label'></span>";
    
        document.getElementById("timer-mins").innerHTML = ("0"+mins).slice(-2) +
        "<span class='label'></span>";
    
       
    } else {
        document.getElementById("timer").innerHTML = "The countdown is over!";
    
    }
    
}, 1000);


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