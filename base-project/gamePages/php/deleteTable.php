<?php
//PHP used to handle deleting entries in SQL table


//if the function exists then call it
if(isset($_POST['function2call']) && !empty($_POST['function2call'])){
    $function2call = $_POST['function2call'];
    switch($function2call){
        case 'deleteTable': deleteRow(); break;
        default: break;
    }
}

// Deletes a row in the table that has the team name of the team using it
// note this has a potential to delete multiple rows if teams use the same name
function deleteRow(){
    //This is the mySQL database information
    $servername = "localhost";
    //Insert before running! Use Single Quotes!
    $tableName = 'scorecard';
    $username = '';
    $password = '';
    $database = 'quizDB';
    //Connect to the mysql database
    $conn = new mysqli($servername, $username, $password, $database);
    
    // if the connection doesn't work then kill the php (alias for exit)
    // -> is used in object scope to access methods and properties of an object.
    if($conn->connect_error){
        exit("The Connection has Failed!: ". $conn->connect_error);
    }
    
    $teamName = htmlspecialchars($_COOKIE['teamname']);
    $sql = "DELETE FROM scorecard WHERE teamName='$teamName'";
    $conn->query($sql);
    $conn->close();
}

?>