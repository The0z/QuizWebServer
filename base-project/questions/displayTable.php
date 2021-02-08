<!DOCTYPE HTML> 
<html lang ="en"> 
<head> <!-- Metadata container  (data about data) -->
    <meta charset="UTF-8">
    <meta name="viewport"
    content="width=device-width,
        initial-scale=1.0">
    <title>Scoreboard</title>
    <link rel="stylesheet" href='questionsStyle.css'>
    <!-- Same as above, except used to embed a client-side script (JavaScript). -->
    <!-- defer load script adter page has finished parsing -->
    <!-- <script src="questionsScript.js" defer></script> -->
</head>
<body>
    <h2> Answers and Guesses <h2>
    <table>
        <!-- tr defines a row of a table, th is header, td is data -->
        <?php
            //following PHP recommendations    
            //using object-oriented approach (i.e use the -> style)
            $servername = "localhost";
            $username = '';
            $password = '';
            $database = 'quizDB'
            //create new connection object named            
            $mysqli = new mysqli($servername, $username, $password, $database);

            //check for connection error, error no = 0 means no error occurred.
            if($mysqli->connect_errno){
                exit("Failed to connect to MySQL: " . $mysqli->connect_error);
            }
            
            //variable for database command
            $sql = "SELECT * FROM scorecard";
            //variable for result of query
            $result = $mysqli->query($sql);
            $numCols = $result->field_count;
            $numRows = $result->num_rows;
            
            //Probably better to collect all the data and put it in a 2D array.
            //First check if DB is not empty, if not, then begin populating table
            if($result->num_rows > 0){
                
                //Creating an array that contains all the database entries, needed due to formatting
                //requirement.
                $answers_arr = [];
                for($x = 1; $x <= $num_rows; $x++){
                    array_push($answer_arr, array_slice($mysqli->fetch_array(MYSQLI_NUM),1));
                }
                
                print_r($answer_arr);


                //Collect field information for all the columns in DB
                ///$finfo = $result->fetch_fields();
                
                


                //for each column do the following
                //foreach($finfo as $val){
                //    echo "<tr><th"
               // }
            }else{
                echo "Error No Results in Database"
            }
            //close the connection
            $mysqli->close();

                

                //While we still have more rows (i.e. teams), fetch_assoc grabs a row from the table and turns it into dict.
                while($row = $result->fetch_assoc()){
                    
                }      
        ?>
    </table>
</body>
</html>
