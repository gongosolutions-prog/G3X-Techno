/**
 * G3X Technologies — Precision Engineering Interaction Core
 * Reference: Gravity Manufacturing Layout & Interaction
 */

// 1. 6-Stage Engineering Lifecycle Data
const PROCESS_STAGES = [
  {
    step: "01",
    badge: "PHASE 01 // ARCHITECTURAL SCOPING",
    heading: "Discover & Systems Alignment",
    desc: "We audit your business constraints, technical requirements, data models, and goals to formulate a definitive engineering specification and ROI model.",
    deliverables: [
      "Technical Architecture Blueprint & Data Contract Schema",
      "Fixed Milestone Roadmap & Budget Estimates",
      "Risk Assessment & Security Compliance Checklist",
      "Dedicated Senior Tech Lead Assignment"
    ],
    statusTitle: "Scope & Architecture Locked",
    statusDesc: "100% transparent pricing and timeline before any coding begins.",
    progressWidth: "16%",
    progressText: "Phase 1 of 6 Active"
  },
  {
    step: "02",
    badge: "PHASE 02 // SYSTEMS & INTERACTION DESIGN",
    heading: "UI/UX & Data Architecture",
    desc: "We design every screen, user state, and API payload in high-fidelity prototypes so you can click through and test before engineering.",
    deliverables: [
      "Clickable Interactive Prototype (Mobile & Desktop)",
      "Database Schema & Entity Relationship Model",
      "Design System & Reusable Component Tokens",
      "Security Perimeter & Threat Model Signoff"
    ],
    statusTitle: "Design System & Prototypes Ready",
    statusDesc: "Verified user journeys and verified technical contracts.",
    progressWidth: "33%",
    progressText: "Phase 2 of 6 Complete"
  },
  {
    step: "03",
    badge: "PHASE 03 // FULL-STACK BUILD",
    heading: "Clean-Code Engineering & Core Build",
    desc: "Bi-weekly sprint iterations with senior engineers. Every commit is tested, linted, and reviewed with preview URLs shared directly with you.",
    deliverables: [
      "Next.js / React Frontend with Sub-Second Speeds",
      "High-Concurrency Microservices & Secure APIs",
      "Continuous Preview Deployments on Staging",
      "Unit & Integration Test Suites (>85% Coverage)"
    ],
    statusTitle: "Active Sprint Engineering",
    statusDesc: "Working software demoed every two weeks on shared staging.",
    progressWidth: "50%",
    progressText: "Phase 3 of 6 in Progress"
  },
  {
    step: "04",
    badge: "PHASE 04 // DEFENSE IN DEPTH",
    heading: "Penetration Testing & Security Fortification",
    desc: "Rigorous vulnerability assessment against OWASP Top 10, role-based access control audits, secrets encryption, and regulatory compliance checks.",
    deliverables: [
      "Full Application Penetration Testing Report",
      "Zero-Trust Network & IAM Policy Configuration",
      "Bank-Grade Data Encryption (AES-256 / KMS)",
      "SOC 2 / HIPAA Readiness Verification"
    ],
    statusTitle: "Zero Security Vulnerabilities",
    statusDesc: "Fortified architecture safe from unauthorized breaches.",
    progressWidth: "66%",
    progressText: "Phase 4 of 6 Verified"
  },
  {
    step: "05",
    badge: "PHASE 05 // ZERO-DOWNTIME LAUNCH",
    heading: "Containerized Cloud Deployment",
    desc: "Automated deployment pipelines to AWS, GCP, or Azure using Kubernetes and Terraform, paired with blue-green canary release strategies.",
    deliverables: [
      "Infrastructure as Code (IaC) Terraform Scripts",
      "Automated CI/CD Delivery Pipeline (GitHub Actions)",
      "Zero-Downtime DNS Cutover & Domain Activation",
      "Full Source Code Handover & Complete Documentation"
    ],
    statusTitle: "Live in Production",
    statusDesc: "System is officially live and accessible worldwide.",
    progressWidth: "83%",
    progressText: "Phase 5 of 6 Deployed"
  },
  {
    step: "06",
    badge: "PHASE 06 // RELIABILITY & SCALE",
    heading: "Telemetry, Auto-Scaling & Support",
    desc: "Continuous APM telemetry, distributed tracing, alerting, and capacity scaling to handle traffic bursts without performance degradation.",
    deliverables: [
      "Real-Time Server Health & APM Dashboards",
      "Guaranteed 99.9% Production SLA Reliability",
      "Automated Horizontal Pod Auto-Scaling",
      "Direct Senior Engineer Support & Monthly Reviews"
    ],
    statusTitle: "Auto-Scaling Active",
    statusDesc: "Engineered to scale from 1,000 to 1,000,000+ active users.",
    progressWidth: "100%",
    progressText: "Phase 6 of 6 Complete"
  }
];

