document.addEventListener("DOMContentLoaded", function () {

    /* =========================================
       MOBILE HAMBURGER MENU
    ========================================= */

    const menuToggle = document.getElementById("menuToggle");
    const navMenu = document.getElementById("navMenu");

    if (menuToggle && navMenu) {

        menuToggle.addEventListener("click", function () {

            const isOpen = navMenu.classList.toggle("active");

            menuToggle.classList.toggle("active", isOpen);

            menuToggle.setAttribute(
                "aria-expanded",
                isOpen ? "true" : "false"
            );

            menuToggle.setAttribute(
                "aria-label",
                isOpen ? "Close navigation" : "Open navigation"
            );

        });


        /* =========================================
           CLOSE MENU AFTER CLICKING A LINK
        ========================================= */

        const navLinks = navMenu.querySelectorAll("a");

        navLinks.forEach(function (link) {

            link.addEventListener("click", function () {

                navMenu.classList.remove("active");

                menuToggle.classList.remove("active");

                menuToggle.setAttribute(
                    "aria-expanded",
                    "false"
                );

                menuToggle.setAttribute(
                    "aria-label",
                    "Open navigation"
                );

            });

        });


        /* =========================================
           CLOSE MENU WHEN CLICKING OUTSIDE
        ========================================= */

        document.addEventListener("click", function (event) {

            const clickedInsideMenu =
                navMenu.contains(event.target);

            const clickedToggle =
                menuToggle.contains(event.target);

            if (
                navMenu.classList.contains("active") &&
                !clickedInsideMenu &&
                !clickedToggle
            ) {

                navMenu.classList.remove("active");

                menuToggle.classList.remove("active");

                menuToggle.setAttribute(
                    "aria-expanded",
                    "false"
                );

                menuToggle.setAttribute(
                    "aria-label",
                    "Open navigation"
                );

            }

        });


        /* =========================================
           CLOSE MENU WITH ESCAPE KEY
        ========================================= */

        document.addEventListener("keydown", function (event) {

            if (
                event.key === "Escape" &&
                navMenu.classList.contains("active")
            ) {

                navMenu.classList.remove("active");

                menuToggle.classList.remove("active");

                menuToggle.setAttribute(
                    "aria-expanded",
                    "false"
                );

                menuToggle.setAttribute(
                    "aria-label",
                    "Open navigation"
                );

                menuToggle.focus();

            }

        });

    }


    /* =========================================
       CONTACT FORM — FORMSPREE
    ========================================= */

    const contactForm =
        document.getElementById("contactForm");

    const contactSubmit =
        document.getElementById("contactSubmit");

    const formSuccess =
        document.getElementById("formSuccess");


    if (contactForm) {

        contactForm.addEventListener(
            "submit",
            async function (event) {

                event.preventDefault();


                /* Disable button */

                if (contactSubmit) {

                    contactSubmit.disabled = true;

                    contactSubmit.textContent =
                        "Sending...";

                }


                /* Clear previous message */

                if (formSuccess) {

                    formSuccess.textContent = "";

                    formSuccess.classList.remove("show");

                }


                try {

                    const response = await fetch(
                        contactForm.action,
                        {
                            method: "POST",

                            body:
                                new FormData(contactForm),

                            headers: {
                                "Accept":
                                    "application/json"
                            }
                        }
                    );


                    if (response.ok) {

                        /* Success message */

                        if (formSuccess) {

                            formSuccess.textContent =
                                "Thank you! Your project request has been sent successfully. We will get back to you soon.";

                            formSuccess.classList.add(
                                "show"
                            );

                        }


                        /* Reset form */

                        contactForm.reset();


                        /* Update button */

                        if (contactSubmit) {

                            contactSubmit.textContent =
                                "Request Sent ✓";

                        }


                        /* Return button to normal */

                        setTimeout(function () {

                            if (contactSubmit) {

                                contactSubmit.disabled =
                                    false;

                                contactSubmit.textContent =
                                    "Send Project Request →";

                            }

                        }, 5000);


                    } else {

                        throw new Error(
                            "Form submission failed."
                        );

                    }

                } catch (error) {

                    console.error(
                        "Contact form error:",
                        error
                    );


                    if (formSuccess) {

                        formSuccess.textContent =
                            "Something went wrong. Please try again or email Bailernest62@gmail.com.";

                        formSuccess.classList.add(
                            "show"
                        );

                    }


                    if (contactSubmit) {

                        contactSubmit.disabled =
                            false;

                        contactSubmit.textContent =
                            "Send Project Request →";

                    }

                }

            }
        );

    }


    /* =========================================
       REVIEW FORM — FORMSPREE
    ========================================= */

    const reviewForm =
        document.getElementById("reviewForm");

    const reviewSubmit =
        document.getElementById("reviewSubmit");

    const reviewSuccess =
        document.getElementById("reviewSuccess");


    if (reviewForm) {

        reviewForm.addEventListener(
            "submit",
            async function (event) {

                event.preventDefault();


                /* Disable button */

                if (reviewSubmit) {

                    reviewSubmit.disabled = true;

                    reviewSubmit.textContent =
                        "Submitting...";

                }


                /* Clear previous message */

                if (reviewSuccess) {

                    reviewSuccess.textContent = "";

                    reviewSuccess.classList.remove(
                        "show"
                    );

                }


                try {

                    const response = await fetch(
                        reviewForm.action,
                        {
                            method: "POST",

                            body:
                                new FormData(reviewForm),

                            headers: {
                                "Accept":
                                    "application/json"
                            }
                        }
                    );


                    if (response.ok) {

                        /* Success message */

                        if (reviewSuccess) {

                            reviewSuccess.textContent =
                                "Thank you! Your review has been submitted successfully.";

                            reviewSuccess.classList.add(
                                "show"
                            );

                        }


                        /* Reset form */

                        reviewForm.reset();


                        /* Update button */

                        if (reviewSubmit) {

                            reviewSubmit.textContent =
                                "Review Submitted ✓";

                        }


                        /* Return button to normal */

                        setTimeout(function () {

                            if (reviewSubmit) {

                                reviewSubmit.disabled =
                                    false;

                                reviewSubmit.textContent =
                                    "Submit Review →";

                            }

                        }, 5000);


                    } else {

                        throw new Error(
                            "Review submission failed."
                        );

                    }

                } catch (error) {

                    console.error(
                        "Review form error:",
                        error
                    );


                    if (reviewSuccess) {

                        reviewSuccess.textContent =
                            "Something went wrong. Please try again.";

                        reviewSuccess.classList.add(
                            "show"
                        );

                    }


                    if (reviewSubmit) {

                        reviewSubmit.disabled =
                            false;

                        reviewSubmit.textContent =
                            "Submit Review →";

                    }

                }

            }
        );

    }


    /* =========================================
       SMOOTH SCROLL
    ========================================= */

    const allLinks =
        document.querySelectorAll(
            'a[href^="#"]'
        );


    allLinks.forEach(function (link) {

        link.addEventListener(
            "click",
            function (event) {

                const targetId =
                    this.getAttribute("href");


                /* Ignore empty # links */

                if (
                    !targetId ||
                    targetId === "#"
                ) {

                    return;

                }


                const target =
                    document.querySelector(
                        targetId
                    );


                if (target) {

                    event.preventDefault();


                    target.scrollIntoView({
                        behavior: "smooth",
                        block: "start"
                    });


                    /* Update URL without jumping */

                    if (
                        history.pushState
                    ) {

                        history.pushState(
                            null,
                            "",
                            targetId
                        );

                    }

                }

            }
        );

    });


    /* =========================================
       PROJECT LINKS
    ========================================= */

    const projectLinks =
        document.querySelectorAll(
            ".project-link, .project-visit"
        );


    projectLinks.forEach(function (link) {

        link.addEventListener(
            "click",
            function () {

                /*
                 * External project links are allowed
                 * to open normally in a new tab.
                 */

                console.log(
                    "Opening project:",
                    link.href
                );

            }
        );

    });


    /* =========================================
       ACCESSIBILITY — ENTER/SPACE MENU
    ========================================= */

    if (menuToggle) {

        menuToggle.addEventListener(
            "keydown",
            function (event) {

                if (
                    event.key === "Enter" ||
                    event.key === " "
                ) {

                    event.preventDefault();

                    menuToggle.click();

                }

            }
        );

    }


    /* =========================================
       WINDOW RESIZE
       CLOSE MOBILE MENU ON DESKTOP
    ========================================= */

    window.addEventListener(
        "resize",
        function () {

            if (
                window.innerWidth > 768 &&
                navMenu &&
                menuToggle
            ) {

                navMenu.classList.remove(
                    "active"
                );

                menuToggle.classList.remove(
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

            }

        }
    );


});
