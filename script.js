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
   SUPABASE REVIEW SYSTEM
========================================= */

const supabaseUrl =
    "https://hemwetgtyqsqeaauioqu.supabase.co";

const supabaseKey =
    "sb_publishable_-UmAz5_q20Svn1VW6qRR9w_kgRL5Q3c";

const supabaseClient =
    window.supabase.createClient(
        supabaseUrl,
        supabaseKey
    );


/* =========================================
   REVIEW FORM
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


            /* Disable submit button */

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


            /* Get review information */

            const businessName =
                document.getElementById(
                    "reviewBusiness"
                ).value.trim();


            const service =
                document.getElementById(
                    "reviewService"
                ).value.trim();


            const rating =
                Number(
                    document.getElementById(
                        "reviewRating"
                    ).value
                );


            const reviewText =
                document.getElementById(
                    "reviewMessage"
                ).value.trim();


            try {

                /*
                 * We do not set "published" here.
                 *
                 * The Supabase trigger decides:
                 *
                 * 4-5 stars = published true
                 * 1-3 stars = published false
                 */

                const { error } =
                    await supabaseClient
                        .from("reviews")
                        .insert([
                            {
                                business_name:
                                    businessName,

                                service:
                                    service,

                                rating:
                                    rating,

                                review_text:
                                    reviewText
                            }
                        ]);


                if (error) {

                    throw error;

                }


                /* Success message */

                if (reviewSuccess) {

                    reviewSuccess.textContent =
                        "Thank you! Your review has been submitted successfully.";

                    reviewSuccess.classList.add(
                        "show"
                    );

                }


                /* Clear form */

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


            } catch (error) {

                console.error(
                    "Supabase review error:",
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
   LOAD PUBLISHED REVIEWS FROM SUPABASE
========================================= */

async function loadPublishedReviews() {

    const reviewsContainer =
        document.getElementById("supabaseReviews");


    if (!reviewsContainer) {
        return;
    }


    try {

        const { data, error } =
            await supabaseClient
                .from("reviews")
                .select(
    "business_name, service, rating, review_text, created_at"
)
                .eq("published", true)
                .order("created_at", {
                    ascending: false
                });


        if (error) {
            throw error;
        }


        reviewsContainer.innerHTML = "";


        if (!data || data.length === 0) {
            return;
        }


        data.forEach(function (review) {

            const article =
                document.createElement("article");

            article.className =
                "review-card";


            const stars =
                "★".repeat(review.rating) +
                "☆".repeat(5 - review.rating);


            const initials =
                review.business_name
                    .split(" ")
                    .map(function (word) {
                        return word.charAt(0);
                    })
                    .join("")
                    .substring(0, 2)
                    .toUpperCase();


            const date =
                review.created_at
                    ? new Date(
                          review.created_at
                      ).toLocaleDateString(
                          "en-US",
                          {
                              year: "numeric",
                              month: "long",
                              day: "numeric"
                          }
                      )
                    : "";


            article.innerHTML = `
                <div
                    class="review-stars"
                    aria-label="${review.rating} out of 5 stars"
                >
                    ${stars}
                </div>

                <p class="review-text">
                    “${review.review_text}”
                </p>

                <div class="review-author">

                    <div class="review-author-icon">
                        ${initials}
                    </div>

                    <div>

                        <strong>
    ${review.business_name}
</strong>

<span>
    ${review.service || "BailTech AI Service"}
</span>

                        ${
                            date
                                ? `<div class="review-date">${date}</div>`
                                : ""
                        }

                    </div>

                </div>

                <div class="review-verified">
                    ✓ Verified Customer
                </div>
            `;


            reviewsContainer.appendChild(
                article
            );

        });


    } catch (error) {

        console.error(
            "Error loading published reviews:",
            error
        );

    }

}


/* Load approved reviews when page opens */

loadPublishedReviews();
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
