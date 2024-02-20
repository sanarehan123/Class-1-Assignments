"use strict";
function make_sandwich(...items) {
    console.log("Sandwich Order:");
    if (items.length === 0) {
        console.log("No items added to the sandwich.");
    }
    else {
        console.log("Items:");
        items.forEach((item, index) => {
            console.log(`${index + 1}. ${item}`);
        });
    }
    console.log("-----");
}
// Call the function with different arguments
make_sandwich('Turkey', 'Cheese', 'Lettuce');
make_sandwich('Ham', 'Tomato');
make_sandwich();
