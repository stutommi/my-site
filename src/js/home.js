$('body').scrollspy({ target: '#navbar-example' })


// Hide collapse on click
$('.navbar-nav>a, .nav>a').on('click', function () {
  $('.navbar-collapse').removeClass('show')
});

(function (document) {
  var button = document.getElementById('home-button');
  var arrow = document.getElementById('home-arrow');

  button.addEventListener('mouseover', function () {
    console.log('hi');
    arrow.className = 'home-arrow-down align-middle material-icons';
  });
  button.addEventListener('mouseout', function () {
    console.log('hei');

    arrow.className = 'home-arrow-right align-middle material-icons';
  })
})(document);
