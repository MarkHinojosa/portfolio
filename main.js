$(document).ready(function() {
  const windowHeight = $(window).height();
  const thirdWindowHeight = windowHeight / 3;
  console.log(thirdWindowHeight);

  const aboutTrigger = $(".about").position().top;
  console.log(aboutTrigger, "about trigger");
  $(document).on("scroll", () => {
    const scrollH = $(document).scrollTop();
    // console.log(scrollH, "scrollh");
    if (scrollH > thirdWindowHeight) {
      $(".about").css("opacity", "1");
      $(".about__header__underline").css("opacity", "1");
      $(".about__header__underline").attr("data-aos", "slide-right");
    } else {
      $(".about").css("opacity", "0");
    }
  });

  AOS.init({
    duration: 1200
  });
});
