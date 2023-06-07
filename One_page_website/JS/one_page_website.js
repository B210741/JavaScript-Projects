document.addEventListener("DOMContentLoaded", function() {
    const imageContainers = document.querySelectorAll(".image-container");
    const lightbox = document.querySelector(".lightbox");
    const lightboxImage = lightbox.querySelector("img");

    imageContainers.forEach(function(container) {
      const image = container.querySelector("img");
      image.addEventListener("click", function() {
        const imageSrc = this.getAttribute("src");
        lightboxImage.setAttribute("src", imageSrc);
        lightbox.style.display = "flex";
      });
    });

    lightbox.addEventListener("click", function() {
      lightbox.style.display = "none";
    });
  });

  // JavaScript for smooth scrolling
  document.addEventListener("DOMContentLoaded", function() {
    const links = document.querySelectorAll("#nav a");

    links.forEach(function(link) {
      link.addEventListener("click", function(event) {
        event.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        window.scrollTo({
          top: target.offsetTop,
          behavior: "smooth"
        });
      });
    });
  });