document.addEventListener("DOMContentLoaded", () => {
  const images = document.querySelectorAll(".item img");
  images.forEach((img) => {
    img.style.cursor = "pointer";
    img.addEventListener("click", () => openPreview(img.src));
  });
});
function openPreview(src) {
  const overlay = document.createElement("div");
  overlay.classList.add("overlay");
  const preview = document.createElement("div");
  preview.classList.add("preview");
  const image = document.createElement("img");
  image.src = src;
  const close = document.createElement("span");
  close.innerHTML = "&times;";
  close.classList.add("close");
  close.onclick = () => document.body.removeChild(overlay);
  preview.appendChild(close);
  preview.appendChild(image);
  overlay.appendChild(preview);
  document.body.appendChild(overlay);
}
