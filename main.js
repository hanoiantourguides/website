$(document).ready(function () {
  const aboutElm = document.getElementById("about");
  const aboutElmLayoutStyle =
    aboutElm.currentStyle || window.getComputedStyle(aboutElm);
  $(".owl-carousel").owlCarousel({
    stagePadding:
      parseInt(aboutElmLayoutStyle.marginLeft.replace("px", "")) +
      parseInt(
        aboutElmLayoutStyle.getPropertyValue("padding-left").replace("px", "")
      ),
    center: true,
    items: 2,
    loop: true,
    margin: 12,
    responsive: {
      0: {
        items: 1,
      },
      640: {
        items: 2,
      },
      1024: {
        items: 3,
      },
    },
  });
});
