/*Email JS*/
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
        console.log(error);
      });
  });

/**Typewriter function */

const texts = ["Software Developer", "Problem Solver"];
let textIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeWriter() {
  const typewriterText = document.querySelector(".typewriter-text");
  const currentText = texts[textIndex];

  if (isDeleting) {
    typewriterText.textContent = currentText.substring(0, charIndex - 1);
    charIndex--;
  } else {
    typewriterText.textContent = currentText.substring(0, charIndex + 1);
    charIndex++;
  }

  if (!isDeleting && charIndex === currentText.length) {
    isDeleting = true;
    setTimeout(typeWriter, 1500);
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    textIndex = (textIndex + 1) % texts.length;
    setTimeout(typeWriter, 500);
  } else {
    setTimeout(typeWriter, isDeleting ? 50 : 100);
  }
}

typeWriter();

/**Modal Cards */

function openModal(card) {
  const overlay = document.getElementById("modal-overlay");

  document.querySelector(".modal-title").textContent = card.dataset.title;

  document.querySelector(".modal-description").textContent =
    card.dataset.description;

  document.querySelector(".modal-image").src = card.dataset.image;

  document.querySelector(".modal-btn").href = card.dataset.github;

  overlay.classList.add("active");
}

function closeModal() {
  document.getElementById("modal-overlay").classList.remove("active");
}

document
  .getElementById("modal-overlay")
  .addEventListener("click", function (e) {
    if (e.target === this) closeModal();
  });
