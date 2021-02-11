$(document).ready(function(){


// The JavaScript file!

var teamName = document.getElementById('teamName');
document.getElementById("teamName").addEventListener("input", checkTeamField);

// Check if team name is empty, if not then continue on.
function checkTeamField(){
    var btn = document.getElementById('teamBtn');
    if(teamName.value.length > 50){
        $.alert({
            icon: 'fas fa-exclamation-triangle',
            closeIcon: 'false',
            theme: 'modern',
            title: "Alert",
            type: 'orange',
            content: "Please enter a team name less than 50 characters",
        });
    }
    else{
        if(teamName.value === ''){
            btn.disabled = true;
        }
        else{
            btn.disabled = false;
        }
    }
}

//Checks to see if only letters and spaces were used for name
function checkLettersSpaces(textInput){
    //RegEx enclosed with / ... / 
    // ^ = begin with, [a-zA-Z-,] = any lower/uppercase letters, comma, or dash
    // + = 1 more times of the preceding, \s white space, {0,1} match 0 or 1 times whitespace changed to *
    // () = group, * = 0 or more times of thing proceding it, $ end!
    var filter = /^[a-z0-9A-Z-,]+(\s*[a-z0-9A-Z-,])*$/;
    if(textInput.value.match(filter)){
        return true;
    }
    else{
        return false;
    }
}


  //e refers to the event object 
  $("#teamBtn").click(function (e) {

    if(checkLettersSpaces(teamName)){
        document.cookie = 'teamname=' + teamName.value;
        window.location.href = "../gamePages/questions.html";
    }
    else{
        $.alert({
            icon: 'fas fa-exclamation-triangle',
            closeIcon: 'false',
            theme: 'modern',
            title: "Alert",
            type: 'orange',
            content: "Please enter only letters, numbers, dashes, commas, and/or spaces",
        });
    }
  });



});