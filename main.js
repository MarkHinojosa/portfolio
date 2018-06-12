$(document).ready(function() {
  const windowHeight = $(window).height();
  const aboutTrigger = $(".about").position().top;
  $(document).on("scroll", () => {
    const scrollH = $(document).scrollTop();
    if (aboutTrigger > windowHeight) {
      console.log("triggered");
      $(".about").css("opacity", "1");
    }
  });

  AOS.init({
    duration: 1200
  });
});
