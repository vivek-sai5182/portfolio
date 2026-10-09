/* =========================================================
   VIVEK SAI — PORTFOLIO
   VANILLA JAVASCRIPT
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    /* =====================================================
       YOUR INFORMATION
    ===================================================== */

    const portfolio = {
        name: "Vivek Sai",
        github: "https://github.com/vivek-sai5182",
        linkedin: "https://www.linkedin.com/in/vivek-sai-patabandula-284422288",
        leetcode: "https://leetcode.com/u/ySrzAS1gnk/",
        instagram: "https://instagram.com/vivek_sai_1107",
        chess: "https://www.chess.com/member/ronweasly-394",
        email: "viveksaipatabandula731@gmail.com",
        resume: "assets/resume.pdf"
    };


    /* =====================================================
       PROJECT DATA
       ===================================================== */

    const projects = [
        {
            name: "Puzzle Drill",
            github: "https://github.com/vivek-sai5182/ChessPuzzleGenerator",
            live: "https://puzzle-drill.vercel.app/"
        },

        {
            name: "Bazaar",
            github: "https://github.com/vivek-sai5182/BazaarApp_Vivek",
            live: ""
        },

        {
            name: "TARS",
            github: "",
            live: ""
        },

        {
            name: "Cancer Detection",
            github: "https://github.com/vivek-sai5182/HistoCancerDetection",
            live: ""
        },

        {
            name: "AI Quiz Generator",
            github: "https://github.com/vivek-sai5182/QuizGen_M2",
            live: ""
        },

        {
            name: "BlackCD",
            github: "https://github.com/vivek-sai5182/BlackCD",
            live: ""
        }
    ];


    /* =====================================================
       ELEMENTS
       ===================================================== */

    const navbar = document.getElementById("navbar");
    const menuToggle = document.getElementById("menuToggle");
    const navLinks = document.getElementById("navLinks");

    const navItems = document.querySelectorAll(
        ".nav-links a"
    );

    const sections = document.querySelectorAll(
        "section[id]"
    );


    /* =====================================================
       NAVBAR SCROLL EFFECT
       ===================================================== */

    function updateNavbar() {
        if (!navbar) return;

        if (window.scrollY > 30) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }
    }

    window.addEventListener(
        "scroll",
        updateNavbar,
        { passive: true }
    );

    updateNavbar();


    /* =====================================================
       MOBILE MENU
       ===================================================== */

    if (menuToggle && navLinks) {

        menuToggle.addEventListener("click", () => {

            navLinks.classList.toggle("show");

            const opened =
                navLinks.classList.contains("show");

            menuToggle.setAttribute(
                "aria-expanded",
                String(opened)
            );
        });


        navItems.forEach(link => {

            link.addEventListener("click", () => {

                navLinks.classList.remove("show");

                menuToggle.setAttribute(
                    "aria-expanded",
                    "false"
                );

            });

        });


        document.addEventListener("click", event => {

            const clickedMenu =
                navLinks.contains(event.target);

            const clickedButton =
                menuToggle.contains(event.target);

            if (
                !clickedMenu &&
                !clickedButton
            ) {
                navLinks.classList.remove("show");

                menuToggle.setAttribute(
                    "aria-expanded",
                    "false"
                );
            }

        });

    }


    /* =====================================================
       ACTIVE NAV LINK
       ===================================================== */

    const sectionObserver = new IntersectionObserver(
        entries => {

            entries.forEach(entry => {

                if (!entry.isIntersecting) return;

                const id =
                    entry.target.getAttribute("id");

                navItems.forEach(link => {

                    link.classList.remove("active");

                    if (
                        link.getAttribute("href") ===
                        `#${id}`
                    ) {
                        link.classList.add("active");
                    }

                });

            });

        },
        {
            rootMargin: "-35% 0px -55% 0px"
        }
    );


    sections.forEach(section => {
        sectionObserver.observe(section);
    });


    /* =====================================================
       HERO PARALLAX
       ===================================================== */

    const hero = document.querySelector(".hero");
    const heroGrid = document.querySelector(".hero-grid");
    const heroGlow = document.querySelector(".hero-glow");

    if (hero && heroGrid && heroGlow) {

        hero.addEventListener("mousemove", event => {

            if (window.innerWidth < 900) return;

            const rect =
                hero.getBoundingClientRect();

            const x =
                (event.clientX - rect.left) /
                rect.width -
                0.5;

            const y =
                (event.clientY - rect.top) /
                rect.height -
                0.5;

            heroGrid.style.transform =
                `translate(${x * 12}px, ${y * 12}px)`;

            heroGlow.style.transform =
                `translate(${x * 25}px, ${y * 25}px)`;
        });


        hero.addEventListener("mouseleave", () => {

            heroGrid.style.transform =
                "translate(0, 0)";

            heroGlow.style.transform =
                "translate(0, 0)";
        });

    }


    /* =====================================================
       SKILL TREE HOVER
       ===================================================== */

    const skillNodes =
        document.querySelectorAll(
            ".skill-node, .skill-root"
        );

    skillNodes.forEach(node => {

        node.addEventListener("mouseenter", () => {

            node.classList.add("skill-active");

            const branch =
                node.closest(".skill-branch");

            if (branch) {
                branch.classList.add("branch-active");
            }

        });


        node.addEventListener("mouseleave", () => {

            node.classList.remove("skill-active");

            const branch =
                node.closest(".skill-branch");

            if (branch) {
                branch.classList.remove("branch-active");
            }

        });

    });


    /* =====================================================
       SKILL NODE MAGNETIC EFFECT
       ===================================================== */

    skillNodes.forEach(node => {

        node.addEventListener("mousemove", event => {

            if (window.innerWidth < 900) return;

            const rect =
                node.getBoundingClientRect();

            const x =
                event.clientX -
                rect.left -
                rect.width / 2;

            const y =
                event.clientY -
                rect.top -
                rect.height / 2;

            node.style.transform =
                `translate(${x * 0.08}px, ${y * 0.08 - 4}px)`;
        });


        node.addEventListener("mouseleave", () => {
            node.style.transform = "";
        });

    });


    /* =====================================================
       PROJECT CARD IMAGE INTERACTION
       ===================================================== */

    const projectCards =
        document.querySelectorAll(".project-card");

    projectCards.forEach(card => {

        const image =
            card.querySelector(".project-image img");

        if (!image) return;


        card.addEventListener("mousemove", event => {

            if (window.innerWidth < 900) return;

            const rect =
                card.getBoundingClientRect();

            const x =
                (event.clientX - rect.left) /
                rect.width -
                0.5;

            const y =
                (event.clientY - rect.top) /
                rect.height -
                0.5;

            image.style.transform =
                `scale(1.06) translate(${x * 6}px, ${y * 6}px)`;
        });


        card.addEventListener("mouseleave", () => {
            image.style.transform = "";
        });


        /* Mobile tap */

        card.addEventListener("click", event => {

            if (window.innerWidth > 700) return;

            if (event.target.closest("a")) return;

            card.classList.toggle("project-open");
        });

    });


    /* =====================================================
       SCROLL REVEAL
       ===================================================== */

    const revealElements =
        document.querySelectorAll(
            ".section-heading, " +
            ".section-description, " +
            ".skill-branch, " +
            ".project-item, " +
            ".certification-card, " +
            ".beyond-card, " +
            ".about-layout, " +
            ".contact-grid"
        );


    revealElements.forEach(element => {
        element.classList.add("reveal-element");
    });


    const revealObserver =
        new IntersectionObserver(
            entries => {

                entries.forEach(entry => {

                    if (!entry.isIntersecting) return;

                    entry.target.classList.add(
                        "reveal-visible"
                    );

                    revealObserver.unobserve(
                        entry.target
                    );

                });

            },
            {
                threshold: 0.12
            }
        );


    revealElements.forEach(element => {
        revealObserver.observe(element);
    });


    /* =====================================================
       SMOOTH SCROLL
       ===================================================== */

    document.querySelectorAll(
        'a[href^="#"]'
    ).forEach(link => {

        link.addEventListener("click", event => {

            const targetId =
                link.getAttribute("href");

            if (
                !targetId ||
                targetId === "#"
            ) {
                return;
            }

            const target =
                document.querySelector(targetId);

            if (!target) return;

            event.preventDefault();

            const navbarHeight =
                navbar ? navbar.offsetHeight : 0;

            const position =
                target.getBoundingClientRect().top +
                window.scrollY -
                navbarHeight;

            window.scrollTo({
                top: position,
                behavior: "smooth"
            });

        });

    });


    /* =====================================================
       REPLACE SOCIAL LINKS
       ===================================================== */

    const allLinks =
        document.querySelectorAll("a");

    allLinks.forEach(link => {

        const text =
            link.textContent.trim().toLowerCase();

        if (text.includes("github")) {
            link.href = portfolio.github;
        }

        if (text.includes("linkedin")) {
            link.href = portfolio.linkedin;
        }

        if (text.includes("leetcode")) {
            link.href = portfolio.leetcode;
        }

        if (text.includes("instagram")) {
            link.href = portfolio.instagram;
        }

        if (text.includes("chess.com")) {
            link.href = portfolio.chess;
        }

        if (
            text === "email" ||
            link.href.startsWith("mailto:")
        ) {
            link.href =
                `mailto:${portfolio.email}`;
        }

        if (
            text.includes("resume") ||
            text.includes("download resume")
        ) {
            link.href =
                portfolio.resume;
        }

    });


    /* =====================================================
       HERO INFORMATION
       ===================================================== */

    const heroImage =
        document.querySelector(".hero-visual img");

    if (heroImage) {
        heroImage.src = "assets/profile.jpeg";
        heroImage.alt = portfolio.name;
    }


    /* =====================================================
       PROJECT LINK CLEANUP
       ===================================================== */

    /*
        This matches project cards according to
        their order in the HTML.

        If a GitHub or Live button has an empty URL,
        it will be hidden instead of showing a dead link.
    */

    projectCards.forEach((card, index) => {

        const project =
            projects[index];

        if (!project) return;

        const links =
            card.querySelectorAll(".project-links a");

        links.forEach(link => {

            const text =
                link.textContent.toLowerCase();

            if (text.includes("github")) {

                if (project.github) {
                    link.href = project.github;
                } else {
                    link.style.display = "none";
                }

            }

            if (
                text.includes("live") ||
                text.includes("demo")
            ) {

                if (project.live) {
                    link.href = project.live;
                } else {
                    link.style.display = "none";
                }

            }

        });

    });


    /* =====================================================
       EXTERNAL LINK SECURITY
       ===================================================== */

    document.querySelectorAll(
        'a[target="_blank"]'
    ).forEach(link => {

        link.rel = "noopener noreferrer";

    });


    /* =====================================================
       KEYBOARD
       ===================================================== */

    document.addEventListener("keydown", event => {

        if (event.key !== "Escape") return;

        if (!navLinks) return;

        navLinks.classList.remove("show");

        if (menuToggle) {
            menuToggle.setAttribute(
                "aria-expanded",
                "false"
            );
        }

    });


    /* =====================================================
       REDUCED MOTION
       ===================================================== */

    const reducedMotion =
        window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        ).matches;

    if (reducedMotion) {

        revealElements.forEach(element => {
            element.classList.add(
                "reveal-visible"
            );
        });

    }

});