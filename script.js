emailjs.init("UYRy36jT937LKCpWn");

document
  .getElementById("contact-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    const status = document.getElementById("form-status");
    status.textContent = "Sending...";

    emailjs
      .sendForm("service_d60vkov", "template_jqxqc9c", this)
      .then(() => {
        status.textContent = "Message sent successfully!";
        status.style.color = "#4bb774";
        this.reset();
      })
      .catch((error) => {
        status.textContent = "Something went wrong. Please try again.";
        status.style.color = "#b74b4b";
        console.log(error); // add this to see the exact error in browser console
      });
  });
