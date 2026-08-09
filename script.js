/* =========================================
BAILTECH AI
MAIN JAVASCRIPT
========================================= */

/* =========================================
MOBILE HAMBURGER MENU
========================================= */

const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

if (menuToggle && navMenu) {

```
menuToggle.addEventListener("click", function () {

    navMenu.classList.toggle("active");

    const isOpen = navMenu.classList.contains("active");

    menuToggle.setAttribute(
        "aria-expanded",
        isOpen ? "true" : "false"
    );

    menuToggle.setAttribute(
        "aria-label",
        isOpen ? "Close navigation" : "Open navigation"
    );

    menuToggle.textContent = isOpen ? "✕" : "☰";

});


/* Close menu when a navigation link is clicked */

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
```

}

/* =========================================
CONTACT FORM
========================================= */

const contactForm = document.getElementById("contactForm");
const formSuccess = document.getElementById("formSuccess");
const contactSubmit = document.getElementById("contactSubmit");

if (contactForm) {

```
contactForm.addEventListener("submit", async function (event) {

    event.preventDefault();

    const formData = new FormData(contactForm);

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
                body: formData,
                headers: {
                    "Accept": "application/json"
                }
            }
        );


        if (response.ok) {

            contactForm.reset();

            if (formSuccess) {

                formSuccess.textContent =
                    "Thank you! Your project request has been sent successfully. We will get back to you soon.";

            }

        } else {

            throw new Error("Form submission failed.");

        }

    } catch (error) {

        if (formSuccess) {

            formSuccess.textContent =
                "Something went wrong. Please try again or contact us directly by email.";

        }

    } finally {

        if (contactSubmit) {

            contactSubmit.disabled = false;

            contactSubmit.textContent =
                "Send Project Request →";

        }

    }

});
```

}

/* =========================================
REVIEW FORM
========================================= */

const reviewForm = document.getElementById("reviewForm");
const reviewSuccess = document.getElementById("reviewSuccess");
const reviewSubmit = document.getElementById("reviewSubmit");

if (reviewForm) {

```
reviewForm.addEventListener("submit", async function (event) {

    event.preventDefault();

    const formData = new FormData(reviewForm);

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
                body: formData,
                headers: {
                    "Accept": "application/json"
                }
            }
        );


        if (response.ok) {

            reviewForm.reset();

            if (reviewSuccess) {

                reviewSuccess.textContent =
                    "Thank you for your review! Your review has been submitted for approval.";

            }

        } else {

            throw new Error("Review submission failed.");

        }

    } catch (error) {

        if (reviewSuccess) {

            reviewSuccess.textContent =
                "We could not submit your review. Please try again.";

        }

    } finally {

        if (reviewSubmit) {

            reviewSubmit.disabled = false;

            reviewSubmit.textContent =
                "Submit Review →";

        }

    }

});
```

}

/* =========================================
SMOOTH SCROLL
========================================= */

document.querySelectorAll('a[href^="#"]').forEach(function (link) {

```
link.addEventListener("click", function (event) {

    const targetId = this.getAttribute("href");

    if (!targetId || targetId === "#") {
        return;
    }

    const target = document.querySelector(targetId);

    if (target) {

        event.preventDefault();

        target.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

    }

});
```

});

/* =========================================
EXTERNAL LINKS
========================================= */

document.querySelectorAll('a[target="_blank"]').forEach(function (link) {

```
link.setAttribute("rel", "noopener noreferrer");
```

});
