tailwind.config = {
  theme: {
    extend: {
      colors: {
        primary: "#3b82f6",
        secondary: "#1e40af",
      },
      borderRadius: {
        none: "0px",
        sm: "4px",
        DEFAULT: "8px",
        md: "12px",
        lg: "16px",
        xl: "20px",
        "2xl": "24px",
        "3xl": "32px",
        full: "9999px",
        button: "8px",
      },
    },
  },
};
document.addEventListener("DOMContentLoaded", function () {
  const accordionBtns = document.querySelectorAll(".accordion-btn");
  accordionBtns.forEach((btn) => {
    btn.addEventListener("click", function () {
      const target = this.getAttribute("data-target");
      const content = document.getElementById(target);
      const arrow = this.querySelector(".accordion-arrow");
      const isActive = content.classList.contains("active");
      document.querySelectorAll(".accordion-content").forEach((item) => {
        if (item.id !== target) {
          item.classList.remove("active");
        }
      });
      document.querySelectorAll(".accordion-arrow").forEach((item) => {
        if (item !== arrow) {
          item.style.transform = "rotate(0deg)";
        }
      });
      content.classList.toggle("active");
      arrow.style.transform = isActive ? "rotate(0deg)" : "rotate(180deg)";
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const contactForm = document.getElementById("contact-form");
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const formData = new FormData(this);
    const name = formData.get("name");
    const email = formData.get("email");
    const subject = formData.get("subject");
    const message = formData.get("message");
    if (name && email && subject && message) {
      alert("Thank you for your message! I will get back to you soon.");
      this.reset();
    } else {
      alert("Please fill in all fields.");
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const backToTopBtn = document.getElementById("back-to-top");
  backToTopBtn.addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
});

$("#contact-form").submit((e) => {
  e.preventDefault();
  $.ajax({
    url: "https://script.google.com/macros/s/AKfycbxmTAE3H61CSNnC2Q7hdkoW9FsbXygR6M3AQq430hvciISmdG11KVP0gK9J62oCKwIK/exec",
    data: $("#contact-form").serialize(),
    method: "post",
    success: function (response) {
      alert("Form submitted successfully");
      window.location.reload();
      //window.location.href="https://google.com"
    },
    error: function (err) {
      alert("Something Error");
    },
  });
});
