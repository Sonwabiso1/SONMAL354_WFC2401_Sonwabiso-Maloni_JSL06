// Sample menu data (Consider fetching this data from a server in a real-world scenario)
const menu = {
    Starters: ["Garlic Bread", "Bruschetta"],
    MainCourses: ["Margherita Pizza", "Spaghetti Carbonara"],
    Desserts: ["Tiramisu", "Cheesecake"]
};

// Function to display menu items by category
function displayMenuItems(menu) {
    const menuContainer = document.getElementById('menu');

    for (const category in menu) {
        // Create an <h2> element for the category title
        const categoryTitle = document.createElement('h2');
        categoryTitle.textContent = category;
        menuContainer.appendChild(categoryTitle);

        // Create a <div> element to contain category items
        const categoryElement = document.createElement('div');
        menuContainer.appendChild(categoryElement);

        // Create a <ul> element for the list of items
        const itemListElement = document.createElement('ul');
        categoryElement.appendChild(itemListElement);

        // Loop through the items in the category and create list items
        menu[category].forEach(item => {
            const listItem = document.createElement('li');
            listItem.textContent = item;
            listItem.addEventListener('click', () => addToOrder(item));
            itemListElement.appendChild(listItem);
        });
    }
}



// Callback function for adding an item to the order
function addToOrder(itemName) {
    const orderItemsList = document.getElementById('order-items');
    const orderTotalElement = document.getElementById('order-total');

    const listItem = document.createElement('li');
    listItem.textContent = itemName;
    orderItemsList.appendChild(listItem);

    // Assuming each item costs R60
    const itemPrice = 60; // You can replace this with actual price lookup
    const totalPrice = parseFloat(orderTotalElement.textContent) + itemPrice;
    orderTotalElement.textContent = totalPrice.toFixed(2);
}


// Function to initialize the menu system
function initMenuSystem(menu) {
    displayMenuItems(menu);
}


// Start the menu system by calling the init function
initMenuSystem(menu);
