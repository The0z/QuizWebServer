// The JavaScript file!

document.getElementById("teamName").addEventListener("input", checkTeamField);

function checkTeamField(){
    var teamName = document.getElementById('teamName');
    var btn = document.getElementById('teamBtn');
    console.log(teamName.value);
    if(teamName.value === ''){
        btn.disabled = true;
    }
    else{
        btn.disabled = false;
    }
}

