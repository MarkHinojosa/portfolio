$(document).ready(function() {
  const windowHeight = $(window).height();
  const thirdWindowHeight = windowHeight / 3;
  // console.log(thirdWindowHeight);

  const aboutAnchor = $("a[name = aboutAnchor]").position().top;
  const portfolioAnchor = $("a[name = portfolioAnchor]").position().top;

  $(document).on("scroll", () => {
    const aboutAnchor = $("a[name = aboutAnchor]").position().top;
    const portfolioAnchor = $("a[name = portfolioAnchor]").position().top;
    const scrollHeight = $(document).scrollTop();

    const checkCurrentview = () => {
      if (
        scrollHeight >= aboutAnchor - 100 &&
        scrollHeight <= portfolioAnchor - 100
      ) {
        changeNavSection("about");
      } else if (scrollHeight >= portfolioAnchor - 100) {
        changeNavSection("portfolio");
      }
    };

    const changeNavSection = n => {
      if (n === "about") {
        return (
          $("#aboutButton").css("color", "gold"),
          $("#portfolioButton").css("color", "white")
        );
      }
      if (n === "portfolio") {
        return (
          $("#aboutButton").css("color", "white"),
          $("#portfolioButton").css("color", "gold")
        );
      }
    };
    checkCurrentview();
  });

  // $("#test").hover(
  //   function() {
  //     console.log("on");
  //     $(".projects__container__item__h__content").css("opacity", "1");
  //     $(".projects__container__item__h__content").attr("data-aos", "fade-in");

  //     // $("#test").css("background-image", "none");
  //   },
  //   function() {
  //     console.log("off");
  //     $(".projects__container__item__h__content").css("opacity", "0");
  //   }
  // );
});
