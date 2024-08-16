function addToCart() {
    const item = document.getElementById('item').value;
    const price = document.getElementById('price').value;

    if (item && price) {
        const cart = document.getElementById('cart');
        const li = document.createElement('li');
        li.textContent = `${item} - Rs.${price}`;
        cart.appendChild(li);

        // Optionally, you could store cart items in Local Storage as in the previous example
        let cartItems = JSON.parse(localStorage.getItem('cart')) || [];
        cartItems.push({ item, price });
        localStorage.setItem('cart', JSON.stringify(cartItems));
    }
}
