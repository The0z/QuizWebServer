//JQuery to make it show script doesn't run until page is done loading
$(document).ready(function () {

    var teamName = document.getElementById('teamName');
    document.getElementById("teamName").addEventListener("input", checkTeamField);

    // Check if team name is empty, if not then continue on.
    function checkTeamField() {
        var btn = document.getElementById('teamBtn');
        //Check to see if teamname is greater than 51 characters.
        if (teamName.value.length >= 51) {
            //tell the user to enter a team name less than 50 characters.
            $.alert({
                icon: 'fas fa-exclamation-triangle',
                closeIcon: 'false',
                theme: 'modern',
                title: "Alert",
                type: 'orange',
                content: "Please enter a team name less than 50 characters",
                buttons:{
                    ok:{
                        text: 'OK',
                        action: function(){
                            teamName.value = "";
                        }
                    }
                }
            });
        }
        else { 
            //If teamName is empty disable button, otherwise enable button
            if (teamName.value === '') {
                btn.disabled = true;
            }
            else {
                btn.disabled = false;
            }
        }
    }

    //Checks to see if only letters and spaces were used for name
    function checkLettersSpaces(textInput) {
        //RegEx enclosed with / ... / 
        // ^ = begin with, [a-zA-Z-,] = any lower/uppercase letters, comma, or dash
        // + = 1 more times of the preceding, \s white space, {0,1} match 0 or 1 times whitespace changed to *
        // () = group, * = 0 or more times of thing proceding it, $ end!
        var filter = /^[a-z0-9A-Z-,]+(\s*[a-z0-9A-Z-,])*$/;
        if (textInput.value.match(filter)) {
            return true;
        }
        else {
            return false;
        }
    }


    //If button is pressed, ensure teamName is valid, if so proceed to game. Otherwise call alert
    $("#teamBtn").click(function (e) {
        //Check if teamName only has numbers, spaces, letters, commas, and dashes
        if (checkLettersSpaces(teamName)) {
            //Confirm they are happy with their team name, if so move onto the game
            $.confirm({
                icon: 'fa fa-question',
                theme: 'modern',
                closeIcon: 'true',
                title: 'Confirm',
                content: 'Do you want to use this team name? <br> Team Name: ' + teamName.value,
                animation: 'RotateY',
                animateClose: 'RotateY',
                type: 'orange',
                buttons: {
                    yes:{
                        text: 'OF COURSE',
                        action: function(){
                            document.cookie = 'teamname=' + teamName.value;
                            window.location.href = "../gamePages/questions.html";
                        }
                    },
                    cancel: {
                        text: 'Cancel', 
                    }
                }
            });

        }
        else { //else use an alert to tell the user to correct their teamname.
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