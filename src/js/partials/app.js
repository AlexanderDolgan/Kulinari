window.onload = function() {

//accordion
const accordionHeaders = document.querySelectorAll(".accordion-header");

accordionHeaders.forEach((accordionHeader) => {
  accordionHeader.addEventListener("click", (event) => {
    const accordionItem = event.currentTarget.parentNode;
    const accordionContent = accordionItem.querySelector(".accordion-content");
    const accordionArrow = accordionItem.querySelector(".accordion-arrow");

    if (accordionItem.classList.contains("active")) {
      accordionContent.style.maxHeight = null;
      accordionItem.classList.remove("active");
      accordionArrow.style.transform = null;
    } else {
      // close all other open items
      const activeItems = document.querySelectorAll(".accordion-item.active");
      activeItems.forEach((activeItem) => {
        const activeContent = activeItem.querySelector(".accordion-content");
        const activeArrow = activeItem.querySelector(".accordion-arrow");
        activeContent.style.maxHeight = null;
        activeItem.classList.remove("active");
        activeArrow.style.transform = null;
      });

      accordionContent.style.maxHeight = accordionContent.scrollHeight + "px";
      accordionItem.classList.add("active");
      accordionArrow.style.transform = "rotate(180deg)";
    }
  });
});

};

window.addEventListener('DOMContentLoaded', function() {
  var galleryContent = document.querySelector('#galleryContent');
  var scrollAmount = 10; // Adjust the scroll amount as needed
  var isScrolling = false;

  // Function to handle the scroll event
  function handleScroll(event) {
    if (!isScrolling) {
      isScrolling = true;

      var delta = event.deltaY || event.detail || -event.wheelDelta;

      if (delta > 0) {
        // Scrolling down
        adjustScrollPosition(scrollAmount);
      } else {
        // Scrolling up
        adjustScrollPosition(-scrollAmount);
      }

      setTimeout(function() {
        isScrolling = false;
      }, 10); // Adjust the timeout duration as needed
    }
  }

  // Event listener for wheel event
  window.addEventListener('wheel', handleScroll);

  // Function to set initial overflow-x value based on gallery visibility
  function setInitialOverflow() {
    var galleryVisible = isGalleryVisible();
    galleryContent.style.overflowX = galleryVisible ? 'scroll' : 'hidden';
  }

  // Function to check if the gallery is visible on the screen
  function isGalleryVisible() {
    var rect = galleryContent.getBoundingClientRect();
    return (
      rect.left >= 0 &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  // Function to adjust the scroll position
  function adjustScrollPosition(scrollAmount) {
    galleryContent.scrollLeft += scrollAmount;
  }

  // Set initial overflow-x value
  setInitialOverflow();

  // Event listener for resize event
  window.addEventListener('resize', setInitialOverflow);
});

