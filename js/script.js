/**Global Variables */
const nameInput = document.getElementById('name');
const jobSelect = document.getElementById('title');
const otherJob = document.getElementById('other-job-role');
//T-shirt selection menu variables
const designSelect = document.getElementById('design');
const colorSelect = document.getElementById('color');
const colorOption = document.querySelectorAll('#color option');
//Activities selection variables
const registerActivity = document.getElementById('activities');
const activitiesTotal = document.getElementById('activities-cost');
let totalCost = 0;
//Payment selection variables
const paymentMethod = document.getElementById('payment');
const credit = document.getElementById('credit-card');
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
        //console.log(colorSelect.children.hidden);
        //console.log(colorSelect.children[i]);
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
//credit.style.display = 'none';
payPal.style.display = 'none';
bitCoin.style.display = 'none';

paymentMethod.children[1].setAttribute('class', 'selected');
//console.log(paymentMethod.children.length);
//console.log(paymentMethod.children);

paymentMethod.addEventListener('change', e =>{
    console.log(e.target.value);
    const pChild = paymentMethod.children;
    console.log(pChild);
    for (let i = 0; i < pChild.length; i++) {
        if (e.target.value === pChild[i]) {
             console.log(pChild[i]);
         }
    }
    
}); 