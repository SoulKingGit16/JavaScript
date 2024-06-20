// const clock = document.querySelector('#clock');
const clock = document.getElementById('clock');

setInterval(function () {
    let date = new Date();
    clock.innerHTML = date.toLocaleTimeString();
    // clock.appendChild(document.createTextNode(`${date.toLocaleTimeString()}`));
}, 1000);




