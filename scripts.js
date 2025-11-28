// Portfolio Script for Alpha Ibrahima Yinguissa Barry

// DOM Elements
const themeToggle = document.getElementById('theme-toggle');
const bgToggle = document.getElementById('bg-toggle');
const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const navClose = document.getElementById('nav-close');
const contactForm = document.getElementById('contact-form');
const projectModal = document.getElementById('project-modal');
const modalClose = document.querySelector('.modal-close');
const filterBtns = document.querySelectorAll('.filter-btn');
const loadingScreen = document.getElementById('loading-screen');
//const backgroundEffects = document.getElementById('background-effects');

// Skills Data
const skillsData = [
  { name: 'Python', icon: 'fab fa-python', level: 35 },
  { name: 'SpringBoot', icon: 'fab fa-java', level: 65 },
  { name: 'Java', icon: 'fab fa-java', level: 80 },
  { name: 'REST APIs', icon: 'fas fa-code', level: 85 },
  { name: 'Laravel', icon: 'fab fa-laravel', level: 95 },
  { name: 'Flutter', icon: 'fas fa-mobile-alt', level: 70 },
  { name: 'Mobile Development', icon: 'fas fa-mobile', level: 92 },
  { name: 'Git', icon: 'fab fa-git-alt', level: 90 },
  { name: 'GitHub', icon: 'fab fa-github', level: 95 },
  { name: 'Docker', icon: 'fab fa-docker', level: 25 },
  { name: 'Shopify', icon: 'fab fa-shopify', level: 75 },
  { name: 'SQL / MySQL / SQLite', icon: 'fas fa-database', level: 80 },
  { name: 'VS Code', icon: 'fas fa-code', level: 90 },
  { name: 'Vercel', icon: 'fas fa-cloud', level: 75 },
  { name: 'Postman', icon: 'fas fa-paper-plane', level: 95 },
  { name: 'Swing in Java', icon: 'fab fa-java', level: 85 },
  { name: 'Wordpress', icon: 'fab fa-wordpress', level: 80 },
  { name: 'HTML5', icon: 'fab fa-html5', level: 95 },
  { name: 'CSS3', icon: 'fab fa-css3-alt', level: 90 },
  { name: 'JavaScript', icon: 'fab fa-js-square', level: 75 },
    { name: 'Figma', icon: 'fab fa-figma', level: 75 },


];

