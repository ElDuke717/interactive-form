This is the third project for the Full-Stack JavaScript TechDegree.

Notes on the project:

1. Please notice that a JSDocs file has been generated for this project.  It has all the variables and other notes laid out to
hopefully make everything more legible.

2. I'm going for an "Exceeds Expectations" grade for this project, please note the functionality that is included with the form:

- The name input field validates the user's input in realtime using an eventlistener on the 'input' event.  It will display 
"Please include a first and last name" until a first and last name are entered.  
Also, note that if the name input is left blank, it show a message "Name field cannot be blank." and both the messages "Please add a name." and "Name field cannot be blank" will display simultaneously if a name has been entered and then erased. 

-The email field will display a message "email field cannot be blank" if no email is entered into the input field.
-"Email address must be formatted correctly." will be displayed if the email address is not formatted properly.

- Activities that occur at the same time cannot both be chosen - when a single Tuesday morning activity (JS Libraries OR JS frameworks)
or single afternoon activity (Node.js or Build Tools) are selected, the checkbox for the concurrent activity is disabled and cannot be checked.  Also the box (the parent element) will darken when it's disabled.

3. The Regex for the credit card validation will validate any number combination from 13 to 16 digits long, per the rubrick.

4. The form will submit if Paypal or Bitcoin are chosen in lieu of Credit Card.