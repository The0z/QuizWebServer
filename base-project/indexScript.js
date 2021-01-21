// The JavaScript file!

var teamName = document.getElementById('teamName');
document.getElementById("teamName").addEventListener("input", checkTeamField);

// Check if team name is empty, if not then continue on.
function checkTeamField(){
    //var teamName = document.getElementById('teamName');
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

document.getElementById('teamBtn').addEventListener("click", function(){
   console.log("Button Clicked!");
   //if web storage exists then do this, otherwise send window alert
   if(typeof(Storage) !== undefined){
       sessionStorage.setItem('teamName', teamName.value);
       //May need to change if website folder setup changes.
       window.location.href = "questions/questions.html";
   } else {
       alert("Sorry, your browser doesn't support session storage. Please use a different browser to play the game");
   }
});