// Projects Data
const projectsData = [
  {
    id: 1,
    title: 'Gambian Go E-Commerce API',
    description: 'A RESTful API for an e-commerce platform built with Laravel and Laravel REST Framework.The system supports four user roles: Buyers who shop, Sellers who manage products, Drivers who deliver orders, and Admins who oversee the entire platform. Each role has dedicated permissions to keep the e-commerce workflow organized and efficient',
    image: 'images/gambian.jpeg',
    tags: ['Mobile', 'api'],
    category: 'backend',
    details: {
      technologies: ['Laravel', 'Laravel REST Framework', 'PostgreSQL', 'JWT Authentication'],
      features: ['User authentication & authorization', 'Product catalog management', 'Shopping cart functionality', 'Delivery App','Order processing'],
      github: 'https://github.com/Yinguissa/Gambiango',
      live: 'https://www.linkedin.com/posts/alpha-ibrahima-yinguissa-barry-97a234262_i-am-currently-collaborating-with-abdou-salam-activity-7379396502642798592-N9PX?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEB2S24B46JtUFveaSBu0DYNyxJX4wJHUd8'
    }
  },
  {
    id: 2,
    title: 'Delivery App',
    description: 'I worked on the front-end of the eCash delivery application in Guinea using Flutter, building a smooth and responsive user interface. I also integrated REST APIs to handle real-time delivery operations, order management, and secure user interactions.',
    image: 'images/ecash.jpeg',
    tags: ['Flutter', 'Api integration'],
    category: 'delivery',
    details: {
      technologies: ['Flutter', 'Dart', 'REST API', 'Provider'],
      features: ['User authentication and profile management', 'Real-time order tracking', 'Push notifications for delivery updates', 'Secure payment integration'],
      github: '#',
      live: 'https://drive.google.com/file/d/1UcQ2NjOnytwfmJKR2kfP_bnlSOV98Krj/view?usp=sharing'
    }
  },
  {
    id: 3,
    title: 'Money Transfer System',
    description: 'I also built, with a teammate, a money-transfer simulation system that works with secure codes instead of real currency. When someone sends money, the system generates a unique code that the receiver can use to withdraw the amount from any agent it is a back office system.',
    image: 'images/money.PNG',
    tags: [, 'Transfer'],
    category: 'System',
    details: {
      technologies: ['Laravel', 'SQL', 'Postman', 'Bootstrap'],
      features: ['Secure code generation for transactions', 'Agent management dashboard', 'Transaction history and reporting', 'User authentication and role management'],
      github: '#',
      live: 'https://frontend-transfert-argent.vercel.app/login'
    }
  },
  {
    id: 4,
    title: 'Stock Management System',
    description: 'We also built a web-based stock management system with an API that helps shops manage their inventory easily. The system supports multiple stores, and each store’s data is separate, so giving the system to one shop does not affect the others. It tracks stock in real time, shows low-stock alerts, and keeps sales and transaction history. This project was made to help shop owners in Guinea manage their products better.',
    image: 'images/stock.PNG',
    tags: ['backend', 'api'],
    category: 'System',
    details: {
      technologies: ['Node Js', 'Postman', 'JWT', 'SQLite'],
      features: ['Multi-store support with isolated data', 'Real-time stock tracking and alerts', 'Sales and transaction history', 'User authentication and role management'],
      github: '#',
      live: 'https://stock-frontend-phi.vercel.app/login'
    }
  },
  {
    id: 5,
    title: 'Service Informatique de Guinée',
    description: 'The site presents information about our company, our services, and our vision, and it allows people to contact us easily. It serves as a professional platform for communication and helps us connect with partners and clients.',
    image: 'images/sig.PNG',
    tags: [ 'Website'],
    category: 'Website',
    details: {
      technologies: ['Html', 'Css', 'JavaScript', 'Bootstrap', 'PHP'],
      features: ['Company information', 'Services overview', 'Vision and mission', 'Contact form'],
      github: '#',
      live: 'https://www.sinformatiqueguinee.com/'
    }
  },
  {
    id: 6,
    title: 'Model for Heart Failure',
    description: 'I designed a model on Bootpress for AIU Heart Failure, focused on providing detailed information about various diseases. The model is carefully structured to answer questions and educate users about health conditions, offering accurate and well-organized insights.',
    image: 'images/aiu.PNG',
    tags: ['Chatbot'],
    category: 'Chatbot',
    details: {
      technologies: ['Botpress', 'Python'],
      features: ['Disease information database', 'Interactive Q&A functionality', 'User-friendly interface', 'Accurate health insights'],
      github: 'https://www.youtube.com/watch?v=QAh016aP70s',
      live: 'https://cdn.botpress.cloud/webchat/v2.4/shareable.html?configUrl=https://files.bpcontent.cloud/2025/05/07/08/20250507080642-FZALUMMR.json'
    }
    
  },
  {
    id: 7,
    title: 'AIU BOOKING FIELDS',
    description: 'I also developed the AIU Field Booking system, which allows students to reserve sports fields, check availability, and view upcoming events. The system provides a clear schedule, prevents double bookings, and gives students an easy way to plan and participate in campus activities.',
    image: 'images/book.PNG',
    tags: ['Chatbot'],
    category: 'Chatbot',
    details: {
      technologies: ['Laravel', 'bootpress', 'html', 'css'],
      features: ['Field reservation system', 'Availability checking', 'Event scheduling', 'User-friendly booking interface'],
      github: '#',
      live: 'https://www.linkedin.com/posts/alpha-ibrahima-yinguissa-barry-97a234262_laravel-booking-activity-7360162368674304004-qdMv?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEB2S24B46JtUFveaSBu0DYNyxJX4wJHUd8'
    }
    
  }

];

// Background Styles
const backgroundStyles = [
  {
    name: 'Gradient Blue',
    style: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
  },
  {
    name: 'Gradient Sunset',
    style: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)'
  },
  {
    name: 'Gradient Ocean',
    style: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)'
  },
  {
    name: 'Gradient Forest',
    style: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)'
  },
  {
    name: 'Animated Particles',
    style: 'particles'
  }
];

let currentBgIndex = 0;

// Initialize the portfolio
document.addEventListener('DOMContentLoaded', function() {
  initializeApp();
});

function initializeApp() {
  initializeLoading();
  initializeTheme();
  initializeNavigation();
  initializeSkills();
  initializeProjects();
  initializeBackgroundToggle();
  initializeProjectFilters();
  initializeContactForm();
  initializeProjectModal();
  initializeScrollAnimations();
  initializeHeaderScroll();
}

