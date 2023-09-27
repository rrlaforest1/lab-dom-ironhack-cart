// ITERATION 1

function updateSubtotal(product) {
  // console.log("Calculating subtotal, yey!");
  //... your code goes here
  const price = product.querySelector(".price span");
  const quantity = product.querySelector(".quantity input");
  const subtotal = product.querySelector(".subtotal span");

  const productPrice = Number(price.textContent);
  const productQuanity = Number(quantity.value);

  const subtotalCalc = productPrice * productQuanity;

  subtotal.textContent = subtotalCalc.toFixed(2);

  return subtotalCalc;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector(".product");
  // updateSubtotal(singleProduct);
  // end of test

  let grandTotal = 0;

  // ITERATION 2
  //... your code goes here
  const allProducts = document.querySelectorAll(".product");

  for (product of allProducts) {
    let currentSubtotal = updateSubtotal(product);

    grandTotal += currentSubtotal;
  }
  // updateSubtotal(singleProduct);
  // ITERATION 3
  //... your code goes here

  const total = document.querySelector("#total-value span");
  total.textContent = grandTotal.toFixed(2);
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log("The target in remove is:", target);
  //... your code goes here
  const productToRemove = target.closest(".product");
  const parentOfProduct = target.closest(".product").parentNode;

  parentOfProduct.removeChild(productToRemove);
}

// ITERATION 5

function createProduct() {
  // debugger;
  //... your code goes here
  const productList = document.querySelector("tbody");
  const newProductName = document.querySelector(
    ".create-product input[type='text']"
  );
  const newProductPrice = document.querySelector(
    ".create-product input[type='number']"
  );

  const finalProduct = assembleProduct(
    newProductName.value,
    newProductPrice.value
  );

  productList.append(finalProduct);

  resetFields(newProductName, newProductPrice);
}

function assembleProduct(name, price) {
  const tr = document.createElement("tr");
  tr.classList.add("product");

  for (let i = 0; i < 5; i++) {
    const td = document.createElement("td");
    const span = document.createElement("span");

    switch (i) {
      case 0:
        td.classList.add("name");
        span.textContent = name;
        td.append(span);
        break;

      case 1:
        td.classList.add("price");
        td.textContent = "$";
        span.textContent = price + ".00";
        td.append(span);
        break;

      case 2:
        td.classList.add("quantity");
        const input = document.createElement("input");
        input.setAttribute("type", "number");
        input.setAttribute("value", "0");
        input.setAttribute("min", "0");
        input.setAttribute("placeholder", "Quantity");
        td.append(input);
        break;

      case 3:
        td.classList.add("subtotal");
        td.textContent = "$";
        span.textContent = "0";
        td.append(span);
        break;

      case 4:
        td.classList.add("action");
        const button = document.createElement("button");
        button.className = "btn btn-remove";
        button.textContent = "Remove";
        button.addEventListener("click", removeProduct);
        td.append(button);
        break;
    }

    tr.append(td);
  }

  return tr;
}

function resetFields(name, price) {
  name.value = "";
  price.value = 0;
}

window.addEventListener("load", () => {
  const calculatePricesBtn = document.getElementById("calculate");

  calculatePricesBtn.addEventListener("click", calculateAll);
  //... your code goes here
  const removeProductBtns = document.querySelectorAll(".btn-remove");

  for (removeBtn of removeProductBtns) {
    removeBtn.addEventListener("click", removeProduct);
  }

  const createNewProduct = document.getElementById("create");

  createNewProduct.addEventListener("click", createProduct);
});
