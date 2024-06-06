
// Function to display the current date and time
function displayDateTime() {
    const now = new Date();
    const time = document.querySelector(".datetime");
    time.innerHTML = ` ${now.toLocaleString()}`;
}

displayDateTime();

// Update date and time every second
setInterval(displayDateTime, 1000);


//display some info from the API endpoint to the user
const url = 'https://onlineprojectsgit.github.io/API/WDEndpoint.json';
const Hoverbutton = document.querySelector('.Hoverbutton');

// Function to display the data in the info container
function displayData(data) {
    const infoDiv = document.querySelector('.info-container');
    const { id, cohort, Name, Start, End, instructor, students } = data.info;
    const predata = infoDiv.innerHTML;

    infoDiv.innerHTML = predata + `
        <h1>${Name} (Cohort ${cohort})</h1>
        <p><strong>ID:</strong> ${id}</p>
        <p><strong>Start Date:</strong> ${Start}</p>
        <p><strong>End Date:</strong> ${End}</p>
        <h2>Instructor</h2>
        <p><strong>Name:</strong> ${instructor.name}</p>
        <p><strong>Position:</strong> ${instructor.position}</p>
        <p><strong>Cohorts:</strong> ${instructor.cohorts}</p>
        <h2>Students</h2>
        <p>${students}</p>
        <button class="Hoverbutton1">Click to Close</button>
    ` ;

    const Hoverbuttonclose = document.querySelector('.Hoverbutton1');
    Hoverbuttonclose.addEventListener('click', () => {
        infoDiv.innerHTML = '';
        Hoverbuttonclose.style.display = 'none';
        window.location.reload();
    })

}

// Fetch data from the API endpoint
const getinfo = async () => {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            displayData(data);
        }
    } catch (error) {
        console.log(error);
    }
}

// Add event listener to the button to display info on click
Hoverbutton.addEventListener('click', () => {
    Hoverbutton.style.display = 'none';
    getinfo();
})

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

// Initialize an empty cart array
let cart = [];

// Function to render products to the DOM
function renderProducts() {
    const productCards = document.querySelectorAll('.product-card1, .product-card2, .product-card3');

    productCards.forEach((card, index) => {
        const product = storeItems[index];
        if (product) {
            card.querySelector('.product-name').innerHTML = product.name;
            card.querySelector('.product-price').innerHTML = product.price;
            card.querySelector('.product-image').setAttribute('src', `./resources/${product.picture}`);
            const addCartButton = card.querySelector('.buttoncart');
            addCartButton.setAttribute('data-id', product.id);
            addCartButton.addEventListener('click', function () {
                const productId = parseInt(this.getAttribute('data-id'));
                addToCart(productId);
            });
        }
    });
}


//Call function to render values to webpage
renderProducts();


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