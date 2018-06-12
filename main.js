$(document).ready(function() {
  const windowHeight = $(window).height();
  const halfWindowHeight = windowHeight / 2;
  console.log(halfWindowHeight);
  const aboutTrigger = $(".about").position().top;
  $(document).on("scroll", () => {
    const scrollH = $(document).scrollTop();
    if (scrollH > halfWindowHeight) {
      $(".about").css("opacity", "1");
    } else {
      $(".about").css("opacity", "0");
    }
  });

  AOS.init({
    duration: 1200
  });
});
