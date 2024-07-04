document.getElementById('userForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let phone = document.getElementById('phone').value;
    
    if (validateForm(email, password, phone)) {
        alert('Form submitted successfully!');
    }
});

function validateForm(email, password, phone) {
    // Additional form validation logic can be added here
    let phonePattern = /^\+251[0-9]{9}$/;
    if (!phonePattern.test(phone)) {
        alert('Please enter a valid Ethiopian phone number.');
        return false;
    }
    
    return true;
}
