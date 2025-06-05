// Wait until the page loads
document.addEventListener("DOMContentLoaded", () => {
    // Buttons
    const addBtn = document.querySelector("#add-artwork button");
    const updateBtn = document.querySelector("#update-artwork button");
    const deleteBtn = document.querySelector("#delete-artwork button");
    const logoutBtn = document.querySelector(".logout-btn");
    const notificationIcon = document.querySelector(".notification");
  
    // Stat elements
    const totalArtworks = document.querySelector("#total-artworks p");
    const totalLikes = document.querySelector("#total-likes p");
    const totalViews = document.querySelector("#total-views p");
  
    // Dummy counters
    let artworks = 56;
    let likes = 780;
    let views = 15200;
  
    // Event listeners
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
        window.location.reload(); // Or redirect to login page
      }
    });
  
    notificationIcon.addEventListener("click", () => {
      alert("You have 3 new notifications.");
    });
  
    // Simulate live views increase (every 5 seconds)
    setInterval(() => {
      views += Math.floor(Math.random() * 10 + 1); // random 1-10 views
      totalViews.textContent = `${(views / 1000).toFixed(1)}K`;
    }, 5000);
  });
  