// 2. Specialized Practical Tracks Data
const TRACKS_DATA = {
  web: {
    tag: "WEB DEV TRACK // PRODUCTION READY",
    title: "Modern Web Development Track",
    desc: "Focus on modern UI engineering, responsive state management, server-side rendering, and web performance optimization using industry toolchains.",
    tooling: "React 18+, TypeScript, Tailwind CSS, Vite, Next.js",
    prereq: "Solid JavaScript fundamentals, basic Git knowledge, HTML/CSS proficiency",
    output: "Production SaaS Dashboard with authentication, real API integration, and Lighthouse score > 90"
  },
  fullstack: {
    tag: "FULL STACK TRACK // END-TO-END",
    title: "Full Stack Architecture Track",
    desc: "Build comprehensive web systems connecting responsive frontends to authenticated REST/GraphQL backends, SQL databases, and cloud storage.",
    tooling: "Next.js, Node.js, Express, PostgreSQL, Prisma, Redis, Docker",
    prereq: "Understanding of client-server model, relational databases, async programming",
    output: "Multi-tenant collaboration platform with JWT auth, role permissions, and database migrations"
  },
  python: {
    tag: "PYTHON TRACK // SYSTEMS & AUTOMATION",
    title: "Python Backend & Systems Engineering",
    desc: "Master asynchronous Python, high-concurrency APIs, microservices architecture, and automated workflow orchestrations.",
    tooling: "Python 3.11+, FastAPI, Pydantic, Celery, Redis, PyTest, SQLAlchemy",
    prereq: "OOP in Python, data structures, basic understanding of HTTP APIs",
    output: "Asynchronous task queue microservice with distributed workers and OpenAPI documentation"
  },
  java: {
    tag: "JAVA TRACK // ENTERPRISE RESILIENCE",
    title: "Enterprise Java & Spring Boot Systems",
    desc: "Engineer robust enterprise-grade services, distributed messaging, and high-throughput transactional persistence.",
    tooling: "Java 21, Spring Boot 3, Spring Security, Hibernate, Kafka, Maven",
    prereq: "Core Java (threads, collections, streams), relational databases",
    output: "Banking ledger simulator with ACID transactional integrity and Spring Security RBAC"
  },
  aiml: {
    tag: "AI/ML TRACK // PREDICTIVE PIPELINES",
    title: "Applied Machine Learning & MLOps",
    desc: "Build reproducible machine learning pipelines, feature engineering workflows, model evaluation, and low-latency API inference endpoints.",
    tooling: "Python, PyTorch, Scikit-learn, Pandas, MLflow, Docker, FastAPI",
    prereq: "Linear algebra, statistics, Python data libraries (NumPy/Pandas)",
    output: "End-to-end churn prediction service with model versioning, drift detection, and REST API"
  },
  genai: {
    tag: "GENAI TRACK // RAG & AGENTIC WORKFLOWS",
    title: "Generative AI & LLM Systems Engineering",
    desc: "Build enterprise Retrieval-Augmented Generation (RAG) engines, vector embeddings search, prompt evaluations, and autonomous agent systems.",
    tooling: "LangChain, LlamaIndex, Qdrant / Pinecone, OpenAI / Claude API, Python",
    prereq: "Strong Python skills, understanding of embeddings and vector similarity",
    output: "Enterprise document question-answering copilot with semantic chunking and source attribution"
  },
  data: {
    tag: "DATA TRACK // STREAMING & WAREHOUSING",
    title: "Data Engineering & Analytics Pipelines",
    desc: "Design resilient data pipelines, batch and streaming ingestion, lakehouse data models, and automated transformation pipelines.",
    tooling: "Apache Kafka, dbt, Snowflake / DuckDB, Apache Spark, Airflow, SQL",
    prereq: "Advanced SQL queries, data modeling principles, basic Python",
    output: "Real-time clickstream event pipeline ingesting into a lakehouse with dbt data transformations"
  },
  cyber: {
    tag: "CYBER TRACK // DEFENSE & AUDITING",
    title: "Cybersecurity & Application Defense",
    desc: "Learn hands-on application security, vulnerability assessment, DevSecOps scanning, authentication hardening, and threat modeling.",
    tooling: "Burp Suite, OWASP ZAP, SonarQube, Linux, Wireshark, Docker",
    prereq: "Computer networking (TCP/IP, DNS, HTTP), Linux command line basics",
    output: "Comprehensive penetration test audit report with reproducible PoC exploits and remediation PRs"
  },
  cloud: {
    tag: "DEVOPS TRACK // CLOUD INFRASTRUCTURE",
    title: "Cloud Engineering & CI/CD DevOps",
    desc: "Master Infrastructure as Code, container orchestration with Kubernetes, multi-environment pipelines, and cloud observability.",
    tooling: "Terraform, Docker, Kubernetes, AWS / GCP, GitHub Actions, Prometheus",
    prereq: "Basic Linux administration, understanding of cloud computing concepts",
    output: "Fully automated multi-stage GitOps deployment deploying a containerized app to Kubernetes"
  },
  mobile: {
    tag: "MOBILE TRACK // CROSS-PLATFORM",
    title: "Mobile App Development",
    desc: "Build smooth cross-platform mobile apps with native capabilities, push notifications, offline caching, and responsive gesture navigation.",
    tooling: "React Native, Flutter / Dart, Redux Toolkit, SQLite, Expo",
    prereq: "JavaScript/TypeScript or Dart basics, UI layout understanding",
    output: "Cross-platform mobile commerce app with offline SQLite sync and push notifications"
  }
};

