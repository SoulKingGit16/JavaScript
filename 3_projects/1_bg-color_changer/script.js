const body = document.querySelector('body');
const buttons = document.querySelectorAll('.button');

buttons.forEach(function (button) {
    console.log(button);
    button.addEventListener('click', function (evntObj) {
        console.log(evntObj);
        console.log(evntObj.target);
        if (evntObj.target.id === 'grey') {
            // body.style.backgroundColor = 'grey';
            body.style.backgroundColor = evntObj.target.id;
        }
        if (evntObj.target.id === 'palevioletred') {

            body.style.backgroundColor = evntObj.target.id;
        }
        if (evntObj.target.id === 'blue') {
            body.style.backgroundColor = evntObj.target.id;
        }
        if (evntObj.target.id === 'yellow') {
            body.style.backgroundColor = evntObj.target.id;
        }

    });
});

