$(document).ready(function() {
  let about = $("#blah").text();
  $("#blah").text("not about");
  console.log(about);
  AOS.init({
    duration: 1200
  });
});