// Initialize DOM
document.addEventListener("DOMContentLoaded", () => {
  setupProcessInteractions();
  setupTrackInteractions();
  setupMobileNav();
  setCurrentYear();
});

// Set footer year
function setCurrentYear() {
  const el = document.getElementById("currentYear");
  if (el) el.textContent = new Date().getFullYear();
}

// 1. Process Timeline Controls
function setupProcessInteractions() {
  const buttons = document.querySelectorAll(".proc-step-btn");
  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const stepIdx = parseInt(btn.getAttribute("data-step"), 10);
      activateProcessStep(stepIdx);
    });
  });
}

function activateProcessStep(index) {
  const buttons = document.querySelectorAll(".proc-step-btn");
  buttons.forEach((b, i) => {
    if (i === index) {
      b.classList.add("active");
    } else {
      b.classList.remove("active");
    }
  });

  const stage = PROCESS_STAGES[index];
  if (!stage) return;

  const badgeEl = document.getElementById("stepBadge");
  const headingEl = document.getElementById("stepHeading");
  const descEl = document.getElementById("stepDescription");
  const delivListEl = document.getElementById("stepDeliverables");
  const windowLabelEl = document.getElementById("stepWindowLabel");
  const windowContentEl = document.getElementById("stepWindowContent");

  if (badgeEl) badgeEl.textContent = stage.badge;
  if (headingEl) headingEl.textContent = stage.heading;
  if (descEl) descEl.textContent = stage.desc;
  if (windowLabelEl) windowLabelEl.textContent = `PHASE 0${index + 1} SPECIFICATION`;

  if (delivListEl) {
    delivListEl.innerHTML = "";
    stage.deliverables.forEach((item) => {
      const li = document.createElement("li");
      li.textContent = item;
      delivListEl.appendChild(li);
    });
  }

  if (windowContentEl) {
    windowContentEl.innerHTML = `
      <div class="spec-verified-box">
        <div class="verified-icon">&#10003;</div>
        <h4>${stage.statusTitle}</h4>
        <p>${stage.statusDesc}</p>
        <div class="meter-bar"><div class="meter-fill" style="width: ${stage.progressWidth};"></div></div>
        <span class="meter-text">${stage.progressText}</span>
      </div>
    `;
  }
}

// 2. Track Inspector Controls
function setupTrackInteractions() {
  const buttons = document.querySelectorAll(".track-btn");
  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const trackKey = btn.getAttribute("data-track");
      selectTrack(trackKey);
    });
  });
}

function selectTrack(trackKey) {
  const buttons = document.querySelectorAll(".track-btn");
  buttons.forEach((b) => {
    if (b.getAttribute("data-track") === trackKey) {
      b.classList.add("active");
    } else {
      b.classList.remove("active");
    }
  });

  const track = TRACKS_DATA[trackKey];
  if (!track) return;

  const tagEl = document.getElementById("trackTag");
  const titleEl = document.getElementById("trackTitle");
  const descEl = document.getElementById("trackDesc");
  const toolingEl = document.getElementById("trackTooling");
  const prereqEl = document.getElementById("trackPrereq");
  const outputEl = document.getElementById("trackOutput");

  if (tagEl) tagEl.textContent = track.tag;
  if (titleEl) titleEl.textContent = track.title;
  if (descEl) descEl.textContent = track.desc;
  if (toolingEl) toolingEl.textContent = track.tooling;
  if (prereqEl) prereqEl.textContent = track.prereq;
  if (outputEl) outputEl.textContent = track.output;
}

