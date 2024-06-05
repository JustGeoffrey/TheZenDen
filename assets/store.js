const storeListings = document.getElementsByClassName('store-products')[0]

// FACTORY FUNCTION TO CREATE STOREITEMS
const createItem = (itemName, price, picture) => {
    return  {
        name: itemName,
        price: price,
        picture: picture
    }
} 

// CREATE AND POPULATE AN INITIAL LIST OF ITEMS
const storeItems = [
    createItem('Yoga Book', 25.00, 'latproduct-1.jpg'),
    createItem('Cushion', 20.00, 'latproduct-2.jpg'),
    createItem('Yoga Mat', 45.00, 'latproduct-3.jpg'),
    createItem('Yoga Mat', 35.00, 'latproduct-4.jpg'),
    createItem('Stylish Bottle', 22.00, 'latproduct-5.jpg'),
    createItem('Corked Bottle', 22.00, 'latproduct-6.jpg'),
    createItem('Bronze Bottle', 19.00, 'latproduct-7.jpg')
]

// USE A LOOP TO CREATE A HTML ELEMENT FOR EACH ITEM AND DISPLAY IT TO THE DOM
for (let i = 0; i < storeItems.length; i++) {
    const element = storeItems[i];
    
    let storeElement = document.createElement('div')
    storeElement.className = 'store-product'

    let itemImage = document.createElement('img')
    itemImage.className = `product-image${i}`
    itemImage.src = `./resources/${element.picture}`
    console.log(itemImage.src);
    itemImage.title = `${element.picture}`

    let itemTitle = document.createElement('h2')
    itemTitle.innerHTML = `${element.name}`

    let itemPrice = document.createElement('h3')
    itemPrice.innerHTML = `$${element.price}`

    let itemButton = document.createElement('button')
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
