$(document).ready(function() {
    $('.dropdown').hover(function() {
      $(this).addClass('show');
      $(this).find('.dropdown-menu').addClass('show');
    }, function() {
      $(this).removeClass('show');
      $(this).find('.dropdown-menu').removeClass('show');
    });
});

$('.carousel').carousel({
  interval: 2000
});

window.jQuery || document.write('<script src="../../assets/js/vendor/jquery-slim.min.js"><\/script>');