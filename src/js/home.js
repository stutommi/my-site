

// if (window.innerWidth > 700) {
//   $(document).ready(function () {
//     $("#hs1").delay(1000).slideDown(800)
//     $("#hs2").delay(4000).slideDown(800)
//     $("#hs3").delay(7000).slideDown(800)
//     $("#hs4").delay(9000).slideDown(800)
//     $("#hs5").delay(11000).fadeIn(200)
//   });
// } else if (window.innerHeight <= 700) {
//   $("#hs1").removeClass('hidden');
//   $("#hs2").removeClass('hidden');
//   $("#hs3").removeClass('hidden');
//   $("#hs4").removeClass('hidden');
//   $("#hs5").removeClass('hidden');
//   $('canvas').css({'animation': 'initial', 'opacity': '1'});
// }




(function (document) {
  var button = document.getElementById('home-button');
  var arrow = document.getElementById('home-arrow');
  var open = false;

  button.addEventListener('click', function () {
    console.log('hei');

    if (open) {
      arrow.className = 'home-arrow-right align-middle material-icons';
    } else {
      arrow.className = 'home-arrow-down align-middle material-icons';
    }

    open = !open;
  });
})(document);
