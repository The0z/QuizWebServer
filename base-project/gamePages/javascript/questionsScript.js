$(document).ready(function(){

  /* Easy way to populate questions without too much automation */
  function populateQuestions(){
    /* Question Text */
    $("#q1P").html("Question 1: Who the heck is this?");
    $("#q2P").html("Question 2: Who the heck is this?");
    $("#q3P").html("Question 3: What is the brand and name of this car?");
    $("#q4P").html("Question 4: What is the name of this structure?");
    $("#q5P").html("Question 5: What is this a part of?");
    $("#q6P").html("Question 6: Which villian is this actor portraying?");
    $("#q7P").html("Question 7: What is the name of the place below the tower?");
    $("#q8P").html("Question 8: Who is this?");
    $("#q9P").html("Question 9: What is the brand and name of this sport hatch?");
    $("#q10P").html("Question 10: Who is the heck is this?");
    $("#q11P").html("Question 11: What is thing waves in the sky called?");
    $("#q12P").html("Question 12: Where is this?");
    $("#q13P").html("Question 13: What is this?!?");
    $("#q14P").html("Question 14: Where is this?");
    $("#q15P").html("Question 15: Who drives this in this group?");
    $("#q16P").html("Question 16: What are these super cool awesome definitely not testing formatting animals called?");
    $("#q17P").html("Question 17: What type of dog is this?");
    $("#q18P").html("Question 18: Who the heck is this?");
    $("#q19P").html("Question 19: Who the heck is this?");
    $("#q20P").html("Question 20: Who the heck is this?");

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