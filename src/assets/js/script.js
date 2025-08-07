


$('.moreless-button').click(function () {
  var $this = $(this);
  var $moreText = $this.prev('.article').find('.moretext'); 

  $moreText.slideToggle();

  if ($this.html().includes('fa-plus')) {
    $this.html('<i class="fa-solid fa-minus"></i>');
  } else {
    $this.html('<i class="fa-solid fa-plus"></i>');
  }
});




var swiper = new Swiper(".conclusion .mySwiper", {
  pagination: {
    el: ".conclusion .swiper-pagination",
    clickable: true,
  },
});
