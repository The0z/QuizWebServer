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
            $database = 'quizDB';
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
            $numRows = $result->num_rows;
            
            //Probably better to collect all the data and put it in a 2D array.
            //First check if DB is not empty, if not, then begin populating table
            if($numRows > 0){
                
                //Creating an array that contains all the database entries, needed due to formatting
                //requirement.
                $answers_arr = [];
                for($x = 1; $x <= $numRows; $x++){
                    array_push($answers_arr, array_slice($result->fetch_array(MYSQLI_NUM),1));
                }
                //echo '<pre>'; print_r($answers_arr); echo '</pre>';

            }else{
                echo "Error No Results in Database";
            }
            //close the connection
            $mysqli->close();
            
            vertical_table_format($answers_arr);

            //Print the table
            function vertical_table_format($arr){
                
                //Get number of rows and cols (each row will have an equal number of columns)
                //Array must be transposed.
                $old_arr_rows = count($arr);
                $old_arr_cols = count($arr[0]); 
                
                //Need to transpose the array. $row refers to the tranposed array
                for($row = 0; $row < $old_arr_cols; $row++){
                    echo "<tr>";
                    for($col = 0; $col < $old_arr_rows; $col++){
                        if($row == 0 && $col == 0){
                            echo "<th scope ='row'> Team Name </th>";
                        }else if($row != 0 && $col == 0){
                            echo "<th scope='row'> Q" . $row . "</th>";

                        }

                        echo "<td>" . $arr[$col][$row] . "</td>";
                    }
                    echo "</tr>";
                }
            }


        ?>
    </table>
</body>
</html>
