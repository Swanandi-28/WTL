function openModal(img) {
  document.getElementById("modalImg").src = img.src;
  document.getElementById("modal").classList.add("open");
}

function closeModal() {
  document.getElementById("modal").classList.remove("open");
}