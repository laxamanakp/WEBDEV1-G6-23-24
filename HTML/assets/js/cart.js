var cartItems = [];
var cartTotal = 0;

function addToCart(itemName, itemPrice, itemImage) {
    var existingItem = cartItems.find(item => item.name === itemName);

    if (existingItem) {
        existingItem.quantity += 1;
        existingItem.totalPrice += itemPrice;
    } else {
        cartItems.push({ name: itemName, price: itemPrice, quantity: 1, totalPrice: itemPrice, image: itemImage });
    }

    cartTotal += itemPrice;

    updateCartNumber();
    updateCartSidebar();
}


function removeFromCart(itemName, itemPrice) {
    var existingItem = cartItems.find(item => item.name === itemName);

    if (existingItem && existingItem.quantity > 1) {
        existingItem.quantity -= 1;
        existingItem.totalPrice -= itemPrice;
    } else {
        cartItems = cartItems.filter(item => item.name !== itemName);
    }

    cartTotal -= itemPrice;

    updateCartNumber();
    updateCartSidebar();
}

function updateCartNumber() {
    var cartNumberElement = document.getElementById('cartNumber');
    if (cartNumberElement) {
        cartNumberElement.textContent = cartItems.reduce((total, item) => total + item.quantity, 0);
    }
}

function updateCartSidebar() {
    var cartItemListElement = document.getElementById('cartItemList');
    var cartTotalElement = document.getElementById('cartTotal');

    if (cartItemListElement && cartTotalElement) {
        cartItemListElement.innerHTML = '';
        cartItems.forEach(item => {
            var listItem = document.createElement('li');
            listItem.classList.add('cart-item');
            listItem.innerHTML = `
                <div class="cart-item-image">
                    <img src="${item.image}">
                </div>
                <div class="cart-item-details">
                    <div class="cart-item-title">${item.name}</div>
                    <div class="cart-item-price">PHP ${item.price} x ${item.quantity} = PHP ${item.totalPrice}</div>
                </div>
                <div class="cart-item-buttons">
                    <button class="dish-minus-btn" onclick="removeFromCart('${item.name}', ${item.price})">
                        <i class="uil uil-minus"></i>
                    </button>
                    <span id="quantity-${item.name}">${item.quantity}</span>
                    <button class="dish-add-btn" onclick="addToCart('${item.name}', ${item.price}, '${item.image}')">
                        <i class="uil uil-plus"></i>
                    </button>
                </div>
            `;
            cartItemListElement.appendChild(listItem);
        });

        cartTotalElement.textContent = cartTotal;
    }
}


function toggleCart() {
    var cartSidebar = document.getElementById('cartSidebar');
    if (cartSidebar) {
        if (cartSidebar.style.right === '0px') {
            cartSidebar.style.right = '-500px';
        } else {
            cartSidebar.style.right = '0px';
        }
    }
}
