document.addEventListener('DOMContentLoaded', function () {
  const privacyToggle = document.getElementById('privacy-toggle');
  const privacySection = document.getElementById('privacy-policy-section');

  const privacyNavLinks = document.querySelectorAll('.nav .privacy-link label, .menu-content label[for="privacy-toggle"]');

  privacyNavLinks.forEach(link => {
    link.addEventListener('click', function (event) {     
      event.preventDefault();
      
      privacyToggle.checked = true;

      const menuToggle = document.getElementById('menu-toggle');
      if (menuToggle && menuToggle.checked) {
        menuToggle.checked = false;
      }

      setTimeout(() => {
        privacySection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100);
    });
  });
});