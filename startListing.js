document.addEventListener("DOMContentLoaded", function() {
  // Show all / Show less functionality for bedrooms
  const showAllBtn = document.getElementById("show-all-btn");
  const hiddenBedrooms = document.querySelectorAll(".bedroom.hidden");
  const progressBar = document.getElementById("progress-bar");
  const progressText = document.getElementById("progress-text");
  let progressValue = 0;

  function updateProgress(increment) {
    progressValue += increment;
    progressValue = Math.min(progressValue, 100); // Ensure it doesn't go over 100%
    progressBar.style.width = progressValue + '%';
    progressText.textContent = progressValue + '%';
  }

  if (showAllBtn) {
    showAllBtn.addEventListener("click", function(e) {
      e.preventDefault();
      if (showAllBtn.textContent === "+ show all") {
        hiddenBedrooms.forEach(function(bedroom) {
          bedroom.classList.remove("hidden");
        });
        showAllBtn.textContent = "- show less";
        updateProgress(5); // Example increment
      } else {
        hiddenBedrooms.forEach(function(bedroom) {
          bedroom.classList.add("hidden");
        });
        showAllBtn.textContent = "+ show all";
        updateProgress(-5); // Example decrement
      }
    });
  }

  // Collapsible section functionality for Property Details
  const collapsibleHeader = document.querySelector(".collapsible-header");
  const collapsibleContent = document.querySelector(".collapsible-content");

  if (collapsibleHeader && collapsibleContent) {
    collapsibleHeader.addEventListener("click", function() {
      collapsibleContent.classList.toggle("active");
      collapsibleContent.style.display = collapsibleContent.style.display === "none" || collapsibleContent.style.display === "" ? "block" : "none";
      collapsibleHeader.classList.toggle("active");
    });
  }

  // Image upload functionality
  const imageUploadDiv = document.querySelector(".image-upload");
  const imageInput = document.getElementById("image-input");
  const uploadedImagesDiv = document.getElementById("uploaded-images");

  if (imageUploadDiv && imageInput && uploadedImagesDiv) {
    imageUploadDiv.addEventListener("click", function() {
      imageInput.click();
    });

    imageInput.addEventListener("change", function() {
      const files = Array.from(imageInput.files);
      files.forEach(file => {
        const reader = new FileReader();
        reader.onload = function(e) {
          const wrapper = document.createElement("div");
          wrapper.classList.add("image-wrapper");

          const img = document.createElement("img");
          img.src = e.target.result;
          wrapper.appendChild(img);

          const deleteIcon = document.createElement("button");
          deleteIcon.classList.add("delete-icon");
          deleteIcon.innerHTML = "&times;";
          wrapper.appendChild(deleteIcon);

          deleteIcon.addEventListener("click", function() {
            uploadedImagesDiv.removeChild(wrapper);
            updateProgress(-10); // Decrement progress on image removal
          });

          uploadedImagesDiv.appendChild(wrapper);
          updateProgress(10); // Increment progress on image upload
        }
        reader.readAsDataURL(file);
      });
    });
  }

  // Toggle active state for Sell/Rent buttons
  const sellBtn = document.getElementById('sellBtn');
  const rentBtn = document.getElementById('rentBtn');

  if (sellBtn && rentBtn) {
    sellBtn.addEventListener('click', () => {
      sellBtn.classList.add('active');
      rentBtn.classList.remove('active');
      updateProgress(5); // Example increment
    });

    rentBtn.addEventListener('click', () => {
      rentBtn.classList.add('active');
      sellBtn.classList.remove('active');
      updateProgress(5); // Example increment
    });
  }

  // Toggle active state for property types
  const propertyTypes = document.querySelectorAll('.property-type');

  propertyTypes.forEach(type => {
    type.addEventListener('click', () => {
      propertyTypes.forEach(t => t.classList.remove('selected'));
      type.classList.add('selected');
      updateProgress(5); // Example increment
    });
  });

  // Toggle active state for bedroom buttons
  const bedroomButtons = document.querySelectorAll('.bedroom');

  bedroomButtons.forEach(button => {
    button.addEventListener('click', () => {
      bedroomButtons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');
      updateProgress(5); // Example increment
    });
  });
});