// Service Filter Helper
function filterService(serviceKey) {
  const cards = document.querySelectorAll(".capability-card");
  cards.forEach(card => {
    if (card.getAttribute("data-service") === serviceKey) {
      card.style.borderColor = "var(--color-red)";
      card.style.boxShadow = "0 0 25px rgba(255, 59, 48, 0.35)";
      card.scrollIntoView({ behavior: "smooth", block: "center" });
      setTimeout(() => {
        card.style.borderColor = "";
        card.style.boxShadow = "";
      }, 2500);
    }
  });
}

// 3. Mobile Navigation
function setupMobileNav() {
  const toggle = document.getElementById("mobileMenuToggle");
  const nav = document.getElementById("centerNav");

  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      nav.classList.toggle("open");
    });

    const links = nav.querySelectorAll(".nav-item-link");
    links.forEach((link) => {
      link.addEventListener("click", () => {
        nav.classList.remove("open");
      });
    });
  }
}

// 4. Modal Controllers
function openProjectModal(context) {
  const modal = document.getElementById("projectModal");
  if (!modal) return;

  const form = document.getElementById("projectInquiryForm");
  const successMsg = document.getElementById("projectSuccessMessage");
  if (form) form.style.display = "flex";
  if (successMsg) successMsg.style.display = "none";

  if (context) {
    const checkboxes = modal.querySelectorAll("input[name='serviceReq']");
    checkboxes.forEach((cb) => {
      if (cb.value.toLowerCase().includes(context.toLowerCase())) {
        cb.checked = true;
      }
    });
  }

  modal.classList.add("open");
  document.body.style.overflow = "hidden";
}

function openInternshipModal() {
  const modal = document.getElementById("internshipModal");
  if (!modal) return;

  const form = document.getElementById("internshipForm");
  const successMsg = document.getElementById("internSuccessMessage");
  if (form) form.style.display = "flex";
  if (successMsg) successMsg.style.display = "none";

  const activeTrackBtn = document.querySelector(".track-btn.active");
  if (activeTrackBtn) {
    const trackName = activeTrackBtn.textContent.trim();
    const trackSelect = document.getElementById("targetTrack");
    if (trackSelect) {
      for (let i = 0; i < trackSelect.options.length; i++) {
        if (trackSelect.options[i].text.includes(trackName)) {
          trackSelect.selectedIndex = i;
          break;
        }
      }
    }
  }

  modal.classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  if (!modal) return;
  modal.classList.remove("open");
  document.body.style.overflow = "auto";
}

// Window event listeners
window.addEventListener("click", (e) => {
  if (e.target.classList.contains("modal-overlay")) {
    e.target.classList.remove("open");
    document.body.style.overflow = "auto";
  }
});

window.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    const openModals = document.querySelectorAll(".modal-overlay.open");
    openModals.forEach((m) => m.classList.remove("open"));
    document.body.style.overflow = "auto";
  }
});

// Form Submissions
function handleProjectSubmit(e) {
  e.preventDefault();
  const form = document.getElementById("projectInquiryForm");
  const successMsg = document.getElementById("projectSuccessMessage");
  const submitBtn = document.getElementById("submitProjectBtn");

  submitBtn.disabled = true;
  submitBtn.innerHTML = "<span class='btn-label'>TRANSMITTING...</span>";

  setTimeout(() => {
    submitBtn.disabled = false;
    submitBtn.innerHTML = "<span class='btn-label'>SUBMIT INQUIRY</span><span class='btn-action-icon'>+</span>";
    form.reset();
    form.style.display = "none";
    successMsg.style.display = "block";
  }, 600);
}

function handleInternshipSubmit(e) {
  e.preventDefault();
  const form = document.getElementById("internshipForm");
  const successMsg = document.getElementById("internSuccessMessage");
  const submitBtn = document.getElementById("submitInternBtn");

  submitBtn.disabled = true;
  submitBtn.innerHTML = "<span class='btn-label'>SUBMITTING...</span>";

  setTimeout(() => {
    submitBtn.disabled = false;
    submitBtn.innerHTML = "<span class='btn-label'>SUBMIT APPLICATION</span><span class='btn-action-icon'>+</span>";
    form.reset();
    form.style.display = "none";
    successMsg.style.display = "block";
  }, 600);
}
