$('body').scrollspy({ target: '#navbar-example' })

$(document).ready(function() {
  var bgMusic = $("#bgMusic")[0];
  var btn = $(".playbutton");
  btn.click(function() {
    bgMusic.play();
    btn.toggleClass("paused");
    return false;
  });
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
