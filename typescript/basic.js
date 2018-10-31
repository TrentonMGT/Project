function ShopperList() {
    this.groceries = [];
}
// Public method
ShopperList.prototype.addItem = function (item) {
    //Angular makes change detection easier
    this.groceries = this.groceries.concat([item]);
};
ShopperList.prototype.removeItem = function (item) {
    //Angular makes change detection easier
    this.groceries = this.groceries.filter(function (grocery) {
        return item !== grocery;
        // apple is not equel to apple an return the new array
    });
};
var mylist = new ShopperList();
mylist.addItem('apples');
mylist.addItem('mongo');
console.log(mylist.groceries);
mylist.removeItem('orange');
console.log(mylist.groceries);
// ES6 Classes
var ShoppingList2 = /** @class */ (function () {
    function ShoppingList2() {
        this.groceries = [];
    }
    ShoppingList2.prototype.addItem = function (item) {
        //Angular makes change detection easier
        // create a new array and add item to the array
        this.groceries = this.groceries.concat([item]);
    };
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
    ShoppingList2.prototype.removeItem = function (item) {
        //Angular makes change detection easier
        // Inplecite return
        this.groceries = this.groceries.filter(function (grocery) { return item !== grocery; });
    };
    return ShoppingList2;
}());
var myNewList = new ShoppingList2;
myNewList.addItem('foo');
myNewList.addItem('bar');
console.log(myNewList.groceries);
