$(document).ready(function() {
  $("button#js").hover(function() {
    $(".jsp").toggle();
  });

  $("button#op").hover(function() {
    $(".ops").toggle();
  });

  $("button#va").hover(function() {
    $(".var").toggle();
  });

  $("button#fun").hover(function() {
    $(".func").toggle();
  });

  $("button#met").hover(function() {
    $(".meth").toggle();
  });

  $("button#arg").hover(function() {
    $(".argu").toggle();
  });

  $("button#par").hover(function() {
    $(".para").toggle();
  });

  $("button#boo").hover(function() {
    $(".bool").toggle();
  });
});
