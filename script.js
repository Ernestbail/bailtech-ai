document.addEventListener("DOMContentLoaded", function () {

    /* =====================================================
       MOBILE HAMBURGER MENU
    ===================================================== */

    const menuToggle = document.getElementById("menuToggle");
    const navMenu = document.getElementById("navMenu");

    if (menuToggle && navMenu) {

        menuToggle.addEventListener("click", function (event) {

            event.stopPropagation();

            const isOpen = menuToggle.classList.toggle("active");

            navMenu.classList.toggle("active", isOpen);

            menuToggle.setAttribute(
                "aria-expanded",
                isOpen ? "true" : "false"
            );

            menuToggle.setAttribute(
                "aria-label",
                isOpen ? "Close navigation" : "Open navigation"
            );

        });


        /* Close menu when navigation link is clicked */

        const navLinks = navMenu.querySelectorAll("a");

        navLinks.forEach(function (link) {

            link.addEventListener("click", function () {

                menuToggle.classList.remove("active");

                navMenu.classList.remove("active");

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

                menuToggle.classList.remove("active");

                navMenu.classList.remove("active");

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


        /* Close menu when pressing Escape */

        document.addEventListener("keydown", function (event) {

            if (
                event.key === "Escape" &&
                navMenu.classList.contains("active")
            ) {

                menuToggle.classList.remove("active");

                navMenu.classList.remove("active");

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


        /* Close mobile menu if window becomes desktop size */

        window.addEventListener("resize", function () {

            if (window.innerWidth > 750) {

                menuToggle.classList.remove("active");

                navMenu.classList.remove("active");

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

    }


    /* =====================================================
       CONTACT FORM — FORMSPREE
    ===================================================== */

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


                if (contactSubmit) {

                    contactSubmit.disabled = true;

                    contactSubmit.textContent =
                        "Sending...";

                }


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

                        if (formSuccess) {

                            formSuccess.textContent =
                                "Thank you! Your project request has been sent successfully. We will get back to you soon.";

                            formSuccess.classList.add(
                                "show"
                            );

                        }


                        contactForm.reset();


                        if (contactSubmit) {

                            contactSubmit.textContent =
                                "Request Sent ✓";

                        }

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

                        contactSubmit.disabled = false;

                        contactSubmit.textContent =
                            "Send Project Request →";

                    }

                }

            }
        );

    }


    /* =====================================================
       REVIEW FORM — FORMSPREE
    ===================================================== */

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


                if (reviewSubmit) {

                    reviewSubmit.disabled = true;

                    reviewSubmit.textContent =
                        "Submitting...";

                }


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

                        if (reviewSuccess) {

                            reviewSuccess.textContent =
                                "Thank you! Your review has been submitted successfully.";

                            reviewSuccess.classList.add(
                                "show"
                            );

                        }


                        reviewForm.reset();


                        if (reviewSubmit) {

                            reviewSubmit.textContent =
                                "Review Submitted ✓";

                        }

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

                        reviewSubmit.disabled = false;

                        reviewSubmit.textContent =
                            "Submit Review →";

                    }

                }

            }
        );

    }


    /* =====================================================
       SMOOTH SCROLL
    ===================================================== */

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


                if (
                    targetId &&
                    targetId !== "#"
                ) {

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

                    }

                }

            }
        );

    });


    /* =====================================================
       PREVENT FORM BUTTON DOUBLE CLICKS
    ===================================================== */

    const forms =
        document.querySelectorAll("form");


    forms.forEach(function (form) {

        form.addEventListener(
            "invalid",
            function () {

                const firstInvalid =
                    form.querySelector(
                        ":invalid"
                    );


                if (firstInvalid) {

                    firstInvalid.scrollIntoView({
                        behavior: "smooth",
                        block: "center"
                    });

                }

            },
            true
        );

    });


    /* =====================================================
       IMAGE ERROR HANDLING
    ===================================================== */

    const images =
        document.querySelectorAll("img");


    images.forEach(function (image) {

        image.addEventListener(
            "error",
            function () {

                console.warn(
                    "Image could not be loaded:",
                    image.src
                );

            }
        );

    });


    /* =====================================================
       INITIALIZE MENU ACCESSIBILITY
    ===================================================== */

    if (menuToggle && navMenu) {

        menuToggle.classList.remove("active");

        navMenu.classList.remove("active");

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
