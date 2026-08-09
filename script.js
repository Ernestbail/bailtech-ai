```javascript
/* =========================================
   BAILTECH AI JAVASCRIPT
========================================= */


/* =========================================
   MOBILE NAVIGATION
========================================= */

const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

if (menuToggle && navMenu) {

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


    /* Close menu when clicking outside */

    document.addEventListener("click", function (event) {

        const clickedInsideMenu =
            navMenu.contains(event.target);

        const clickedToggle =
            menuToggle.contains(event.target);

        if (
            !clickedInsideMenu &&
            !clickedToggle &&
            navMenu.classList.contains("active")
        ) {

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

        }

    });

}


/* =========================================
   REVIEW FORM
========================================= */

const reviewForm = document.getElementById("reviewForm");

if (reviewForm) {

    reviewForm.addEventListener("submit", async function (event) {

        event.preventDefault();

        const submitButton =
            reviewForm.querySelector("button[type='submit']");

        const originalText =
            submitButton.textContent;

        submitButton.disabled = true;
        submitButton.textContent = "Submitting...";


        const formData =
            new FormData(reviewForm);


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

                submitButton.textContent =
                    "Review Submitted ✓";

                alert(
                    "Thank you! Your review has been submitted for approval."
                );

                setTimeout(function () {

                    submitButton.disabled = false;
                    submitButton.textContent = originalText;

                }, 3000);

            } else {

                throw new Error(
                    "Form submission failed."
                );

            }

        } catch (error) {

            console.error(error);

            alert(
                "There was a problem submitting your review. Please try again."
            );

            submitButton.disabled = false;
            submitButton.textContent = originalText;

        }

    });

}


/* =========================================
   GOOGLE REVIEW BUTTON
========================================= */

/*
    IMPORTANT:

    After your Google Business Profile is verified,
    replace the # below with your actual Google
    review link.

    Example:

    const googleReviewUrl =
        "https://g.page/r/YOUR-REVIEW-LINK/review";
*/

const googleReviewButton =
    document.getElementById("googleReviewButton");


if (googleReviewButton) {

    googleReviewButton.addEventListener(
        "click",
        function (event) {

            const googleReviewUrl = "#";


            if (googleReviewUrl === "#") {

                event.preventDefault();

                alert(
                    "Your Google Business Profile is still being set up. Once Google verifies BailTech AI, we will add your Google Review link here."
                );

                return;

            }

            googleReviewButton.href =
                googleReviewUrl;

        }
    );

}
```
