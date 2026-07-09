import {vat, amount, payment} from './module.js';

// // import {bookName, bookPrice} from './book.js'; // see alternative in nextline
// import * as bookImport from './book.js';

// //import Vehicle, {vehiclePlateNumber} from './vehicle.js';
// import {default as Vehicle, vehiclePlateNumber} from './vehicle.js';

// import {vat as tin, meat} from './food.js';

// // // importing from our_modules folder
// // import { payments } from './our_modules/payments.js';
// // import { invoices } from './our_modules/invoice.js';
// // import { payments, invoices } from './our_modules/index.js';

// // //ALTERNATIVELY, you can import all the exports from the index.js file in our_modules folder
// // import * as ourModules from './our_modules/index.js';

// // // Using Dynamic Imports for our_modules folder
// // import('./our_modules/index.js').then((module) => {
// //   console.log(module.payments());
// //   console.log(module.invoices());
// // });

// // // Awaiting Dynamic Imports for our_modules folder
async function loadModules() {
  const modules = await import('./our_modules/index.js');
  console.log(modules.payments());
  console.log(modules.invoices());
}
loadModules();

// // Top-level await for Dynamic Imports for our_modules folder
// const modules = await import('./our_modules/index.js');
// console.log(modules.payments());
// console.log(modules.invoices());


// // // Object Destructuring
// // //14. Destructuring
// //const [result1, result2] = ["value 1", "value 2"];
// // const arraying = ["value 1", "value 2", "value 3", "value 4"];
// // const [first, second, ...rest] = arraying;
// // console.log(first);
// // console.log(second);
// // console.log(rest);

const myObj = {
  name: "Emmanuel",
  age: 38,
  occupation: "Software Engineer"
};

const { name, age, occupation } = myObj;
console.log(name);
console.log(age);
console.log(occupation);

// console.log(vat);
// console.log(tin);
// console.log(amount());
// console.log(meat);

// const myPayment = new payment("John Doe");
// console.log(myPayment.fetchPayer());
// console.log('================================');

// // console.log(bookName);
// // console.log(bookPrice());
// console.log(bookImport.bookName);
// console.log(bookImport.bookPrice());
// console.log('================================');

// const myVehicle = new Vehicle("Toyota", 2026, "Emmanuel")
// console.log(myVehicle.fetchOwner());
// console.log(myVehicle.fetchBrand());
// console.log(myVehicle.fetchModel());
// // console.log('\n');
// console.log(vehiclePlateNumber);
// console.log(import.meta.url);


// try {
//     const result = await riskyOperation();
//     return result; //This line gives error when the block of code is uncommented
//  } catch (error) {
//     console.error(error);
//     throw new Error('Operation failed');
// } finally {
//     // do an action
// }

// 

// Try-Catch Block
function fetchFromMTN() {
    return 1;
}
function anAction() {
    try {
        const result = fetchFromMTN();
        return result;
    } catch (error) {
         //console.error(error);
        return error.message;
       } 
}

// console.log(anAction());
// console.log('We are still running the code after the try-catch block');

const promise = new Promise ((resolve, reject) => {
    if (false) {
        resolve ("Successful");
    } else {
        reject ("failed");
    }
})

console.log(promise);

promise
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.error(error);
    });

    console.log('We are still running the code after the try-catch block');

const promise1 = await Promise.all(
    [
        fetchFromMTN(),
        anAction()
    ]
)
console.log(promise1);

const promise2 = await [fetchFromMTN(), anAction()];
console.log(promise2);

setTimeout(() => {
    console.log("Yeah!!! Today's test gonna be Easy - Peasy");
}, 2000);

console.log('We are still running the code after the try-catch block');
console.log('We are everywhere you go');
console.log('We are MTN, The Yello Network');
