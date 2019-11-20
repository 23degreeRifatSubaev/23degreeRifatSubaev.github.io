$(function () {
  
  let menuLink = $('.menu-link');
  let menu = $('menu');
  let close = $('.close-btn');
  let navLink = $('li a');

  menuLink.click(function () {
    menu.toggleClass('active-menu');
  });
  close.click(function () {
    menu.toggleClass('active-menu');
  });

  navLink.on('click', function (event) {
    event.preventDefault();
    let target = $(this).attr('href');
    let top = $(target).offset().top;
    $('html,body').animate({ scrollTop: top }, 500)
  });
  let calcCheck = 100;
  let calcMulti = 1;
  let calcHover = 0;
  let calc__total = calcCheck * (calcMulti * 4850);
  $('.calc__s').text(calcCheck);
  $('.calc__price').text(4850);
  $('.calc__total').text(calc__total);
  $('.calc__check').on('click', function () {
    $('.calc__check').removeClass('active');
    $(this).addClass('active');
    console.log(this);
    calcCheck = +$(this).attr('data-sum');
    $('.calc__s').text(calcCheck);
    calc__total = calcCheck * (calcMulti * 4850);
 
    $('.calc__total').text(calc__total);
    
  }); 
  $('.display3__tabs').on('click', function () {
    $('.display3__tabs').removeClass('tabActive');
    $(this).addClass('tabActive');
    calcMulti = +$(this).attr('data-multi');
    if (calcMulti == 1) {
      $('.calc__price').text(4850);
    } else if (calcMulti == 1.5) {
      $('.calc__price').text(7275);
    } else {
      $('.calc__price').text(9700);
    }
    calc__total = calcCheck * (calcMulti * 4850);
    $('.calc__total').text(calc__total);
  });
  
  $('.display3__tabs').hover(function () {
    calcHover = +$(this).attr('data-calcHover');
    if (calcHover == 1) {
      $('.calcHover').removeClass('calcHover__active');
      $('.calcHover_1').addClass('calcHover__active');
    } else if (calcHover == 2) {
        $('.calcHover').removeClass('calcHover__active');
        $('.calcHover_2').addClass('calcHover__active');
    } else if (calcHover == 3) {
          $('.calcHover').removeClass('calcHover__active');
          $('.calcHover_3').addClass('calcHover__active');
        }
  }, function () {
      $('.calcHover').removeClass('calcHover__active');
  });
  $('.display4__tab').on('click', function () {
    $('.display4__tab').removeClass('display4__tab-active');
    $(this).addClass('display4__tab-active');
  });
  $(function () {
    let handle = $("#custom-handle");
    $("#slider").slider({
      // create: function () {
      //   //handle.text($(this).slider("value"));
      // },
      slide: function (event, ui) {
        let margin = 23.8;
        $('.wrapper').css("margin-left", `-${margin * ui.value}px`);
      }
    });
  });
  
});