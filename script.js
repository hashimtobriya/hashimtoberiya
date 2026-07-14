
        // Typing Effect
        const typing = document.getElementById("typing");
        const words = ["Frontend Developer", "React Developer", "JavaScript Developer", "UI / UX Enthusiast"];
        let word = 0, char = 0, deleting = false;

        function typeEffect() {
            if (!typing) return;
            let current = words[word];
            if (!deleting) {
                typing.textContent = current.substring(0, char);
                char++;
                if (char > current.length) { deleting = true; setTimeout(typeEffect, 1500); return; }
            } else {
                typing.textContent = current.substring(0, char);
                char--;
                if (char < 0) { deleting = false; word++; if (word >= words.length) word = 0; }
            }
            setTimeout(typeEffect, deleting ? 50 : 100);
        }
        typeEffect();

        // Section Reveal
        const allSections = document.querySelectorAll('section');
        const revealSection = () => {
            allSections.forEach(section => {
                const rect = section.getBoundingClientRect();
                if (rect.top < window.innerHeight - 100) {
                    section.classList.add('visible');
                }
            });
        };
        window.addEventListener('scroll', revealSection);
        window.addEventListener('load', revealSection);

        // Loading Bars
        function animateBars() {
            document.querySelectorAll('.bar-fill').forEach(bar => {
                const rect = bar.getBoundingClientRect();
                if (rect.top < window.innerHeight - 30) {
                    bar.style.width = bar.getAttribute('data-width') + '%';
                }
            });
        }
        window.addEventListener('scroll', animateBars);
        window.addEventListener('load', animateBars);

        // Mobile Menu
        const menuBtn = document.getElementById("menuBtn");
        const navbar = document.getElementById("navbar");
        menuBtn.addEventListener("click", () => {
            menuBtn.classList.toggle("active");
            navbar.classList.toggle("active");
        });
        document.querySelectorAll("nav a").forEach(link => {
            link.addEventListener("click", () => {
                menuBtn.classList.remove("active");
                navbar.classList.remove("active");
            });
        });

        // Back to Top
        const topBtn = document.getElementById("topBtn");
        window.addEventListener("scroll", () => {
            topBtn.style.display = window.scrollY > 400 ? "block" : "none";
        });
        topBtn.addEventListener("click", () => {
            window.scrollTo({ top: 0, behavior: "smooth" });
        });

        // Smooth Scroll
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener("click", function(e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute("href"));
                if (target) target.scrollIntoView({ behavior: "smooth" });
            });
        });

        // Form Submit
        const form = document.querySelector("form");
        if (form) {
            form.addEventListener("submit", (e) => {
                e.preventDefault();
                alert("Thank you! Your message has been received.");
                form.reset();
            });
        }

        // Sticky Header
        const header = document.querySelector("header");
        window.addEventListener("scroll", () => {
            if (window.scrollY > 30) {
                header.style.background = "rgba(5,8,22,.90)";
                header.style.backdropFilter = "blur(15px)";
                header.style.boxShadow = "0 10px 30px rgba(0,0,0,.25)";
            } else {
                header.style.background = "transparent";
                header.style.boxShadow = "none";
            }
        });

        console.log("🚀 Hashim Portfolio - VIP Ready!");