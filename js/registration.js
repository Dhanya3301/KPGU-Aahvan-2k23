const scriptURL =
  "https://script.google.com/macros/s/AKfycbx5AmZjvK6V5UMS44hnpi_WQbYXxeotpw4gclxCDJv8FgcnbpUfBQNvdAJEWaSRzZ0r4A/exec";

const form = document.forms["registration-form"];

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) =>
      alert("Thank you! your form is submitted successfully.")
    )
    .then(() => {
      window.location.reload();
    })
    .catch((error) => console.error("Error!", error.message));
});
