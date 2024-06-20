const myCart = [1, 2, 3, 4, 5, 6];

const total = myCart.reduce((accumulator, currentValue) => (accumulator + currentValue), 0)
console.log(total);

const Kart = [
    {
        item: "keyboard",
        price: 1050
    },
    {
        item: "Mouse",
        price: 629
    },
    {
        item: "Boat X1",
        price: 300
    }
]

const bill = Kart.reduce((acc, item) => acc + item.price, 0);
console.log(bill);

