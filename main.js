const itemInput = document.querySelector("#itemInput");
const priceInput = document.querySelector("#priceInput");
const addButton = document.querySelector("#addButton");
const shoppingList = document.querySelector("#shoppingList");
const totalCost = document.querySelector("#totalCost");
const clearButton = document.querySelector("#clearButton");

let items = [];

function displayItems() {
    shoppingList.textContent = "";

    items.forEach(function (item) {
        const li =document.createElement("li");

        li.textContent = item.name + " - Ksh " + item.price;
         
        if (item.purchased) {
            li.classList.add("purchased");
        }

        li.addEventListener("click", function () {
            item.purchased = !item.purchased;
            displayItems();
        });

        shoppingList.append(li);
    });

    updateTotal();
}

function updateTotal() {
    let total = 0;

    items.forEach(function(item) {
        total = total + item.price;
    });

    totalCost.textContent = "Total cost: Ksh" + total.toFixed(2);
}

addButton.addEventListener("click", function () {
    const name = itemInput.value.trim();
    const price = Number(priceInput.value);

    if (
        name === "" ||
         priceInput.value ==="" ||
        !Number.isFinite(price) ||
         price < 0
    ) {
            alert("Enter an item name and a valid price.");
            return;
        }
        items.push({
            name: name,
            price: price,
            purchased: false
        });

        displayItems();

        itemInput.value = "";
        priceInput.value = "";
});

clearButton.addEventListener("click", function () {
    items = [];
    displayItems();
});