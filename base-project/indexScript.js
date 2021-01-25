// The JavaScript file!

var teamName = document.getElementById('teamName');
document.getElementById("teamName").addEventListener("input", checkTeamField);

// Check if team name is empty, if not then continue on.
function checkTeamField(){
    var btn = document.getElementById('teamBtn');
    if(teamName.value.length > 50){
        alert("Please Enter a Team Name less or equal to 50 characters");
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
    var filter = /^[a-zA-Z-,]+(\s*[a-zA-Z-,])*$/;
    if(textInput.value.match(filter)){
        return true;
    }
    else{
        return false;
    }
}


document.getElementById('teamBtn').addEventListener("click", function(){    
    if(checkLettersSpaces(teamName)){
        document.cookie = 'teamname=' + teamName.value;
        window.location.href = "questions/questions.html";
    }
    else{
        alert('Please enter only letters, dash, commas, and/or spaces');
    }
});

