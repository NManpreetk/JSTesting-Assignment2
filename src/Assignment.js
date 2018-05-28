class ShoppingCart {
    constructor(itemID, price) {
        this.item = [];
        this.product = {};
        this.product.itemID = itemID;
        this.product.price = price;
        this.item.push(this.product)
        this.percent = 0;
    }
    scan(itemID, price) {
        if (this.item.length < 5) {

            this.product.itemID = itemID;
            this.product.price = price;
            this.item.push(this.product)
        } else {
            return "Your cart is full"
        }
    }
    remove(product) {
        if (this.item.length < 1) {
            return "Your cart is empty"
        } else {
            this.item.pop(product)
        }
    }
    
    discount(percent) {
        if (this.percent >= this.total() / 2) {
            return this.total = this.total - (this.percent / 100) * this.total
        } else {
            return this.total() * this.percent / 100
        }
    }
    total() {
        var total = 0;
        for (var i = 0; i < this.item.length; i++) {
            total = total + this.item[i].price //- this.discount(this.percent)
            console.log(this.item[i].price)
        }
        return total
    }
    items() {
        return this.item;
    }
}
