// Function to simulate updating the price of a product
function updatePrice(productName) {
    const productList = document.querySelectorAll('.product');
    
    // Loop through all products to find the one that matches the product name
    productList.forEach(product => {
        const name = product.querySelector('.product-name').textContent;
        
        if (name === productName) {
            // Simulate a price update (e.g., increase by $100)
            const priceElement = product.querySelector('.product-price');
            let currentPrice = parseInt(priceElement.textContent);
            let updatedPrice = currentPrice + 100;
            priceElement.textContent = updatedPrice;
        }
    });
}

/*

// Wait for the DOM to be fully loaded before adding event listeners
document.addEventListener('DOMContentLoaded', () => {
    // Select all the buttons with the class "update-price"
    const updateButtons = document.querySelectorAll('.update-price');

    // Loop through each button and attach the event listener
    updateButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            // Get the product name from the sibling span element
            const productName = event.target.closest('.product').querySelector('.product-name').textContent;
            updatePrice(productName);
        });
    });
});

// Function to simulate updating the price of a product
function updatePrice(productName) {
    const productList = document.querySelectorAll('.product');
    
    // Loop through all products to find the one that matches the product name
    productList.forEach(product => {
        const name = product.querySelector('.product-name').textContent;
        
        if (name === productName) {
            // Simulate a price update (e.g., increase by $100)
            const priceElement = product.querySelector('.product-price');
            let currentPrice = parseInt(priceElement.textContent);
            let updatedPrice = currentPrice + 100;
            priceElement.textContent = updatedPrice;
        }
    });
}



*/