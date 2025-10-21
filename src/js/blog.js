const blogPosts = [
  {
    id: 1,
    title: "POTTERY SECRETS",
    image: "/src/img/form/tea.jpg",
    description: "Discover the timeless art of pottery and unlock the secrets hidden in every curve and glaze. From mastering the perfect wheel technique to understanding how clay transforms in the kiln, each step reveals a blend of tradition and creativity. The true magic lies in the details—subtle textures, natural imperfections, and the unique touch of the artisan's hand, turning simple earth into lasting beauty."
  }
];

const blogPostToHTML = (post) => `
  <article class="blog__item">
    <div class="blog__image">
      <img src="${post.image}" alt="${post.title}" loading="lazy">
    </div>
    <div class="blog__content">
      <h2 class="blog__post-title">${post.title}</h2>
      <button class="blog__read-btn">READ</button>
    </div>
    <div class="blog__description">
      <p>${post.description}</p>
    </div>
  </article>
`;

const renderBlogPosts = () => {
  const grid = document.querySelector(".blog__grid");
  if (!grid) return;

  grid.innerHTML = blogPosts.map(blogPostToHTML).join("");
};

document.addEventListener("DOMContentLoaded", () => {
  renderBlogPosts();
});
