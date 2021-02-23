/**Global Variables */
const wholeForm = document.querySelector('.container');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const jobSelect = document.getElementById('title');
const otherJob = document.getElementById('other-job-role');

/**T-shirt selection menu variables*/
const designSelect = document.getElementById('design');
const colorSelect = document.getElementById('color');
const colorOption = document.querySelectorAll('#color option');

/**Activities selection variables*/
const registerActivity = document.getElementById('activities');
const activitiesBox = document.getElementById('activities-box');
const activitiesTotal = document.getElementById('activities-cost');
const mainConference = document.getElementsByTagName('input')[3];
let totalCost = 0;

/**Variables to select the additional hints for name and email validation */
const completeNameHint = document.getElementById('complete-name-hint');
const completeEmailHint = document.getElementById('complete-email-hint');

/**Tuesday morning workshops*/
const librariesWS = document.querySelector('input[name="js-libs"]');
const frameworkWS = document.querySelector('input[name="js-frameworks"]');
const tuesAMworkshops = document.querySelectorAll('input[data-day-and-time="Tuesday 9am-12pm"]');

/**Tuesday afternoon workshops*/
const nodejsWS = document.querySelector('input[name="node"]');
const buildtWS = document.querySelector('input[name="build-tools"');
const tuesPMworkshops = document.querySelectorAll('input[data-day-and-time="Tuesday 1pm-4pm"]');

/**Selects all checkboxes on the page - based on input type */ 
const checkboxes = document.querySelectorAll('input[type="checkbox"]');

/**Selects all the checkboxes that have been checked */
const checkedBoxes = document.querySelectorAll('input[type="checkbox"]:checked');

/**Payment selection variables*/
const payMethod = document.querySelector('.payment-methods');
const payment = document.getElementById('payment');
const credit = document.getElementById('credit-card');
const ccNumber = document.getElementById('cc-num');
const zipCode = document.getElementById('zip');
const cvv = document.getElementById('cvv');
const payPal = document.getElementById('paypal');
const bitCoin = document.getElementById('bitcoin');
const notBlank = document.getElementById('cc-not-blank');

/**nameInput.focus() makes the Name input box highlighted when the user opens the page. */
nameInput.focus();


/**otherJob text box is hidden by default */ 
otherJob.style.display = 'none';

/**conditional logic in this event listener makes the "other" input box appear or dissappear.*/
jobSelect.addEventListener('change', e => {
    jobSelect.value === 'other' ? otherJob.style.display = "block": otherJob.style.display = "none";
});

/**Disables the select drop down list until the Design drop down is selected. */
colorSelect.disabled = 'true';

/**Event listener checks for input into the dropdown list, enables selection of different T-shirt designs  */
designSelect.addEventListener('change', e => {
    colorSelect.removeAttribute('disabled');
    for (let i = 0; i < colorSelect.children.length; i++) {
        const eventValue = e.target.value;
        const colorSelectChildren = colorSelect.children[i].getAttribute('data-theme');
        console.log(e.target.value);
        console.log(designSelect.children[i]);

              
        if (eventValue === colorSelectChildren) {
            console.log('a match!');
            //colorSelect.children.hidden = 'false';
            colorSelect.children[i].style.display = "block";
            colorSelect.children[i].selected = 'true';
           
        } 
        if (eventValue !== colorSelectChildren) {
            console.log('they don\'t match')
            //colorSelect.children.hidden = 'true';
            colorSelect.children[i].style.display = "none";
            colorSelect.children[i].selected = 'false';
        }
    }
});

/**Event listener for checkboxes - each check adds to the total, each uncheck subtracts. */
registerActivity.addEventListener('change', e => {
    const dataCost = parseFloat(e.target.getAttribute('data-cost'));
    const activityBox = e.target.checked;
    if (e.target.checked) {
        totalCost += dataCost;        
    } else if (!e.target.checked) {
        totalCost -= dataCost; 
    }
    activitiesTotal.innerHTML = `Total: $${totalCost}`;
    /**This section disables activities that happen concurrently, based on user input.*/
    if (librariesWS.checked) {
        frameworkWS.setAttribute('disabled', 'disabled');
    } else if (!librariesWS.checked) {
        frameworkWS.removeAttribute('disabled');
    }
    if (frameworkWS.checked) {
        librariesWS.setAttribute('disabled', 'disabled');
    } else if (!frameworkWS.checked) {
        librariesWS.removeAttribute('disabled');
    }
    if (nodejsWS.checked) {
        buildtWS.setAttribute('disabled', 'disabled');
    } else if (!nodejsWS.checked) {
        buildtWS.removeAttribute('disabled');
    }
    if (buildtWS.checked) {
        nodejsWS.setAttribute('disabled', 'disabled');
    } else if (!buildtWS.checked) {
        nodejsWS.removeAttribute('disabled');
    }
});


/**Payment validation */
/**credit card is the default payment method, payPal and bitCoin methods are 
 * obscured until they are chosen.*/
payPal.style.display = 'none';
bitCoin.style.display = 'none';

/**This sets 'credit' as the default payment method */
payment.children[1].setAttribute('class', 'selected');

/**Event listener for payment method selection. */
payment.addEventListener('change', e =>{
    if (e.target.value === 'credit-card') {
        credit.style.display = 'block';
        bitCoin.style.display = 'none';
        payPal.style.display = 'none'
    } else if (e.target.value === 'paypal') {
        payPal.style.display = 'block';
        credit.style.display = 'none';
        bitCoin.style.display = 'none';
    } else if (e.target.value === 'bitcoin') {
        bitCoin.style.display = 'block';
        credit.style.display = 'none';
        payPal.style.display = 'none'
    }  
}); 

