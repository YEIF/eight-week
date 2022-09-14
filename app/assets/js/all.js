$(function () {
  console.log('Hello Bootstrap5');
  $(".table-triangle").click(function (e) {
    $(this).toggleClass("table-turn");
  });
  
  $('.row-masonry').imagesLoaded().progress( function() {
    $('.row-masonry').masonry({
        // set itemSelector so .grid-sizer is not used in layout
        itemSelector: '.col-6',
        // use element for option
        columnWidth: '',
        percentPosition: true,
        horizontalOrder: true,
      }); // 渲染整體畫面
  });
  const swiper = new Swiper('.myswiper', {
    loop: true,
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
      pauseOnMouseEnter: true
    },
    slideToClickedSlide:true,
    centeredSlides:true,
    slidesPerView: 1,
    spaceBetween: 24,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    effect: 'slide',
    breakpoints: {
      768: {
        slidesPerView: 2.2,
      },
    },
    grabCursor: true,
  });
});