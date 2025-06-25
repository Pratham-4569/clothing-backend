const backendUrl = "https://clothing-backend-q000.onrender.com";

async function loadProducts() {
  try {
    const response = await fetch(`${backendUrl}/api/products`);
    const products = await response.json();

    const productList = document.getElementById("product-list");
    products.forEach(product => {
      const div = document.createElement("div");
      div.className = "product";
      div.innerHTML = `
        <h2>${product.name}</h2>
        <p>Price: ₹${product.price}</p>
        <button onclick="addToCart('${product.name}', ${product.price})">Add to Cart</button>
      `;
      productList.appendChild(div);
    });
  } catch (err) {
    console.error("Error loading products:", err);
  }
}

function addToCart(name, price) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.push({ name, price });
  localStorage.setItem("cart", JSON.stringify(cart));
  alert(`${name} added to cart!`);
}

window.onload = loadProducts;
