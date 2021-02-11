const nameInput = document.getElementById('name');
nameInput.focus();
const focusTest = () => nameInput.focus ? 'yay!' : 'nay!';
console.log(focusTest());

const jobSelect = document.getElementById('title');
console.log(jobSelect);
console.log(jobSelect.value);
const otherJob = document.getElementById('other-job-role');
console.log(otherJob);

const jobHide = () => jobSelect.value !== 'other' ? otherJob.style.display = "hidden": otherJob.style.display = "show";
console.log(jobHide());