document.addEventListener('DOMContentLoaded', function () {
    const addToCartButtons = document.querySelectorAll('.btn-cart');
    const cartDropdown = document.getElementById('cartDropdown');
    const cartIcon = document.getElementById('cartIcon');
    const cartItemCount = document.getElementById('cartItemCount');
    const cartTotal = document.getElementById('cartTotal');

    let itemCount = 0; // Variable to track the number of items in the cart
    let totalPrice = 0; // Variable to track the total price

    // Create a close button for the cart dropdown
    const closeBtn = document.createElement('button');
    closeBtn.classList.add('close-btn');
    closeBtn.innerHTML = '<i class="fa-regular fa-circle-xmark"></i>';
    closeBtn.addEventListener('click', function () {
        cartDropdown.classList.remove('show');
    });

    // Append the close button to the cart dropdown
    cartDropdown.appendChild(closeBtn);

    function handleAddToCartClick(event) {
        const parentBox = event.target.closest('.box');
        const productName = parentBox.querySelector('h3').textContent;
        const productPrice = parseFloat(parentBox.querySelector('.price').textContent.replace('$', '')); // Parse the price as a float
        const productImage = parentBox.querySelector('.sneaker-img');

        itemCount++;
        cartItemCount.textContent = itemCount;

        // Show the cart item count
        cartItemCount.style.display = 'inline-block';

        // Update the total price
        totalPrice += productPrice;

        // Create a list item to represent the added item
        const cartItem = document.createElement('li');
        cartItem.classList.add('cart-item');

        // Create an image element for the cart item
        const cartItemImage = document.createElement('img');
        cartItemImage.classList.add('cart-item-image');
        cartItem.appendChild(cartItemImage);

        // Set the source and attributes for the cartItemImage
        cartItemImage.src = productImage.src;
        cartItemImage.alt = productName;

        // Create a div for product details (name, price, and trash icon)
        const productDetails = document.createElement('div');
        productDetails.classList.add('product-details');

        // Create a span element for the product name
        const productNameSpan = document.createElement('span');
        productNameSpan.classList.add('product-name');
        productNameSpan.textContent = productName;

        // Create a span element for the product price
        const productPriceSpan = document.createElement('span');
        productPriceSpan.classList.add('product-price');
        productPriceSpan.textContent = `$${productPrice.toFixed(2)}`;

        // Create a trash can icon for removing the item
        const trashIcon = document.createElement('i');
        trashIcon.classList.add('fa', 'fa-trash', 'remove-icon');
        trashIcon.addEventListener('click', function () {
            // Remove the item from the cart
            cartDropdown.removeChild(cartItem);

            // Update the item count, total price, and cart icon
            itemCount--;
            totalPrice -= productPrice;
            cartItemCount.textContent = itemCount;
            updateCartTotal();
            updateCartIcon();
        });

        // Append the spans and trash icon to the product details div
        productDetails.appendChild(productNameSpan);
        productDetails.appendChild(productPriceSpan);
        productDetails.appendChild(trashIcon);

        // Append the product details div to the list item
        cartItem.appendChild(productDetails);

        // Add the list item to the cart dropdown
        cartDropdown.insertBefore(cartItem, cartTotal); // Insert the item before the total

        // Add a border under each cart item
        cartItem.style.borderBottom = '1px solid #ddd';

        // Update the cart icon appearance
        updateCartIcon();

        // Update the cart total
        updateCartTotal();
    }

    function updateCartIcon() {
        // Add the class when there are items in the cart
        if (itemCount > 0) {
            cartIcon.classList.add('cart-has-items');
        } else {
            cartIcon.classList.remove('cart-has-items');
        }
    }

    function updateCartTotal() {
        // Check if there are any items in the cart
        const cartItems = cartDropdown.getElementsByClassName('cart-item');
        const hasItems = cartItems.length > 0;

        // Update the total displayed in the cart
        cartTotal.textContent = `Total: $${totalPrice.toFixed(2)}`;

        // Toggle the visibility of the total icon and dropdown menu
        if (hasItems) {
            cartTotal.classList.add('cartTotal');
            cartDropdown.classList.add('show');
            cartItemCount.style.display = 'inline-block';
        } else {
            cartTotal.classList.remove('cartTotal');
            // Do not remove 'show' class if there are no items
            // cartDropdown.classList.remove('show');
            cartItemCount.style.display = 'none';
        }
    }

    addToCartButtons.forEach(button => {
        button.addEventListener('click', handleAddToCartClick);
    });
});




