'use strict'

document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('.form');
    console.log(form.value)
    form.addEventListener('submit', formSend);

    async function formSend(e) {
        e.preventDefault();


    }
})