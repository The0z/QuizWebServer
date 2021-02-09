<?php

//Static - So not the greatest solution. Better solution might be to append the data to one string then separate
//html specialchars is to prevent sneaky folks from messing with the script.
$teamName = htmlspecialchars($_COOKIE['teamname']);
$q1 = htmlspecialchars($_POST['q1']);
$q2 = htmlspecialchars($_POST['q2']);
$q3 = htmlspecialchars($_POST['q3']);
$q4 = htmlspecialchars($_POST['q4']);
$q5 = htmlspecialchars($_POST['q5']);
$q6 = htmlspecialchars($_POST['q6']);
$q7 = htmlspecialchars($_POST['q7']);
$q8 = htmlspecialchars($_POST['q8']);
$q9 = htmlspecialchars($_POST['q9']);
$q10 = htmlspecialchars($_POST['q10']);
$q11 = htmlspecialchars($_POST['q11']);
$q12 = htmlspecialchars($_POST['q12']);
$q13 = htmlspecialchars($_POST['q13']);
$q14 = htmlspecialchars($_POST['q14']);
$q15 = htmlspecialchars($_POST['q15']);
$q16 = htmlspecialchars($_POST['q16']);
$q17 = htmlspecialchars($_POST['q17']);
$q18 = htmlspecialchars($_POST['q18']);
$q19 = htmlspecialchars($_POST['q19']);
$q20 = htmlspecialchars($_POST['q20']);


//This is the mySQL database information
$servername = "localhost";
//Insert before running! Use Single Quotes!
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

//Creating an SQL query in string form
$sql = "insert into scorecard(teamName, q1, q2, q3, q4, q5, q6, q7, q8, q9, q10, q11, q12, q13, q14, q15, q16, q17, q18, q19, q20)
    values('$teamName','$q1','$q2','$q3','$q4','$q5','$q6','$q7','$q8','$q9','$q10','$q11','$q12','$q13','$q14','$q15',
    '$q16','$q17','$q18','$q19','$q20')";

//if the query result is exactly equivalent to TRUE then do the following
if ($conn->query($sql) === TRUE){
    //prints out ADDED: name, age, gender
    echo "ADDED: Your Answers to the Scoreboard";
} else {
    //prints ERROR: sql connection failed (or something like that)
    echo "Error: ".$sql."<br>".$conn->error;
}

//close the connection to the database
$conn->close();
?>