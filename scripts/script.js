$('.navTrigger').click(function () {
    $(this).toggleClass('active');
    console.log("Clicked menu");
    $("#mainListDiv").toggleClass("show_list");
    $("#mainListDiv").fadeIn();

});

$(window).scroll(function () {
    if ($(document).scrollTop() > 50) {
      $(".nav").addClass("affix");
      $(".lista").addClass("list");
      console.log("OK");
    } else {
      $(".nav").removeClass("affix");
      $(".lista").removeClass("list");
    }
  });