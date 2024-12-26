document.addEventListener('DOMContentLoaded', function () {
    // Optional: Debug console to check dropdown clicks
    document.querySelectorAll('.dropdown-toggle').forEach(function (dropdown) {
      dropdown.addEventListener('click', function () {
        console.log('Dropdown clicked:', this);
      });
    });
  });