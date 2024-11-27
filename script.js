// Cart functionality
let cart = [];

// Add item to the cart
function addToCart(productName, productPrice) {
    const product = { name: productName, price: productPrice, quantity: 1 };
    const existingProductIndex = cart.findIndex(item => item.name === productName);

    if (existingProductIndex !== -1) {
        cart[existingProductIndex].quantity += 1;
    } else {
        cart.push(product);
    }

    updateCartUI();
}

// Update the cart UI
function updateCartUI() {
    let cartCount = 0;
    let totalPrice = 0;
    let cartItemsHTML = '';

    cart.forEach(item => {
        cartCount += item.quantity;
        totalPrice += item.price * item.quantity;
        cartItemsHTML += `
            <p>${item.name} - $${item.price} x ${item.quantity}</p>
        `;
    });

    document.getElementById('cart-count').textContent = cartCount;
    document.getElementById('cart-items-list').innerHTML = cartItemsHTML;
    document.getElementById('total-price').textContent = totalPrice.toFixed(2);
}

// Checkout button functionality
document.getElementById('checkout-button').addEventListener('click', () => {
    alert('Proceeding to checkout...');
    cart = [];
    updateCartUI();
});

// Login form submission
document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // For demonstration, we will just log the credentials.
    console.log('Email:', email);
    console.log('Password:', password);
    alert('Login successful');
});