// Loading Screen
function initializeLoading() {
  // Simulate loading time
  setTimeout(() => {
    loadingScreen.classList.add('fade-out');
    setTimeout(() => {
      loadingScreen.style.display = 'none';
    }, 500);
  }, 1500);
}

// Theme Management
function initializeTheme() {
  const savedTheme = localStorage.getItem('theme') || 'light';
  document.documentElement.setAttribute('data-theme', savedTheme);
  updateThemeToggleIcon(savedTheme);
  
  themeToggle.addEventListener('click', toggleTheme);
}

function toggleTheme() {
  const currentTheme = document.documentElement.getAttribute('data-theme');
  const newTheme = currentTheme === 'light' ? 'dark' : 'light';
  
  document.documentElement.setAttribute('data-theme', newTheme);
  localStorage.setItem('theme', newTheme);
  updateThemeToggleIcon(newTheme);
}

function updateThemeToggleIcon(theme) {
  const icon = themeToggle.querySelector('i');
  icon.className = theme === 'light' ? 'fas fa-moon' : 'fas fa-sun';
}

// Background Toggle
function initializeBackgroundToggle() {
  bgToggle.addEventListener('click', toggleBackground);
}

function toggleBackground() {
  currentBgIndex = (currentBgIndex + 1) % backgroundStyles.length;
  const bgStyle = backgroundStyles[currentBgIndex];
  
  if (bgStyle.style === 'particles') {
    createParticlesBackground();
  } else {
    removeParticlesBackground();
    document.documentElement.style.setProperty('--bg-gradient', bgStyle.style);
  }
  
  // Show background name tooltip
  showBackgroundTooltip(bgStyle.name);
}

function createParticlesBackground() {
  backgroundEffects.innerHTML = '';
  backgroundEffects.style.opacity = '0.3';
  
  for (let i = 0; i < 50; i++) {
    const particle = document.createElement('div');
    particle.className = 'particle';
    particle.style.cssText = `
      position: absolute;
      width: ${Math.random() * 6 + 2}px;
      height: ${Math.random() * 6 + 2}px;
      background: var(--accent-primary);
      border-radius: 50%;
      top: ${Math.random() * 100}%;
      left: ${Math.random() * 100}%;
      animation: floatParticle ${Math.random() * 20 + 10}s linear infinite;
      animation-delay: ${Math.random() * 5}s;
    `;
    backgroundEffects.appendChild(particle);
  }
  
  // Add animation keyframes
  const style = document.createElement('style');
  style.textContent = `
    @keyframes floatParticle {
      0% {
        transform: translateY(0) translateX(0);
        opacity: 0;
      }
      10% {
        opacity: 1;
      }
      90% {
        opacity: 1;
      }
      100% {
        transform: translateY(-100vh) translateX(${Math.random() * 100 - 50}px);
        opacity: 0;
      }
    }
  `;
  document.head.appendChild(style);
}

function removeParticlesBackground() {
  backgroundEffects.innerHTML = '';
  backgroundEffects.style.opacity = '0.1';
}

function showBackgroundTooltip(name) {
  const tooltip = document.createElement('div');
  tooltip.textContent = `Background: ${name}`;
  tooltip.style.cssText = `
    position: fixed;
    top: 100px;
    right: 20px;
    background: var(--accent-primary);
    color: white;
    padding: 0.5rem 1rem;
    border-radius: var(--border-radius);
    font-size: 0.9rem;
    z-index: 1000;
    box-shadow: var(--shadow-lg);
  `;
  document.body.appendChild(tooltip);
  
  setTimeout(() => {
    tooltip.remove();
  }, 2000);
}

// Navigation
function initializeNavigation() {
  navToggle.addEventListener('click', () => {
    navMenu.classList.add('active');
    document.body.style.overflow = 'hidden';
  });
  
  navClose.addEventListener('click', () => {
    navMenu.classList.remove('active');
    document.body.style.overflow = '';
  });
  
  // Close mobile menu when clicking on a link
  const navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('active');
      document.body.style.overflow = '';
    });
  });
}

