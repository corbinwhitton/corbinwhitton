var contactForm = document.getElementById("contact-form");

async function handleSubmit(event) {
    event.preventDefault();
    var status = document.getElementById("contact-status");
    var data = new FormData(event.target);
    fetch(event.target.action, {
    method: contactForm.method,
    body: data,
    headers: {
        'Accept': 'application/json'
    }
    }).then(response => {
        status.innerHTML = "Message sent!";
        status.classList.add("alert");
        status.classList.add("alert-success");
        status.classList.remove("d-none");
        contactForm.reset()
    }).catch(error => {
        status.innerHTML = "Oops! There was a problem submitting your form."
        status.classList.add("alert");
        status.classList.add("alert-danger");
        status.classList.remove("d-none");
    });
}
contactForm.addEventListener("submit", handleSubmit)