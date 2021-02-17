/**Global Variables */
const wholeForm = document.querySelector('.container');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const jobSelect = document.getElementById('title');
const otherJob = document.getElementById('other-job-role');
//T-shirt selection menu variables
const designSelect = document.getElementById('design');
const colorSelect = document.getElementById('color');
const colorOption = document.querySelectorAll('#color option');
//Activities selection variables
const registerActivity = document.getElementById('activities');
const activitiesBox = document.getElementById('activities-box');
const activitiesTotal = document.getElementById('activities-cost');
let totalCost = 0;
//Payment selection variables
const payMethod = document.querySelector('.payment-methods');
const payment = document.getElementById('payment');
const credit = document.getElementById('credit-card');
const ccNumber = document.getElementById('cc-num');
const zipCode = document.getElementById('zip');
const cvv = document.getElementById('cvv');
const payPal = document.getElementById('paypal');
const bitCoin = document.getElementById('bitcoin');


/**nameInput.focus() makes the Name input box highlighted when the user opens the page. */
nameInput.focus();
//const focusTest = () => nameInput.focus ? console.log('yay!') : console.log('nay!');

/**otherJob text box is hidden by default */ 
otherJob.style.display = 'none';

/**conditional logic in this event listener makes the "other" input box appear or dissappear.*/
jobSelect.addEventListener('change', e => {
    jobSelect.value === 'other' ? otherJob.style.display = "block": otherJob.style.display = "none";
});

/**Disables the select drop down list until the Design drop down is selected. */
colorSelect.disabled = 'true';

designSelect.addEventListener('change', e => {
    colorSelect.removeAttribute('disabled');
    for (let i = 0; i < colorSelect.children.length; i++) {
        const eventValue = e.target.value;
        colorSelect.children[i].getAttribute('data-theme');

        if (eventValue === colorOption[i].getAttribute('data-theme')) {
            //console.log('they matched!')
            colorSelect.children.hidden = 'false';
            colorSelect.children[i].style.display = "block";
        } else {
            //console.log('they didn\'t match');
            colorSelect.children.hidden = 'true';
            colorSelect.children[i].style.display = "none";
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
});

/**Payment validation */
//credit card is the default payment method, payPal and bitCoin methods are obscured until they are chosen.
payPal.style.display = 'none';
bitCoin.style.display = 'none';

/**This sets 'credit' as the default payment method */
payment.children[1].setAttribute('class', 'selected');

/**Event listener for payment method select. */
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
        console.log('form submittal')
        const nameIsValid = /^[a-zA-Z]+ ?[a-zA-Z]*? ?[a-zA-Z]*?$/.test(nameInput.value);
        if (!nameIsValid) {
            e.preventDefault();
            alert('Please enter a valid name.')
        }
        const emailIsValid = /^[^@]+@[^@.]+\.[a-z]+$/i.test(emailInput.value);
        if (!emailIsValid) {
            e.preventDefault();
            alert('Please enter a valid e-mail address');
        }
        const creditValidation = /^(?:(4[0-9]{12}(?:[0-9]{3})?)|(5[1-5][0-9]{14})|(6(?:011|5[0-9]{2})[0-9]{12})|(3[47][0-9]{13})|(3(?:0[0-5]|[68][0-9])[0-9]{11})|((?:2131|1800|35[0-9]{3})[0-9]{11}))$/.test(ccNumber.value);
        //regex for cc number from w3resource https://www.w3resource.com/javascript-exercises/javascript-regexp-exercise-2.php
        if (!creditValidation){
            e.preventDefault();
            alert('Please enter a valid credit card number');
        }
        const zipValidation = /^\d{5}(?:[-\s]\d{4})?$/.test(zipCode.value);
        //zip code validator from stack overflow https://stackoverflow.com/questions/2577236/regex-for-zip-code
        if (!zipValidation) {
            e.preventDefault();
            alert('Please enter a valid zip code');
        }
        const cvvValidation = /^\d{3}$/.test(cvv.value);
        if (!cvvValidation) {
            e.preventDefault();
            alert('Please enter a valid CVV number');
        }
        
        e.preventDefault();

    });

    console.log(registerActivity);
    console.log(typeof registerActivity);

    console.log(activitiesBox);
    console.log(typeof activitiesBox);
    console.log(activitiesBox.children);

    const checkbox = document.getElementsByTagName('input')[3];

    console.log(checkbox);
