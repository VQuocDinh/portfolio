/** English copy for /skills/:slug — keep slugs in sync with lib/skillsRegistry.ts */
export const skillDetailEn = {
  backToSkills: 'Back to skills',
  learnMoreAria: 'Learn more about',
  breadcrumbAria: 'Breadcrumb',
  knowHeading: 'What I know',
  doneHeading: 'What I have done',
  metaTitleSuffix: 'Vo Quoc Dinh',
  /** {skill} is replaced with the skill title on the skill detail page */
  skillUpdatingNote: "I'm still updating my {skill} skills every day to keep getting better.",
  entries: [
    {
      slug: 'react',
      title: 'React',
      know: [
        'Functional components, hooks (useState, useEffect, useMemo, useCallback), and composition patterns.',
        'Code splitting, lazy loading, and performance-minded rendering for production apps.',
        'Working with TypeScript, React Router, and common ecosystem libraries.',
      ],
      done: [
        'Built and maintained large React + TypeScript frontends at BridgeUp (Vite) with modular architecture.',
        'Implemented social and dashboard features with React Query and clear component boundaries.',
        'Reduced unnecessary re-renders and improved perceived load through lazy routes and thoughtful state placement.',
      ],
    },
    {
      slug: 'typescript',
      title: 'TypeScript',
      know: [
        'Strong typing for components, hooks, API models, and shared domain types.',
        'Interfaces, generics, utility types, and narrowing for safer refactors.',
        'Aligning types with backend DTOs and validation layers.',
      ],
      done: [
        'Used TypeScript across React frontends and NestJS backends for end-to-end type discipline.',
        'Defined shared types for REST payloads and forms to catch issues early in development.',
        'Collaborated in code reviews with a focus on maintainable type design.',
      ],
    },
    {
      slug: 'javascript-es6',
      title: 'JavaScript (ES6+)',
      know: [
        'Modern syntax: modules, destructuring, async/await, promises, and array/object helpers.',
        'Browser APIs, DOM fundamentals, and practical debugging.',
        'Functional patterns and immutability where they improve clarity.',
      ],
      done: [
        'Shipped production features in ES module codebases with Vite and Node.js.',
        'Wrote readable async flows for API calls, auth, and UI state.',
        'Optimized hot paths and avoided common pitfalls in event handling and closures.',
      ],
    },
    {
      slug: 'nextjs',
      title: 'Next.js',
      know: [
        'App/Pages concepts, routing, layouts, and hybrid rendering models.',
        'SSR/SSG trade-offs and SEO-oriented delivery.',
        'Integration with React, TypeScript, and API routes or BFF patterns.',
      ],
      done: [
        'Delivered enterprise-facing sites with SSR/SSG at DXT to improve SEO and first paint.',
        'Structured projects for scalable routing and shared UI components.',
        'Worked with performance tuning (rendering, caching awareness) in real user traffic.',
      ],
    },
    {
      slug: 'vite',
      title: 'Vite',
      know: [
        'Fast dev server, HMR, and environment-based configuration.',
        'Building for production with sensible chunking and asset handling.',
        'Plugins and path aliases for a clean project structure.',
      ],
      done: [
        'Built BridgeUp’s frontend on Vite with React + TypeScript for a fast dev loop.',
        'Tuned build output and code splitting for quicker initial loads.',
        'Used Vite as the baseline for modern tooling without heavy custom webpack config.',
      ],
    },
    {
      slug: 'tailwindcss',
      title: 'TailwindCSS',
      know: [
        'Utility-first styling, responsive breakpoints, and design tokens.',
        'Component composition and avoiding class soup with patterns and small abstractions.',
        'Dark/light and theming considerations when paired with a design system.',
      ],
      done: [
        'Implemented Tailwind layouts across portfolio and product UIs with consistent spacing and typography.',
        'Shipped responsive, mobile-first interfaces quickly without hand-writing large CSS files.',
        'Combined Tailwind with component libraries where needed.',
      ],
    },
    {
      slug: 'ant-design',
      title: 'Ant Design',
      know: [
        'Form layouts, tables, modals, and data-heavy UI patterns.',
        'Theming and customizing components within constraints.',
        'Accessibility basics and consistent behavior across complex screens.',
      ],
      done: [
        'Built internal and admin-style dashboards with tables, filters, and forms.',
        'Delivered consistent UX for operations teams using Ant Design primitives.',
        'Balanced library defaults with custom styling and business rules.',
      ],
    },
    {
      slug: 'html5',
      title: 'HTML5',
      know: [
        'Semantic markup, landmarks, and meaningful structure for accessibility.',
        'Forms, validation attributes, and media elements where relevant.',
        'SEO-friendly headings and document outline.',
      ],
      done: [
        'Authored structured UIs that work well with screen readers and keyboard navigation.',
        'Implemented forms and flows with clear labels and error semantics.',
        'Collaborated with designers to translate layouts into clean markup.',
      ],
    },
    {
      slug: 'css3',
      title: 'CSS3',
      know: [
        'Flexbox, Grid, responsive layouts, and modern layout patterns.',
        'Animations, transitions, and subtle motion without hurting performance.',
        'Cross-browser considerations and progressive enhancement.',
      ],
      done: [
        'Built responsive layouts for mobile-first products at scale.',
        'Worked with design systems and Tailwind while understanding underlying CSS.',
        'Polished UI states: hover, focus, loading, and empty states.',
      ],
    },
    {
      slug: 'nodejs',
      title: 'Node.js',
      know: [
        'Event loop basics, async I/O, and structuring services.',
        'npm/yarn workflows, scripts, and environment configuration.',
        'Integration with HTTP frameworks and middleware patterns.',
      ],
      done: [
        'Developed Node.js services and APIs alongside React clients in fullstack teams.',
        'Handled auth, validation, and error handling in production services.',
        'Used Node for tooling and microservice-style boundaries in project work.',
      ],
    },
    {
      slug: 'nestjs',
      title: 'NestJS',
      know: [
        'Modules, controllers, providers, DI, and layered architecture.',
        'Guards, interceptors, pipes, and validation with class-validator.',
        'REST design and integration with Prisma and PostgreSQL.',
      ],
      done: [
        'Designed and implemented REST APIs for BridgeUp with NestJS + Prisma.',
        'Implemented JWT auth and role-based authorization across modules.',
        'Optimized queries and structured responses for consistent frontend consumption.',
      ],
    },
    {
      slug: 'restful-apis',
      title: 'RESTful APIs',
      know: [
        'Resource modeling, HTTP verbs, status codes, and idempotency.',
        'Pagination, filtering, versioning, and error payload conventions.',
        'Documentation mindset (OpenAPI/Swagger) for team alignment.',
      ],
      done: [
        'Shipped production REST APIs consumed by React clients with strong typing.',
        'Collaborated with frontend on pagination, caching, and error UX.',
        'Reduced payload sizes and improved latency for high-traffic endpoints.',
      ],
    },
    {
      slug: 'jwt-authentication',
      title: 'JWT Authentication',
      know: [
        'Access vs refresh tokens, storage trade-offs, and rotation concepts.',
        'Signing, verification, and secure claims in NestJS guards.',
        'Session vs JWT in SPA and mobile contexts.',
      ],
      done: [
        'Implemented JWT-based auth and RBAC for healthcare and EdTech-style projects.',
        'Protected routes across modules and enforced role checks server-side.',
        'Worked with secure headers and production hardening practices.',
      ],
    },
    {
      slug: 'prisma-orm',
      title: 'Prisma ORM',
      know: [
        'Schema modeling, migrations, and relations.',
        'Query API, transactions, and performance tuning.',
        'Type-safe database access with NestJS.',
      ],
      done: [
        'Used Prisma with PostgreSQL for BridgeUp and academic projects.',
        'Wrote efficient queries and avoided N+1 issues in list endpoints.',
        'Maintained schema evolution with migrations and team review.',
      ],
    },
    {
      slug: 'postgresql',
      title: 'PostgreSQL',
      know: [
        'Relational modeling, indexes, constraints, and normalization.',
        'SQL basics and explain-oriented performance checks.',
        'JSON columns when appropriate vs normalized tables.',
      ],
      done: [
        'Primary production database for NestJS + Prisma backends.',
        'Tuned queries contributing to faster API response times in real workloads.',
        'Designed schemas for multi-tenant and role-based data access.',
      ],
    },
    {
      slug: 'mysql',
      title: 'MySQL',
      know: [
        'Relational modeling and SQL fundamentals.',
        'Indexes and common performance tuning patterns.',
        'Interoperability with ORMs and legacy schemas.',
      ],
      done: [
        'Worked with MySQL in coursework and enterprise-style projects.',
        'Imported/exported data and wrote migrations for schema updates.',
        'Compared trade-offs vs PostgreSQL for specific deployment needs.',
      ],
    },
    {
      slug: 'mongodb',
      title: 'MongoDB',
      know: [
        'Document modeling, collections, and indexing.',
        'When document stores fit vs relational design.',
        'Basic aggregation and query patterns.',
      ],
      done: [
        'Used MongoDB in learning projects and prototypes.',
        'Modeled flexible documents for evolving requirements.',
        'Integrated with Node.js drivers and REST layers in experiments.',
      ],
    },
    {
      slug: 'database-design',
      title: 'Database Design & Optimization',
      know: [
        'Normalization, keys, constraints, and integrity.',
        'Indexing strategies and query planning basics.',
        'Scalability considerations: read replicas, caching, partitioning.',
      ],
      done: [
        'Designed schemas for multi-module apps with role-based access.',
        'Improved query performance and reduced response times in production APIs.',
        'Balanced denormalization with clarity and maintainability.',
      ],
    },
    {
      slug: 'react-query',
      title: 'React Query',
      know: [
        'Queries, mutations, cache keys, invalidation, and stale times.',
        'Background refetching and optimistic updates where appropriate.',
        'DevTools for debugging and tuning data layers.',
      ],
      done: [
        'Used TanStack Query (React Query) at BridgeUp to cut redundant API calls.',
        'Improved UX with loading/error states and cache-aware refetching.',
        'Aligned server state with UI without overusing global client state.',
      ],
    },
    {
      slug: 'context-api',
      title: 'Context API',
      know: [
        'Provider patterns, consumers, and avoiding unnecessary re-renders.',
        'When context fits vs local state or dedicated state libraries.',
        'Composition with hooks and memoization.',
      ],
      done: [
        'Built shared UI contexts for theme, auth hints, and cross-cutting concerns.',
        'Reduced prop drilling in medium-sized React trees.',
        'Combined Context with React Query for a clear split of server vs client state.',
      ],
    },
    {
      slug: 'ssr-ssg',
      title: 'SSR / SSG',
      know: [
        'Server-side rendering vs static generation trade-offs.',
        'SEO and time-to-first-byte considerations.',
        'Hydration and data-fetching patterns on the server.',
      ],
      done: [
        'Implemented SSR/SSG with Next.js at DXT to improve SEO and first paint.',
        'Chose rendering modes per route based on content freshness needs.',
        'Measured impact on performance and search visibility.',
      ],
    },
    {
      slug: 'git-github',
      title: 'Git / GitHub',
      know: [
        'Branching (feature branches), merges, rebases, and conflict resolution.',
        'Pull requests, reviews, and CI hooks.',
        'Tags, releases, and sensible commit messages.',
      ],
      done: [
        'Daily Git workflows in Agile teams with code review culture.',
        'Collaborated via GitHub PRs with clear descriptions and reviewers.',
        'Used branching strategies to ship safely and roll back when needed.',
      ],
    },
    {
      slug: 'docker',
      title: 'Docker',
      know: [
        'Images, containers, Dockerfiles, and multi-stage builds.',
        'Compose for local dev stacks.',
        'Service boundaries and reproducible environments.',
      ],
      done: [
        'Dockerized services in microservices-style e-commerce coursework.',
        'Aligned dev and deployment environments for fewer “works on my machine” issues.',
        'Built images for Node services and integrated with CI pipelines.',
      ],
    },
    {
      slug: 'linux',
      title: 'Linux',
      know: [
        'Shell basics, permissions, processes, and file systems.',
        'Deploying and troubleshooting on Linux servers.',
        'Package managers and environment setup.',
      ],
      done: [
        'Developed and deployed on Linux environments for web projects.',
        'Used SSH, logs, and basic ops to debug production issues.',
        'Comfortable with CI runners and cloud instances running Linux.',
      ],
    },
    {
      slug: 'swagger',
      title: 'Swagger',
      know: [
        'OpenAPI specs, schemas, and documenting endpoints.',
        'Generating clients and sharing contracts with frontend teams.',
        'Keeping docs in sync with implementation.',
      ],
      done: [
        'Authored Swagger/OpenAPI docs for NestJS APIs at DXT.',
        'Improved frontend-backend collaboration and reduced integration friction.',
        'Used docs as the single source of truth for request/response shapes.',
      ],
    },
    {
      slug: 'jira',
      title: 'Jira',
      know: [
        'Sprints, backlog grooming, and story workflows.',
        'Linking issues to releases and tracking blockers.',
        'Estimation and team communication.',
      ],
      done: [
        'Delivered features within sprint deadlines in Agile teams.',
        'Tracked bugs, tasks, and releases with clear ownership.',
        'Coordinated with product, QA, and stakeholders on priorities.',
      ],
    },
    {
      slug: 'figma',
      title: 'Figma',
      know: [
        'Reading layouts, spacing, and component specs.',
        'Exporting assets and inspecting design tokens.',
        'Collaborating in comments and design handoff.',
      ],
      done: [
        'Built UIs from Figma designs with pixel-aware implementation.',
        'Aligned with designers on responsive behavior and edge cases.',
        'Used Figma for portfolio and project mockups.',
      ],
    },
    {
      slug: 'vercel',
      title: 'Vercel',
      know: [
        'Deployments, preview URLs, and environment variables.',
        'Framework presets and build settings.',
        'Edge and CDN basics for static assets.',
      ],
      done: [
        'Deployed frontend projects with fast iteration and preview flows.',
        'Configured production and staging environments for SPAs.',
        'Used Vercel-friendly build outputs from Vite/React apps.',
      ],
    },
    {
      slug: 'render',
      title: 'Render',
      know: [
        'Web services, background workers, and managed databases.',
        'Environment variables and health checks.',
        'Deploy hooks and rollbacks.',
      ],
      done: [
        'Hosted backend services and connected databases with Render.',
        'Managed production configs and secrets responsibly.',
        'Monitored uptime and logs for deployed APIs.',
      ],
    },
    {
      slug: 'jest',
      title: 'Jest',
      know: [
        'Unit tests, matchers, mocks, and snapshot discipline.',
        'Running in CI and coverage thresholds.',
        'Async testing patterns.',
      ],
      done: [
        'Wrote unit tests for NestJS and React logic at BridgeUp.',
        'Contributed to ~80% coverage goals with meaningful tests.',
        'Used mocks to isolate services and external dependencies.',
      ],
    },
    {
      slug: 'react-testing-library',
      title: 'React Testing Library',
      know: [
        'Testing user behavior vs implementation details.',
        'Queries, async utilities, and accessible selectors.',
        'Integration-style component tests.',
      ],
      done: [
        'Tested React components in ways that mirror real user flows.',
        'Combined with Jest for reliable UI regression coverage.',
        'Focused on accessibility and meaningful assertions.',
      ],
    },
    {
      slug: 'unit-integration-testing',
      title: 'Unit & Integration Testing',
      know: [
        'Test pyramid: unit vs integration vs e2e.',
        'Deterministic tests, fixtures, and test data.',
        'CI integration and flaky test mitigation.',
      ],
      done: [
        'Built a testing habit across services and UI with Jest and Testing Library.',
        'Caught regressions before release and supported refactors with confidence.',
        'Balanced coverage with speed and maintainability in CI.',
      ],
    },
  ],
} as const;
