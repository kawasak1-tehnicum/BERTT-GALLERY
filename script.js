document.addEventListener("DOMContentLoaded", () => {
  const gallery = document.getElementById("gallery");

  const images = [
    "1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg",
    "6.jpg", "7.jpg", "8.jpg", "9.jpg", "10.jpg",
    "11.jpg", "12.jpg", "13.jpg", "14.jpg", "15.jpg",
    "16.jpg", "17.jpg", "18.jpg", "19.jpg", "20.jpg",
    "21.jpg", "22.jpg", "23.jpg", "24.jpg", "25.jpg",
    "26.jpg", "27.jpg", "28.jpg", "29.jpg", "30.jpg", "31.jpg", "32.jpg"
  ];

  images.forEach(filename => {
    const item = document.createElement("div");
    item.className = "gallery-item";

    const img = document.createElement("img");
    img.src = `photos/${filename}`;
    img.alt = filename;

    const link = document.createElement("a");
    link.href = `photos/${filename}`;
    link.download = filename;
    link.textContent = "Скачать";

    item.appendChild(img);
    item.appendChild(link);
    gallery.appendChild(item);
  });
});
