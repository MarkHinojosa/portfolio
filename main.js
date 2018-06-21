$(document).ready(function() {
  const windowHeight = $(window).height();
  const thirdWindowHeight = windowHeight / 3;
  // console.log(thirdWindowHeight);

  const aboutAnchor = $("a[name = aboutAnchor]").position().top;
  const portfolioAnchor = $("a[name = portfolioAnchor]").position().top;

  $(document).on("scroll", () => {
    let inView = "";
    const aboutAnchor = $("a[name = aboutAnchor]").position().top;
    const portfolioAnchor = $("a[name = portfolioAnchor]").position().top;
    const scrollHeight = $(document).scrollTop();
    if (
      scrollHeight >= aboutAnchor - 100 &&
      scrollHeight <= portfolioAnchor - 100
    ) {
      inView = "about";
    } else if (scrollHeight >= portfolioAnchor - 100) {
      console.log("portfolio");
      inView = "portfolio";
    } else {
      $("#portfolioButton").css("color", "white");
    }
    if (inView === "about") {
      $("#portfolioButton").css("color", "white");
      $("#aboutButton").css("color", "gold");
    }
    if (inView === "portfolio") {
      $("#aboutButton").css("color", "white");
      $("#portfolioButton").css("color", "gold");
    }
  });

  $("#test").mouseover(function() {
    console.log("line 36");
    $("#test").css("background-color", "white");
    $(".projects__container__item__h__text").attr("data-aos", "fade-in");
  });
});
