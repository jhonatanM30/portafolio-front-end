document.addEventListener('DOMContentLoaded', function() {
  const infoIcons = document.querySelectorAll('.info-icon');

  infoIcons.forEach(function(icon) {
    icon.addEventListener('click', function() {
      const popup = this.nextElementSibling;
      popup.style.display = popup.style.display === 'block' ? 'none' : 'block';
    });
  });
});



