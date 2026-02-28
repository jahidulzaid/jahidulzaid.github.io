const publicationItems = [
  {
    statusLabel: 'PUBLISHED',
    statusClass: 'accepted',
    title: 'PyBangla at BLP-2025 Task 2: Enhancing Bangla-to-Python Code Generation with Iterative Self-Correction and Multilingual Agents',
    link: 'https://aclanthology.org/2025.banglalp-1.55/',
    venue: ' Proceedings of the Second Workshop on Bangla Language Processing (BLP-2025), Association for Computational Linguistics ',
    authors: 'Jahidul Islam, Md Ataullha, Saiful Azad',
    summary: 'Paper explores iterative self-correction mechanisms and multilingual agent frameworks for improving Bangla-to-Python code generation tasks. Demonstrates novel approaches to enhance code generation accuracy in low-resource languages through agentic workflows and self-refinement strategies.'
  },
  {
    statusLabel: 'ACCEPTED',
    statusClass: 'accepted',
    title: 'BanglaNostalgia: A Benchmark Dataset and Comparative Study for Nostalgia Detection in Bangla Social Media Text',
    link: 'https://qpain.org/',
    venue: '2026 IEEE 2nd International Conference on Quantum Photonics, Artificial Intelligence & Networking',
    authors: 'Jahidul Islam, Md Ataullha, Saiful Azad',
    summary: 'The paper introduces BanglaNostalgia, a ~20k-instance, binary-labeled dataset (nostalgic vs non-nostalgic) built from Bangla YouTube comments.'
  }
  ,
  {
    statusLabel: 'UNDER REVIEW',
    statusClass: 'under-review',
    title: 'Speculative ReActRAG: Hybrid Multi-Perspective Retrieval-Augmented Generation with Structured Validation',
    link: 'https://github.com/jahidulzaid/Speculative-ReActRAG',
    venue: 'Submitted to IEEE Conference (under review)',
    authors: 'Jahidul Islam, Hasimunnahar Shanta, Abrar Hossain, Saiful Azad, Abdullah Al Masud',
    summary: 'This paper introduces Speculative ReActRAG, a hybrid RAG framework that combines parallel speculative draft generation with structured ReAct-based validation. The system retrieves multi-perspective evidence, generates diverse candidate answers with rationales, validates them via structured reasoning, and selects final outputs using composite scoring. Evaluations on SQuAD and MS MARCO show substantial improvements in precision, recall, and F1 over strong baselines, demonstrating robust, transparent, and scalable knowledge-intensive QA.'
  },
  {
    statusLabel: 'ONGOING',
    statusClass: 'under-review',
    title: 'EntityEvoTKG-RAG: A Temporal Knowledge Graph for Tracking Entity Evolution in Time-Aware Retrieval Augmented Generation',
    link: '',
    venue: 'Submitted',
    authors: 'Jahidul Islam, Hasimunnahar Shanta, Abrar Hossain',
    summary: 'This paper presents EntityEvoTKG-RAG, a time-aware retrieval-augmented generation framework that integrates a temporal knowledge graph to track entity evolution across time. The system models entities, relationships, and temporal states to enable historically consistent reasoning and temporally grounded responses. By incorporating time-sensitive retrieval and structured knowledge representation, the approach improves factual accuracy, contextual coherence, and interpretability for dynamic knowledge-intensive tasks.'
  }
];

function renderPublications() {
  const publicationsContainer = document.getElementById('publicationsList');
  if (!publicationsContainer) {
    return;
  }

  publicationsContainer.innerHTML = publicationItems.map((publication) => {
    const linkedTitle = publication.link
      ? `<a href="${publication.link}" target="_blank" rel="noopener noreferrer">${publication.title}</a>`
      : publication.title;

    return `
          <div class="publication-card">
            <div class="publication-status publication-status-${publication.statusClass}">
              ${publication.statusLabel}
            </div>
            <h3 class="publication-title">${linkedTitle}</h3>
            <p class="publication-meta"><strong>${publication.venue}</strong></p>
            <p class="publication-authors"><strong>Authors:</strong> ${publication.authors}</p>
            <p class="publication-summary">${publication.summary}</p>
          </div>
        `;
  }).join('');
}

renderPublications();

// Mobile Navigation Toggle
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');

navToggle.addEventListener('click', () => {
  navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-menu a').forEach(link => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('active');
  });
});

// Navbar scroll effect
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// Scroll to Top Button
const scrollTopBtn = document.getElementById('scrollTop');
window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    scrollTopBtn.classList.add('visible');
  } else {
    scrollTopBtn.classList.remove('visible');
  }
});

scrollTopBtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

// Intersection Observer for section animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, observerOptions);

// Observe all sections
document.querySelectorAll('section').forEach(section => {
  observer.observe(section);
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const href = this.getAttribute('href');
    if (href !== '#' && href !== '') {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        const offsetTop = target.offsetTop - 80;
        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth'
        });
      }
    }
  });
});

// Add animation delay to project cards
document.querySelectorAll('.project-card').forEach((card, index) => {
  card.style.animationDelay = `${index * 0.1}s`;
});

// Console message
console.log('%cWelcome to my portfolio! 🚀', 'font-size: 20px; color: #0d6efd; font-weight: bold;');
console.log('%cInterested in AI agents and LLM systems? Let\'s connect!', 'font-size: 14px; color: #2563eb;');