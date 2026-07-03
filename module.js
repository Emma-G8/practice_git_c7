// export const vat = 7.5;

// export function amount(){
//     return 1000;
// }

// export class payment{
//     constructor(payer){
//         this.payer = payer
//     }

//     fetchPayer(){
//         return this.payer;
//     }
// }

const vat = 7.5;

function amount(){
    return 1000;
}

class payment{
    constructor(payer){
        this.payer = payer
    }

    fetchPayer(){
        return this.payer;
    }
}

export{
    vat,
    amount,
    payment
}