<?php

//These are the values we want to put in the database
$name = $_POST['name'];
$age = $_POST['age'];
$gender = $_POST['gender'];

//This is the mySQL database information
$servername = "localhost";
//Insert before running!
$username = "";
$password = "";
$database = "phpTest";


//Connect to the mysql database
$conn = new mysqli($servername, $username, $password, $database);

// if the connection doesn't work then kill the php (alias for exit)
// -> is used in object scope to access methods and properties of an object.
if($conn->connect_error){
    exit("The Connection has Failed!". $conn->connect_error);
}

//Creating an SQL query in string form
$sql = "insert into students(name,age,gender)
    values('$name','$age','$gender')";

//if the query result is exactly equivalent to TRUE then do the following
if ($conn->query($sql) === TRUE){
    //prints out ADDED: name, age, gender
    echo "ADDED: ".$name.", ".$age.", ".$gender;
} else {
    //prints ERROR: sql connection failed (or something like that)
    echo "Error: ".$sql."<br>".$conn->error;
}

//close the connection to the database
$conn->close();