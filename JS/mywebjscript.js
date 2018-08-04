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

$(document).ready( function() {
  $('#content-reveal').hide();
  $('#aboutme').click( function() {
      $('#content-reveal').fadeOut( 500, function() {
          $('#content-reveal').html( '<div class="maindiv"><h2>ABOUT ME</h2><p>Age: 29<br>Location: Leeds<br>To view my CV: <a href="#">Click Here</a><br><br>I am a developer specialising in HTML, CSS, JAVA, JaveScript, SQL, Command Line, Ruby and many more.<br><br>I am also well equpit at using Adobe programs, such as, PhotoShop, Dreamweaver, Illistrator, InDesign, and other software as well.<br><br>I like to board and video games, watching indepentdant professional wrestling & a nice cup of tea.</p></div>' );
          $('#content-reveal').fadeIn( 500 );
      } );
  } );
  $('#myhtmlcss').click( function() {
      $('#content-reveal').fadeOut( 500, function() {
          $('#content-reveal').html( '<div class="maindiv"><h2>HTML & CSS</h2><p>This site is just one example of my HTML, CSS & SCSS skills. The code for this website, plus plenty of other examples, are on my <a href="https://www.github.com/clarkfennell">GITHUB</a>.</p></div>' );
          $('#content-reveal').fadeIn( 500 );
      } );
  } );
  $('#myjscript').click( function() {
      $('#content-reveal').fadeOut( 500, function() {
          $('#content-reveal').html( '<div class="maindiv"><h2>JAVASCRIPT</h2><p>Below is a a Random Colour Generator created with JavaScript code. The code for this is located on my <a href="Https://github.com/clarkfennell/Random-Color-Generator-React-JS-Example">GITHUB</a></p><p>For more JavaScript, JQuery and AngularJS, please visit my <a href="https://www.github.com/clarkfennell">GITHUB</a>.</p></div>' );
          $('#content-reveal').fadeIn( 500 );
      } );
  } );
  $('#mycv').click( function() {
      $('#content-reveal').fadeOut( 500, function() {
          $('#content-reveal').html( '<div class="maindiv"><h2>MY CV</h2><img src="/images/NEWCVClarkFennell.jpg"></div>' );
          $('#content-reveal').fadeIn( 500 );
      } );
  } );
  $('#mycv').click( function() {
      $('#content-reveal').fadeOut( 500, function() {
          $('#content-reveal').html( '<div class="maindiv"><h2>CONTACT</h2></div>' );
          $('#content-reveal').fadeIn( 500 );
      } );
  } );
} );
