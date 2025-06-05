document.addEventListener("DOMContentLoaded", () => {
  const addBtn = document.querySelector("#add-artwork button");
  const updateBtn = document.querySelector("#update-artwork button");
  const deleteBtn = document.querySelector("#delete-artwork button");
  const logoutBtn = document.querySelector(".logout-btn");
  const notificationIcon = document.querySelector(".notification");

  const totalArtworks = document.querySelector("#total-artworks p");
  const totalLikes = document.querySelector("#total-likes p");
  const totalViews = document.querySelector("#total-views p");

  let artworks = 56;
  let likes = 780;
  let views = 15200;

  addBtn.addEventListener("click", () => {
    artworks += 1;
    totalArtworks.textContent = artworks;
    alert("Artwork added successfully!");
  });

  updateBtn.addEventListener("click", () => {
    alert("Artwork details updated!");
  });

  deleteBtn.addEventListener("click", () => {
    if (artworks > 0) {
      artworks -= 1;
      totalArtworks.textContent = artworks;
      alert("Artwork deleted successfully.");
    } else {
      alert("No artworks left to delete.");
    }
  });

  logoutBtn.addEventListener("click", () => {
    const confirmLogout = confirm("Are you sure you want to logout?");
    if (confirmLogout) {
      alert("You have been logged out.");
      window.location.reload();
    }
  });

  notificationIcon.addEventListener("click", () => {
    alert("You have 3 new notifications.");
  });

  setInterval(() => {
    views += Math.floor(Math.random() * 10 + 1);
    totalViews.textContent = \`\${(views / 1000).toFixed(1)}K\`;
  }, 5000);
});
