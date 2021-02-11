$(document).ready(function(){

//On load set teamName that was retreived earlier. If somehow null set it to BugFinder Team
window.onload = (event) => {
    var teamName = getCookie('teamname');
    //var teamName = sessionStorage.getItem('teamName');
    if(teamName == null || teamName == ''){
        teamName = 'Bug Finder Team';
    }
    document.getElementById('teamName').innerHTML = "Team: " + teamName;
}

  //e refers to the event object 
  $("#formBtn").click(function (e) {

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