# QUIZ WEBSITE AND WEBSERVER

### A custom website used in a team-building event. Consisted of CSS, HTML, JavaScript, PHP, Ngnix, and MySQL components.
-	Quiz site in which teams compete and compare answers to see who got the most answers right.
-	Uses CSS and HTML to design 5 unique webpages that all integrated together.
-	Uses PHP to create, manage, and display a MySQL database containing several teams' answers.
-	Creates a web server with Ngnix that is remotely accessible and has HTTPS and TLSv1.3 enabled.
-	Uses cookies, jQuery, JQuery-confirm, and Bootstrap.
 
## Starting the Game
![Begin Game Gif](https://github.com/The0z/QuizWebServer/main/gifs/BeginGame.gif "Begin Game!")
Welcome page that is seen when you first enter the website
- Begin Game Button cannot be pressed until a valid Team Name is entered
- Stores the Team Name as a cookie so that future pages and PHP can easily access it

## Bad Characters Checking
![Special Characters Checker Gif](https://github.com/The0z/QuizWebServer/blob/main/gifs/SpecialCharactersChecker.gif "Special Character Checker")
Prevents characters such as <>, (), /, etc -- i.e. the JavaScript Hacking Ones
