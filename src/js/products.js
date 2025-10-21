const API_BASE = "https://ceramic-api.onrender.com";
const CATEGORY_LIMITS = { tea: 5, kitchen: 3, plants: 2 };

const productToHTML = (product) => `
  <article class="catalog__item">
    <img src="${new URL(product.image, API_BASE)}" alt="${product.title}" loading="lazy">
    <div class="catalog__info">
      <h3>${product.title}</h3>
      <p>${product.price} €</p>
    </div>
  </article>`;

const fetchProducts = async () => {
  const response = await fetch(`${API_BASE}/api/products`);
  if (!response.ok) throw new Error(`Failed to fetch: ${response.status}`);
  return response.json();
};

const renderProducts = async (category = "tea") => {
  const grid = document.querySelector(".catalog__grid");
  if (!grid) return;

  grid.innerHTML = '<div class="loading">Loading…</div>';

  try {
    const data = await fetchProducts();
    const limit = CATEGORY_LIMITS[category] || 5;
    const products = data.slice(0, limit);
    grid.innerHTML = products.map(productToHTML).join("");
  } catch (error) {
    console.error(error);
    grid.innerHTML = '<div class="error">Failed to load</div>';
  }
};

const setupTabs = () => {
  const buttons = document.querySelectorAll(".catalog__filter");
  if (!buttons.length) return;

  buttons.forEach(button => {
    button.addEventListener("click", async () => {
      buttons.forEach(btn => btn.classList.remove("active"));
      button.classList.add("active");
      await renderProducts(button.dataset.category);
    });
  });
};

document.addEventListener("DOMContentLoaded", () => {
  setupTabs();
  renderProducts("tea");
});
