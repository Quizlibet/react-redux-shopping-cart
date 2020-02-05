<h1>React-Redux Shopping Cart</h2>

This project is a demo application utilizing React, Redux and Material-UI to implement a very simple mock storefront.

## Dependencies:
This project requires the user to have Node.js to run

## Start Guide:

Before running the project for the first time, run `npm install` from the project directory to install the necessary node modules. To start the application, run `npm start` from the directory. This will run the start React Script and launch the application on localhost: 3000.

## Use Guide:

Once the app is loaded you will be routed to the <b>Store</b> page, where you are presented with a grid of available produce items. Click <b>Add to cart</b> under any item to add it to your shopping cart, displayed on the right side of the screen. The user can navigate back to the Store page at any time by pressing <b>Store</b> on the app bar.

Each item in the cart contains a thumbnail of its contents, its price, and a removal button. Pressing the removal button deletes the item from the cart and updates the count and price accordingly. The cart contains a constant element displaying the current number of items it contains, as well as an element containing the current total price of all said items.

Click <b>Checkout</b> on the App bar at the top of the screen to go to the Checkout page. This page displays the current total price of all cart items and a <b>Check Out</b> button. Press <b>Check Out</b> to send an asynchronous request. once this request is completed, the cart is emptied. While the check-out is in progress, no items can be added to or removed from the cart.

## TODO:
  * Add visual feedback while check out is in progress, indicating to the user that the items in the list cannot be modified.
  * Add a fail condition to the check out request, as well as a way for the user to trigger the fail condition.
  * Add a visual alert element that alerts the user of the status of a check out request as pending, completed or failed.
  * Pin the cart total count and price elements to the top right and bottom of the screen.
  * Update the link elements to match their parent App bar.
  * Update the layout of the store page to display more compactly.
  * Decouple the constant store items from the redux state and decompose the reducers using combineReducers.
  * Recompose the thunk middleware into it's own component.
  * Route the user back to the store page whenever the page is reloaded, as well as whenever a check out request succeeds.
