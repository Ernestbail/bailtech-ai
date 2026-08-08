document.addEventListener("DOMContentLoaded", function () {

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


        window.addEventListener("resize", function () {

            if (window.innerWidth > 750) {

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
       CONTACT FORM - FORMSPREE
    ========================================= */

    const contactForm = document.getElementById("contactForm");

    if (contactForm) {

        contactForm.addEventListener("submit", async function (event) {

            event.preventDefault();


            const submitButton =
                contactForm.querySelector(".form-submit");


            const originalButtonText =
                submitButton.innerHTML;


            submitButton.disabled = true;

            submitButton.innerHTML = "Sending Request...";


            const formData = new FormData(contactForm);


            try {

                const response = await fetch(
                    "https://formspree.io/f/mrpzejzg",
                    {
                        method: "POST",
                        body: formData,
                        headers: {
                            "Accept": "application/json"
                        }
                    }
                );


                if (response.ok) {

                    contactForm.innerHTML = `
                        <div class="form-success">

                            <div class="success-icon">
                                ✓
                            </div>

                            <h3>
                                Request Received!
                            </h3>

                            <p>
                                Thank you for contacting BailTech AI.
                                Your project request has been received,
                                and we will get back to you as soon as possible.
                            </p>

                            <button
                                type="button"
                                class="btn btn-primary"
                                id="sendAnother"
                            >
                                Send Another Request
                            </button>

                        </div>
                    `;


                    const sendAnother =
                        document.getElementById("sendAnother");


                    if (sendAnother) {

                        sendAnother.addEventListener(
                            "click",
                            function () {

                                location.reload();

                            }
                        );

                    }

                } else {

                    const data = await response.json();

                    console.error(
                        "Formspree error:",
                        data
                    );


                    throw new Error(
                        "Form submission failed."
                    );

                }


            } catch (error) {

                console.error(
                    "Submission error:",
                    error
                );


                submitButton.disabled = false;

                submitButton.innerHTML =
                    originalButtonText;


                alert(
                    "Sorry, we could not send your request. Please try again."
                );

            }

        });

    }

});
