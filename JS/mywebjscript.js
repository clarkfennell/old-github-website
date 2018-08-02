var fadeinAboutMeBox = $("#aboutme");
var fadeinMyHTMLCSSBox = $("#myhtmlcss");
var fadeinMyJScriptBox = $("#myjscript");
var fadeinMyCVBox = $("#mycv");
var fadeinContactMeBox = $("#contactme");
var fadeoutAboutMeBox = $("#aboutme");
var fadeoutMyHTMLCSSBox = $("#myhtmlcss");
var fadeoutMyJScriptBox = $("#myjscript");
var fadeoutMyCVBox = $("#mycv");
var fadeoutContactMeBox = $("#contactme");

function fadeinAboutMe() {
    fadeinAboutMeBox.stop(true, true).fadeIn(2000);
    if (fadeoutMyHTMLCSSBox.style.opacity = 1) {
    fadeoutMyHTMLCSSBox.stop(true, true).fadeOut(2000, function() {
          var temp = fadeinAboutMeBox;
          fadeinAboutMeBox = fadeoutMyHTMLCSSBox;
          fadeoutMyHTMLCSSBox = temp;
          setTimeout(fade, 1000);
        })
    } else if (fadeoutMyJScriptBox.style.opacity = 1) {
    fadeoutMyJScriptBox.stop(true, true).fadeOut(2000, function() {
          var temp = fadeinAboutMeBox;
          fadeinAboutMeBox = fadeoutMyJScriptBox;
          fadeoutMyJScriptBox = temp;
          setTimeout(fade, 1000);
        })
    } else if (fadeoutMyCVBox.style.opacity = 1) {
      fadeoutMyCVBox.stop(true, true).fadeOut(2000, function() {
            var temp = fadeinAboutMeBox;
            fadeinAboutMeBox = fadeoutMyCVBox;
            fadeoutMyCVBox = temp;
            setTimeout(fade, 1000);
        })
    } else  if (fadeoutContactMeBox.style.opacity = 1) {
      fadeoutContactMeBox.stop(true, true).fadeOut(2000, function() {
            var temp = fadeinAboutMeBox;
            fadeinAboutMeBox = fadeoutContactMeBox;
            fadeoutContactMeBox = temp;
            setTimeout(fade, 1000);
        })
    }
  };
  fadeinAboutMe();
