/* global Cart */
'use strict';

// Create an event listener so that when the delete link is clicked, the removeItemFromCart method is invoked.
let table = document.getElementById('cart');
table.addEventListener('click', removeItemFromCart);
let cart;

function loadCart() {
  let cartItems = JSON.parse(localStorage.getItem('cart')) || [];
  cart = new Cart(cartItems);
}

// Make magic happen --- re-pull the Cart, clear out the screen and re-draw it
function renderCart() {
  loadCart();
  clearCart();
  showCart();
}

// TODO: Remove all of the rows (tr) in the cart table (tbody)
function clearCart() {
  // let tbody=document.getElementsByTagName('tr');
 
 let tbody=document.getElementsByTagName('tbody');
  let list = document.getElementsByTagName("table")[0];
 list.innerHTML = ""; 
  // tbody.innerHTML = '';
 
}
//let tbody = document.getElementsByTagName('tbody').innerHTML;
// TODO: Fill in the <tr>'s under the <tbody> for each item in the cart
function showCart() {

  // TODO: Find the table body
  
  // TODO: Create a TD for the delete link, quantity,  and the item
  // TODO: Add the TR to the TBODY and each of the TD's to the TR
// TODO: Find the table body
//let tbody = document.getElementsByTagName('tbody');

// TODO: Add the TR to the TBODY and each of the TD's to the TR
// TODO: Iterate over the items in the cart
for (let i = 0; i < cart.items.length; i++) {
  // TODO: Create a TR
  let tr = document.createElement('tr');
  //tr.setAttribute('id', i);
  //tr.id=i
  table.appendChild(tr);

  let td1 = document.createElement('td');
  td1.textContent = 'X';
  tr.appendChild(td1);
  td1.id=i;

  let td2 = document.createElement('td');
  td2.textContent = cart.items[i].quantity;
  tr.appendChild(td2);

  let td3 = document.createElement('td');
  td3.textContent = cart.items[i].product;
  tr.appendChild(td3);
}

}

function removeItemFromCart(event) {

  // TODO: When a delete link is clicked, use cart.removeItem to remove the correct item
  // if (event.target.textContent === 'X') {
  //   //table.deleteRow(event.target.textcontent.id.value);
  //   cart.removeItem(event.target.id);

  //   console.log(cart.removeItem(event.target.id)); 
  // }
  cart.removeItem(Number(event.target.id));
  //cart.saveToLocalStorage();
  clearCart();
  showCart();
  
  // TODO: Save the cart back to local storage
  localStorage.setItem('cart', JSON.stringify(cart.items));
  // TODO: Re-draw the cart table
  renderCart();
}

// This will initialize the page and draw the cart on screen
renderCart();
