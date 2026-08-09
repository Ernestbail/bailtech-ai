document.addEventListener("DOMContentLoaded", function () {

```
/* =========================================
   MOBILE HAMBURGER MENU
========================================= */

const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

if (menuToggle && navMenu) {

    menuToggle.addEventListener("click", function () {

        navMenu.classList.toggle("active");

        const isOpen = navMenu.classList.contains("active");

        menuToggle.setAttribute("aria-expanded", isOpen);

        menuToggle.setAttribute(
            "aria-label",
            isOpen ? "Close navigation" : "Open navigation"
        );

        menuToggle.textContent = isOpen ? "✕" : "☰";

    });


    /* Close menu after clicking a navigation link */

    const navLinks = navMenu.querySelectorAll("a");

    navLinks.forEach(function (link) {

        link.addEventListener("click", function () {

            navMenu.classList.remove("active");

            menuToggle.setAttribute(
                "aria-expanded",
                "false"
            );

            menuToggle.setAttribute(
                "aria-label",
                "Open navigation"
            );

            menuToggle.textContent = "☰";

        });

    });

}


/* =========================================
   CONTACT FORM — FORMSPREE
========================================= */

const contactForm = document.getElementById("contactForm");
const contactSubmit = document.getElementById("contactSubmit");
const formSuccess = document.getElementById("formSuccess");

if (contactForm) {

    contactForm.addEventListener("submit", async function (event) {

        event.preventDefault();

        if (contactSubmit) {
            contactSubmit.disabled = true;
            contactSubmit.textContent = "Sending...";
        }

        if (formSuccess) {
            formSuccess.textContent = "";
        }

        try {

            const response = await fetch(
                contactForm.action,
                {
                    method: "POST",
                    body: new FormData(contactForm),
                    headers: {
                        "Accept": "application/json"
                    }
                }
            );

            if (response.ok) {

                if (formSuccess) {
                    formSuccess.textContent =
                        "Thank you! Your project request has been sent successfully. We will get back to you soon.";
                }

                contactForm.reset();

                if (contactSubmit) {
                    contactSubmit.textContent = "Request Sent ✓";
                }

            } else {

                throw new Error("Form submission failed.");

            }

        } catch (error) {

            if (formSuccess) {
                formSuccess.textContent =
                    "Something went wrong. Please try again or email Bailernest62@gmail.com.";
            }

            if (contactSubmit) {
                contactSubmit.disabled = false;
                contactSubmit.textContent =
                    "Send Project Request →";
            }

        }

    });

}


/* =========================================
   REVIEW FORM — FORMSPREE
========================================= */

const reviewForm = document.getElementById("reviewForm");
const reviewSubmit = document.getElementById("reviewSubmit");
const reviewSuccess = document.getElementById("reviewSuccess");

if (reviewForm) {

    reviewForm.addEventListener("submit", async function (event) {

        event.preventDefault();

        if (reviewSubmit) {
            reviewSubmit.disabled = true;
            reviewSubmit.textContent = "Submitting...";
        }

        if (reviewSuccess) {
            reviewSuccess.textContent = "";
        }

        try {

            const response = await fetch(
                reviewForm.action,
                {
                    method: "POST",
                    body: new FormData(reviewForm),
                    headers: {
                        "Accept": "application/json"
                    }
                }
            );

            if (response.ok) {

                if (reviewSuccess) {
                    reviewSuccess.textContent =
                        "Thank you! Your review has been submitted successfully.";
                }

                reviewForm.reset();

                if (reviewSubmit) {
                    reviewSubmit.textContent = "Review Submitted ✓";
                }

            } else {

                throw new Error("Review submission failed.");

            }

        } catch (error) {

            if (reviewSuccess) {
                reviewSuccess.textContent =
                    "Something went wrong. Please try again.";
            }

            if (reviewSubmit) {
                reviewSubmit.disabled = false;
                reviewSubmit.textContent =
                    "Submit Review →";
            }

        }

    });

}


/* =========================================
   SMOOTH SCROLL
========================================= */

const allLinks = document.querySelectorAll('a[href^="#"]');

allLinks.forEach(function (link) {

    link.addEventListener("click", function (event) {

        const targetId = this.getAttribute("href");

        if (
            targetId &&
            targetId !== "#" &&
            document.querySelector(targetId)
        ) {

            event.preventDefault();

            const target = document.querySelector(targetId);

            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        }

    });

});
```

});
