
var swiper = new Swiper(".mySwiper", {
	effect: "cards",
	grabCursor: true,
  });

  $(document).ready(function() {
    var content = $('.content');
	
    $('#trigger').live('click', function() {
        $(this).toggle(function() {
            $(this).text('hide follow!');
            content.removeClass('reverse').addClass('running');
        }, function() {
             $(this).text('follow me!');
            content.removeClass('running').addClass('reverse');
        }).trigger('click');
    });
	
});

// function([string1, string2],target id,[color1,color2])    
consoleText(['Hello I am Omar.', 'I am Front-end Developer'], 'text',['#E8F1F2','#006494']);

function consoleText(words, id, colors) {
  if (colors === undefined) colors = ['#fff'];
  var visible = true;
  var con = document.getElementById('console');
  var letterCount = 1;
  var x = 1;
  var waiting = false;
  var target = document.getElementById(id)
  target.setAttribute('style', 'color:' + colors[0])
  window.setInterval(function() {

    if (letterCount === 1 && waiting === false) {
      waiting = true;
      target.innerHTML = words[1].substring(0, letterCount)
      window.setTimeout(function() {
        var usedColor = colors.shift();
        colors.push(usedColor);
        var usedWord = words.shift();
        words.push(usedWord);
        x = 1;
        target.setAttribute('style', 'color:' + colors[0])
        letterCount += x;
        waiting = false;
      }, 1000)
    } else if (letterCount === words[0].length + 1 && waiting === false) {
      waiting = true;
      window.setTimeout(function() {
        x = -1;
        letterCount += x;
        waiting = false;
      }, 1000)
    } else if (waiting === false) {
      target.innerHTML = words[0].substring(0, letterCount)
      letterCount += x;
    }
  }, 120)
  window.setInterval(function() {
    if (visible === true) {
      con.className = 'console-underscore hidden'
      visible = false;

    } else {
      con.className = 'console-underscore'

      visible = true;
    }
  }, 400)
}



  var swiper5 = new Swiper(".mySwiper5", {
	grabCursor: true,
	effect: "creative",
	creativeEffect: {
	  prev: {
		shadow: true,
		translate: ["-125%", 0, -800],
		rotate: [0, 0, -90],
	  },
	  next: {
		shadow: true,
		translate: ["125%", 0, -800],
		rotate: [0, 0, 90],
	  },
	},
  });


  
//Get the button
var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
  
}


