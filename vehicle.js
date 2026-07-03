// export default class Vehicle {
//     constructor(Brand, Model, Owner) {
//         this.brand = Brand;
//         this.model = Model;
//         this.owner = Owner;
//     }

//     fetchOwner(){
//         return this.owner;
//     }
//     fetchBrand(){
//         return this.brand;
//     }
//     fetchModel(){
//         return this.model;
//     }
// }


// export const vehiclePlateNumber = "BD 004 CT7";



export default class Vehicle {
    constructor(Brand, Model, Owner) {
        this.brand = Brand;
        this.model = Model;
        this.owner = Owner;
    }

    fetchOwner(){
        return this.owner;
    }
    fetchBrand(){
        return this.brand;
    }
    fetchModel(){
        return this.model;
    }
}


const vehiclePlateNumber = "BD 004 CT7";

export {
    vehiclePlateNumber 
};
