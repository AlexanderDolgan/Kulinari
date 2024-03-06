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
      }, 20); // Adjust the timeout duration as needed
    }
  }

  // Function to set initial overflow-x value based on gallery visibility
  function setInitialOverflow() {
    var galleryVisible = isGalleryVisible();
    galleryContent.style.overflowX = galleryVisible ? 'scroll' : 'hidden';

    if (galleryVisible) {
      // Start scrolling when gallery becomes visible
      startScrolling();
    }
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

  // Function to start scrolling the gallery
  function startScrolling() {
    window.addEventListener('wheel', handleScroll);
  }

  // Set initial overflow-x value
  setInitialOverflow();

  // Event listener for resize event
  window.addEventListener('resize', setInitialOverflow);





//popup
const popup = document.querySelector(".popup");

//open popup with several buttons whit class .open-popup
const openPopupButtons = document.querySelectorAll(".open-popup");
const closePopupButton = document.querySelector(".close-popup");
const sendButton = document.querySelector("#send-button");


openPopupButtons.forEach((openPopupButton) => {
	openPopupButton.addEventListener("click", () => {
		popup.classList.add("active");
	});
});

closePopupButton.addEventListener("click", () => {
  popup.classList.remove("active");
});

// Close popup when clicked outside of it
window.addEventListener("click", (event) => {
	if (event.target === popup) {
		popup.classList.remove("active");
	}
});

popup.ontouchstart = function(event) {
  if (event.target === popup) {
    popup.classList.remove("active");
  }
};

document.addEventListener("keydown", function(event) {
  if (event.keyCode === 27) {
    popup.classList.remove("active");
  }
}); 


// popup
const form = document.querySelector("#contact-form");

async function sendFormDataToTelegram() {
  const telegramBotApiUrl = 'https://api.telegram.org/botYOUR_TELEGRAM_BOT_TOKEN/sendMessage';
  const telegramChatId = 'YOUR_TELEGRAM_CHAT_ID';

  const formData = new FormData(form);
  const formObject = Object.fromEntries(formData.entries());
  const messageText = Object.entries(formObject).map(([key, value]) => `${key}: ${value}`).join('\n');

  const response = await fetch(telegramBotApiUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      chat_id: telegramChatId,
      text: messageText
    })
  });

  if (response.ok) {
    alert('Ваша заявка была успешно отправлена!');
  } else {
    alert('Ошибка отправки заявки. Пожалуйста, попробуйте еще раз позже.');
  }
}

form.addEventListener('submit', async (event) => {
  event.preventDefault();
  await sendFormDataToTelegram();
  form.reset();
});

const requiredInputs = Array.from(form.querySelectorAll('input[required], textarea[required]'));

function checkFormValidity() {
  const isFormValid = requiredInputs.every(input => input.value.trim() !== '');
  sendButton.disabled = !isFormValid;
}

requiredInputs.forEach(input => {
  input.addEventListener('input', checkFormValidity);
});

checkFormValidity();

});

document.addEventListener('DOMContentLoaded', function() {
  var humBtn = document.querySelector('.hum-btn');
  var topSiteNav = document.querySelector('.top-site-nav');
  var body = document.querySelector('body');
  var isMenuOpen = false;

  humBtn.addEventListener('click', function() {
    topSiteNav.classList.toggle('site-nav-list-active');
    humBtn.classList.toggle('active-hum-btn');
    isMenuOpen = !isMenuOpen;

    if (isMenuOpen) {
      body.classList.add('no-scroll');
      body.style.overflow = 'hidden';
      body.style.position = 'fixed';
      console.log('Navigation menu opened');
    } else {
      body.classList.remove('no-scroll');
      body.style.overflow = '';
      body.style.position = '';
      console.log('Navigation menu closed');
    }
  });

  // Add event listener to close menu when a link is clicked
  var navLinks = document.querySelectorAll('.top-site-nav a');
  navLinks.forEach(function(link) {
    link.addEventListener('click', function() {
      if (isMenuOpen) {
        topSiteNav.classList.remove('site-nav-list-active');
        humBtn.classList.remove('active-hum-btn');
        body.classList.remove('no-scroll');
        body.style.overflow = '';
        body.style.position = '';
        isMenuOpen = false;
        console.log('Navigation menu closed after link click');
      }
    });
  });
});


//перевести чипс в меню доставки на 0 позицию
const chipContainer = document.querySelector(".main-menu-list .wc-block-product-categories-list");
const activeElement = chipContainer.querySelector(".is-active");

if (chipContainer && activeElement) {
  const currentOffsetLeft = activeElement.offsetLeft;

  const newOffsetLeft = currentOffsetLeft;

  chipContainer.scrollLeft = newOffsetLeft;

  console.log("New OffsetLeft from container:", newOffsetLeft);
} else {
  console.log("Container or active element not found.");
};


document.addEventListener('DOMContentLoaded', function() {
  var menuHumBtn = document.querySelector('.hum-btn-delivery');
  var menuTopSiteNav = document.querySelector('.woocommerce-products-header .category-nav:nth-child(3)');
  var body = document.querySelector('body');
  var isMenuOpen = false;

  menuHumBtn.addEventListener('click', function() {
    menuTopSiteNav.classList.toggle('menu-site-nav-list-active');
    menuHumBtn.classList.toggle('active-hum-btn');
    isMenuOpen = !isMenuOpen;

    if (isMenuOpen) {
      body.classList.add('no-scroll');
      body.style.overflow = 'hidden';
      body.style.position = 'fixed';
      console.log('Navigation menu opened');
    } else {
      body.classList.remove('no-scroll');
      body.style.overflow = '';
      body.style.position = '';
      console.log('Navigation menu closed');
    }
  });

  // Add event listener to close menu when a link is clicked
  var navLinks = document.querySelectorAll('.top-site-nav a');
  navLinks.forEach(function(link) {
    link.addEventListener('click', function() {
      if (isMenuOpen) {
        menuTopSiteNav.classList.remove('site-nav-list-active');
        humBtn.classList.remove('active-hum-btn');
        body.classList.remove('no-scroll');
        body.style.overflow = '';
        body.style.position = '';
        isMenuOpen = false;
        console.log('Navigation menu closed after link click');
      }
    });
  });
});