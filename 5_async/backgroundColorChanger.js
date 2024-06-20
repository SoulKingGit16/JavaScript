const randomColor = () => {
    const hex = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += hex[Math.floor((Math.random() * 16))];
    }
    return color;
};

let intervalId;

const startChangingColor = () => {
    // if (intervalId==null) {
    //     intervalId = setInterval(BGchanger, 1000);
    // }
    const BGchanger = () => {
        document.body.style.backgroundColor = randomColor();
    }
    if (!intervalId) {
        intervalId = setInterval(BGchanger, 1000);

    }
}
const stopChangingColor = () => {
    clearInterval(intervalId);
    intervalId = null;  //optimising
}

document.querySelector('#start').addEventListener('click', startChangingColor)

document.querySelector('#stop').addEventListener('click', stopChangingColor)



