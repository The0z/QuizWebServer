<?php

function deleteTable(){
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
    
    $sql = 'DROP TABLE ' . $tableName;
    $conn->query($sql);
    $conn->close();

}

?>