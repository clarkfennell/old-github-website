var aboutmediv = $("aboutme");
var htmlcssdiv = $("myhtmlcss");
var jscriptdiv = $("myjscript");
var mycvdiv = $("mycv");
var contactmediv = $("contactme");
var currentdiv = $("currentdiv");

$(function () {
  count = 0;
  wordsArray = ["UX/UI DESIGNER", "FRONT-END DEVELOPER", "WEB DESIGNER", "SOFTWARE DEVELOPER"];
  setInterval(function () {
    count++;
    $("#word").fadeOut(400, function () {
      $(this).text(wordsArray[count % wordsArray.length]).fadeIn(400).addClass("small-heading");
    });
  }, 2000);
});

$("aboutmebtn").click(function() {
  currentdiv.fadeout();
  aboutmediv.fadeIn("slow");
  currentdiv = aboutmediv;
});

$("myhtmlcssbtn").click(function() {
  currentdiv.fadeout();
  htmlcssdiv.fadeIn("slow");
  currentdiv = htmlcssdiv;
});

$("myjscriptbtn").click(function() {
  currentdiv.fadeout();
  jscriptdiv.fadeIn("slow");
  currentdiv = jscriptdiv;
});

$("mycvbtn").click(function() {
  currentdiv.fadeout();
  mycvdiv.fadeIn("slow");
  currentdiv = mycvdiv;
});

$("contactmebtn").click(function() {
  currentdiv.fadeout();
  contactmediv.fadeIn("slow");
  currentdiv = contactmediv;
});
