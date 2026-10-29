// ============================================
// TYPING EFFECT
// ============================================
const typing = document.getElementById("typing");
const words = ["Full-Stack Developer", "Next.js Developer", "React Developer", "Database Enthusiast"];
let word = 0, char = 0, deleting = false;

function typeEffect() {
    if (!typing) return;
    let current = words[word];
    if (!deleting) {
        typing.textContent = current.substring(0, char);
        char++;
        if (char > current.length) { 
            deleting = true; 
            setTimeout(typeEffect, 1500); 
            return; 
        }
    } else {
        typing.textContent = current.substring(0, char);
        char--;
        if (char < 0) { 
            deleting = false; 
            word++; 
            if (word >= words.length) word = 0; 
        }
    }
    setTimeout(typeEffect, deleting ? 50 : 100);
}
typeEffect();

// ============================================
// SECTION REVEAL ON SCROLL
// ============================================
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

// ============================================
// LOADING BARS ANIMATION
// ============================================
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

// ============================================
// MOBILE MENU TOGGLE
// ============================================
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

// ============================================
// BACK TO TOP BUTTON
// ============================================
const topBtn = document.getElementById("topBtn");
window.addEventListener("scroll", () => {
    topBtn.style.display = window.scrollY > 400 ? "block" : "none";
});
topBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});

// ============================================
// SMOOTH SCROLL FOR ANCHOR LINKS
// ============================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        if (target) target.scrollIntoView({ behavior: "smooth" });
    });
});

// ============================================
// STICKY HEADER EFFECT
// ============================================
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

// ============================================
// FORMSPREE SUBMIT (Async + Toast)
// ============================================
const form = document.getElementById("contactForm");
const submitBtn = document.getElementById("submitBtn");
const toast = document.getElementById("toast");

if (form) {
    form.addEventListener("submit", async (e) => {
        e.preventDefault();
        
        const originalText = submitBtn.textContent;
        submitBtn.textContent = "Sending...";
        submitBtn.disabled = true;

        const formData = new FormData(form);

        try {
            const response = await fetch(form.action, {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                toast.textContent = "Thank you! Your message has been sent.";
                toast.style.background = "#00FFD0"; // reset to green
                toast.style.color = "#000";
                toast.classList.add("show");
                
                form.reset();
                
                setTimeout(() => {
                    toast.classList.remove("show");
                }, 4000);
            } else {
                toast.textContent = "Oops! Something went wrong. Please try again.";
                toast.style.background = "#ff4d4d";
                toast.style.color = "#fff";
                toast.classList.add("show");
                setTimeout(() => {
                    toast.classList.remove("show");
                }, 4000);
            }
        } catch (error) {
            toast.textContent = "Network error. Please check your connection.";
            toast.style.background = "#ff4d4d";
            toast.style.color = "#fff";
            toast.classList.add("show");
            setTimeout(() => {
                toast.classList.remove("show");
            }, 4000);
        } finally {
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
        }
    });
}

console.log("🚀 Hashim Portfolio - VIP Ready!");