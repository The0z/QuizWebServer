<!DOCTYPE HTML> 
<html lang ="en"> 
<head> <!-- Metadata container  (data about data) -->
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <title>Scoreboard</title>
    
    <!-- STYLES -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/jquery-confirm/3.3.2/jquery-confirm.min.css">
    <link rel="stylesheet" href='../css/questionsStyle.css'>

    <!-- SCRIPTS -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-confirm/3.3.2/jquery-confirm.min.js"></script>
    
    <script src="../javascript/scoreboardScript.js"></script>
    <script src="https://kit.fontawesome.com/81e040d0bb.js" crossorigin="anonymous"></script>

</head>
<body class="myBody">
    <div class="myDiv">
    <h2 class='myH2'> Answers and Guesses </h2>
    <table>
        <!-- tr defines a row of a table, th is header, td is data -->
        <input type='button' id='startOverBtn' value="Play Again?">

        <!-- PHP to create Table -->
        <?php
            //Used to load SQL data and convert it into a vertical table (headers in first row)

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

            //Print the table in vertical format (row 1 is headers)
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
    </div>
</body>
</html>
