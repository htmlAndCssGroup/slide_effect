'use strict';

/* 추가된 부분 */
$('#cover-img').hover(function () {
  $('#cover-img').toggleClass('fadeAway');

  $('.slide-1').toggleClass('down');
  $('.slide-3').toggleClass('down');
  $('.slide-5').toggleClass('down');
  $('.slide-7').toggleClass('down');

  $('.slide-2').toggleClass('up');
  $('.slide-4').toggleClass('up');
  $('.slide-6').toggleClass('up');
  $('.slide-8').toggleClass('up');
});