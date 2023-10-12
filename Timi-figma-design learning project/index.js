// Get references to the arrow icon and the dropdown by their IDs
const arrowIcon = document.getElementById("arrowIcon");
const dropdown = document.getElementById("myDropdown");

// Add a click event listener to the arrow icon
arrowIcon.addEventListener("click", function () {
  // Toggle the dropdown's visibility by adding/removing a CSS class
  if (dropdown.style.display === "block") {
    dropdown.style.display = "none";
  } else {
    dropdown.style.display = "block";
  }
});

// Add a click event listener to close the dropdown when clicking anywhere outside of it
document.addEventListener("click", function (event) {
  if (!arrowIcon.contains(event.target) && !dropdown.contains(event.target)) {
    dropdown.style.display = "none";
  }
});
// Get all the gallery items
const galleryItems = document.querySelectorAll('.gallery-item');

// Loop through each gallery item
galleryItems.forEach(item => {
  item.addEventListener('mouseover', () => {
    // Handle hover effect here (e.g., changing the background color)
    // You can apply CSS styles or add/remove classes for hover effect.
  });

  item.addEventListener('click', () => {
    // Handle click effect here (e.g., display the selected image)
    const selectedImage = document.getElementById('selectedImage');
    const imagePath = item.getAttribute('data-image');
    selectedImage.src = imagePath;

    // Optionally, you can add a pop-up/modal effect to display the selected image.
  });
});
// Get references to your gallery items by their IDs
const livingRoom = document.getElementById("living-room");
const bedroom = document.getElementById("bedroom");
// Add similar references for other sections

// Function to apply the hover effect
function applyHoverEffect(element) {
  element.addEventListener("click", () => {
    element.style.backgroundColor = "yellow";
  });

  element.addEventListener("mouseout", () => {
    element.style.backgroundColor = "";
  });
}

// Apply the hover effect to each gallery item
applyHoverEffect(livingRoom);
applyHoverEffect(bedroom);
// Apply the effect to other sections as needed
// Get references to the button and popup form


