document.addEventListener("DOMContentLoaded", function() {
    // Select the .page-title element
    var pageTitle = document.querySelector('.page-title');

    // Add scroll event listener to the window
    window.addEventListener('scroll', function() {
      // Check if the vertical scroll position is greater than or equal to 100px
      if (window.scrollY >= 100) {
        // If it is, add the 'scrolled' class to the .page-title element
        pageTitle.classList.add('scrolled');
      } else {
        // If not, remove the 'scrolled' class from the .page-title element
        pageTitle.classList.remove('scrolled');
      }
    });
  });