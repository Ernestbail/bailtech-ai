document.addEventListener("DOMContentLoaded", function () {

    /* =========================================
       MOBILE HAMBURGER MENU
    ========================================= */

    const menuToggle = document.getElementById("menuToggle");
    const navMenu = document.getElementById("navMenu");

    if (menuToggle && navMenu) {

        function openMenu() {
            navMenu.classList.add("active");

            menuToggle.setAttribute("aria-expanded", "true");
            menuToggle.setAttribute("aria-label", "Close navigation");

            menuToggle.textContent = "✕";

            document.body.classList.add("menu-open");
        }


        function closeMenu() {
            navMenu.classList.remove("active");

            menuToggle.setAttribute("aria-expanded", "false");
            menuToggle.setAttribute("aria-label", "Open navigation");

            menuToggle.textContent = "☰";

            document.body.classList.remove("menu-open");
        }


        function toggleMenu() {

            const isOpen = navMenu.classList.contains("active");

            if (isOpen) {
                closeMenu();
            } else {
                openMenu();
            }

        }


        /* Hamburger button */

        menuToggle.addEventListener("click", function (event) {

            event.preventDefault();
            event.stopPropagation();

            toggleMenu();

        });


        /* Close menu when navigation link is clicked */

        const navLinks = navMenu.querySelectorAll("a");

        navLinks.forEach(function (link) {

            link.addEventListener("click", function () {

                closeMenu();

            });

        });


        /* Close menu when clicking outside */

        document.addEventListener("click", function (event) {

            const clickedInsideMenu =
                navMenu.contains(event.target);

            const clickedButton =
                menuToggle.contains(event.target);

            if (
                navMenu.classList.contains("active") &&
                !clickedInsideMenu &&
                !clickedButton
            ) {

                closeMenu();

            }

        });


        /* Close menu with Escape key */

        document.addEventListener("keydown", function (event) {

            if (event.key === "Escape") {

                closeMenu();

            }

        });


        /* Close mobile menu if screen becomes desktop */

        window.addEventListener("resize", function () {

            if (window.innerWidth > 768) {

                closeMenu();

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


                if (contactSubmit) {

                    contactSubmit.disabled = true;

                    contactSubmit.textContent =
                        "Sending...";

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
                                "Accept":
                                    "application/json"
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

                            contactSubmit.textContent =
                                "Request Sent ✓";

                        }


                        /*
                         * Allow another submission
                         * after a short delay.
                         */

                        setTimeout(function () {

                            if (contactSubmit) {

                                contactSubmit.disabled =
                                    false;

                                contactSubmit.textContent =
                                    "Send Project Request →";

                            }

                        }, 4000);


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


                if (reviewSubmit) {

                    reviewSubmit.disabled = true;

                    reviewSubmit.textContent =
                        "Submitting...";

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
                                "Accept":
                                    "application/json"
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

                            reviewSubmit.textContent =
                                "Review Submitted ✓";

                        }


                        /*
                         * Allow another review later.
                         */

                        setTimeout(function () {

                            if (reviewSubmit) {

                                reviewSubmit.disabled =
                                    false;

                                reviewSubmit.textContent =
                                    "Submit Review →";

                            }

                        }, 4000);


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


                if (
                    targetId &&
                    targetId !== "#" &&
                    document.querySelector(targetId)
                ) {

                    event.preventDefault();


                    const target =
                        document.querySelector(
                            targetId
                        );


                    target.scrollIntoView({

                        behavior: "smooth",

                        block: "start"

                    });

                }

            }
        );

    });


    /* =========================================
       PREVENT BODY SCROLL WHEN MOBILE MENU
       IS OPEN
    ========================================= */

    const style =
        document.createElement("style");


    style.textContent = `

        @media (max-width: 768px) {

            body.menu-open {
                overflow: hidden;
            }

        }

    `;


    document.head.appendChild(style);


});
