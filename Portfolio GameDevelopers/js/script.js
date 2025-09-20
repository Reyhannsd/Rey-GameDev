document.addEventListener('DOMContentLoaded', function() {
    // Mobile Navigation
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('navLinks');
    
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        hamburger.innerHTML = navLinks.classList.contains('active') 
            ? '<i class="fas fa-times"></i>' 
            : '<i class="fas fa-bars"></i>';
    });
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
                
                // Close mobile menu if open
                if (navLinks.classList.contains('active')) {
                    navLinks.classList.remove('active');
                    hamburger.innerHTML = '<i class="fas fa-bars"></i>';
                }
            }
        });
    });
    
    // Form submission
    const contactForm = document.getElementById('contactForm');
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form values
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value;
        
        // Here you would typically send the form data to a server
        // For this example, we'll just log it and show an alert
        console.log({ name, email, subject, message });
        
        alert('Thank you for your message! I will get back to you soon.');
        contactForm.reset();
    });
    
    // Initialize particles.js
    particlesJS('particles-js', {
        "particles": {
            "number": {
                "value": 80,
                "density": {
                    "enable": true,
                    "value_area": 800
                }
            },
            "color": {
                "value": "#00ffaa"
            },
            "shape": {
                "type": "circle",
                "stroke": {
                    "width": 0,
                    "color": "#000000"
                },
                "polygon": {
                    "nb_sides": 5
                }
            },
            "opacity": {
                "value": 0.3,
                "random": false,
                "anim": {
                    "enable": false,
                    "speed": 1,
                    "opacity_min": 0.1,
                    "sync": false
                }
            },
            "size": {
                "value": 3,
                "random": true,
                "anim": {
                    "enable": false,
                    "speed": 40,
                    "size_min": 0.1,
                    "sync": false
                }
            },
            "line_linked": {
                "enable": true,
                "distance": 150,
                "color": "#6c5ce7",
                "opacity": 0.2,
                "width": 1
            },
            "move": {
                "enable": true,
                "speed": 2,
                "direction": "none",
                "random": false,
                "straight": false,
                "out_mode": "out",
                "bounce": false,
                "attract": {
                    "enable": false,
                    "rotateX": 600,
                    "rotateY": 1200
                }
            }
        },
        "interactivity": {
            "detect_on": "canvas",
            "events": {
                "onhover": {
                    "enable": true,
                    "mode": "grab"
                },
                "onclick": {
                    "enable": true,
                    "mode": "push"
                },
                "resize": true
            },
            "modes": {
                "grab": {
                    "distance": 140,
                    "line_linked": {
                        "opacity": 1
                    }
                },
                "bubble": {
                    "distance": 400,
                    "size": 40,
                    "duration": 2,
                    "opacity": 8,
                    "speed": 3
                },
                "repulse": {
                    "distance": 200,
                    "duration": 0.4
                },
                "push": {
                    "particles_nb": 4
                },
                "remove": {
                    "particles_nb": 2
                }
            }
        },
        "retina_detect": true
    });
    
    // Projects Data
    const projects = [
        {
            id: 1,
            title: "Adventure light",
            description: "Coming Soon.",
            image: "game.png",
            tags: ["Unity", "C#", "Shader Graph"],
            links: [
                { icon: "fas fa-play", text: "Play Demo", url: "#" },
                { icon: "fab fa-github", text: "View Code", url: "#" }
            ]
        },
        {
            id: 2,
            title: "-",
            description: "-",
            image: "coming.png",
            tags: ["Unreal Engine", "C++", "Python"],
            links: [
                { icon: "fas fa-play", text: "Play Demo", url: "#" },
                { icon: "fab fa-github", text: "View Code", url: "#" }
            ]
        },
        {
            id: 3,
            title: "-",
            description: "-",
            image: "coming.png",
            tags: ["Unity", "VR", "Shader Programming"],
            links: [
                { icon: "fas fa-play", text: "Play Demo", url: "#" },
                { icon: "fab fa-github", text: "View Code", url: "#" }
            ]
        },
        {
            id: 4,
            title: "-",
            description: "-",
            image: "coming.png",
            tags: ["Godot", "GDScript", "Pixel Art"],
            links: [
                { icon: "fas fa-play", text: "Play Demo", url: "#" },
                { icon: "fab fa-github", text: "View Code", url: "#" }
            ]
        },
        {
            id: 5,
            title: "-",
            description: "-",
            image: "coming.png",
            tags: ["Unity", "C#", "Procedural Generation"],
            links: [
                { icon: "fas fa-play", text: "Play Demo", url: "#" },
                { icon: "fab fa-github", text: "View Code", url: "#" }
            ]
        },
        {
            id: 6,
            title: "-",
            description: "-",
            image: "coming.png",
            tags: ["Unreal Engine", "C++", "Simulation"],
            links: [
                { icon: "fas fa-play", text: "Play Demo", url: "#" },
                { icon: "fab fa-github", text: "View Code", url: "#" }
            ]
        }
    ];
    
    // Certificates Data
    const certificates = [
        {
            id: 1,
            title: "Programmer",
            issuer: "Dicoding Bootcamp",
            date: "Oktober 2024",
            image: "dicoding.png"
        },
        {
            id: 2,
            title: "Front-End",
            issuer: "Dicoding Bootcamp",
            date: "January 2025",
            image: "dico java.png"
        },
        {
            id: 3,
            title: "Game Developers",
            issuer: "IGDX",
            date: "Desember 2024",
            image: "IGDX.png"
        },
        {
            id: 4,
            title: "Learning patch",
            issuer: "K3LH",
            date: "Agustus 2024",
            image: "k3lh.png"
        },
        {
            id: 5,
            title: "Basic AI",
            issuer: "AI",
            date: "Januari 2024",
            image: "dasar ai.png"
        },
        {
            id: 6,
            title: "Coming soon",
            issuer: "-",
            date: "-",
            image: "coming.png"
        }
    ];
    
    // Load Projects
    const projectsGrid = document.querySelector('.projects-grid');
    
    projects.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card';
        projectCard.innerHTML = `
            <img src="${project.image}" alt="${project.title}" class="project-image">
            <div class="project-info">
                <h3 class="project-title">${project.title}</h3>
                <p class="project-description">${project.description.substring(0, 100)}...</p>
                <div class="project-tags">
                    ${project.tags.map(tag => `<span class="project-tag">${tag}</span>`).join('')}
                </div>
            </div>
        `;
        
        projectCard.addEventListener('click', () => openProjectModal(project));
        projectsGrid.appendChild(projectCard);
    });
    
    // Load Certificates
    const certificatesGrid = document.querySelector('.certificates-grid');
    
    certificates.forEach(certificate => {
        const certificateCard = document.createElement('div');
        certificateCard.className = 'certificate-card';
        certificateCard.innerHTML = `
            <img src="${certificate.image}" alt="${certificate.title}" class="certificate-image">
            <div class="certificate-info">
                <h3 class="certificate-title">${certificate.title}</h3>
                <p class="certificate-issuer">${certificate.issuer}</p>
                <p class="certificate-date">${certificate.date}</p>
            </div>
        `;
        
        certificateCard.addEventListener('click', () => openCertificateModal(certificate));
        certificatesGrid.appendChild(certificateCard);
    });
    
    // Project Modal
    const projectModal = document.getElementById('projectModal');
    
    function openProjectModal(project) {
        const modalTitle = document.getElementById('modalTitle');
        const modalImage = document.getElementById('modalImage');
        const modalDescription = document.getElementById('modalDescription');
        const modalTags = document.getElementById('modalTags');
        const modalLinks = document.getElementById('modalLinks');
        
        modalTitle.textContent = project.title;
        modalImage.src = project.image;
        modalImage.alt = project.title;
        modalDescription.textContent = project.description;
        
        modalTags.innerHTML = project.tags.map(tag => 
            `<span class="project-tag">${tag}</span>`
        ).join('');
        
        modalLinks.innerHTML = project.links.map(link => 
            `<a href="${link.url}" class="project-link" target="_blank">
                <i class="${link.icon}"></i> ${link.text}
            </a>`
        ).join('');
        
        projectModal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
    
    // Certificate Modal
    const certificateModal = document.getElementById('certificateModal');
    
    function openCertificateModal(certificate) {
        const certificateImage = document.getElementById('certificateImage');
        const certificateTitle = document.getElementById('certificateTitle');
        const certificateIssuer = document.getElementById('certificateIssuer');
        const certificateDate = document.getElementById('certificateDate');
        
        certificateImage.src = certificate.image;
        certificateImage.alt = certificate.title;
        certificateTitle.textContent = certificate.title;
        certificateIssuer.textContent = certificate.issuer;
        certificateDate.textContent = certificate.date;
        
        certificateModal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
    
    // Close Modals
    document.querySelectorAll('.close-modal').forEach(closeBtn => {
        closeBtn.addEventListener('click', () => {
            projectModal.classList.remove('active');
            certificateModal.classList.remove('active');
            document.body.style.overflow = 'auto';
        });
    });
    
    // Close modals when clicking outside
    window.addEventListener('click', (e) => {
        if (e.target === projectModal) {
            projectModal.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
        if (e.target === certificateModal) {
            certificateModal.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
    });
    
    // Animate elements when they come into view
    const animateOnScroll = () => {
        const elements = document.querySelectorAll('.fade-in:not(.animated)');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;
            
            if (elementPosition < screenPosition) {
                element.classList.add('animated');
            }
        });
    };
    
    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Run once on page load
});