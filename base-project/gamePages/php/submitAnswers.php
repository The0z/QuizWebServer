<!DOCTYPE HTML> 
<html lang ="en"> 
<head> <!-- Metadata container  (data about data) -->
    <meta charset="UTF-8">
    <meta name="viewport"
    content="width=device-width,
        initial-scale=1.0">
    <title>Scoreboard</title>
    
    <!-- STYLING -->
    <!-- <link href="https://www.jqueryscript.net/css/jquerysctipttop.css" rel="stylesheet" type="text/css"> -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bootswatch/4.5.2/materia/bootstrap.min.css">
    <link rel="stylesheet" href='../css/questionsStyle.css'>
    
    <!-- SCRIPTS - set all to defer (load after page is done) -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>    
    <script src="../javascript/scoreboardScript.js" defer></script>
</head>
<body class='myBody'>
    <div class="myDiv">
    <h2 class='myH2' id='ansSubH2'>Answers Submitted! Please wait for others to finish</h2>
    <img src="../game_images/checkMark.gif" id='checkMarkImg' alt="checkmark gif">
    <form id='testForm' action="scoreboardPage.php" method="post">
        <button id='formBtn' type="submit">CLICK THIS WHEN EVERYONE IS DONE</button>
    <form>
    </div>
</body>
<?php

//Used to submit user data into the database

//Acts like console.log in JS - https://stackify.com/how-to-log-to-console-in-php/
    function console_log($output, $with_script_tags = true){
        $js_code = 'console.log(' . json_encode($output, JSON_HEX_TAG) . ');';
        
        if ($with_script_tags) {
            $js_code = '<script>' . $js_code . '</script>';
        }
        echo $js_code;
    }


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
    $q21 = htmlspecialchars($_POST['q21']);
    $q22 = htmlspecialchars($_POST['q22']);
    $q23 = htmlspecialchars($_POST['q23']);
    $q24 = htmlspecialchars($_POST['q24']);

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

    $teamName = $conn->real_escape_string($teamName);
    $q1 = $conn->real_escape_string($q1);
    $q2 = $conn->real_escape_string($q2);
    $q3 = $conn->real_escape_string($q3);
    $q4 = $conn->real_escape_string($q4);
    $q5 = $conn->real_escape_string($q5);
    $q6 = $conn->real_escape_string($q6);
    $q7 = $conn->real_escape_string($q7);
    $q8 = $conn->real_escape_string($q8);
    $q9 = $conn->real_escape_string($q9);
    $q10 = $conn->real_escape_string($q10);
    $q11 = $conn->real_escape_string($q11);
    $q12 = $conn->real_escape_string($q12);
    $q13 = $conn->real_escape_string($q13);
    $q14 = $conn->real_escape_string($q14);
    $q15 = $conn->real_escape_string($q15);
    $q16 = $conn->real_escape_string($q16);
    $q17 = $conn->real_escape_string($q17);
    $q18 = $conn->real_escape_string($q18);
    $q19 = $conn->real_escape_string($q19);
    $q20 = $conn->real_escape_string($q20);
    $q21 = $conn->real_escape_string($q21);
    $q22 = $conn->real_escape_string($q22);
    $q23 = $conn->real_escape_string($q23);
    $q24 = $conn->real_escape_string($q24);


    //Creating an SQL query in string form
    $sql = "insert into scorecard(teamName, q1, q2, q3, q4, q5, q6, q7, q8, q9, q10, q11, q12, q13, q14, q15, q16, q17, q18, q19, q20, q21, q22, q23, q24)
        values('$teamName','$q1','$q2','$q3','$q4','$q5','$q6','$q7','$q8','$q9','$q10','$q11','$q12','$q13','$q14','$q15',
        '$q16','$q17','$q18','$q19','$q20','$q21','$q22','$q23','$q24')";

    //if the query result is exactly equivalent to TRUE then do the following
    if ($conn->query($sql) === TRUE){
        //prints out ADDED: name, age, gender
        console_log("ADDED: Answers to the Scoreboard");
    } else {
        //prints ERROR: sql connection failed (or something like that)
        console_log("Error: ".$sql." ".$conn->error);
    }

    //close the connection to the database
    $conn->close();
?>