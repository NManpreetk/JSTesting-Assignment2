describe("Shopping Cart", function () {
    it("should return items with itemID and price", function () {
        let obj = new ShoppingCart(204, 56.8)
        expect(obj.items()).toEqual([{
            itemID: 204,
            price: 56.8
        }])
    });

    it("should not take in more than 5 items", function () {
        let obj = new ShoppingCart()
        obj.scan(12, 23.4)
        obj.scan(345, 45.6)
        obj.scan(375, 23.5)
        obj.scan(0864, 65.4)
        obj.scan(58, 34.5)
        expect(obj.scan(34, 354)).toEqual("Your cart is full")
    });

    it("should not remove an item if the cart is already empty", function () {
        let obj = new ShoppingCart()
        obj.remove(34, 354)
        expect(obj.items()).toEqual([])
    });

    it("should remove an item", function(){
        let obj = new ShoppingCart()
        obj.scan(345, 45.6)
        obj.scan(0864, 65.4)
        obj.remove(0864, 65.4)
        expect(obj.items()).toEqual([{itemID: 345, price: 45.6}])
    });

    it("should return total of the items", function(){
        let obj = new ShoppingCart()
        obj.scan(12, 23.4)
        obj.scan(345, 45.6)
        expect(obj.total()).toBe(136.8)
    })
})
