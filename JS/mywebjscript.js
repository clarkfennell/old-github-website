$(function () {
  count = 0;
  wordsArray = ["UX/UI DESIGNER", "FRONT-END DEVELOPER", "WEB DESIGNER", "SOFTWARE DEVELOPER"];
  setInterval(function () {
    count++;
    $("#word").fadeOut(400, function () {
      $(this).text(wordsArray[count % wordsArray.length]).fadeIn(400).addClass("small-heading");
    });
  }, 2000);
})

var currentdiv = '#aboutmebtn';

$(document).ready(function() {
  $('#aboutmebtn').click(function(){
    cureentdiv.fadOut("slow");
    $('#aboutme').fadeIn("slow");
    currentdiv = '#aboutme';
  });
});

$(document).ready(function() {
  $('#myhtmlcssbtn').click(function(){
    cureentdiv.fadOut("slow");
    $('#myhtmlcss').fadeIn("slow");
    currentdiv = '#myhtmlcss';
  });
});

$(document).ready(function() {
  $('#jscriptbtn').click(function(){
    cureentdiv.fadOut("slow");
    $('#myjscript').fadeIn("slow");
    currentdiv = '#myjscript';
  });
});

$(document).ready(function() {
  $('#mycvbtn').click(function(){
    cureentdiv.fadOut("slow");
    $('#mycv').fadeIn("slow");
    currentdiv = '#mycv';
  });
});

$(document).ready(function() {
  $('#contactmebtn').click(function(){
    cureentdiv.fadOut("slow");
    $('#contactme').fadeIn("slow");
    currentdiv = '#contactme';
  });
});