/**wholeForm event listener validates names and e-mail addresses before the form can be submitted. */
wholeForm.addEventListener('submit', e => {
    //console.log('form submittal')
    /**nameIsValid has a regular expression that tests for first and last names.  Middle initial 
     * is optional. */
    const nameIsValid = /^[a-zA-Z]+\s?[a-zA-Z]*? [a-zA-Z]*?$/mg.test(nameInput.value);
    if (nameInput.value === "") {
        console.log('You need to add a name');
        nameInput.parentElement.lastElementChild.style.display = 'block';
    }
    if (!nameIsValid) {
        e.preventDefault();
        nameInput.parentElement.classList.add('not-valid');
        nameInput.parentElement.classList.remove('valid');
        completeNameHint.style.display = 'block';
    }
    if (nameIsValid) {
        nameInput.parentElement.classList.add('valid');
    }        
    /** email validation will first check to see if the field is blank - if it is, then it will return 
     * a message
     * "Email field cannnot be blank", otherwise it will check to see if it's formatted correctly. 
     */
    const emailIsValid = /^[^@]+@[^@.]+\.[a-z]+$/i.test(emailInput.value);
    if (emailInput.value === "") {
        completeEmailHint.style.display = 'block';
        emailInput.parentElement.classList.add('not-valid');
        emailInput.parentElement.classList.remove('valid');
        emailInput.parentElement.lastElementChild.style.display = 'none';
    }
    else if (!emailIsValid && emailInput !== "") {
        e.preventDefault();
        emailInput.parentElement.classList.add('not-valid');
        emailInput.parentElement.classList.remove('valid');
        emailInput.parentElement.lastElementChild.style.display = 'block';
    }
    if (emailIsValid) {
        emailInput.parentElement.classList.add('valid');
    }

    if (payment.value === 'select method') {
        e.preventDefault();
        notBlank.style.display = 'block'
    }

    if (payment.value === 'credit-card') {
        const creditValidation = /^(?:(4[0-9]{12}(?:[0-9]{3})?)|(5[1-5][0-9]{14})|(6(?:011|5[0-9]{2})[0-9]{12})|(3[47][0-9]{13})|(3(?:0[0-5]|[68][0-9])[0-9]{11})|((?:2131|1800|35[0-9]{3})[0-9]{11}))$/.test(ccNumber.value);
        /**regex for cc number from w3resource 
         * https://www.w3resource.com/javascript-exercises/javascript-regexp-exercise-2.php */
        if (creditValidation) {
            ccNumber.parentElement.classList.add('valid');
        }
        if (!creditValidation){
            e.preventDefault();
            ccNumber.parentElement.classList.add('not-valid');
            ccNumber.parentElement.classList.remove('valid');
            ccNumber.parentElement.lastElementChild.style.display = 'block';
        }
        
        const zipValidation = /^\d{5}(?:[-\s]\d{4})?$/.test(zipCode.value);
        /**zip code validator from stack overflow 
         * https://stackoverflow.com/questions/2577236/regex-for-zip-code */
        if (zipValidation) {
            zipCode.parentElement.classList.add('valid');
        }
        if (!zipValidation) {
            e.preventDefault();
            zipCode.parentElement.classList.add('not-valid');
            zipCode.parentElement.classList.remove('valid');
            zipCode.parentElement.lastElementChild.style.display = 'block';
        }
        
        const cvvValidation = /^\d{3}$/.test(cvv.value);
        if (cvvValidation) {
            cvv.parentElement.classList.add('valid');
        }
        if (!cvvValidation) {
            e.preventDefault();
            cvv.parentElement.classList.add('not-valid');
            cvv.parentElement.classList.remove('valid');
            cvv.parentElement.lastElementChild.style.display = 'block';
        }
    }


    /**This section checks to ensure that at least one activity is checked */   
    const checkedCount = Array.prototype.slice.call(checkboxes).some(checks => checks.checked);    
    if (checkedCount) {
        activitiesBox.parentElement.classList.add('valid');
    }
    if (!checkedCount) {
        activitiesBox.parentElement.classList.add('not-valid');
        activitiesBox.parentElement.classList.remove('valid');
        activitiesBox.parentElement.lastElementChild.style.display = 'block';   
    }    
});   
 
/**for...of loops for focus and blur states on each activity.  I couldn't figure
 * out how to make this work using a conventional for loop with an addEventListener
 * and the checkboxes variable with querySelectorAll.  This seems concise enough.
 */
    
 registerActivity.addEventListener('focus', e => {
     console.log('Focusing on the inputs');
 })
    for (const checkbox of checkboxes) {
        checkbox.addEventListener('focus', e =>{
            e.target.parentNode.classList.add('focus');
            })
        };
    for (const checkbox of checkboxes) {
    checkbox.addEventListener('blur', e =>{
        e.target.parentNode.classList.remove('focus');
        })
    };

/**nameInput eventListener listens for each keystroke added in the name input box and shows an 
 * error message until a valid name with a first and last name has been added.  It can include 
 * a middle name or initial.
 */
nameInput.addEventListener('keypress', e =>{
    /**nameIsValid is declared again since the keypress event listener will not work unless it's in the 
     * local scope.
     */
    const nameIsValid = /^[a-zA-Z]+\s?[a-zA-Z]*? [a-zA-Z]*?$/mg.test(nameInput.value);
    if (!nameIsValid) {
        completeNameHint.style.display = 'block';
        nameInput.parentElement.classList.add('not-valid');
        nameInput.parentElement.classList.remove('valid');
    } else if (nameIsValid) {
        completeNameHint.style.display = 'none';
        nameInput.parentElement.classList.remove('not-valid');
    }
});
