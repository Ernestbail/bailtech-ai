```javascript
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


    /* Close menu when navigation link is clicked */

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
   CLOSE MENU WHEN CLICKING OUTSIDE
========================================= */

document.addEventListener("click", function (event) {

    if (!menuToggle || !navMenu) {
        return;
    }

    const clickedInsideMenu =
        navMenu.contains(event.target);

    const clickedButton =
        menuToggle.contains(event.target);

    if (
        !clickedInsideMenu &&
        !clickedButton &&
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


/* =========================================
   CONTACT FORM
   FORMSPREE
========================================= */

const contactForm =
    document.getElementById("contactForm");

const formStatus =
    document.getElementById("formStatus");


if (contactForm) {

    contactForm.addEventListener(
        "submit",
        async function (event) {

            event.preventDefault();


            const submitButton =
                contactForm.querySelector(
                    'button[type="submit"]'
                );


            if (submitButton) {

                submitButton.disabled = true;

                submitButton.textContent =
                    "Sending...";

            }


            if (formStatus) {

                formStatus.textContent =
                    "Sending your project request...";

            }


            const formData =
                new FormData(contactForm);


            try {

                const response =
                    await fetch(
                        contactForm.action,
                        {
                            method: "POST",
                            body: formData,
                            headers: {
                                Accept:
                                    "application/json"
                            }
                        }
                    );


                if (response.ok) {

                    if (formStatus) {

                        formStatus.textContent =
                            "Thank you! Your project request has been sent successfully.";
                    }


                    contactForm.reset();


                    if (submitButton) {

                        submitButton.textContent =
                            "Request Sent ✓";

                    }

                } else {

                    throw new Error(
                        "Form submission failed."
                    );

                }

            } catch (error) {

                console.error(
                    "Formspree error:",
                    error
                );


                if (formStatus) {

                    formStatus.textContent =
                        "Something went wrong. Please try again or email us directly at Bailernest62@gmail.com.";

                }


                if (submitButton) {

                    submitButton.disabled = false;

                    submitButton.textContent =
                        "Send Project Request →";

                }

            }

        }
    );

}


/* =========================================
   REVIEWS
========================================= */

const reviewForm =
    document.getElementById("reviewForm");

const reviewsList =
    document.getElementById("reviewsList");

const reviewMessageStatus =
    document.getElementById(
        "reviewMessageStatus"
    );


/*
   These reviews are stored in the visitor's
   browser using localStorage.

   This is only the first version.

   Later we can connect this to a real
   online database so every customer can
   see the same reviews.
*/


function getReviews() {

    const savedReviews =
        localStorage.getItem(
            "bailtechReviews"
        );


    if (!savedReviews) {

        return [];

    }


    try {

        return JSON.parse(
            savedReviews
        );

    } catch (error) {

        console.error(
            "Could not load reviews:",
            error
        );

        return [];

    }

}


/* =========================================
   DISPLAY REVIEWS
========================================= */

function displayReviews() {

    if (!reviewsList) {
        return;
    }


    const reviews =
        getReviews();


    reviewsList.innerHTML = "";


    if (reviews.length === 0) {

        const emptyMessage =
            document.createElement("div");

        emptyMessage.className =
            "no-reviews";


        emptyMessage.innerHTML = `
            <h3>Be the first to review BailTech AI</h3>
            <p>
                Your feedback helps us improve and helps
                future customers learn more about our work.
            </p>
        `;


        reviewsList.appendChild(
            emptyMessage
        );

        return;

    }


    reviews.forEach(function (review) {

        const reviewCard =
            document.createElement("article");

        reviewCard.className =
            "review-card";


        const stars =
            "★".repeat(
                Number(review.rating)
            ) +
            "☆".repeat(
                5 - Number(review.rating)
            );


        reviewCard.innerHTML = `

            <div class="review-stars">
                ${stars}
            </div>

            <p class="review-text">
                "${escapeHTML(review.message)}"
            </p>

            <div class="review-author">

                <strong>
                    ${escapeHTML(review.name)}
                </strong>

                ${
                    review.business
                    ? `<span>${escapeHTML(review.business)}</span>`
                    : ""
                }

            </div>

        `;


        reviewsList.appendChild(
            reviewCard
        );

    });

}


/* =========================================
   PROTECT REVIEW DISPLAY FROM HTML
========================================= */

function escapeHTML(value) {

    const div =
        document.createElement("div");

    div.textContent =
        value || "";

    return div.innerHTML;

}


/* =========================================
   SUBMIT REVIEW
========================================= */

if (reviewForm) {

    reviewForm.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();


            const name =
                document.getElementById(
                    "reviewName"
                ).value.trim();


            const business =
                document.getElementById(
                    "reviewBusiness"
                ).value.trim();


            const rating =
                document.getElementById(
                    "reviewRating"
                ).value;


            const message =
                document.getElementById(
                    "reviewMessage"
                ).value.trim();


            if (
                !name ||
                !rating ||
                !message
            ) {

                if (reviewMessageStatus) {

                    reviewMessageStatus.textContent =
                        "Please complete your name, rating, and review.";

                }

                return;

            }


            const reviews =
                getReviews();


            const newReview = {

                name: name,

                business: business,

                rating: rating,

                message: message,

                date:
                    new Date().toISOString()

            };


            reviews.push(
                newReview
            );


            localStorage.setItem(
                "bailtechReviews",
                JSON.stringify(reviews)
            );


            reviewForm.reset();


            if (reviewMessageStatus) {

                reviewMessageStatus.textContent =
                    "Thank you! Your review has been added.";

            }


            displayReviews();


            setTimeout(
                function () {

                    if (reviewMessageStatus) {

                        reviewMessageStatus.textContent =
                            "";

                    }

                },
                5000
            );

        }
    );

}


/* =========================================
   LOAD REVIEWS ON PAGE LOAD
========================================= */

displayReviews();


/* =========================================
   SMOOTH SCROLL
========================================= */

document.querySelectorAll(
    'a[href^="#"]'
).forEach(function (link) {

    link.addEventListener(
        "click",
        function (event) {

            const targetID =
                this.getAttribute("href");


            if (
                !targetID ||
                targetID === "#"
            ) {

                return;

            }


            const target =
                document.querySelector(
                    targetID
                );


            if (target) {

                event.preventDefault();


                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

            }

        }
    );

});


/* =========================================
   RESET MENU WHEN WINDOW IS RESIZED
========================================= */

window.addEventListener(
    "resize",
    function () {

        if (
            window.innerWidth > 750 &&
            navMenu &&
            menuToggle
        ) {

            navMenu.classList.remove(
                "active"
            );

            menuToggle.setAttribute(
                "aria-expanded",
                "false"
            );

            menuToggle.setAttribute(
                "aria-label",
                "Open navigation"
            );

            menuToggle.textContent =
                "☰";

        }

    }
);
```
