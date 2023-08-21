document.addEventListener("DOMContentLoaded", function () {
  const carousel = document.getElementById("carousel");
  const images = carousel.querySelectorAll("img");
  let currentIndex = 0;

  function updateCarousel() {
    const offset = -currentIndex * images[currentIndex].width; // Use the width of the current image
    carousel.style.transform = `translateX(${offset}px)`;
  }

  function nextSlide() {
    currentIndex = (currentIndex + 1) % images.length;
    updateCarousel();
  }

  function startCarousel() {
    setInterval(nextSlide, 3000); // Change slide every 3 seconds
  }

  function resizeImages() {
    images.forEach(img => {
      img.style.width = "400px"; // Fixed width for each image
    });
  }

  // Ensure images are loaded before resizing and starting the carousel
  let imagesLoaded = 0;
  images.forEach(img => {
    img.addEventListener("load", function () {
      imagesLoaded++;
      if (imagesLoaded === images.length) {
        resizeImages();
        startCarousel();
      }
    });
  });

  // Resize images when the window is resized
  window.addEventListener("resize", resizeImages);
});
