function ShopperList() {
    this.groceries = [];
}

// Public method
ShopperList.prototype.addItem = function (item) {
    //Angular makes change detection easier
    this.groceries = this.groceries.concat([item]);
}

ShopperList.prototype.removeItem = function (item) {
    //Angular makes change detection easier
    this.groceries = this.groceries.filter(function (grocery) {
        return item !== grocery;
        // apple is not equel to apple an return the new array
    });
}

var mylist = new ShopperList();

mylist.addItem('apples');
mylist.addItem('mongo');


console.log(mylist.groceries);

mylist.removeItem('orange');
console.log(mylist.groceries);

// ES6 Classes

class ShoppingList2 {
    groceries: string[];
    constructor() {
        this.groceries = [];
    }
    addItem(item) {
        //Angular makes change detection easier
        // create a new array and add item to the array
        this.groceries = [...this.groceries, item];
    }
    // removeItem(item) {
    //     //Angular makes change detection easier
    //     this.groceries = this.groceries.filter(function (grocery) {
    //         return item !== grocery;
    //         // apple is not equel to apple an return the new array
    //     });
    // }
    // removeItem(item) {
    //     //Angular makes change detection easier
    //     this.groceries = this.groceries.filter( (grocery) => {
    //         return item !== grocery;
    //         // apple is not equel to apple an return the new array
    //     });
    // }
    removeItem(item) {
        //Angular makes change detection easier
        // Inplecite return
        this.groceries = this.groceries.filter((grocery) => item !== grocery);
    }
}

const myNewList = new ShoppingList2;

myNewList.addItem('foo');
myNewList.addItem('bar');

console.log(myNewList.groceries);