/**Global Variables */
const nameInput = document.getElementById('name');
const jobSelect = document.getElementById('title');
const otherJob = document.getElementById('other-job-role');
const designSelect = document.getElementById('design');
const colorSelect = document.getElementById('color');
const colorOption = document.querySelectorAll('#color option');

// console.log(designSelect);
// console.log(colorSelect);
// console.log(colorOption);
// console.log(colorSelect);
// console.log(colorSelect.children);
// console.log(colorOption);

//nameInput.focus() makes the Name input box highlighted when the user opens the page. 
nameInput.focus();
//const focusTest = () => nameInput.focus ? console.log('yay!') : console.log('nay!');

//otherJob text box is hidden by default. 
otherJob.style.display = 'none';

//conditional logic in this event listener makes the "other" input box appear or dissappear.
jobSelect.addEventListener('change', e => {
    jobSelect.value === 'other' ? otherJob.style.display = "block": otherJob.style.display = "none";
});

//Disables the select drop down list until the Design drop down is selected. 
colorSelect.disabled = 'true';

designSelect.addEventListener('change', e => {
    colorSelect.removeAttribute('disabled');
    //console.log(colorSelect.disabled);
    for (let i = 0; i < colorSelect.children.length; i++) {
        const eventValue = e.target.value;
        //console.log(eventValue);
        colorSelect.children[i].getAttribute('data-theme');
       // console.log(colorOption[i].getAttribute('data-theme'));
        if (eventValue === colorOption[i].getAttribute('data-theme')) {
            //console.log('they matched!')
            colorSelect.children.hidden = 'false';
            colorSelect.children[i].style.display = "block";
        } else {
            //console.log('they didn\'t match');
            colorSelect.children.hidden = 'true';
            colorSelect.children[i].style.display = "none";
        }
        console.log(colorSelect.children.hidden);
        console.log(colorSelect.children[i]);
    }
});