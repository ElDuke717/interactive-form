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

//conditional logic in this event listener makes the 
jobSelect.addEventListener('change', e => {
    jobSelect.value === 'other' ? otherJob.style.display = "block": otherJob.style.display = "none";
});

colorSelect.disabled = 'true';
//console.log(colorSelect.disabled);

designSelect.addEventListener('change', e => {
    colorSelect.removeAttribute('disabled');
    //console.log(colorSelect.disabled);
    for (let i = 0; i < colorSelect.children.length; i++) {
        const eventValue = e.target.value;
        //console.log(eventValue);
        colorSelect.children[i].getAttribute('data-theme');
       // console.log(colorOption[i].getAttribute('data-theme'));
        if (eventValue === colorOption[i].getAttribute('data-theme')) {
            console.log('they matched!')
            colorSelect.children.hidden = 'false';
            colorSelect.children[i].style.display = "show";
        } else {
            console.log('they didn\'t match');
            colorSelect.children.hidden = 'true';
            colorSelect.children[i].style.display = "none";
        }
        console.log(colorSelect.children.hidden);
        console.log(colorSelect.children[i].selected);
    }
});