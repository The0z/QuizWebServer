

//On load set teamName that was retreived earlier. If somehow null set it to BugFinder Team
window.onload = (event) => {
    var teamName = getCookie('teamname');
    //var teamName = sessionStorage.getItem('teamName');
    if(teamName == null || teamName == ''){
        teamName = 'Bug Finder Team';
    }
    document.getElementById('teamName').innerHTML = teamName;
}

document.getElementById('formBtn').addEventListener("click", function(){
    var res = confirm("Press OK to submit your answers. Cancel to go back");
    if(res == true){
        document.getElementById('testForm').submit();
    }
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