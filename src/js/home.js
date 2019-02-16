$('body').scrollspy({ target: '#nav' })

$(document).ready(function() {
  var bgMusic = $("#bgMusic")[0];
  var btn = $(".playbutton");
  var isPaused = true;
  btn.click(function() {
    isPaused ? bgMusic.play() : bgMusic.pause();
    isPaused = !isPaused;
    btn.toggleClass("paused");
    return false;
  });
});

// Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 500, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });

// Hide collapse on click
$('.navbar-nav>a, .nav>a').on('click', function () {
  $('.navbar-collapse').removeClass('show')
});

(function (document) {
  var button = document.getElementById('home-button');
  var arrow = document.getElementById('home-arrow');

  button.addEventListener('mouseover', function () {
    arrow.className = 'home-arrow-down align-middle material-icons';
  });
  button.addEventListener('mouseout', function () {

    arrow.className = 'home-arrow-right align-middle material-icons';
  })
})(document);
