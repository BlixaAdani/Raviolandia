//DROPDOWN MENU

$(index.html).ready(function () {
  $('.dropdown').hover(function () {
    $(this).addClass('show');
    $(this).find('.dropdown-menu').addClass('show');
  }, function () {
    $(this).removeClass('show');
    $(this).find('.dropdown-menu').removeClass('show');
  });
});

$('.carousel').carousel({
  interval: 2000
});

// CARRITO RESPONSIVE

document.addEventListener('DOMContentLoaded', () => {
  const cart = [];
  const productList = document.getElementById('product-list');
  const cartItemsContainer = document.getElementById('cart-items');
  const cartTotal = document.getElementById('cart-total');

  // Event listener for adding items to the cart
  productList.addEventListener('click', (e) => {
      if (e.target.classList.contains('add-to-cart')) {
          const productCard = e.target.closest('.col-12');
          const productId = productCard.getAttribute('data-id');
          const productName = productCard.getAttribute('data-name');
          const productPrice = parseFloat(productCard.getAttribute('data-price'));

          addToCart({ id: productId, name: productName, price: productPrice });
      }
  });

  // Event listener for the checkout button
  document.getElementById('checkout-button').addEventListener('click', () => {
      alert('Proceeding to payment...');
  });

  // Function to add items to the cart
  function addToCart(product) {
      const existingProduct = cart.find(item => item.id === product.id);
      if (existingProduct) {
          existingProduct.quantity++;
      } else {
          product.quantity = 1;
          cart.push(product);
      }
      updateCartUI();
  }

  // Function to update the cart UI
  function updateCartUI() {
      cartItemsContainer.innerHTML = '';
      let total = 0;
      cart.forEach(product => {
          total += product.price * product.quantity;
          const listItem = document.createElement('li');
          listItem.classList.add('list-group-item');
          listItem.innerHTML = `
              ${product.name} - $${product.price} x ${product.quantity}
              <button class="btn btn-sm btn-danger float-end remove-from-cart" data-id="${product.id}">Remove</button>
          `;
          cartItemsContainer.appendChild(listItem);
      });
      cartTotal.innerText = total.toFixed(2);
  }

  // Event listener for removing items from the cart
  cartItemsContainer.addEventListener('click', (e) => {
      if (e.target.classList.contains('remove-from-cart')) {
          const productId = e.target.getAttribute('data-id');
          removeFromCart(productId);
      }
  });

  // Function to remove items from the cart
  function removeFromCart(productId) {
      const productIndex = cart.findIndex(item => item.id === productId);
      if (productIndex > -1) {
          cart[productIndex].quantity--;
          if (cart[productIndex].quantity === 0) {
              cart.splice(productIndex, 1);
          }
          updateCartUI();
      }
  }
});