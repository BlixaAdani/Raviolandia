// DROPDOWN MENU
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

// SHOPPING CART FUNCTIONALITY
document.addEventListener('DOMContentLoaded', () => {
    const cart = [];
    const productList = document.getElementById('product-list');
    const confirmOrderButton = document.getElementById('confirm-order-button');

    productList.addEventListener('click', (e) => {
        if (e.target.classList.contains('add-to-cart')) {
            const productCard = e.target.closest('.col');
            const productId = productCard.getAttribute('data-id');
            const productName = productCard.getAttribute('data-name');
            const productPrice = parseFloat(productCard.getAttribute('data-price'));

            addToCart({ id: productId, name: productName, price: productPrice });
        }
    });

    confirmOrderButton.addEventListener('click', () => {
        if (cart.length > 0) {
            sendOrderToWhatsApp();
        } else {
            alert("El carrito está vacío. Por favor, agregue productos antes de confirmar el pedido.");
        }
    });

    function addToCart(product) {
        const existingProduct = cart.find(item => item.id === product.id);
        if (existingProduct) {
            existingProduct.quantity++;
        } else {
            product.quantity = 1;
            cart.push(product);
        }
        console.log(cart); // Debugging: Check cart contents
    }

    function sendOrderToWhatsApp() {
        const phoneNumber = "5491160397216";
        let message = "Hola, me gustaría realizar el siguiente pedido:%0A%0A";

        cart.forEach(product => {
            message += `- ${product.name}: $${product.price.toFixed(2)} x ${product.quantity} = $${(product.price * product.quantity).toFixed(2)}%0A`;
        });

        const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
        message += `%0ATotal: $${total.toFixed(2)}%0A%0A¡Gracias!`;

        console.log(message); // Debugging: Check message content
        const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        window.open(whatsappURL, "_blank");
    }
});