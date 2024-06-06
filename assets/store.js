// Initialize an empty cart array
let cart = [];

// Function to display the current date and time
function displayDateTime() {
    const now = new Date();
    const time = document.querySelector(".datetime");
    if (!null) { time.innerHTML = ` ${now.toLocaleString()}`; }
}

displayDateTime();

// Update date and time every second
setInterval(displayDateTime, 1000);

const storeListings = document.querySelector('.store-products')

// FACTORY FUNCTION TO CREATE STOREITEMS
const createItem = (id, itemName, price, picture, quantity) => {
    return {
        id: id,
        name: itemName,
        price: price,
        picture: picture,
        quantity: quantity
    }
}

// CREATE AND POPULATE AN INITIAL LIST OF ITEMS
const storeItems = [
    createItem(1, 'Yoga Book', 25.00, 'latproduct-1.jpg', 1),
    createItem(2, 'Cushion', 20.00, 'latproduct-2.jpg', 1),
    createItem(3, 'Yoga Mat', 45.00, 'latproduct-3.jpg', 1),
    createItem(4, 'Yoga Mat', 35.00, 'latproduct-4.jpg', 1),
    createItem(5, 'Stylish Bottle', 22.00, 'latproduct-5.jpg', 1),
    createItem(6, 'Corked Bottle', 22.00, 'latproduct-6.jpg', 1),
    createItem(7, 'Bronze Bottle', 19.00, 'latproduct-7.jpg', 1),
]


// USE A LOOP TO CREATE A HTML ELEMENT FOR EACH ITEM AND DISPLAY IT TO THE DOM
for (let i = 0; i < storeItems.length; i++) {
    const element = storeItems[i];

    let storeElement = document.createElement('div')
    storeElement.className = 'store-product'

    let itemImage = document.createElement('img')
    itemImage.className = `product-image${i}`
    itemImage.src = `./resources/${element.picture}`
    itemImage.title = `${element.picture}`

    let itemTitle = document.createElement('h2')
    itemTitle.innerHTML = `${element.name}`

    let itemPrice = document.createElement('h3')
    itemPrice.innerHTML = `$${element.price}`

    let itemButton = document.createElement('button')
    itemButton.setAttribute('data-id', element.id);
    itemButton.className = ' buttoncart'
    itemButton.innerHTML = 'Add to cart'

    // APPEND THE CHILDREN ELEMENTS INTO THE STORE ITEM LISTING
    storeElement.appendChild(itemImage)
    storeElement.appendChild(itemTitle)
    storeElement.appendChild(itemPrice)
    storeElement.appendChild(itemButton)

    // FINALLY, APPEND THE CREATED ELEMENT INTO THE STORE LISTINGS DIV
    storeListings.appendChild(storeElement)

}

// Attach event listeners to each add-to-cart button
document.querySelectorAll('.buttoncart').forEach(button => {
    button.addEventListener('click', function () {
        const productId = parseInt(this.getAttribute('data-id'));
        addToCart(productId);
    });
});


// Function to save the cart to local storage
function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

// Function to load the cart from local storage
function loadCart() {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
        cart = JSON.parse(savedCart);
        return cart;
    }
}

// Function to add a product to the cart
function addToCart(productId) {
    const product = storeItems.find(p => p.id === productId);
    cart.push(product);
    saveCart();
    alert("Product added!,Click 'Cart' tab to see your cart");
}


// Initialize cart rendering on page load
document.addEventListener('DOMContentLoaded', loadCart);