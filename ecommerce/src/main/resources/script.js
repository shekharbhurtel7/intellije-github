// scripts.js

// Example: Show a welcome alert when page loads
document.addEventListener("DOMContentLoaded", function () {
    console.log("Website Loaded Successfully");
});

// Example: Confirm before checkout
function confirmCheckout() {
    return confirm("Are you sure you want to proceed to checkout?");
}

// Example: Add product to cart
function addToCart(productName) {
    alert(productName + " has been added to your cart!");
}