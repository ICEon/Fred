// JavaScript Document
       /*
         * DEFINE SOUNDS
         */
        $.mbAudio.sounds = {
            backgroundSprite: {
                id    : "backgroundSprite",
                ogg   : "sounds/bgndsSprite.ogg",
                mp3   : "sounds/bgndsSprite.mp3",
                //example of sprite
                sprite: {
                    intro     : {id: "intro", start: 80, end: 116.975, loop: true},
                    levelIntro: {id: "levelIntro", start: 63, end: 75.5, loop: true},
                    tellStory : {id: "tellStory", start: 80, end: 116.975, loop: true},
                    level1    : {id: "level1", start: 5, end: 13, loop: true},
                    level2    : {id: "level2", start: 40, end: 56, loop: true},
                    level3    : {id: "level3", start: 120, end: 136.030, loop: true}
                }
            },

            effectSprite: {
                id    : "effectSprite",
                ogg   : "sounds/effectsSprite.ogg",
                mp3   : "sounds/effectsSprite1.mp3",
                //example of sprite
                sprite: {
                    streak        : {id: "streak", start: 0, end: 1.3, loop: 3},
                    great         : {id: "great", start: 5.8, end: 8, loop: false},
                    divine        : {id: "divine", start: 10, end: 11.6, loop: false},
                    wow           : {id: "wow", start: 15, end: 20, loop: false},
                    levelIntro    : {id: "levelIntro", start: 20, end: 25, loop: false},
                    levelCompleted: {id: "levelCompleted", start: 25, end: 30, loop: false},
                    subLevelLost  : {id: "subLevelLost", start: 35, end: 38.1, loop: false},
                    subLevelWon   : {id: "subLevelWon", start: 30, end: 31.9, loop: false},
                    gameWon       : {id: "gameWon", start: 30, end: 31.9, loop: false}
                }
            }
        };

$(document).ready(function(e) {

        function audioIsReady() {
            setTimeout(function () {
//                $('#buttons').fadeIn();
                $("#loading").hide();
               
            }, 3000);
        }

        $(document).on("initAudio", function () {
			alert ("init");
            $.mbAudio.pause('effectSprite', audioIsReady);
           $("#loading").show();
        });



	$('#strat').tap(function(){
		alert ("iniciar");
	$(document).trigger('initAudio');
});

  $('#Play1').click(function(){
	  alert("uno");
    $.mbAudio.play('effectSprite', 'great');
  });
	
 document.addEventListener("deviceready",function(){




  
  $('#Play2').tap(function(){
	  	  alert("dos");
    $.mbAudio.play('effectSprite', 'wow');
  });
  
  $('#Play3').tap(function(){
	  	  alert("tres");
    $.mbAudio.play('effectSprite', 'divine');
  });
  
  
 },false); //deviceready
}); //document ready