document.getElementById("adminForm").addEventListener("submit", function(e) {
  e.preventDefault();
  const title = this.elements[0].value;
  const url = this.elements[1].value;
  const desc = this.elements[2].value;

  const li = document.createElement("li");
  li.innerHTML = \`\${title} <button>Update</button> <button>Delete</button>\`;
  document.getElementById("artItems").appendChild(li);

  this.reset();
});
