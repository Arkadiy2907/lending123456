document.addEventListener('DOMContentLoaded', () => {
  const links = document.querySelectorAll('a[href^="#"]');

  links.forEach(link => {
    link.addEventListener('click', function (e) {
      const href = this.getAttribute('href');

      if (href && href.length > 1 && href.startsWith('#')) {
        const targetElement = document.querySelector(href);

        if (targetElement) {
          e.preventDefault();
          targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }
    });
  });

  const menuToggle = document.getElementById('menu-toggle');
  const menuLinks = document.querySelectorAll('.menu-content a.menu-content-link');

  menuLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (menuToggle.checked) {
        menuToggle.checked = false;
      }
    });
  });
 
  const mobilePrivacyLabel = document.querySelector('.menu-content label[for="privacy-toggle"]');
  const privacySection = document.getElementById('privacy-policy-section');
  const privacyToggle = document.getElementById('privacy-toggle');

  if (mobilePrivacyLabel && privacySection && privacyToggle && menuToggle) {
    mobilePrivacyLabel.addEventListener('click', (e) => {
      if (!privacyToggle.checked) {
        privacySection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
      menuToggle.checked = false;
    });
  }

  const desktopPrivacyButton = document.getElementById('desktop-privacy-button');

  if (desktopPrivacyButton && privacySection && privacyToggle) {
    desktopPrivacyButton.addEventListener('click', (e) => {
      if (!privacyToggle.checked) {
        privacySection.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  }
});