// Header Scroll Effect
function initializeHeaderScroll() {
  let lastScrollY = window.scrollY;
  
  window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    if (window.scrollY > 100) {
      header.style.background = 'rgba(255, 255, 255, 0.95)';
      if (document.documentElement.getAttribute('data-theme') === 'dark') {
        header.style.background = 'rgba(10, 10, 10, 0.95)';
      }
      header.style.backdropFilter = 'blur(20px)';
    } else {
      header.style.background = 'rgba(255, 255, 255, 0.95)';
      if (document.documentElement.getAttribute('data-theme') === 'dark') {
        header.style.background = 'rgba(10, 10, 10, 0.95)';
      }
      header.style.backdropFilter = 'blur(20px)';
    }
    
    // Hide header on scroll down, show on scroll up
    if (window.scrollY > lastScrollY && window.scrollY > 100) {
      header.style.transform = 'translateY(-100%)';
    } else {
      header.style.transform = 'translateY(0)';
    }
    
    lastScrollY = window.scrollY;
  });
}

// Skills Section
function initializeSkills() {
  const skillsContainer = document.querySelector('.skills-container');
  
  skillsData.forEach((skill, index) => {
    const skillCard = document.createElement('div');
    skillCard.className = 'skill-card fade-in';
    
    skillCard.innerHTML = `
      <div class="skill-icon">
        <i class="${skill.icon}"></i>
      </div>
      <h3 class="skill-name">${skill.name}</h3>
      <div class="skill-level">
        <div class="skill-progress" data-level="${skill.level}"></div>
      </div>
    `;
    
    skillsContainer.appendChild(skillCard);
  });
  
  // Animate skill progress bars when they come into view
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const progressBar = entry.target.querySelector('.skill-progress');
        const level = progressBar.getAttribute('data-level');
        setTimeout(() => {
          progressBar.style.transform = `scaleX(${level / 100})`;
        }, 200);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.3 });
  
  document.querySelectorAll('.skill-card').forEach(card => {
    observer.observe(card);
  });
}

// Projects Section
function initializeProjects() {
  const projectsGrid = document.querySelector('.projects-grid');
  
  projectsData.forEach(project => {
    const projectCard = document.createElement('div');
    projectCard.className = `project-card fade-in ${project.category}`;
    projectCard.setAttribute('data-category', project.category);
    
    projectCard.innerHTML = `
      <div class="project-image">
        <img src="${project.image}" alt="${project.title}" class="project-img" loading="lazy">
      </div>
      <div class="project-content">
        <h3 class="project-title">${project.title}</h3>
        <p class="project-description">${project.description}</p>
        <div class="project-tags">
          ${project.tags.map(tag => `<span class="project-tag">${tag}</span>`).join('')}
        </div>
        <a href="#" class="project-link" data-project-id="${project.id}">
          View Details <i class="fas fa-arrow-right"></i>
        </a>
      </div>
    `;
    
    projectsGrid.appendChild(projectCard);
  });
  
  // Add event listeners to project links
  document.querySelectorAll('.project-link').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const projectId = parseInt(link.getAttribute('data-project-id'));
      openProjectModal(projectId);
    });
  });
}

function initializeProjectFilters() {
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      // Remove active class from all buttons
      filterBtns.forEach(b => b.classList.remove('active'));
      // Add active class to clicked button
      btn.classList.add('active');
      
      const filter = btn.getAttribute('data-filter');
      filterProjects(filter);
    });
  });
}

function filterProjects(filter) {
  const projectCards = document.querySelectorAll('.project-card');
  
  projectCards.forEach(card => {
    if (filter === 'all' || card.getAttribute('data-category') === filter) {
      card.style.display = 'block';
      setTimeout(() => {
        card.style.opacity = '1';
        card.style.transform = 'translateY(0)';
      }, 100);
    } else {
      card.style.opacity = '0';
      card.style.transform = 'translateY(20px)';
      setTimeout(() => {
        card.style.display = 'none';
      }, 300);
    }
  });
}

