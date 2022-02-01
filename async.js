
//Promise 

//const { reject } = require("async");

// console.log('person1: shows ticket');
// console.log('person2: shows ticket');

// const promiseWifeBringingTickets = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('ticket');
//     },3000)
// });

// const getPopcorn =  promiseWifeBringingTickets.then((t) => {
//     console.log('wife: i have the tics');
//     console.log('husband: we should go in');
//     console.log('wife: no i am hungary');
//     return new Promise((resolve, reject) => resolve(`${t} popcorn`));
// });

// const getButter = getPopcorn.then((t) => {
//     console.log('husband: i got some popcorn');
//     console.log('husband: we should go in');
//     console.log('wife: I need butter on my popcorn');
//     return new Promise((resolve, reject) => resolve(`${t} butter`));
// });

// getButter.then((t) => console.log(t));

// console.log('person4: shows ticket');
// console.log('person5: shows ticket');


// async await

console.log('person1: shows ticket');
console.log('person2: shows ticket');

const preMovie = async () => {
    const promiseWifeBringingTickets = new Promise((resolve, reject) => {
        setTimeout(() => resolve('ticket'),3000);
    });
    const getPopcorn = new Promise((resolve, reject) => resolve(`popcorn`));
    const addButter = new Promise((resolve, reject) => resolve(`butter`));
    const addDrink = new Promise((resolve, reject) => resolve(`ColdDrink`))
    let ticket = await promiseWifeBringingTickets; //await should be inside a async function

    console.log('wife: i have the tics');
    console.log('husband: we should go in');
    console.log('wife: no i am hungary');

    let popcorn = await getPopcorn;

    console.log(`husband: i got some ${popcorn}`);
    console.log('husband: we should go in');
    console.log('wife: I need butter on my popcorn');
    
    let butter = await addButter;
    console.log(`husband: i got some ${butter} on popcorn`);
    console.log(`husband: anything else`);
    console.log(`wife: i also need a cold drink`);
    
    let drink = await addDrink;
    console.log('husband: here is your cold drink');
    console.log(`wife: let's go we are getting late`);

    return ticket;
};

preMovie().then((m) => console.log(`person3: shows ${m}`));

console.log('person3: shows ticket');
console.log('person4: shows ticket');
