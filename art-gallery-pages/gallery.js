// Sample data - you can replace it with API later
const artworks = [
  {
    title: "Nature Bliss",
    category: "Landscape",
    image: "https://media.istockphoto.com/id/1440679859/photo/man-meditating-near-river-at-sunset-closeup-space-for-text.jpg?s=612x612&w=0&k=20&c=Ouoo-JdNCe4lnN5nFFynYwA8tOaU_49qfBX1Jl5j7VA=",
  },
  {
    title: "Urban Chaos",
    category: "City",
    image: "https://imgs.search.brave.com/ERrRrZ9e-mbxbvarrwzVo7XGvQV7S_Bmv1gGwzFjQKE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuc3RvY2tjYWtl/LmNvbS9wdWJsaWMv/MS83L2UvMTdlMjVh/OWUtMjAzMi00OGU5/LWFiYzEtOTc2OTEy/YmZhNzA5X2xhcmdl/L3VyYmFuLWNoYW9z/LXNjZW5lLXN0b2Nr/Y2FrZS5qcGc",
  },
  {
    title: "Abstract Flow",
    category: "Abstract",
    image: "https://imgs.search.brave.com/BvR6lrkK8wDXljqynklA1d2_4W-iMHmh-b-abnAsAkg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTM1/NjU2NTI3NC9waG90/by9tb2Rlcm4tYWJz/dHJhY3Qtd2F2eS1i/YWNrZ3JvdW5kLmpw/Zz9zPTYxMng2MTIm/dz0wJms9MjAmYz1O/bzY3SUFmMEIxUDZU/SHhQaVUyekk5elBW/cDZKNndFdWZfOHpF/czNpSEt3PQ",
  },
  {
    title: "Minimal Beauty",
    category: "Minimalism",
    image: "https://imgs.search.brave.com/k9Nod1e8YMGlMhLZas1dBeWhda6G8-MXmKRQl4UFUn0/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pLmV0/c3lzdGF0aWMuY29t/LzE3NTEyOTYwL3Iv/aWwvMGUzYTFkLzI3/Njg0OTQ0NzgvaWxf/NjAweDYwMC4yNzY4/NDk0NDc4X3RsOHEu/anBn",
  },
  {
    title: "Retro Vibes",
    category: "Vintage",
    image: "https://imgs.search.brave.com/UHvXdLBVPTl3U9jL3oY3Y7eDJFpthCPs5kcSJD8T6fs/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/dmVjdG9yc3RvY2su/Y29tL2kvcHJldmll/dy0xeC81OS82NC9n/cm9vdnktcmV0cm8t/dmliZXMtcHN5Y2hl/ZGVsaWMtc3R5bGUt/NzBzLWhpcHN0ZXIt/dmVjdG9yLTQwMjE1/OTY0LmpwZw",
  }
];

// Render cards dynamically
function renderArtworks(data) {
  const grid = document.getElementById("artworkGrid");
  grid.innerHTML = "";

  if (data.length === 0) {
    grid.innerHTML = "<p style='grid-column: 1 / -1; text-align: center;'>No artworks found.</p>";
    return;
  }

  data.forEach(art => {
    const card = document.createElement("div");
    card.className = "art-card";
    card.onclick = () => window.location.href = "details.html";
    card.innerHTML = `
      <img src="${art.image}" alt="${art.title}">
      <div class="card-body">
        <div class="title">${art.title}</div>
        <div class="category">${art.category}</div>
      </div>
    `;
    grid.appendChild(card);
  });
}

// Filter logic
document.getElementById("searchInput").addEventListener("input", function () {
  const search = this.value.toLowerCase();
  const filtered = artworks.filter(art =>
    art.title.toLowerCase().includes(search) ||
    art.category.toLowerCase().includes(search)
  );
  renderArtworks(filtered);
});

// Initial render
renderArtworks(artworks);
