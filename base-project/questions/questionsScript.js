

//On load set teamName that was retreived earlier. If somehow null set it to BugFinder Team
window.onload = (event) => {
    var teamName = sessionStorage.getItem('teamName');
    if(teamName == null){
        teamName = 'Bug Finder Team';
    }
    document.getElementById('teamName').innerHTML = teamName;
}

document.getElementById('formBtn').addEventListener("click", function(){
    document.getElementById('testForm').submit();
});
