let productArr = document.querySelectorAll(".container>div");
let cartValue = document.getElementById("cart-value");
let cartBtn = document.getElementById("cart");
let count = 0;
let total = 0;
let cartObj = {};

for (let i = 0; i < productArr.length; i++) {
  let product = productArr[i];
  let buttonElements = product.getElementsByClassName("button");

  for (let j = 0; j < buttonElements.length; j++) {
    let button = buttonElements[j];
    button.addEventListener("click", function () {
      addToCart(product);
    });
  }
}

function addToCart(product) {
  let Name = product.querySelector("h3").textContent;
  let price = product.querySelector("p").textContent;

  if (cartObj[Name] == undefined) {
    cartObj[Name] = 1;
  } else {
    cartObj[Name]++;
  }

  count++;
  price = Number(price.slice(1));
  total += price;

  cartValue.innerText = count;
}

cartBtn.addEventListener("click", showDetails);

function showDetails() {
  let orderDetails = "Order Details:\n";
  for (let keys in cartObj) {
    orderDetails += `Item Name: ${keys} - Quantity: ${cartObj[keys]}\n`;
  }

  let dollars = Math.floor(total);
  let cents = Math.floor((total % 1) * 100);
  let totalAmount = `The total amount is ${dollars} $ and ${cents} cents.`;

  let whatsappMessage = encodeURIComponent(`${orderDetails}\n${totalAmount}`);

  let whatsappLink = `https://wa.me/919545453991?text=${whatsappMessage}`;

  window.open(whatsappLink, "_blank");
}

cartBtn.addEventListener("click", showDetails);