// Contact Form
// Contact Form - FIXED VERSION
function initializeContactForm() {
  contactForm.addEventListener('submit', async function(e) {
    e.preventDefault();
    
    const submitBtn = this.querySelector('button[type="submit"]');
    const originalText = submitBtn.innerHTML;
    
    // Show loading state
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
    submitBtn.disabled = true;
    
    try {
      // Get form data
      const formData = new FormData(this);
      
      // Send to Formspree
      const response = await fetch(this.action, {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });
      
      if (response.ok) {
        // Success - show message and reset form
        showMessage('Message sent successfully! I will get back to you soon.', 'success');
        contactForm.reset();
      } else {
        // Error from Formspree
        const errorData = await response.json();
        showMessage('Sorry, there was an error sending your message. Please try again or email me directly.', 'error');
        console.error('Formspree error:', errorData);
      }
    } catch (error) {
      // Network error
      showMessage('Network error. Please check your connection and try again.', 'error');
      console.error('Network error:', error);
    } finally {
      // Reset button state
      submitBtn.innerHTML = originalText;
      submitBtn.disabled = false;
    }
  });
}
function showMessage(text, type) {
  const messageEl = document.getElementById('form-message');
  messageEl.textContent = text;
  messageEl.className = `form-message ${type}`;
  messageEl.style.display = 'block';
  
  // Hide message after 5 seconds
  setTimeout(() => {
    messageEl.style.display = 'none';
  }, 5000);
}

// Project Modal
function initializeProjectModal() {
  modalClose.addEventListener('click', () => {
    projectModal.style.display = 'none';
    document.body.style.overflow = '';
  });
  
  window.addEventListener('click', (e) => {
    if (e.target === projectModal) {
      projectModal.style.display = 'none';
      document.body.style.overflow = '';
    }
  });
}

function openProjectModal(projectId) {
  const project = projectsData.find(p => p.id === projectId);
  
  if (project) {
    const modalBody = document.querySelector('.modal-body');
    
    modalBody.innerHTML = `
      <h2>${project.title}</h2>
      <div class="project-modal-image">
        <img src="${project.image}" alt="${project.title}" loading="lazy" style="width: 100%; border-radius: var(--border-radius); margin: 1rem 0;">
      </div>
      <p class="project-modal-description" style="margin-bottom: 2rem; font-size: 1.1rem; color: var(--text-secondary);">${project.description}</p>
      
      <div class="project-details" style="display: grid; grid-template-columns: 1fr 1fr; gap: 2rem; margin-bottom: 2rem;">
        <div class="project-technologies">
          <h3 style="margin-bottom: 1rem; color: var(--accent-primary);">Technologies Used</h3>
          <ul style="list-style: none; padding: 0;">
            ${project.details.technologies.map(tech => `<li style="padding: 0.5rem 0; border-bottom: 1px solid var(--border-color);">• ${tech}</li>`).join('')}
          </ul>
        </div>
        
        <div class="project-features">
          <h3 style="margin-bottom: 1rem; color: var(--accent-primary);">Key Features</h3>
          <ul style="list-style: none; padding: 0;">
            ${project.details.features.map(feature => `<li style="padding: 0.5rem 0; border-bottom: 1px solid var(--border-color);">• ${feature}</li>`).join('')}
          </ul>
        </div>
      </div>
      
      <div class="project-links" style="display: flex; gap: 1rem; flex-wrap: wrap;">
        ${project.details.github ? `<a href="${project.details.github}" target="_blank" class="btn btn-primary"><i class="fab fa-github"></i> View Code</a>` : ''}
        ${project.details.live ? `<a href="${project.details.live}" target="_blank" class="btn btn-secondary"><i class="fas fa-external-link-alt"></i> Live Demo</a>` : ''}
      </div>
    `;
    
    projectModal.style.display = 'block';
    document.body.style.overflow = 'hidden';
  }
}

// Scroll Animations
function initializeScrollAnimations() {
  const fadeElements = document.querySelectorAll('.fade-in');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1 });
  
  fadeElements.forEach(element => {
    observer.observe(element);
  });
}

// Add some interactive effects
document.addEventListener('mousemove', (e) => {
  const cursor = document.createElement('div');
  cursor.style.cssText = `
    position: fixed;
    width: 20px;
    height: 20px;
    border: 2px solid var(--accent-primary);
    border-radius: 50%;
    pointer-events: none;
    z-index: 9999;
    left: ${e.clientX - 10}px;
    top: ${e.clientY - 10}px;
    transition: all 0.1s ease;
    opacity: 0.5;
  `;
  document.body.appendChild(cursor);
  
  setTimeout(() => {
    cursor.remove();
  }, 100);
});

// Export functions for global access
window.portfolio = {
  setGradientBackground: (gradient) => {
    document.documentElement.style.setProperty('--bg-gradient', gradient);
  },
  setImageBackground: (imageUrl) => {
    document.documentElement.style.setProperty('--bg-pattern', `url(${imageUrl})`);
  }
};