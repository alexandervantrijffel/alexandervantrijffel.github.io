var changeYOffset;

$(".showemail").click(function() {
  var mail;
  mail = "lexmail" + "@" + "gmail" + ".com";
  $(this).children('span').html("<a href='mailto" + ":" + mail + "'>" + mail + "</a>");
  $(this).attr('title', '');
  return $(this).addClass('nolink');
});

$(".showphone").click(function() {
  var number;
  number = ['+', '3', '1', ' ', '(0)', '6', ' ', '1', '2', '9', ' ', '7', '4', '7', ' ', '0', '7'];
  $(this).children('span').html("<span>" + (number.join('')) + "</span>");
  $(this).attr('title', '');
  return $(this).addClass('nolink');
});

$("li.social a").hover(function(inEvent) {
  return changeYOffset($(this), 36);
}, function(outEvent) {
  return changeYOffset($(this), -36);
});

changeYOffset = function(element, change) {
  var position;
  position = /(\d+)[^-\d]+(-\d+)/gi.exec(element.css('background-position'));
  return element.css('background-position', "" + position[1] + "px " + (parseInt(position[2]) + change) + "px");
};
