const form = document.getElementById('registration-form');
const tableBody = document.querySelector('#registered-users tbody');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    
    const name = form.elements['name'].value;
    const email = form.elements['email'].value;
    const password = form.elements['password'].value;
    const dob = form.elements['dob'].value;
    const terms = form.elements['terms'].checked;

    if (!isValidEmail(email)) {
        alert('Please enter a valid email address.');
        return;
    }

    const age = calculateAge(dob);
    if (age < 18 || age > 55) {
        alert('You must be between 18 and 55 years old to register.');
        return;
    }

    const row = tableBody.insertRow();
    const nameCell = row.insertCell();
    const emailCell = row.insertCell();
    const passwordCell = row.insertCell();
    const dobCell = row.insertCell();
    const termsCell = row.insertCell();

    nameCell.textContent = name;
    emailCell.textContent = email;
    passwordCell.textContent = password;
    dobCell.textContent = dob;
    termsCell.textContent = terms ? 'true' : 'false';

    form.reset();
});

function isValidEmail(email) {
    const emailRegex = /\S+@\S+\.\S+/;
    return emailRegex.test(email);
}

function calculateAge(dob) {
    const now = new Date();
    const birthDate = new Date(dob);
    let age = now.getFullYear() - birthDate.getFullYear();