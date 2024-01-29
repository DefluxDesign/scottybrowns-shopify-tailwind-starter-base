document.addEventListener("DOMContentLoaded", function() {
    // Select the elements with class .page-title or .collection-title
    var pageTitle = document.querySelectorAll('.page-title-banner, .collection-hero__title');

    // Add scroll event listener to the window
    window.addEventListener('scroll', function() {
      // Check if the vertical scroll position is greater than or equal to 150px
      if (window.scrollY >= 120) {
        // Iterate over each selected element and add the 'scrolled' class
        pageTitle.forEach(function(element) {
          element.classList.add('scrolled');
        });
      } else {
        // Iterate over each selected element and remove the 'scrolled' class
        pageTitle.forEach(function(element) {
          element.classList.remove('scrolled');
        });
      }
    });
  });