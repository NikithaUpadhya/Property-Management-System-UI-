document.addEventListener("DOMContentLoaded", function() {
  const toggleMore = document.getElementById("toggle-more");
  const moreContent = document.getElementById("more-content");

  toggleMore.addEventListener("click", function(e) {
      e.preventDefault();
      if (moreContent.classList.contains("hidden")) {
          moreContent.classList.remove("hidden");
          toggleMore.textContent = "Know less";
      } else {
          moreContent.classList.add("hidden");
          toggleMore.textContent = "Know more";
      }
  });

  const tabs = document.querySelectorAll(".tab");
  const tabContents = document.querySelectorAll(".tab-content");

  tabs.forEach(tab => {
      tab.addEventListener("click", function() {
          tabs.forEach(t => t.classList.remove("active"));
          tab.classList.add("active");

          const target = tab.getAttribute("data-tab");

          tabContents.forEach(tc => {
              tc.classList.remove("active");
              if (tc.getAttribute("id") === target) {
                  tc.classList.add("active");
              }
          });
      });
  });

  // Add the intersection observer for the find-joy and how-it-works sections
  const findJoySection = document.querySelector('.find-joy');
  const howItWorksSection = document.querySelector('.how-it-works');

  const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              entry.target.classList.add('visible');
              observer.unobserve(entry.target); // Stop observing after the section is visible
          }
      });
  }, {
      threshold: 0.5 // Adjust this value as needed
  });

  observer.observe(findJoySection);
  observer.observe(howItWorksSection);
});

