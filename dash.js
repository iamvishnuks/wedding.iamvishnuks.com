$(function () {
    $(document).scroll(function () {
        console.log("asda");
      var $nav = $(".navbartop");
      $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
    });
  });