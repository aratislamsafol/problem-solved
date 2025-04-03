const shoppingCart = {
    customer: {
        name: "Arat Islam",
        email: "arat.islam@example.com",
        shippingAddress: {
            street: "123 Main St",
            city: "Dhaka",
            postalCode: "1212",
            country: "Bangladesh"
        },
        paymentMethod: {
            cardNumber: "**** **** **** 1234",
            cardType: "Visa",
            expirationDate: "12/25"
        }
    },
    items: [
        {
            productID: "p001",
            productName: "Wireless Mouse",
            price: 1200,
            quantity: 2,
            totalPrice: function() {
                return this.price * this.quantity;
            }
        },
        {
            productID: "p002",
            productName: "Bluetooth Keyboard",
            price: 2500,
            quantity: 1,
            totalPrice: function() {
                return this.price * this.quantity;
            }
        }
    ],
    discount: 200, // Discount on total price
    calculateTotal: function() {
        let total = 0;
        this.items.forEach(item => {
            total += item.totalPrice();
        });
        total -= this.discount;
        return total;
    },
    checkout: function() {
        console.log("Checking out...");
        console.log(`Customer: ${this.customer.name}`);
        console.log(`Shipping Address: ${this.customer.shippingAddress.street}, ${this.customer.shippingAddress.city}, ${this.customer.shippingAddress.country}`);
        console.log(`Total Price (after discount): ${this.calculateTotal()} BDT`);
        return "Order Placed Successfully!";
    },
    applyCoupon: function(couponCode) {
        const validCoupons = {
            "DISCOUNT10": 10,
            "FREESHIP": 0
        };
        if (validCoupons[couponCode]) {
            console.log(`Coupon Applied! You get ${validCoupons[couponCode]}% off.`);
            this.discount = (this.calculateTotal() * validCoupons[couponCode]) / 100;
        } else {
            console.log("Invalid Coupon Code.");
        }
    }
};
