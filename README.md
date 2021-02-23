This is the third project for the Full-Stack JavaScript TechDegree.

Notes on the project:

1. Please notice that a JSDocs file has been generated for this project.  It has all the variables and other notes laid out to
hopefully make everything more legible.

2. I'm going for an "Exceeds Expectations" grade for this project, please note the functionality that is included with the form:

- The name input field validates the user's input in realtime using an eventlistener on the keypress event.  It will display 
"Please include a first and last name" until a first and last name are entered.  It will accept middle initials or full middle names.
Also, note that if the name input is left blank, it show a message "Name field cannot be blank."

-The email field will display a message "email field cannot be blank" if no email is entered into the input field.
-"Email address must be formatted correctly." will be displayed if the email address is not formatted properly.

3. Activities that occur at the same time cannot both be chosen - when a single Tuesday morning activity (JS Libraries OR JS frameworks)
or single afternoon activity (Node.js or Build Tools) are selected, the checkbox for the concurrent activity is disabled and cannot be checked.

4. Note that the T-shirt color menu updates after a design is chosen.  This is apparent after a user selects one of the two design options.

5. The Regex for the credit card validation will validate all major credit cards.

6. The form will submit if Paypal or Bitcoin are chosen in lieu of Credit Card.