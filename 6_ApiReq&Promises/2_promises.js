const promiseOne = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log(`Async Task: 1`);
        resolve(); //When This Method Will Execute It Will Connect With '.then()';
    }, 1000)
});

promiseOne.then(() => {
    console.log(`promise consumed`);
});

// ------------------------------------------------OR----------------------------------------

new Promise((resolve1, reject) => {
    setTimeout(() => {
        console.log(`Async Task: 2`);
        resolve1();
    }, 1000)
}).then(() => {
    console.log(`promise consumed`);
})

const promiseThree = new Promise((resolve2, reject2) => {
    setTimeout(() => {
        resolve2({ username: "Bikram", Rank: 'ACE' })
    }, 1000)

})
promiseThree.then((userDetails) => {
    console.log(userDetails);
})


const promiseFour = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = true;
        if (!error) {
            resolve({ userName: 'MakshaD', Rank: 'ACE Master' });
        }
        else {
            reject(`Something Went Wrong!`);
        }
    }, 1000)

});

promiseFour
    .then((user) => {
        console.log(user);
        return user.Rank;
    })
    .then((level) => {
        console.log(level);

    })
    .catch((err) => {
        console.log(err);

    })
    .finally(() => console.log(`The Promise Has Completed Its Orbit`));

//                                            Async-Await in javascript
//                                     --------------------------------------

const promiseFive = new Promise((reject, resolve) => {
    setTimeout(() => {
        let error = true;
        if (!error) {
            resolve({ userName: 'Bikram', Language: 'COBOL' });
        }
        else {
            reject(`Something Went Wrong In PromiseFive!`);
        }
    }, 1000)
})

async function cosumePromiseFive() {
    try {
        const responce = await promiseFive;     // Promise Is An Eventual Complition Object...
        console.log(responce);
    } catch (error) {
        console.log(error);
    }

}
cosumePromiseFive();



async function UserInfo() {
    try {
        const data = await fetch(''); // fetch returns promises & takes time cause its a network request so have to await...
        const information = await data.json(); // takes time so have to await...
        console.log(information);
    } catch (error) {
        console.log(`E: ${error}`);
    }

}
UserInfo();

//^same thing with .then()

fetch('https://github.com/SoulKingGit16')
    .then((data) => {
        return data.json();
    })
    .then((information) => {
        console.log(information);
    })
    .catch((error) => console.log(error))

