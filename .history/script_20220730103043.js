var clock = document.querySelector('#clockdiv');
let asd = document.querySelector('info_name')
var daysSpan = document.querySelector('.days');  
var hoursSpan = document.querySelector('.hours');  
var minutesSpan = document.querySelector('.minutes');  
var secondsSpan = document.querySelector('.seconds');
console.log(asd) 

let deadline = '15/10/2022';

function getTimeRemaining(endtime){  
    var t = Date.parse(endtime) - Date.parse(new Date());  
    var seconds = Math.floor( (t/1000) % 60 );  
    var minutes = Math.floor( (t/1000/60) % 60 );  
    var hours = Math.floor( (t/(1000*60*60)) % 24 );  
    var days = Math.floor( t/(1000*60*60*24) );  
    return {  
     'total': t,  
     'days': days,  
     'hours': hours,  
     'minutes': minutes,  
     'seconds': seconds  
    };  
  }

console.log(getTimeRemaining(deadline))


function initializeClock(endtime){  
     
    

    // var timeinterval = setInterval(function(){  
    //  var t = getTimeRemaining(endtime);  
    //  clock.innerHTML = 'days: ' + t.days + ' ' +  
    //   'hours: '+ t.hours + ' ' +  
    //   'minutes: ' + t.minutes + ' ' +  
    //   'seconds: ' + t.seconds;  
    //  if(t.total<=0){  
    //   clearInterval(timeinterval);  
    //  }  
    // },1000);  
  }

  initializeClock(deadline);


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