

function birthday_clock(){
let x = setInterval(function () {

    // Get today's date and time
   let now = new Date().getTime();

    // Find the distance between now and the count down date
   let distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
   let days = Math.floor(distance / (1000 * 60 * 60 * 24));
   let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
   let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
   let seconds = Math.floor((distance % (1000 * 60)) / 1000);



    // Display the result in the element with id="demo"
    $("#hepi-berzdej-counter").text(days + "d " + hours + "h " + minutes + "m " + seconds + "s ");



    // If the count down is finished, write some text
    if (distance < 0) {
        clearInterval(x);
        $("#robolenie").remove()
       let dtval = 6.0
        
        $(document).ready(bday_confetti(dtval));

        $("#hepi-berzdej-timer").text("HEPI BERZDEJ STARA PIZIU!!!");
        $("#hepi-berzdej-timer").css('font-size', "10vh");
        $("#hepi-berzdej-timer").after("<p class='fnt' id='lol' style='font-size: 4vh'>(najslodsa i najpiekniejsza piziu, spełnienia wszyskiego. plynnego francais i mialnego life )</p>")
        $("#lol").after('<iframe class="cizia" width="100%" height="100" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/942868204&color=%23ff5500&auto_play=true&hide_related=true&show_comments=false&show_user=false&show_reposts=false&show_teaser=false&visual=true"></iframe>')
        $('.cizia').after("<p id='sex' class='fnt' style='font-size: 2vh;'>(jebany autoplay nie dzialal na chromie a pewnie z tg korzystasz)</p>")
        $('#sex').after('<div id="start-button" style="margin-top: 10px"><button id="start-button" style="color: red; background-color:#ffffff42; width: 20vw; height:8vh; font-size: 20px;  font-family: "Monsterrat", sans-serif; " onClick="gameInit()">Start the MaxiKing game</button></div>')
        $("#start-button").after("<button onClick='disableConfetti()'>disable confetti</button>")


    }
}, 1000);

}