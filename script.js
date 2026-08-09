document.addEventListener("DOMContentLoaded", function () {

    const menuToggle = document.getElementById("menuToggle");
    const navMenu = document.getElementById("navMenu");

    if (menuToggle && navMenu) {

        menuToggle.addEventListener("click", function () {

            navMenu.classList.toggle("active");

            const isOpen = navMenu.classList.contains("active");

            menuToggle.setAttribute(
                "aria-label",
                isOpen ? "Close navigation" : "Open navigation"
            );

            menuToggle.setAttribute(
                "aria-expanded",
                isOpen ? "true" : "false"
            );

            menuToggle.textContent = isOpen ? "✕" : "☰";
        });


        // Close menu when a navigation link is clicked
        const navLinks = navMenu.querySelectorAll("a");

        navLinks.forEach(function (link) {

            link.addEventListener("click", function () {

                navMenu.classList.remove("active");

                menuToggle.setAttribute(
                    "aria-label",
                    "Open navigation"
                );

                menuToggle.setAttribute(
                    "aria-expanded",
                    "false"
                );

                menuToggle.textContent = "☰";
            });

        });

    }


    // Contact form
    const contactForm = document.getElementById("contactForm");

    if (contactForm) {

        contactForm.addEventListener("submit", function (event) {

            event.preventDefault();

            const submitButton =
                contactForm.querySelector(".form-submit");

            if (submitButton) {
                submitButton.textContent = "Sending...";
                submitButton.disabled = true;
            }

            /*
             * Formspree handles the actual email submission.
             * Your form should have:
             *
             * action="https://formspree.io/f/mrpzejzg"
             * method="POST"
             */

            fetch(contactForm.action, {
                method: "POST",
                body: new FormData(contactForm),
                headers: {
                    "Accept": "application/json"
                }
            })
            .then(function (response) {

                if (response.ok) {

                    alert(
                        "Thank you! Your project request has been sent successfully."
                    );

                    contactForm.reset();

                } else {

                    alert(
                        "There was a problem sending your request. Please try again."
                    );

                }

            })
            .catch(function () {

                alert(
                    "There was a problem connecting to the email service. Please try again."
                );

            })
            .finally(function () {

                if (submitButton) {
                    submitButton.textContent =
                        "Send Project Request →";

                    submitButton.disabled = false;
                }

            });

        });

    }

});
