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
const jsPuns = document.querySelectorAll('option[data-theme="js puns"]');
const heartJS = document.querySelectorAll('option[data-theme="heart js"]');

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

//////////////////////////////////////////////////////////////////////////////////////////
/** Name input and validation  */
/**nameInput.focus() makes the Name input box highlighted when the user opens the page. */
nameInput.focus();

/** nameValidator is a helper function that validates the name input */
function nameValidator() {
    /** The name validator below test for first and last names and will allow for a middle inital
     *  or name */
    //const nameIsValid = /^[a-zA-Z]{3,40}(?:\s[A-Z])?\s[a-zA-Z]{2,40}$/mg.test(nameInput.value);
    /**This validator just tests if the name is there's an entry.  The rubrick doesn't require 
     * anything more complex.
     */
    const nameIsValid = /^[a-zA-Z]{3,40}/mg.test(nameInput.value);
    return nameIsValid;
}

/**nameInput eventListener listens for each keystroke added in the name input box and shows an 
 * error message until a valid name with a first and last name has been added.  It can include 
 * a middle name or initial.  It will verify the input after the name is entered.  
 */
nameInput.addEventListener('input', e =>{
    if (nameInput.value === "") {
        nameInput.parentElement.lastElementChild.style.display = 'block';
        nameInput.parentElement.classList.add('not-valid');
        nameInput.parentElement.classList.remove('valid');
    }
    else if (!nameValidator()) {
        completeNameHint.style.display = 'block';
        nameInput.parentElement.classList.add('not-valid');
        nameInput.parentElement.classList.remove('valid');
        nameInput.parentElement.lastElementChild.style.display = 'none';
    } else if (nameValidator()) {
        completeNameHint.style.display = 'none';
        nameInput.parentElement.classList.add('valid');
        nameInput.parentElement.classList.remove('not-valid');
    }    
});

////////////////////////////////////////////////////////////////////////////////////////////////
/**Email input and validation */
/** emailValidator is a helper function that validates the name input */
function emailValidator() {
    const emailIsValid = /^[^@]+@[^@.]+\.[a-z]+$/i.test(emailInput.value);
    return emailIsValid;
}

/** emailInput eventListener will first check to see if the field is blank - if it is, then it will return 
     * a message "Email field cannnot be blank", otherwise it will check to see if it's formatted correctly. 
     */
emailInput.addEventListener('input', e =>{
    emailValidator();
    if (emailInput.value === "") {
        completeEmailHint.style.display = 'block';
        emailInput.parentElement.classList.add('not-valid');
        emailInput.parentElement.classList.remove('valid');
        emailInput.parentElement.lastElementChild.style.display = 'none';
    }
    else if (!emailValidator() && emailInput !== "") {
        emailInput.parentElement.classList.add('not-valid');
        emailInput.parentElement.classList.remove('valid');
        emailInput.parentElement.lastElementChild.style.display = 'block';
        completeEmailHint.style.display = 'none';
    }
    if (emailValidator()) {
        emailInput.parentElement.classList.add('valid');
        emailInput.parentElement.classList.remove('not-valid');
        emailInput.parentElement.lastElementChild.style.display = 'none';
        completeEmailHint.style.display = 'none';
    }
});

///////////////////////////////////////////////////////////////////////////////////////////////////////
/**Job Selection Menu - including other box code */
/**otherJob text box is hidden by default */ 
otherJob.style.display = 'none';

/**conditional logic in this event listener makes the "other" input box appear or dissappear.*/
jobSelect.addEventListener('change', e => {
    jobSelect.value === 'other' ? otherJob.style.display = "block": otherJob.style.display = "none";
});

///////////////////////////////////////////////////////////////////////////////////////////////////////
/**T-shirt selection section */
/**Disables the select drop down list until the Design drop down is selected. 
 * Also sets the index of the options to zero to point user to select a design.
*/
colorSelect.disabled = 'true';
colorSelect.selectedIndex = 0;
/** All select options are set to 'hidden'.  Verbose way of obscuring all color options by default before 
 * the select menu is used. 
 */
jsPuns[0].hidden = 'true'
jsPuns[1].hidden = 'true'
jsPuns[2].hidden = 'true'
heartJS[0].hidden = 'true'
heartJS[1].hidden = 'true'
heartJS[2].hidden = 'true'

