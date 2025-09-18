
//Cart
let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

// add to cart
function addToCart(productCard) {
    const name = productCard.querySelector('.product-title').textContent;
    const priceText = productCard.querySelector('.product-price').textContent;
    const price = parseFloat(priceText.replace('$', ''));
    const imgSrc = productCard.querySelector('.product-img').src;

    const existingItem = cartItems.find((item) => item.name === name);
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cartItems.push({ 
            name,
            price,
            quantity: 1,
            Image: imgSrc,
        });
    }
    updateLocalStorage();
}

//Display cart items
function displayCartItems() {
    const cartContainer = document.getElementById('cartItems')
    const TotalElement = document.getElementById('cartTotal')

    if (!cartContainer) return;

    cartContainer.innerHTML = '';
    let total = 0;

    cartItems.forEach((item) => {
        const itemTotal = item.price * item.quantity;
        total += itemTotal;

        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';
        cartItem.innerHTML = ` 
        
        `
    })
}

//save cart in localstorage
function updateLocalStorage() {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
}