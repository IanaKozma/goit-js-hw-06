const form = document.querySelector('.login-form');

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

    const formElements = event.currentTarget.elements;

    const mail = formElements.email.value;
    const pwd = formElements.password.value;

    const formData = {
        mail,
        pwd,
    };

    if (mail.length === 0 || pwd.length === 0) {
        alert("All fields must be completed!");
    } else {
        console.log(formData);
        form.reset();
    };
}
