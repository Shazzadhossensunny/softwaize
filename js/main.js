// Get elements for menu and sidebar
const menuIcon = document.getElementById("menu-icon");
const sidebar = document.getElementById("sidebar");
const closeBtn = document.getElementById("close-btn");

// Show sidebar when hamburger icon is clicked
menuIcon.addEventListener("click", () => {
  sidebar.style.left = "0";
});

// Hide sidebar when close button is clicked
closeBtn.addEventListener("click", () => {
  sidebar.style.left = "-100%";
});

// Function to create and insert the image container
function createImageContainer() {
  const imageSection = document.getElementById("image-section");

  // Create the image container element
  const imageContainer = document.createElement("div");
  imageContainer.className = "image-container";

  // Image data
  const images = [
    {
      src: "https://storage.googleapis.com/abtest-img-bucket/jmp-9.2-sub-category-images/best-sellers.png",
      text: "Best Sellers",
      link: "/best-seller.html",
    },
    {
      src: "https://storage.googleapis.com/abtest-img-bucket/jmp-9.2-sub-category-images/new.png",
      text: "New",
      link: "/new.html",
    },
    {
      src: "https://storage.googleapis.com/abtest-img-bucket/jmp-9.2-sub-category-images/necklaces.png",
      text: "Necklaces",
      link: "/necklaces.html",
    },
    {
      src: "https://storage.googleapis.com/abtest-img-bucket/jmp-9.2-sub-category-images/rings.png",
      text: "Rings",
      link: "/rings.html",
    },
    {
      src: "https://storage.googleapis.com/abtest-img-bucket/jmp-9.2-sub-category-images/bracelets.png",
      text: "Bracelets",
      link: "/bracelets.html",
    },
    {
      src: "https://storage.googleapis.com/abtest-img-bucket/jmp-9.2-sub-category-images/personalized.png",
      text: "Personalized",
      link: "/personalized.html",
    },
    {
      src: "https://storage.googleapis.com/abtest-img-bucket/jmp-9.2-sub-category-images/fine.png",
      text: "Fine",
      link: "/fine.html",
    },
    {
      src: "https://storage.googleapis.com/abtest-img-bucket/jmp-9.2-sub-category-images/clearance.png",
      text: "Clearance",
      link: "/clearance.html",
    },
    {
      src: "https://storage.googleapis.com/abtest-img-bucket/jmp-9.2-sub-category-images/jm-fine-sample.png",
      text: "JM Fine",
      link: "/jm-fine.html",
    },
  ];

  // Create image boxes
  images.forEach((image) => {
    const imgBox = document.createElement("div");
    imgBox.className = "img-box";

    const imgLink = document.createElement("a");
    imgLink.href = image.link;
    imgLink.className = "img-link";

    const img = document.createElement("img");
    img.src = image.src;
    img.alt = image.text;

    const textLink = document.createElement("a");
    textLink.href = image.link;
    textLink.className = "text-link";

    const p = document.createElement("p");
    p.textContent = image.text;

    imgLink.appendChild(img);
    imgBox.appendChild(imgLink);
    textLink.appendChild(p);
    imgBox.appendChild(textLink);

    imageContainer.appendChild(imgBox);
  });
  imageSection.appendChild(imageContainer);
}
createImageContainer();
