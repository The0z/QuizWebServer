$(document).ready(function(){

  /* Easy way to populate questions without too much automation */
  function populateQuestions(){
    /* Question Text */
    $("#q1P").html("Question 1: Name the movie AND What is Jack Nicholson's character name?");
    $("#q2P").html("Question 2: My passion is interior design and I went to University in Mexico to learn Spanish. Who am I?");
    $("#q3P").html("Question 3: Name the band AND their original genre of music.");
    $("#q4P").html("Question 4: Who is this?");
    $("#q5P").html("Question 5: Who wrote this quote?");
    $("#q6P").html("Question 6: I used to be a potato farmer from PEI, which helped me get my first role. Who am I?");
    $("#q7P").html("Question 7: Who is this AND what is his height as an adult?");
    $("#q8P").html("Question 8: What is his name AND claim to fame?");
    $("#q9P").html("Question 9: Who is this band from the British Invasion AND how many children does the lead singer have?");
    $("#q10P").html("Question 10: What is this duo's famous song AND who did a remake of this song?");
    $("#q11P").html("Question 11: I met my wife in University, but grew up a couple of blocks from each other as children. Who am I?");
    $("#q12P").html("Question 12: What was the actress's name in the Wedding Singer?");
    $("#q13P").html("Question 13: This gentleman has a background in television and acting, and was on The Final Table on Netflix. Who am I?");
    $("#q14P").html("Question 14: Who is the band? BONUS for their names.");
    $("#q15P").html("Question 15: Who is this dashing fellow? Who is his famous neighbor AND what street did they live on?");
    $("#q16P").html("Question 16: Who is this famous Duo?  What have they accomplished?");
    $("#q17P").html("Question 17: What movie is this scene from?");
    $("#q18P").html("Question 18: What is this child's name?  Can you name his first movie or TV Series?");
    $("#q19P").html("Question 19: You may not recognize me from the accent, but I was born in Zambia and immigrated to Canada?");
    $("#q20P").html("Question 20: Who is this adorable creature?");
    $("#q21P").html("Question 21: Who is her best friend?");
    $("#q22P").html("Question 22: Who is this Duo AND How did the man die?");
    $("#q23P").html("Question 23: What movie is this?");
    $("#q24P").html("Question 24: I drive this car. Name the Car AND who am I?");

    /* Question Image */
    $("#q1Img").attr("src","game_images/q1.jpg");
    $("#q2Img").attr("src","game_images/q2.jpg");
    $("#q3Img").attr("src","game_images/q3.jpg");
    $("#q4Img").attr("src","game_images/q4.jpg");
    $("#q5Img").attr("src","game_images/q5.jpg");
    $("#q6Img").attr("src","game_images/q6.jpg");
    $("#q7Img").attr("src","game_images/q7.jpg");
    $("#q8Img").attr("src","game_images/q8.jpg");
    $("#q9Img").attr("src","game_images/q9.jpg");
    $("#q10Img").attr("src","game_images/q10.jpg");
    $("#q11Img").attr("src","game_images/q11.jpg");
    $("#q12Img").attr("src","game_images/q12.jpg");
    $("#q13Img").attr("src","game_images/q13.jpg");
    $("#q14Img").attr("src","game_images/q14.jpg");
    $("#q15Img").attr("src","game_images/q15.jpg");
    $("#q16Img").attr("src","game_images/q16.jpg");
    $("#q17Img").attr("src","game_images/q17.jpg");
    $("#q18Img").attr("src","game_images/q18.jpg");
    $("#q19Img").attr("src","game_images/q19.jpg");
    $("#q20Img").attr("src","game_images/q20.jpg");
    $("#q21Img").attr("src","game_images/q21.jpg");
    $("#q22Img").attr("src","game_images/q22.jpg");
    $("#q23Img").attr("src","game_images/q23.jpg");
    $("#q24Img").attr("src","game_images/q24.jpg");
  }



//On load set teamName that was created on the previous page. If somehow null set it to BugFinder Team
//Set team Name header to Team: teamName
window.onload = (event) => {
    var teamName = getCookie('teamname');
    //var teamName = sessionStorage.getItem('teamName');
    if(teamName == null || teamName == ''){
        teamName = 'Bug Finder Team';
    }
    document.getElementById('teamName').innerHTML = "Team: " + teamName;
    populateQuestions();
}




  //Form Button used to move onto next webpage
  $("#formBtn").click(function (e) {
    //confirm that user is happy with their answers
    $.confirm({
      icon: 'fa fa-question',
      theme: 'modern',
      closeIcon: 'true',
      title: 'Confirm',
      content: 'Are you sure you want to submit? <br> You cannot go back',
      animation: 'RotateY',
      animateClose: 'RotateY',
      autoClose: 'cancel|15000',
      type: 'orange',
      buttons: {
        submit: {
          text: 'Submit',
          action: function () {
            //Submit form to php
            document.getElementById('testForm').submit();
          }
        },
        cancel: {
          text: 'Cancel',

        }
      }
    });
  });

// https://www.w3schools.com/js/js_cookies.asp
// Used to get team Name from previous page. 
// Includes special handling
function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie); //decode cookie string to handle cookies with special characters.
    var ca = decodedCookie.split(';'); //split decoded cookie based on semi-colons.
    for(var i = 0; i <ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) { //if cookie is found do this
        return c.substring(name.length, c.length);
      }
    }
    return ""; //else return empty string if cookie is not found.
  }

});