/**Event listener checks for input into the dropdown list, enables selection of different T-shirt designs  */
designSelect.addEventListener('change', e => {
    colorSelect.removeAttribute('disabled');
    colorSelect.selectedIndex = 1;
    const eventValue = e.target.value;       
    /** I tried to make a for loop work here, but I got lost in the weeds several times and decided  to
     * explicitly reference each individual color option since there aren't that many of them.
     */
    if (eventValue === 'js puns') {
        jsPuns[0].removeAttribute('hidden');
        jsPuns[1].removeAttribute('hidden');
        jsPuns[2].removeAttribute('hidden');
        heartJS[0].hidden = 'true';
        heartJS[1].hidden = 'true';
        heartJS[2].hidden = 'true';
    }

    if (eventValue === 'heart js') {
        heartJS[0].removeAttribute('hidden');
        heartJS[1].removeAttribute('hidden');
        heartJS[2].removeAttribute('hidden');
        jsPuns[0].hidden = 'true';
        jsPuns[1].hidden = 'true';
        jsPuns[2].hidden = 'true';
    }
});

//////////////////////////////////////////////////////////////////////////////////////////////////////////////
/**Activity Selection Section */
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
        frameworkWS.parentElement.setAttribute('class', 'disabled');
    } else if (!librariesWS.checked) {
        frameworkWS.removeAttribute('disabled', 'disabled');
        frameworkWS.parentElement.removeAttribute('class', 'disabled');
    }
    if (frameworkWS.checked) {
        librariesWS.setAttribute('disabled', 'disabled');
        librariesWS.parentElement.setAttribute('class', 'disabled');
    } else if (!frameworkWS.checked) {
        librariesWS.removeAttribute('disabled', 'disabled');
        librariesWS.parentElement.removeAttribute('class', 'disabled');
    }
    if (nodejsWS.checked) {
        buildtWS.setAttribute('disabled', 'disabled');
        buildtWS.parentElement.setAttribute('class', 'disabled');
    } else if (!nodejsWS.checked) {
        buildtWS.removeAttribute('disabled', 'disabled');
        buildtWS.parentElement.removeAttribute('class', 'disabled');
    }
    if (buildtWS.checked) {
        nodejsWS.setAttribute('disabled', 'disabled');
        nodejsWS.parentElement.setAttribute('class', 'disabled');
    } else if (!buildtWS.checked) {
        nodejsWS.removeAttribute('disabled', 'disabled');
        nodejsWS.parentElement.removeAttribute('class', 'disabled');
    }
    /**This section checks to see if a any checkboxes are left checked after the user interacts with the field */
    const checkedCount = Array.prototype.slice.call(checkboxes).some(checks => checks.checked);    
    if (checkedCount) {
        activitiesBox.parentElement.classList.add('valid');
        activitiesBox.parentElement.classList.remove('not-valid');
        activitiesBox.parentElement.lastElementChild.style.display = 'none'; 
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

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/**Payment validation section*/

/**Credit validator function - it validates credit card numbers of different lengths from different credit card companies/banks */
function creditValidator() {
    /**regex for cc number from w3resource https://www.w3resource.com/javascript-exercises/javascript-regexp-exercise-2.php */
    //const creditValidation = /^(?:(4[0-9]{12}(?:[0-9]{3})?)|(5[1-5][0-9]{14})|(6(?:011|5[0-9]{2})[0-9]{12})|(3[47][0-9]{13})|(3(?:0[0-5]|[68][0-9])[0-9]{11})|((?:2131|1800|35[0-9]{3})[0-9]{11}))$/.test(ccNumber.value);
    /**My homebrew credit card validator that just checks for 13-16 numbers - not brand specific. */
    const creditValidation = /^\d{13,16}$/gm.test(ccNumber.value);
    return creditValidation;
}

/**Credit event listener to verify the number after it has been entered. */
credit.addEventListener('input', e=> {
    if (creditValidator()) {
        ccNumber.parentElement.classList.add('valid');
        ccNumber.parentElement.classList.remove('not-valid');
        ccNumber.parentElement.lastElementChild.style.display = 'none';
    }
    if (!creditValidator()){
        ccNumber.parentElement.classList.add('not-valid');
        ccNumber.parentElement.classList.remove('valid');
        ccNumber.parentElement.lastElementChild.style.display = 'block';
    }
});

/** Zip code validator - validates zip codes including hyphens or spaces and four digit extensions */
function zipValidator() {
    const zipValidation = /^\d{5}(?:[-\s]\d{4})?$/.test(zipCode.value);
    return zipValidation;
}

/**Zip code event listener to verify the zip code after it has been entered. */
zipCode.addEventListener('keyup', e=> {
        if (zipValidator()) {
            zipCode.parentElement.classList.add('valid');
            zipCode.parentElement.classList.remove('not-valid');
            zipCode.parentElement.lastElementChild.style.display = 'none';
        }
        if (!zipValidator()) {
            zipCode.parentElement.classList.add('not-valid');
            zipCode.parentElement.classList.remove('valid');
            zipCode.parentElement.lastElementChild.style.display = 'block';
        }
});

/**cvv number validator */
function cvvValidator() {
    const cvvValidation = /^\d{3}$/.test(cvv.value);
    return cvvValidation;
}

/**cvv number eventlistener */
cvv.addEventListener('keyup', e=> {
        if (cvvValidator()) {
            cvv.parentElement.classList.add('valid');
            cvv.parentElement.classList.remove('not-valid');
            cvv.parentElement.lastElementChild.style.display = 'none';
        }
        if (!cvvValidator()) {
            cvv.parentElement.classList.add('not-valid');
            cvv.parentElement.classList.remove('valid');
            cvv.parentElement.lastElementChild.style.display = 'block';
        }
});


/**credit card is the default payment method, payPal and bitCoin methods are 
 * obscured until they are chosen.*/
payPal.style.display = 'none';
bitCoin.style.display = 'none';

/**This sets 'credit' as the default payment method */
payment.selectedIndex = 1;

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

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/**Form submission */
/**wholeForm event listener validates names and e-mail addresses before the form can be submitted. */
wholeForm.addEventListener('submit', e => {
    /**this section prevents the form from being submitted if the name field is blank or not formatted correctly. */
    
    if (nameInput === "") {
        e.preventDefault();
        nameInput.parentElement.lastElementChild.style.display = 'block';
    }
     if (!nameValidator()) {
        e.preventDefault();
        completeNameHint.style.display = 'block';
        nameInput.parentElement.classList.add('not-valid');
        nameInput.parentElement.classList.remove('valid');
        nameInput.parentElement.lastElementChild.style.display = 'none';
    }
      
     /**this section prevents the form from being submitted if the e-mail field is blank or not formatted correctly. */
    if (emailInput.value === "") {
        completeEmailHint.style.display = 'block';
        emailInput.parentElement.classList.add('not-valid');
        emailInput.parentElement.classList.remove('valid');
        emailInput.parentElement.lastElementChild.style.display = 'none';
    }
    else if (!emailValidator() && emailInput !== "") {
        e.preventDefault();
        emailInput.parentElement.classList.add('not-valid');
        emailInput.parentElement.classList.remove('valid');
        emailInput.parentElement.lastElementChild.style.display = 'block';
    }
    
    if (payment.value === 'credit-card') {
        //const creditValidation = /^(?:(4[0-9]{12}(?:[0-9]{3})?)|(5[1-5][0-9]{14})|(6(?:011|5[0-9]{2})[0-9]{12})|(3[47][0-9]{13})|(3(?:0[0-5]|[68][0-9])[0-9]{11})|((?:2131|1800|35[0-9]{3})[0-9]{11}))$/.test(ccNumber.value);
        /**regex for cc number from w3resource 
         * https://www.w3resource.com/javascript-exercises/javascript-regexp-exercise-2.php */
        
        if (!creditValidator()){
            e.preventDefault();
            ccNumber.parentElement.classList.add('not-valid');
            ccNumber.parentElement.classList.remove('valid');
            ccNumber.parentElement.lastElementChild.style.display = 'block';
        }
        if (!zipValidator()) {
            e.preventDefault();
            zipCode.parentElement.classList.add('not-valid');
            zipCode.parentElement.classList.remove('valid');
            zipCode.parentElement.lastElementChild.style.display = 'block';
        }
        
        if (!cvvValidator()) {
            e.preventDefault();
            cvv.parentElement.classList.add('not-valid');
            cvv.parentElement.classList.remove('valid');
            cvv.parentElement.lastElementChild.style.display = 'block';
        }
    }
    /**This section checks to ensure that at least one activity is checked */   
    const checkedCount = Array.prototype.slice.call(checkboxes).some(checks => checks.checked);    
    if (!checkedCount) {
        e.preventDefault();
        activitiesBox.parentElement.classList.add('not-valid');
        activitiesBox.parentElement.classList.remove('valid');
        activitiesBox.parentElement.lastElementChild.style.display = 'block';   
    }    
});   
 



