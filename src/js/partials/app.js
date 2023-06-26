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
