import { skillDetailEn } from './skillDetail-en';

export const en = {
  meta: {
    title: 'Vo Quoc Dinh | Frontend & Fullstack Developer',
    description:
      'Portfolio of Vo Quoc Dinh — Fullstack Developer (React & NestJS) with 2+ years building stable, high-performance web systems.',
  },
  recruiterLetter: {
    title: 'A note for recruiters',
    badge: 'Thank you for visiting',
    p1:
      'Thank you for taking the time to review my profile. I truly appreciate recruiters and hiring teams who invest effort in understanding candidates beyond a résumé.',
    p2:
      'I am passionate about building reliable, user-centered web products with React, TypeScript, and Node/NestJS — and I enjoy collaborating in teams that value clear communication and quality.',
    p3:
      'If you see a fit for your role or team, I would be glad to connect. Wishing you a smooth hiring process and meaningful conversations with every candidate you meet.',
    closing: 'Warm regards,',
    signature: 'Vo Quoc Dinh',
    continue: 'Continue to portfolio',
    reopen: 'Note for recruiters',
    ariaModal: 'Thank-you note for recruiters',
    ariaClose: 'Close',
    letterLanguage: 'Letter language',
    ariaLanguageGroup: 'Choose language for this letter',
  },
  nav: {
    about: 'About',
    whyFit: 'Why I fit',
    skills: 'Skills',
    experience: 'Experience',
    projects: 'Projects',
    contact: 'Contact',
  },
  a11y: {
    home: 'Vo Quoc Dinh — home',
    primaryNav: 'Primary',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
    language: 'Language',
    downloadCv: 'Download CV (PDF)',
    themeLight: 'Light mode',
    themeDark: 'Dark mode',
    themeToggle: 'Toggle color theme',
  },
  lang: {
    en: 'English',
    vi: 'Tiếng Việt',
  },
  hero: {
    role: 'Fullstack Developer',
    greeting: "Hi, I'm",
    name: 'Vo Quoc Dinh',
    intro:
      'Fullstack Developer (React & NestJS) with 2+ years shipping stable web systems — I use modern tooling (including AI assistants) to deliver faster while keeping code quality and UX sharp.',
    location: 'Thu Duc City, HCMC, Vietnam',
    openToOpportunities: 'Open to opportunities',
    viewWork: 'View My Work',
    contactMe: 'Contact Me',
  },
  about: {
    eyebrow: 'Profile',
    title: 'About Me',
    subtitle: 'Results-driven developer focused on performance, scalability, and maintainable code.',
    p1:
      'I am a Fullstack Developer (ReactJS & NestJS) with 2+ years of experience building stable, high-performance web systems across EdTech and enterprise products. I optimize delivery by leveraging AI tools such as GitHub Copilot and Cursor to accelerate feature work by an estimated 30–40%, while keeping a strong problem-solving mindset and technical leadership in startup environments.',
    p2:
      'I care about streamlined, elegant, yet robust products: proven impact on performance (including significant application and API improvements), maintainable TypeScript codebases, and great user experiences with PostgreSQL, Prisma/ORM, and Next.js where it fits.',
    leadershipHeading: 'Leadership & Activities',
    leadershipOrg: 'KET NOI Volunteer Club – HCMC',
    leadershipRole: 'Head of Communications (2021–2024)',
    leadershipPoints: [
      'Led social media and internal communications, improving team coordination.',
      'Organized volunteer events, building leadership and collaboration skills applicable to agile environments.',
    ],
    careerGoals: 'Career Goals',
    shortTermLabel: 'Short-term (1–2 years):',
    shortTerm:
      'Enhance programming and project management skills, contributing to impactful software projects while learning from seasoned developers.',
    longTermLabel: 'Long-term (5 years):',
    longTerm:
      'Become a lead developer, mastering cutting-edge technologies and driving innovation in large-scale projects.',
    stats: {
      experience: 'Experience',
      experienceValue: '2+ Years',
      projects: 'Projects',
      projectsValue: '4+ Key',
      toeic: 'TOEIC',
      degree: 'Degree',
      degreeValue: 'Software Eng',
    },
  },
  whyFit: {
    eyebrow: 'For recruiters',
    title: "Why I'm a good fit for the role you're hiring",
    subtitle:
      'How my background and way of working align with what product and engineering teams usually need.',
    intro:
      'Every role is different — below is how I typically add value in fullstack and frontend-oriented positions, based on real delivery experience in EdTech and enterprise settings.',
    points: [
      'End-to-end ownership: comfortable owning features from React/TypeScript UI through NestJS APIs, databases, and deployment basics.',
      'Performance mindset: proven focus on faster loads and leaner APIs — not only shipping features, but improving how they behave in production.',
      'Clear collaboration: used to Agile workflows, code review, and working with product, design, and stakeholders in Vietnamese and English contexts.',
      'Quality & maintainability: testing habits (Jest, Testing Library), structured code, and documentation — easier handover for your team long term.',
      'Fast learning & stack fit: strong in React/TypeScript/NestJS; quick to adapt to your conventions, design system, and internal tools.',
    ],
  },
  skills: {
    eyebrow: 'Expertise',
    title: 'Technical Skills',
    subtitle: 'A curated stack for modern web development — from UI to infrastructure.',
    categories: {
      frontend: 'Frontend',
      backend: 'Backend',
      mobile: 'Mobile',
      database: 'Databases & ORM',
      state: 'State & Data Management',
      devops: 'DevOps & Tools',
      testing: 'Testing & Security',
      tools: 'Tools & AI Productivity',
    },
  },
  skillDetail: skillDetailEn,
  experience: {
    eyebrow: 'Career',
    title: 'Work Experience',
    subtitle: 'Professional journey and measurable impact across teams and products.',
    keyAchievements: 'Key achievements',
    technologies: 'Technologies',
    items: [
      {
        company: 'BridgeUp Education',
        role: 'Fullstack Developer',
        period: 'Jan 2025 – Present',
        location: 'HCMC',
        type: 'EdTech Startup',
        summary:
          'Leading full-stack development of BridgeUp, a comprehensive career development platform serving 500+ users with many integrated large modules.',
        achievements: [
          'Architected and built scalable frontend using React + TypeScript + Vite + TailwindCSS, implementing code splitting and lazy loading that improved initial page load.',
          'Optimized application performance with React Query for data fetching, reducing API calls and enhancing user experience.',
          'Designed and implemented RESTful APIs with NestJS & Prisma ORM, optimizing PostgreSQL queries that reduced response time.',
          'Built social networking features (posts, likes, comments, sharing) handling 1,000+ daily interactions with real-time updates.',
          'Implemented secure JWT-based authentication & role-based authorization protecting user data across multiple modules.',
          'Wrote comprehensive unit & integration tests using Jest + Testing Library, achieving 80% code coverage.',
          'Collaborated in Agile environment with Product, Data, and Content teams using Jira, consistently delivering features within sprint deadlines.',
          'Tech stack: React, Vite, TailwindCSS, TypeScript, NestJS, Prisma ORM, PostgreSQL, JWT, Cloudinary, Vercel, Render.',
        ],
      },
      {
        company: 'DXT Technology Company',
        role: 'Fullstack Developer',
        period: 'Jul 2023 – Dec 2024',
        location: 'HCMC',
        type: 'Technology Company',
        summary:
          'Developed enterprise-grade web applications serving 2,000+ users with focus on performance optimization and scalability.',
        achievements: [
          'Built responsive web applications using React, Next.js, and TypeScript with mobile-first design principles.',
          'Implemented Server-Side Rendering (SSR) & Static Site Generation (SSG) with Next.js, improving SEO rankings and reducing page load time.',
          'Integrated RESTful APIs and third-party payment gateways, processing 500+ transactions monthly with 99.9% success rate.',
          'Managed complex state with React Query & Context API, eliminating prop drilling and improving code maintainability.',
          'Conducted code reviews for 3 junior developers, establishing best practices and reducing bug rate.',
          'Created comprehensive API documentation using Swagger, improving frontend-backend collaboration efficiency.',
          'Tech stack: React, Next.js, TailwindCSS, Node.js, TypeScript, Prisma ORM.',
        ],
      },
    ],
  },
  projects: {
    eyebrow: 'Portfolio',
    title: 'Key Projects',
    subtitle: 'Selected work — architecture, scalability, and attention to detail.',
    viewSource: 'View source',
    viewDetails: 'View details',
    viewLive: 'View live site',
    viewLiveDisabled: 'No public deployment yet',
    liveSiteNoticeTitle: 'Before you visit',
    liveSiteNoticeBody:
      'This website is owned by the business operator and is currently live in production.',
    liveSiteNoticeContinue: 'Continue to site',
    liveSiteNoticeCancel: 'Close',
    liveSiteNoticeClose: 'Close dialog',
    breadcrumbHome: 'Home',
    breadcrumbAria: 'Breadcrumb',
    overviewHeading: 'Overview',
    highlightsHeading: 'Key highlights',
    backToProjects: 'Back to all projects',
    metaTitleSuffix: 'Vo Quoc Dinh',
    items: [
      {
        slug: 'aiwine',
        title: 'AIWine — Imported Wine Storefront',
        description:
          'Full-stack imported wine storefront on Next.js (App Router) + TypeScript, integrated with WooCommerce REST API and WordPress (products, orders, blog).',
        detailOverview:
          'AIWine is a full-stack e-commerce storefront for imported wine, built on Next.js (App Router) and TypeScript. The backend of record for commerce is WooCommerce (REST) with WordPress powering content, products, and blog — unified into a headless-style experience.\n\n' +
          'Frontend: Next.js App Router, React 19, Tailwind CSS 4, Ant Design, custom fonts, and a responsive layout (header with mega menu, footer, policy pages). Data and forms use TanStack Query with tuned stale/gc times, plus React Hook Form + Zod validation (checkout, with schemas separated by concern).\n\n' +
          'WooCommerce integration uses a singleton API client with retries, in-memory TTL caching per data type (products, categories, attributes), and optional Undici for TLS/dev. Upstash Redis backs a small wrapper (get/set/del); API routes expose cache invalidation alongside Next.js revalidatePath and clearing the Woo client cache.\n\n' +
          'Middleware implements maintenance mode: when enabled via environment, traffic redirects to a coming-soon experience.\n\n' +
          'E-commerce flows include product listing with query filters (category, region, vintage, price range…), pagination, sorting, grid/list views, and quick view. Product detail pages include galleries, rich content, related products, and related blog content driven by service + component structure. The cart uses a Context + useReducer model with optimistic UI when adding items, localStorage sync, and API routes for cart add and recommendations. COD checkout creates orders through WooCommerce Orders REST with stock/qty checks, then clears the cart via WooCommerce Store API (cookie forwarding).\n\n' +
          'Blog content is sourced from WordPress (list, detail by slug, tags, categories, related posts) via services and API routes. Newsletter and coming-soon flows persist emails to JSON, send mail through Resend (welcome + admin notification), and protect admin GET with a Bearer token. For regulated alcohol retail, an age gate (context + overlay) is implemented. UX polish includes toast notifications, loading states, and optimistic filter UX with useOptimisticFilters + useTransition during filtering.',
        highlights: [
          'Stack: Next.js App Router, React 19, TypeScript, Tailwind CSS 4, Ant Design — WooCommerce REST + WordPress for products, orders, and blog.',
          'Data layer: TanStack Query (stale/gc), React Hook Form + Zod (checkout, modular schemas); Woo client singleton with retries and TTL in-memory cache by entity type.',
          'Infrastructure: Upstash Redis (cache helpers), API routes for purge + revalidatePath + Woo client cache clear; optional Undici for TLS/dev; middleware maintenance → coming-soon.',
          'Catalog & PDP: advanced filters, pagination, sort, grid/list, quick view; galleries, related products, related blog wired to WordPress services.',
          'Cart & checkout: Context + useReducer, optimistic add-to-cart, localStorage sync, API routes for cart/recommendations; COD via Orders REST + Store API cart clear with cookie forwarding.',
          'Blog & marketing: WordPress-driven lists, posts by slug, tags/categories, related posts; newsletter + Resend (JSON + welcome/admin emails), Bearer-protected admin GET.',
          'Compliance & UX: age gate overlay for alcohol; toasts, loading states, useOptimisticFilters + useTransition for filter feedback.',
        ],
      },
      {
        slug: 'medical-records',
        title: 'Medical Record Management System',
        description:
          'PRMS: patient records plus face-based recognition — React + Vite frontend, Express + Sequelize (MySQL) API, and a Python OpenCV helper to match faces against stored patient avatars.',
        detailOverview:
          'PRMS (Patient Record & Recognition Management System) is a two-part application (backend + frontend) for managing patient data and performing simple face-based recognition against stored patient avatars.\n\n' +
          'The repository is organized as an Express API (entry at backend/server.js, routes under backend/src with Sequelize and mysql2), a React + Vite SPA in frontend/, and a Python helper backend/face_recognition.py that uses OpenCV: Haar cascade face detection and histogram correlation to compare an input image with avatar images whose paths are stored in the database (patients table: patient_id, avatar, etc.). A trained model file (model.h5) is also part of the repo for related ML workflows.\n\n' +
          'Configuration is environment-driven: backend .env (e.g. PORT, DB_HOST, DB_USER, DB_PASSWORD, DB_NAME) and frontend VITE_API_BASE_URL pointing at the API. The README recommends moving any hardcoded DB credentials in the Python script to environment variables for production.\n\n' +
          'Prerequisites include Node.js (18+), npm, Python 3 with opencv-python, numpy, mysql-connector, and MySQL. Face matching is intentionally basic (histogram-based) — the README notes accuracy limits and suggests embeddings + cosine similarity for stronger real-world results. Other notes: sanitize avatar uploads, avoid committing secrets, and consider Git LFS or external storage for large binaries like model.h5.',
        highlights: [
          'Architecture: React + Vite SPA; Node.js + Express backend with Sequelize ORM and MySQL; Python OpenCV script for face detection and avatar comparison.',
          'Face recognition flow: run python backend/face_recognition.py with a photo path — script reads patient avatars from MySQL and prints patient_id when similarity passes a threshold.',
          'Database: Sequelize and sequelize-cli; patients table stores identifiers and avatar paths for the recognition helper.',
          'Security & ops: JWT and env-based config described in README; warns against hardcoded DB secrets in the Python helper and recommends locking down uploads.',
          'Documentation & gaps: README lists known limitations (simple histogram matcher, no OpenAPI yet), TODOs for env-based Python DB config, tests, and CI.',
          'Open source: github.com/VQuocDinh/PRMS — clone, backend npm run server / npm start, frontend npm run dev (Vite default port 5173).',
        ],
      },
      {
        slug: 'coffee-ecommerce',
        title: 'Coffee E-Commerce Platform',
        description:
          'Service-oriented architecture e-commerce system with microservices design pattern. Dockerized deployment enabling scalable, maintainable infrastructure.',
        detailOverview:
          'An e-commerce solution for coffee products built around a service-oriented architecture. Services are containerized with Docker to simplify deployment and scaling. The platform supports catalog management, orders, and integration points for payment and inventory.',
        highlights: [
          'Microservices-style boundaries with Node.js services and clear API contracts.',
          'Docker-based deployment for reproducible environments across dev and production.',
          'React storefront with responsive layout and integration with backend services.',
          'Designed for horizontal scaling and independent deployment of services.',
        ],
      },
      {
        slug: 'music-streaming',
        title: 'Online Music Streaming Platform',
        description:
          'Music streaming application with AI-powered recommendation engine using Python. Implemented machine learning algorithms for personalized music suggestions.',
        detailOverview:
          'A streaming-style music application featuring playlists, playback, and a Python-powered recommendation layer. Machine learning models analyze listening patterns to surface personalized track suggestions and improve discovery.',
        highlights: [
          'Python backend for recommendation logic and integration with the React client.',
          'Personalized suggestions using collaborative filtering / content signals (project-specific).',
          'REST APIs for catalog, user libraries, and playback metadata.',
          'Focus on modularity so recommendation engines can evolve independently.',
        ],
      },
    ],
  },
  education: {
    eyebrow: 'Background',
    title: 'Education & Certifications',
    subtitle: 'Academic foundation and continuous learning.',
    educationHeading: 'Education',
    certHeading: 'Certifications & Training',
    institution: 'Posts and Telecommunications Institute of Technology (PTIT)',
    degree: 'Bachelor of Software Engineering',
    period: '2020 – 2025',
    detail:
      'Awarded Excellent Academic Scholarship (3 consecutive years) for maintaining GPA > 3.5/4.0',
    certs: [
      { name: 'The Ultimate React Course 2025', issuer: 'Udemy', year: '2025' },
      { name: 'Front End Development Libraries', issuer: 'freeCodeCamp', year: '2024' },
      { name: 'JavaScript Algorithms and Data Structures', issuer: 'freeCodeCamp', year: '2023' },
      { name: 'TOEIC Listening & Reading: 725', issuer: 'IIG Vietnam', year: '2024' },
    ],
  },
  contact: {
    eyebrow: 'Contact',
    title: 'Get In Touch',
    subtitle: "I'm open to new opportunities, collaborations, and meaningful projects.",
    infoTitle: 'Contact information',
    address: 'Thu Duc City, HCMC, Vietnam',
    formTitle: 'Send a message',
    formHint: "I'll get back to you as soon as possible.",
    name: 'Name',
    email: 'Email',
    message: 'Message',
    placeholderName: 'Your name',
    placeholderEmail: 'you@email.com',
    placeholderMessage: 'Tell me about your project or role…',
    send: 'Send message',
    sending: 'Sending…',
    sent: 'Message sent',
    failed: 'Failed — try again',
    downloadCv: 'Download CV',
    footer: 'Built with React, Tailwind & Framer Motion.',
  },
  contactThankYou: {
    badge: 'Message sent',
    title: 'Thank you! 🎉',
    message: 'Your message has been received successfully. I appreciate you reaching out!',
    messagePersonal: 'Thanks for reaching out, {name}! Your message has been received — I truly appreciate your interest.',
    responseTime: 'I usually reply within 24 hours. Looking forward to connecting with you!',
    connect: "Let's also connect on",
    dismiss: 'Got it, thanks!',
    close: 'Close',
  },
} as const;
