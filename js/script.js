document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e){
        e.preventDefault();

        document.querySelector(this.getAttribute("href"))
        .scrollIntoView({
            behavior:"smooth"
        });
    });
});
// ===============================
// Sticky Navbar
// ===============================

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 80) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }

});
// ===============================
// Scroll To Top Button
// ===============================

const scrollBtn = document.getElementById("scrollTopBtn");

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {

        scrollBtn.style.display = "block";

    } else {

        scrollBtn.style.display = "none";

    }

});

scrollBtn.addEventListener("click", () => {

    window.scrollTo({

        top:0,
        behavior:"smooth"

    });

});
// ===============================
// Active Navigation
// ===============================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".navbar ul li a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.clientHeight;

        if (window.scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }

    });

});
// ===============================
// Counter Animation
// ===============================

const counters = document.querySelectorAll(".count");

counters.forEach(counter => {

    counter.innerText = "0";

    const updateCounter = () => {

        const target = +counter.getAttribute("data-target");

        const current = +counter.innerText;

        const increment = Math.ceil(target / 100);

        if(current < target){

            counter.innerText = current + increment;

            setTimeout(updateCounter,20);

        }else{

            counter.innerText = target + "+";

        }

    };

    updateCounter();

});
 // ===============================
// SCROLL REVEAL
// ===============================

const hiddenElements = document.querySelectorAll(".hidden");

const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

});

hiddenElements.forEach(el=>observer.observe(el));
// ===============================
// CONTACT FORM -> WHATSAPP
// ===============================

const form = document.getElementById("contactForm");

if (form) {

    form.addEventListener("submit", function(e){

        e.preventDefault();

        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const phone = document.getElementById("phone").value;
        const message = document.getElementById("message").value;

        const whatsappMessage =
`Hello Dhruvi Electrical,

Name: ${name}

Phone: ${phone}

Email: ${email}

Work:
${message}`;

        const url =
`https://wa.me/919723149579?text=${encodeURIComponent(whatsappMessage)}`;

        window.open(url,"_blank");

        form.reset();

    });

}
// ===============================
// MOBILE MENU
// ===============================

const menuToggle = document.getElementById("menu-toggle");
const navMenu = document.querySelector(".navbar ul");

if(menuToggle){

menuToggle.addEventListener("click",()=>{

    navMenu.classList.toggle("active");

});

}
// ===============================
// FAQ
// ===============================

const faq = document.querySelectorAll(".faq-item");

faq.forEach(item=>{

    const btn=item.querySelector(".faq-question");

    btn.addEventListener("click",()=>{

        item.classList.toggle("active");

    });

});
window.addEventListener("load",()=>{

document.getElementById("loader").style.display="none";

});