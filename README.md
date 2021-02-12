# QUIZ WEBSITE AND WEBSERVER

### A custom website used in a team-building event. Consisted of CSS, HTML, JavaScript, PHP, Ngnix, and MySQL components.
-	Quiz site in which teams compete and compare answers to see who got the most answers right.
-	Uses CSS and HTML to design 5 unique webpages.
-	Uses PHP to create, manage, and display a MySQL database containing several teams' answers.
-	Uses jQuery, JQuery-confirm, and Bootstrap.
- Uses Cookies :cookie:
-	Uses a web server created with Ngnix that has HTTPS and TLSv1.3 enabled to run the site.
- Webserver is portforwarded and uses a DDNS allowing remote access while using a dynamic IP address.
 
## Starting the Game
![Begin Game Gif](https://github.com/The0z/QuizWebServer/blob/main/gifs/BeginGame.gif "Begin Game!")
Welcome page that is seen when you first enter the website
- Begin Game Button cannot be pressed until a valid Team Name is entered
- Stores the Team Name as a cookie so that future pages and PHP can easily access it

## Bad Characters Checker
![Special Characters Checker Gif](https://github.com/The0z/QuizWebServer/blob/main/gifs/SpecialCharactersChecker.gif "Special Character Checker")
Prevents characters such as <>, (), /, etc -- i.e. the JavaScript Hacking Ones
- JavaScript based - not the strongest but a classic security measure

## Too Many Characters Checker
![Too Many Characters Checker Gif](https://github.com/The0z/QuizWebServer/blob/main/gifs/CharacterLimit.gif "Too Many Character Checker")
Checks to make sure the Team Name is less than or equal to 50 characters
- Prevents graphical glitches in future pages
- Ensures MySQL can store the entire team name in the database table

## Question Page
![Question Page Gif](https://github.com/The0z/QuizWebServer/blob/main/gifs/QuestionPage.gif "Question Page")
Webpage that contains all the questions.
- Can use mouse wheel or tab key (seen above) to navigate throughout the questions
- Shows a loading cube if users internet is not fast enough to load the initial image

## Submitting Questions
![Submit Questions Gif](https://github.com/The0z/QuizWebServer/blob/main/gifs/SubmitQuestions.gif "Submit Questions")
Everytime a team hits submit, the data will be sent to a MySQL database using PHP
- Warns the user on submit that they cannot go back once they hit yes

## Waiting for Other Teams to Complete
![Waiting Gif](https://github.com/The0z/QuizWebServer/blob/main/gifs/WaitingForTeamsPage.gif "Waiting for Others")

## Teams Scoreboard Page
![Scoreboard Gif](https://github.com/The0z/QuizWebServer/blob/main/gifs/Scoreboard.gif "Scoreboard")
Every teams answers will be shown allowing teams to compare themselves to each other and to prevent cheating!
- PHP is used to access the mySQL table database that contains all the teams data. 
- It will then convert the MySQL table into a vertical table (first row is table headers) for easy comparison

## Ending the Game and Starting Over
![Startover Gif](https://github.com/The0z/QuizWebServer/blob/main/gifs/ResettingGame.gif "Resetting Game")
Once the game is over users can hit the start over button to delete their data
- This button will also automatically delete the team's data to save space on the MySQL database device
