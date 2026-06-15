/*EmailJS */
emailjs.init("UYRy36jT937LKCpWn");

document
  .getElementById("contact-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    const status = document.getElementById("form-status");
    status.textContent = "Sending...";

    emailjs
      .sendForm("service_8zkrcgo", "template_jqxqc9c", this)
      .then(() => {
        status.textContent = "Message sent successfully!";
        status.style.color = "4bb7744";
        this.resizeTo();
      })

      .catch(() => {
        status.textContent = "Something went wrong. Please try again.";
        status.style.color = "b74b4b";
      });
  });
