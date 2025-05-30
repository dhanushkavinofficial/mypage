  // AngularJS app
        const portfolioApp = angular.module('portfolioApp', []);

        portfolioApp.controller('PortfolioController', function($scope, $location, $window) {
            this.isDarkMode = false;

            this.navItems = [
                { name: 'Home', link: 'home' },
                { name: 'About', link: 'about' },
                { name: 'Skills', link: 'skills' },
                { name: 'Projects', link: 'projects' },
                { name: 'Experience', link: 'experience' },
                { name: 'Testimonials', link: 'testimonials' },
                { name: 'Contact', link: 'contact' }
            ];

            this.skills = [
                { 
                    name: 'HTML5', 
                    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg', 
                    level: 100,
                    description: 'Expertise in semantic HTML5 markup, accessibility standards, and modern web structure.'
                },
                { 
                    name: 'CSS3', 
                    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg', 
                    level: 90,
                    description: 'Advanced styling with CSS3, including animations, flexbox, grid, and responsive design.'
                },
                { 
                    name: 'JavaScript', 
                    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg', 
                    level: 90,
                    description: 'Strong command of ES6+ features, DOM manipulation, and asynchronous programming.'
                },
                { 
                    name: 'Angular', 
                    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg', 
                    level: 85,
                    description: 'Building robust single-page applications with Angular, including state management and RxJS.'
                },
                { 
                    name: 'bootstarp', 
                    logo: 'data:image/jpeg;base64,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', 
                    level: 80,
                    description: 'Bootstrap is a CSS framework for building responsive and mobile-first web applications with pre-designed components and utilities. 🚀'
                },
                { 
                    name: 'tailwind', 
                    logo: 'https://i.pinimg.com/474x/5e/42/c9/5e42c926feb229f934d3089d89c26e2f.jpg', 
                    level: 75,
                    description: 'Tailwind CSS is a utility-first CSS framework for rapidly building modern, responsive, and highly customizable user interfaces. 🚀'
                },
                { 
                    name: 'mysql', 
                    logo: 'https://i.pinimg.com/474x/09/7b/34/097b349ab1d78c15744c3a89ff457939.jpg', 
                    level: 85,
                    description: ' database design, Stored procedure , and performance optimization.'
                },
                { 
                    name: 'React', 
                    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', 
                    level: 80,
                    description: 'Component-based UI development with React, hooks, and state management.'
                },
                { 
                    name: 'Java', 
                    logo: 'https://i.pinimg.com/474x/fd/48/58/fd48583ec31127e991546475ecece550.jpg', 
                    level: 90,
                    description: 'Java is a powerful, object-oriented programming language known for its platform independence, robustness, and wide use in web, mobile, and enterprise applications. 🚀'
                },
                { 
                    name: 'Kotlin', 
                    logo: 'https://i.pinimg.com/474x/88/84/bd/8884bd0f2adfa3e54c0fd2116a883f82.jpg', 
                    level: 50,
                    description: 'Kotlin is a modern, concise, and expressive programming language that runs on the JVM, designed for interoperability with Java and widely used for Android development. 🚀'
                }
            ];

            this.projects = [
                {
                    title: 'Sky line mart ( E-Commerce)',
                    description: 'A full-stack e-commerce solution with user authentication, product management, and payment integration.',
                    image: 'https://i.pinimg.com/736x/85/d5/2c/85d52c7ddfbf966d7361084256daf436.jpg',
                    liveLink: 'https://dhanushkavinofficial.github.io/skylinemart/',
                    githubLink: 'https://github.com/dhanushkavinofficial',
                    technologies: ['HTML5', 'CSS3', 'JAVA SCRIPT', 'ANGULARJS','BOOTSTRAP','Tailwind']
                },
                {
                    title: 'You Tube Clone',
                    description: 'An simple You Tube clone with live interactive facility.',
                    image: 'https://i.pinimg.com/474x/00/57/cc/0057cc3ac15ea8fb7b41352129121eb2.jpg',
                    liveLink: 'https://dhanushkavinofficial.github.io/YOUtube/',
                    githubLink: 'https://github.com/dhanushkavinofficial',
                    technologies: ['HTML5', 'CSS3', 'Java script','BOOTSTRAP','Tailwind']
                },
                {
                    title: 'Micro Soft Edge clone',
                    description: 'an simple microsoft efge home page with interactive styling and ui',
                    image: 'https://i.pinimg.com/474x/9c/d3/7d/9cd37d1d2f2435e7e905d6d40fa3f328.jpg',
                    liveLink: 'https://dhanushkavinofficial.github.io/Edge/',
                    githubLink: 'https://github.com/dhanushkavinofficial',
                    technologies: ['HTML5', 'CSS3', 'JavaScript', 'GSAP','Bootstarp']
                },
                {
                    title: 'Google Search Engine ',
                    description: 'an Interactive Google serach engine with also an search facility , u can use the this one to search everyting u want .',
                    image: 'https://i.pinimg.com/736x/94/9d/28/949d28d90592f3f66fe4c344a48abad2.jpg',
                    liveLink: 'https://dhanushkavinofficial.github.io/google/',
                    githubLink: 'https://github.com/dhanushkavinofficial',
                    technologies: ['Angular', 'GSAP', 'JAVA', 'JAVA SCRIPT','HTML5','CSS3','Bootstarp','tailwind']
                },
                {
                    title: 'NetFlix simple UI',
                    description: 'an simple Netflx ui for the better frontend paractice and development for complex ui',
                    image: 'https://i.pinimg.com/474x/c8/bc/49/c8bc4907863e6f8fdc12e13e24d3587d.jpg',
                    liveLink: 'https://dhanushkavinofficial.github.io/Netflix/',
                    githubLink: 'https://github.com/dhanushkavinofficial',
                    technologies: ['React', 'Bootstarp', 'Tailwind', 'HTML5','CSS3','JAVA SCRIPT']
                },
                {
                    title: 'AGE Calculater',
                    description: 'An age calculacter for the frontend development ui based practice with logic of age calculaction',
                    image: 'https://i.pinimg.com/474x/eb/b0/6c/ebb06c81e02cfc7733d81c22428f1e75.jpg',
                    liveLink: 'https://dhanushkavinofficial.github.io/agecalxe/',
                    githubLink: 'https://github.com/dhanushkavinofficial',
                    technologies: ['HTML5', 'CSS3', 'Tailwind', 'JAVA SCRIPT',]
                },
                {
                    title: 'DK-Secure Pass',
                    description: 'The project for the password generaction and also an secure password export to the pfd format',
                    image: 'https://i.pinimg.com/474x/5f/34/2f/5f342f3d80031c8196d4cce3863b6f29.jpg',
                    liveLink: 'https://dhanushkavinofficial.github.io/DKsecure/',
                    githubLink: 'https://github.com/dhanushkavinofficial',
                    technologies: ['HTML5', 'CSS3', 'Tailwind', 'JAVA SCRIPT','JAVA']
                },
                {
                    title: 'NextGenDepot',
                    description: 'an project for the better UI and complex development about the enterprice web development',
                    image: 'https://i.pinimg.com/474x/29/89/05/29890559373c2222b4ff82279bd6a330.jpg',
                    liveLink: 'https://dhanushkavinofficial.github.io/Warehouse/',
                    githubLink: 'https://github.com/dhanushkavinofficial',
                    technologies: ['HTML5', 'CSS3', 'Tailwind', 'JAVA SCRIPT','JAVA','SPRING BOOT']
                },
                {
                    title: 'Finance-hub',
                    description: 'an simple Finance calculacter project for the better UI and then complex logic building and better development in this project we add the more then 5+ calxs logic  ',
                    image: 'https://i.pinimg.com/474x/38/36/90/383690152a9823422c48481b3cbf499c.jpg',
                    liveLink: 'https://dhanushkavinofficial.github.io/financecalx/',
                    githubLink: 'https://github.com/dhanushkavinofficial',
                    technologies: ['HTML5', 'CSS3', 'Tailwind', 'JAVA SCRIPT','JAVA','SPRING BOOT']
                },
                {
                    title: 'Hotstar',
                    description: 'Hotstar is a sleek and interactive finance calculator web application designed to improve both UI design skills and complex logic-building abilities. This project includes more than 5+ advanced financial calculation logics, providing users with accurate results in a fast, responsive interface. Built using modern technologies, the app is a step toward mastering frontend and backend integration with a real-world use case.  ',
                    image: 'https://i.pinimg.com/736x/7b/af/c1/7bafc179be2aa9a6da2dfe66c19bcd39.jpg',
                    liveLink: 'https://dhanushkavinofficial.github.io/hotstar/',
                    githubLink: 'https://github.com/dhanushkavinofficial',
                    technologies: ['HTML5', 'CSS3', 'Tailwind', 'JAVA SCRIPT','GSAP']
                },
                {
                    title: 'Wander Wise',
                    description: 'Explore breathtaking destinations, plan your perfect getaway, and discover unforgettable travel experiences—all in one place..  ',
                    image: 'https://i.pinimg.com/736x/52/9c/f7/529cf782df0975b52fbc878f1d68b1eb.jpg',
                    liveLink: 'https://dhanushkavinofficial.github.io/WanderWise-India/',
                    githubLink: 'https://github.com/dhanushkavinofficial',
                    technologies: ['HTML5', 'CSS3', 'Tailwind', 'JAVA SCRIPT','GSAP']
                },
                {
                    title: 'Login & signup page',
                    description: 'Enhanced UI based login and signup page   ',
                    image: 'https://i.pinimg.com/474x/0c/9b/89/0c9b89b62ba04b4b4740f4ce2da28b54.jpg',
                    liveLink: 'https://dhanushkavinofficial.github.io/login/',
                    githubLink: 'https://github.com/dhanushkavinofficial',
                    technologies: ['HTML5', 'CSS3', 'Tailwind', 'bootstrap',]
                }
            ];

            this.experience = [
                {
                   title: 'Full Stack Developer',
            company: 'ETHER SERVICES',
            period: 'September 2024 to February 2025',
            description: 'Contributed to the design, development, and deployment of scalable full-stack web applications for clients in diverse industries. Actively participated in all phases of the software development lifecycle, delivering high-performance solutions using modern technologies like Java, Spring Boot, Angular, and MySQL.',
            achievements: [
                'Engineered full-stack solutions using Angular (frontend) and Java Spring Boot (backend) for real-time and secure enterprise applications.',
                'Spearheaded integration of external APIs and dynamic data rendering, improving customer interactivity and engagement.',
                'Built scalable RESTful APIs and implemented JWT-based authentication to secure user sessions and sensitive data.',
                'Led the optimization of application logic and SQL queries, boosting overall performance by 35%.',
                'Successfully mentored junior developers, conducted code reviews, and enforced clean coding standards across projects.',
                'Collaborated closely with cross-functional teams to translate client requirements into functional features.',
                'Introduced automation scripts for testing and deployment, cutting down release cycles by 40%.',
                'Delivered three major projects within tight deadlines, ensuring high-quality standards and client satisfaction.'
            ]
                }
               
             
            ];
            

        
// Add this to your AngularJS controller, inside the PortfolioController function
// Add this after the skills array and before the projects array

this.certificates = [
  {
    name: "JavaScript (Intermediate) Certificate",
    issuer: "Hacker Rank",
    date: "January 2025",
    pdfLink: "file:///C:/Users/Hxtreme/Downloads/javascript_intermediate%20certificate.pdf", // Update with your actual PDF path
    link: "https://www.hackerrank.com/certificates/iframe/ae4f4082485b", // Update with your actual certificate link
  },
  {
    name: "Problem Solving (Basic) Certificate",
    issuer: "Hacker Rank",
    date: "feb 2025",
    pdfLink: "file:///C:/Users/Hxtreme/Downloads/problem_solving_basic%20certificate%20(1).pdf", // Update with your actual PDF path
    link: "https://www.hackerrank.com/certificates/iframe/2afa50e9d3e5", // Update with your actual certificate link
  },
  {
    name: "JavaScript (Basic) Certificate",
    issuer: "Hacker Rank",
    date: "Jan 2025",
    pdfLink: "file:///C:/Users/Hxtreme/Downloads/javascript_basic%20certificate.pdf", // Update with your actual PDF path
    link: "https://www.hackerrank.com/certificates/iframe/47570d905caf", // Update with your actual certificate link
  },
  {
            name: "PROJECT COMPLETION CERTIFICATE",
            issuer: "appin technology",
            date: "30.11.2024",
            pdfLink: "https://docs.google.com/document/d/1VdwFpjn0Rxxu_oygrzhwn-heoVXvg1ZDgHvOCopJi3E/edit?usp=sharing", // Update with your actual PDF path
            link: "https://dhanushkavinofficial.github.io/PROJECT-COMPLETION-CERTIFICATE/", // Update with your actual certificate link
        },
        {
            name: "INTERNSHIP CERTIFICATE",
            issuer: "ETHER SERVICES",
            date: "28.02.2025",
            pdfLink: "https://docs.google.com/document/d/1o8Cji2KAJmBO-pgPIKRVF0AwrvuyZzgepkut_p3OV1A/edit?usp=sharing", // Update with your actual PDF path
            link: "https://dhanushkavinofficial.github.io/INTERNSHIP-CERTIFICATE/", // Update with your actual certificate link
        },
        {
            name: "COURSE COMPLETION CERTIFICATE",
            issuer: "appin technology COIMBATORE",
            duraction: "90 Days [September 2nd 2024 to November 30th 2024]",
            pdfLink: "https://docs.google.com/document/d/1UzVOGS3CUfDhnP-0rrgyvPGMPCfZnXi3X5O-OuwTnow/edit?usp=sharing", // Update with your actual PDF path
            link: "https://dhanushkavinofficial.github.io/COURSE-COMPLETION-CERTIFICATE/", // Update with your actual certificate link
        }
]

// Add this for the resume section
this.resume = {
  pdfLink: "https://docs.google.com/document/d/1uag8RVdq6khyXkZEmapHzCyTJT4-NCWmB6O3hlIcPYY/edit?usp=sharing", // Update with your actual resume PDF path
  // Update with your online resume link
}

// Also add these to your navItems array in the controller:
// { name: 'Certificates', link: 'certificates' },
// { name: 'Resume', link: 'resume' },
// These should be added after 'Experience' and before 'Testimonials'



            this.formData = {
                name: '',
                email: '',
                subject: '',
                message: ''
            };

            this.isActive = function(viewLocation) {
                return viewLocation === $location.hash();
            };

            this.submitForm = function($event) {
                $event.preventDefault();
                // Here you would typically send the form data to a server
                console.log('Form submitted:', this.formData);
                alert('Thank you for your message! I will get back to you soon.');
                this.formData = {
                    name: '',
                    email: '',
                    subject: '',
                    message: ''
                };
            };

            this.toggleDarkMode = function() {
                this.isDarkMode = !this.isDarkMode;
                document.body.classList.toggle('dark-mode');
            };

            // Initialize after DOM is ready
            angular.element(document).ready(() => {
                this.initializeComponents();
            });

            this.initializeComponents = function() {
                // Custom cursor effect
                const cursor = document.querySelector('.cursor');
                const follower = document.querySelector('.cursor-follower');
                
                if (cursor && follower) {
                    let posX = 0, posY = 0;
                    let mouseX = 0, mouseY = 0;

                    document.addEventListener('mousemove', (e) => {
                        mouseX = e.clientX;
                        mouseY = e.clientY;
                        
                        // Add hover effect for links and buttons
                        const target = e.target;
                        if (
                            target.tagName.toLowerCase() === 'a' || 
                            target.tagName.toLowerCase() === 'button' ||
                            target.classList.contains('btn') ||
                            target.parentElement.tagName.toLowerCase() === 'a' ||
                            target.parentElement.tagName.toLowerCase() === 'button'
                        ) {
                            cursor.classList.add('cursor-hover');
                            follower.classList.add('cursor-hover');
                        } else {
                            cursor.classList.remove('cursor-hover');
                            follower.classList.remove('cursor-hover');
                        }
                    });

                    gsap.ticker.add(() => {
                        // Smooth cursor movement
                        posX += (mouseX - posX) * 0.2;
                        posY += (mouseY - posY) * 0.2;
                        
                        gsap.set(cursor, {
                            x: mouseX,
                            y: mouseY
                        });
                        
                        gsap.set(follower, {
                            x: posX,
                            y: posY
                        });
                    });
                }

                // Initialize Swiper for project carousel
                const projectSwiper = new Swiper('.project-swiper', {
                    slidesPerView: 1,
                    spaceBetween: 30,
                    loop: true,
                    pagination: {
                        el: '.swiper-pagination',
                        clickable: true,
                    },
                    navigation: {
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                    },
                    breakpoints: {
                        640: {
                            slidesPerView: 1,
                        },
                        768: {
                            slidesPerView: 2,
                        },
                        1024: {
                            slidesPerView: 3,
                        },
                    },
                    autoplay: {
                        delay: 5000,
                        disableOnInteraction: false,
                    },
                });

                // GSAP Animations
                this.initializeGSAPAnimations();

                // Scroll to top functionality
                const scrollToTopBtn = document.querySelector('#scroll-to-top');

                window.addEventListener('scroll', () => {
                    if (window.pageYOffset > 300) {
                        scrollToTopBtn.style.display = 'block';
                    } else {
                        scrollToTopBtn.style.display = 'none';
                    }
                });

                scrollToTopBtn.addEventListener('click', () => {
                    window.scrollTo({
                        top: 0,
                        behavior: 'smooth'
                    });
                });

                // Update active nav item on scroll
                window.addEventListener('scroll', () => {
                    const scrollPosition = window.scrollY;
                    const sections = document.querySelectorAll('section');
                    
                    sections.forEach(section => {
                        const sectionTop = section.offsetTop - 100;
                        const sectionHeight = section.clientHeight;
                        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                            $scope.$apply(() => {
                                $location.hash(section.id);
                            });
                        }
                    });
                });

                // Smooth scroll for anchor links
                document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                    anchor.addEventListener('click', function(e) {
                        e.preventDefault();
                        
                        const targetId = this.getAttribute('href');
                        const targetElement = document.querySelector(targetId);
                        
                        if (targetElement) {
                            window.scrollTo({
                                top: targetElement.offsetTop - 80,
                                behavior: 'smooth'
                            });
                        }
                    });
                });
            };

            this.initializeGSAPAnimations = function() {
                // Register ScrollTrigger plugin
                gsap.registerPlugin(ScrollTrigger);
                
                // Navbar animations
                gsap.to(".navbar", {
                    scrollTrigger: {
                        trigger: "body",
                        start: "top top",
                        end: "+=100",
                        toggleActions: "play none none reverse"
                    },
                    padding: "0.5rem 0",
                    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                    duration: 0.3
                });
                
                // Reveal animations for all sections
                const revealElements = document.querySelectorAll(".gsap-reveal");
                revealElements.forEach(element => {
                    gsap.fromTo(element, 
                        { opacity: 0, visibility: "hidden" },
                        {
                            scrollTrigger: {
                                trigger: element,
                                start: "top 85%",
                                toggleActions: "play none none none"
                            },
                            opacity: 1,
                            visibility: "visible",
                            y: 0,
                            duration: 0.8,
                            delay: element.dataset.delay || 0,
                            ease: "power3.out"
                        }
                    );
                });
                
                // Left reveal animations
                const revealLeftElements = document.querySelectorAll(".gsap-reveal-left");
                revealLeftElements.forEach(element => {
                    gsap.fromTo(element, 
                        { opacity: 0, visibility: "hidden", x: -50 },
                        {
                            scrollTrigger: {
                                trigger: element,
                                start: "top 85%",
                                toggleActions: "play none none none"
                            },
                            opacity: 1,
                            visibility: "visible",
                            x: 0,
                            duration: 0.8,
                            delay: element.dataset.delay || 0,
                            ease: "power3.out"
                        }
                    );
                });
                
                // Right reveal animations
                const revealRightElements = document.querySelectorAll(".gsap-reveal-right");
                revealRightElements.forEach(element => {
                    gsap.fromTo(element, 
                        { opacity: 0, visibility: "hidden", x: 50 },
                        {
                            scrollTrigger: {
                                trigger: element,
                                start: "top 85%",
                                toggleActions: "play none none none"
                            },
                            opacity: 1,
                            visibility: "visible",
                            x: 0,
                            duration: 0.8,
                            delay: element.dataset.delay || 0,
                            ease: "power3.out"
                        }
                    );
                });
                
                // Up reveal animations
                const revealUpElements = document.querySelectorAll(".gsap-reveal-up");
                revealUpElements.forEach(element => {
                    gsap.fromTo(element, 
                        { opacity: 0, visibility: "hidden", y: 50 },
                        {
                            scrollTrigger: {
                                trigger: element,
                                start: "top 85%",
                                toggleActions: "play none none none"
                            },
                            opacity: 1,
                            visibility: "visible",
                            y: 0,
                            duration: 0.8,
                            delay: element.dataset.delay || 0,
                            ease: "power3.out"
                        }
                    );
                });
                
                // Scale reveal animations
                const revealScaleElements = document.querySelectorAll(".gsap-reveal-scale");
                revealScaleElements.forEach(element => {
                    gsap.fromTo(element, 
                        { opacity: 0, visibility: "hidden", scale: 0.8 },
                        {
                            scrollTrigger: {
                                trigger: element,
                                start: "top 85%",
                                toggleActions: "play none none none"
                            },
                            opacity: 1,
                            visibility: "visible",
                            scale: 1,
                            duration: 0.8,
                            delay: element.dataset.delay || 0,
                            ease: "back.out(1.7)"
                        }
                    );
                });
                
                // Hero section animations
                gsap.timeline()
                    .fromTo(".hero-title", 
                        { opacity: 0, y: 50 },
                        { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
                    )
                    .fromTo(".hero-subtitle", 
                        { opacity: 0, y: 30 },
                        { opacity: 1, y: 0, duration: 1, ease: "power3.out" },
                        "-=0.6"
                    )
                    .fromTo(".hero .btn-custom", 
                        { opacity: 0, y: 20 },
                        { opacity: 1, y: 0, duration: 0.8, stagger: 0.2, ease: "power3.out" },
                        "-=0.6"
                    )
                    .fromTo(".hero-image", 
                        { opacity: 0, x: 50 },
                        { opacity: 1, x: 0, duration: 1, ease: "power3.out" },
                        "-=1"
                    );
                
                // Animate skill progress bars
                const animateProgressBars = () => {
                    const progressBars = document.querySelectorAll('.skill-progress');
                    progressBars.forEach(bar => {
                        const progress = bar.getAttribute('data-progress');
                        gsap.to(bar, {
                            width: progress + '%',
                            duration: 1.5,
                            ease: "power3.out"
                        });
                    });
                };
                
                // Trigger skill bar animation when skills section is in view
                ScrollTrigger.create({
                    trigger: "#skills",
                    start: "top 80%",
                    onEnter: animateProgressBars
                });
                
                // Floating animation for skill cards
                const skillCards = document.querySelectorAll('.skill-card');
                skillCards.forEach((card, index) => {
                    gsap.to(card, {
                        y: "-10px",
                        duration: 2,
                        repeat: -1,
                        yoyo: true,
                        ease: "sine.inOut",
                        delay: index * 0.1
                    });
                });
                
                // Text reveal animation for section titles
                const sectionTitles = document.querySelectorAll('.section-title');
                sectionTitles.forEach(title => {
                    const textWrapper = title;
                    textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
                    
                    gsap.fromTo(title.querySelectorAll('.letter'), 
                        { opacity: 0, y: 20, rotationX: -90 },
                        {
                            scrollTrigger: {
                                trigger: title,
                                start: "top 85%",
                                toggleActions: "play none none none"
                            },
                            opacity: 1,
                            y: 0,
                            rotationX: 0,
                            stagger: 0.03,
                            duration: 0.8,
                            ease: "back.out(1.7)"
                        }
                    );
                });
                
                // Parallax effect for hero section
                gsap.to(".hero-shape-1", {
                    scrollTrigger: {
                        trigger: ".hero",
                        start: "top top",
                        end: "bottom top",
                        scrub: 1
                    },
                    y: 100,
                    ease: "none"
                });
                
                gsap.to(".hero-shape-2", {
                    scrollTrigger: {
                        trigger: ".hero",
                        start: "top top",
                        end: "bottom top",
                        scrub: 1
                    },
                    y: -100,
                    ease: "none"
                });
                
                // Timeline animation
                const timelineItems = document.querySelectorAll('.timeline-item');
                timelineItems.forEach((item, index) => {
                    const direction = item.classList.contains('timeline-item-left') ? -50 : 50;
                    
                    gsap.fromTo(item.querySelector('.timeline-content'), 
                        { opacity: 0, x: direction },
                        {
                            scrollTrigger: {
                                trigger: item,
                                start: "top 80%",
                                toggleActions: "play none none none"
                            },
                            opacity: 1,
                            x: 0,
                            duration: 0.8,
                            delay: index * 0.1,
                            ease: "power3.out"
                        }
                    );
                });
            };
        });