const form = document.querySelector("form.login-form");

form.addEventListener("submit", (event) => {
    event.preventDefault(); 

    const fields = form.elements;
    for (let i = 0; i < fields.length; i++) {
        const field = fields[i];
        if ((field.type === "email" || field.type === "password") && field.value.trim() === "") {
            alert('All form fields must be filled in');
            return;
        }
    }

});