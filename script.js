// ================= PROJECT DATA =================

const projects = [
    {
        number: "01",
        title: "Personal Portfolio",
        description:
            "A responsive portfolio website designed to showcase my journey, skills and projects as a developer.",
        technologies: ["HTML", "CSS", "JavaScript"]
    },

    {
        number: "02",
        title: "Interactive To-Do",
        description:
            "A simple task management application where users can add, complete and remove tasks.",
        technologies: ["HTML", "CSS", "JavaScript"]
    },

    {
        number: "03",
        title: "Coming Soon",
        description:
            "Another project is currently being developed as I continue expanding my JavaScript skills.",
        technologies: ["JavaScript", "React"]
    },

    {
        number: "04",
        title: "Future Project",
        description:
            "This space is reserved for the next idea I bring to life through code.",
        technologies: ["React", "JavaScript"]
    }
];


// ================= RENDER PROJECTS =================

const projectsContainer =
    document.getElementById("projects-container");

projects.forEach((project) => {

    const card = document.createElement("article");

    card.classList.add("project-card");

    card.innerHTML = `
        <div>
            <span class="project-number">${project.number}</span>

            <h3>${project.title}</h3>

            <p>${project.description}</p>
        </div>

        <div class="project-tech">
            ${project.technologies
                .map((technology) => `<span>${technology}</span>`)
                .join("")}
        </div>
    `;

    projectsContainer.appendChild(card);
});


// ================= MOBILE MENU =================

const menuButton = document.getElementById("menu-btn");
const navMenu = document.getElementById("nav-menu");

menuButton.addEventListener("click", () => {
    navMenu.classList.toggle("active");

    if (navMenu.classList.contains("active")) {
        menuButton.textContent = "✕";
    } else {
        menuButton.textContent = "☰";
    }
});


// Close menu after clicking a link

const navLinks = document.querySelectorAll("#nav-menu a");

navLinks.forEach((link) => {

    link.addEventListener("click", () => {

        navMenu.classList.remove("active");

        menuButton.textContent = "☰";

    });

});


// ================= ACTIVE NAVIGATION =================

const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {

    let currentSection = "";

    sections.forEach((section) => {

        const sectionTop = section.offsetTop - 150;

        if (window.scrollY >= sectionTop) {
            currentSection = section.getAttribute("id");
        }

    });

    navLinks.forEach((link) => {

        link.style.color = "";

        if (link.getAttribute("href") === `#${currentSection}`) {
            link.style.color = "#b77b67";
        }

    });

});


// ================= SMALL WELCOME MESSAGE =================

console.log(
    "Welcome to Naima's portfolio ✦ Built with HTML, CSS & JavaScript."
);

