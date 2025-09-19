
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
            image: imgSrc,
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
         <img src="${item.image}" alt="${item.name}">
    <div class="cart-title-price">
        <div class="cart-item-title">${item.name}</div>
        <div class="cart-item-price">$${itemTotal.toFixed(2)}</div>
    </div>

    <div class="quantity-controls">
     <button onclick="changeQuantity('${item.name}', -1)">
        <i class="ri-subtract-line"></i>
     </button> 

     <input
      type="text"
      name=""
      class="cart-item-quantity"
      value="${item.quantity}"
      min="1"
      onchange="updateQuantity('${item.name}', this.value)"
      readonly
      >

      <button onclick="changeQuantity('${item.name}',1)">
        <i class="ri-add-line"></i>
     </button>   
    </div>

    <div class="remove-from-cart" onclick="removeItem('${item.name}')">
        <i class="ri-delete-bin-line"></i>
    </div>
        `;
        cartContainer.appendChild(cartItem);
    });

    if (TotalElement) {
        TotalElement.textContent = `Total: $${total.toFixed(2)}`;
    }
}

//save cart in localstorage
function updateLocalStorage() {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
}


// load cart on page load 
window.onload = function () {
    if (document.getElementById('cartItems')) {
        displayCartItems();
    }
};