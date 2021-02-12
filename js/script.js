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

//nameInput.focus() makes the Name input box highlighted when the user opens the page. 
nameInput.focus();
//const focusTest = () => nameInput.focus ? console.log('yay!') : console.log('nay!');

//otherJob text box is hidden by default. 
otherJob.style.display = 'none';

//conditional logic in this event listener makes the 
jobSelect.addEventListener('change', e => {
    jobSelect.value === 'othe r' ? otherJob.style.display = "block": otherJob.style.display = "none";
});

colorSelect.disabled = 'true';

designSelect.addEventListener('change', e => {
    colorSelect.disabled = 'false'
    for (let i = 0; i < colorOption.length; i++) {
        const eventValue = e.target.value;
        console.log(eventValue);
        colorOption[i].getAttribute('data-theme');
        console.log(colorOption[i].getAttribute('data-theme'));
        if (eventValue === colorOption[i].getAttribute('data-theme')) {
            console.log('they matched!')
            colorOption.hidden = 'false';
            colorOption.selected = 'true';
        } else {
            console.log('they didn\'t match');
            colorOption.hidden = 'true';
            colorOption.selected = 'false';
        }
        console.log(colorOption.hidden);
        console.log(colorOption.selected);
    }
});