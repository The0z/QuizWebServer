$(document).ready(function(){

//e refers to the event object 
$("#startOverBtn").click(function(e){
    
    $.confirm({
        icon: 'fa fa-question',
        theme: 'modern',
        closeIcon: 'true',
        title: 'Confirm',
        content: 'Are you sure you want to startover? <br> This will delete your team\'s answers',
        animation: 'RotateY',
        animateClose: 'RotateY',
        autoClose: 'cancel|10000',
        type: 'orange',
        buttons: {
            yes:{
                text: 'YES',
                action: function(){
                    callDeleteTable();
                }
            },
            cancel: {
                text: 'Cancel', 
        
            }
        }
    });
});


//Deletes the users current game files. NOTE do not set datatype to json as it will result in an error as we
//are not return any json files from the php.
//Success - go back to main page, Error - reload current page 
function callDeleteTable(){
    jQuery.ajax({
        type: "POST",
        url: '../php/deleteTable.php',        
        data: {function2call: 'deleteTable'},
        success: function(){ deleteSuccess()},
        error: function(){deleteFailure()}
    });
}


//Success Function
function deleteSuccess(){
    $.alert({
        icon: 'fas fa-check-circle',
        closeIcon: 'false',
        theme: 'modern',
        title: "Success!",
        type: 'green',
        content: "Answers deleted successfully. Press OK to go to the main page",
        buttons:{
            ok:{
                text: 'OK',
                action: function(){
                    mainPageRedir();
                }
            }
        }
    });
}

//Failure Function
function deleteFailure(){
    $.alert({
        icon: 'fas fa-skull',
        closeIcon: 'false',
        theme: 'modern',
        title: "OH NO!",
        type: 'red',
        content: "Answers could not be deleted, please submit a bug to the0z on Github",
    });
}

//Takes the user back to the main page once they hit okay
function mainPageRedir(){
    window.location.replace("../../index.html");
}


});