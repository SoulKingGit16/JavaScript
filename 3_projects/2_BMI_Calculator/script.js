const form = document.querySelector('form');

form.addEventListener('submit', (E) => {
    E.preventDefault();
    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const result = document.querySelector('#result');

    if (height === '' || height < 0 || isNaN(height)) {
        result.appendChild(document.createTextNode('Buddy Please Give A Valid Height'));
    }
    else if (weight === '' || weight < 0 || isNaN(weight)) {
        result.appendChild(document.createTextNode('Buddy Please Give A Valid weight'));
    }
    else {
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);
        // result.appendChild(document.createTextNode(`<span>${bmi}</span>`));
        if (bmi <= 18.6) {
            result.innerHTML = `Buddy You're UnderWeight Cause Your BMI Is <span>${bmi}</span>`;
        }
        else if (bmi <= 24.9) {
            result.innerHTML = `Buddy You're Just Perfect Cause Your BMI Is <span>${bmi}</span>`;
        }
        else {
            result.innerHTML = `Buddy You're OverWeight Cause Your BMI Is <span>${bmi}</span>`;
        }
    }

});