//base code
/*
document.addEventListener('DOMContentLoaded', function () {
    const addToCartButtons = document.querySelectorAll('.btn-cart');
    const cartDropdown = document.getElementById('cartDropdown');
    const cartIcon = document.getElementById('cartIcon');
    const cartItemCount = document.getElementById('cartItemCount');
    const cartTotal = document.getElementById('cartTotal');

    let itemCount = 0; // Variable to track the number of items in the cart
    let totalPrice = 0; // Variable to track the total price

    function handleAddToCartClick(event) {
        const parentBox = event.target.closest('.box');
        const productName = parentBox.querySelector('h3').textContent;
        const productPrice = parseFloat(parentBox.querySelector('.price').textContent.replace('$', '')); // Parse the price as a float
        const productImage = parentBox.querySelector('.sneaker-img');

        itemCount++;
        cartItemCount.textContent = itemCount;

        // Show the cart item count
        cartItemCount.style.display = 'inline-block';

        // Update the total price
        totalPrice += productPrice;

        // Create a list item to represent the added item
        const cartItem = document.createElement('li');
        cartItem.classList.add('cart-item');

        // Create an image element for the cart item
        const cartItemImage = document.createElement('img');
        cartItemImage.classList.add('cart-item-image');
        cartItem.appendChild(cartItemImage);

        // Set the source and attributes for the cartItemImage
        cartItemImage.src = productImage.src;
        cartItemImage.alt = productName;

        // Create a div for product details (name, price, and trash icon)
        const productDetails = document.createElement('div');
        productDetails.classList.add('product-details');

        // Create a span element for the product name
        const productNameSpan = document.createElement('span');
        productNameSpan.classList.add('product-name');
        productNameSpan.textContent = productName;

        // Create a span element for the product price
        const productPriceSpan = document.createElement('span');
        productPriceSpan.classList.add('product-price');
        productPriceSpan.textContent = `$${productPrice.toFixed(2)}`;


        const closeBtn = document.createElement('button');
        closeBtn.classList.add('close-btn');
        
        closeBtn.innerHTML = '<i class="fa-regular fa-circle-xmark"></i>';


        closeBtn.addEventListener('click', function () {
            cartDropdown.classList.remove('show');
        });
    
        // Append the close button to the cart dropdown
        cartDropdown.appendChild(closeBtn);

        // Create a trash can icon for removing the item
        const trashIcon = document.createElement('i');
        trashIcon.classList.add('fa', 'fa-trash', 'remove-icon');
        trashIcon.addEventListener('click', function () {
            // Remove the item from the cart
            cartDropdown.removeChild(cartItem);

            // Update the item count, total price, and cart icon
            itemCount--;
            totalPrice -= productPrice;
            cartItemCount.textContent = itemCount;
            updateCartTotal();
            updateCartIcon();
        });

        // Append the spans and trash icon to the product details div
        productDetails.appendChild(productNameSpan);
        productDetails.appendChild(productPriceSpan);
        productDetails.appendChild(trashIcon);

        // Append the product details div to the list item
        cartItem.appendChild(productDetails);

        // Add the list item to the cart dropdown
        cartDropdown.insertBefore(cartItem, cartTotal); // Insert the item before the total

        // Add a border under each cart item
        cartItem.style.borderBottom = '1px solid #ddd';

        // Update the cart icon appearance
        updateCartIcon();

        // Update the cart total
        updateCartTotal();
    }

    function updateCartIcon() {
        // Add the class when there are items in the cart
        if (itemCount > 0) {
            cartIcon.classList.add('cart-has-items');
        } else {
            cartIcon.classList.remove('cart-has-items');
        }
    }

    function updateCartTotal() {
        // Check if there are any items in the cart
        const cartItems = cartDropdown.getElementsByClassName('cart-item');
        const hasItems = cartItems.length > 0;
    
        // Update the total displayed in the cart
        cartTotal.textContent = `Total: $${totalPrice.toFixed(2)}`;
    
        // Toggle the visibility of the total icon and dropdown menu
        if (hasItems) {
            cartTotal.classList.add('cartTotal');
            cartDropdown.classList.add('show'); // Add this line to ensure the dropdown is shown when there are items
            cartItemCount.style.display = 'inline-block';
        } else {
            cartTotal.classList.remove('cartTotal');
            cartDropdown.classList.remove('show');

            cartItemCount.style.display = 'none';
        }
    }

    addToCartButtons.forEach(button => {
        button.addEventListener('click', handleAddToCartClick);
    });
});
});


*/