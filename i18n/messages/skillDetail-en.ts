/** English copy for /skills/:slug — keep slugs in sync with lib/skillsRegistry.ts */
export const skillDetailEn = {
  backToSkills: 'Back to skills',
  learnMoreAria: 'Learn more about',
  breadcrumbAria: 'Breadcrumb',
  knowHeading: 'What I know',
  doneHeading: 'What I have done',
  metaTitleSuffix: 'Vo Quoc Dinh',
  skillUpdatingNote: "I'm still updating my {skill} skills every day to keep getting better.",
  entries: [
    {
      slug: 'react',
      title: 'React',
      know: [
        'Component-driven UI, hooks, and composition for scalable SPAs.',
        'Performance patterns: memoization, code splitting, and lazy routes.',
        'Ecosystem integration with TypeScript, routers, and data libraries.',
      ],
      done: [
        'Shipped production React + TypeScript frontends (Vite) with modular architecture at BridgeUp.',
        'Built social and dashboard features with clear boundaries and maintainable structure.',
        'Applied code splitting and lazy loading to improve initial load.',
      ],
    },
    {
      slug: 'nextjs',
      title: 'Next.js',
      know: [
        'App Router, layouts, and hybrid rendering (SSR/SSG) trade-offs.',
        'SEO-oriented delivery and performance tuning.',
        'Integration with React, TypeScript, and API routes / server actions.',
      ],
      done: [
        'Delivered enterprise-facing apps with SSR/SSG at DXT to improve SEO and first paint.',
        'Built responsive, mobile-first experiences with Next.js and Tailwind.',
        'Structured projects for scalable routing and shared UI.',
      ],
    },
    {
      slug: 'typescript',
      title: 'TypeScript',
      know: [
        'Strong typing for apps, APIs, and shared domain models.',
        'Interfaces, generics, and safe refactors across the stack.',
        'Alignment between frontend props and backend DTOs.',
      ],
      done: [
        'Used TypeScript across React clients and NestJS services.',
        'Defined shared types for REST payloads and forms.',
        'Collaborated in reviews with a focus on maintainable type design.',
      ],
    },
    {
      slug: 'javascript-es6',
      title: 'JavaScript (ES6+)',
      know: [
        'Modern syntax: modules, async/await, promises, and collections.',
        'Browser fundamentals and pragmatic debugging.',
        'Readable patterns for async flows and API integration.',
      ],
      done: [
        'Delivered features in ES module codebases with Vite and Node.',
        'Wrote maintainable client and server JS/TS in production teams.',
      ],
    },
    {
      slug: 'tailwindcss',
      title: 'Tailwind CSS',
      know: [
        'Utility-first styling, responsive breakpoints, and design tokens.',
        'Component-friendly patterns without heavy custom CSS.',
        'Integration with React/Next layouts and design systems.',
      ],
      done: [
        'Built UIs with Tailwind across BridgeUp and DXT projects.',
        'Shipped responsive, mobile-first interfaces quickly and consistently.',
      ],
    },
    {
      slug: 'nestjs',
      title: 'NestJS',
      know: [
        'Modules, controllers, providers, guards, and validation pipes.',
        'REST API design with Prisma/ORM integration.',
        'JWT auth patterns and layered architecture.',
      ],
      done: [
        'Designed REST APIs for BridgeUp with NestJS + Prisma + PostgreSQL.',
        'Implemented secure auth and role-based access across modules.',
      ],
    },
    {
      slug: 'nodejs',
      title: 'Node.js',
      know: [
        'Service structure, async I/O, and HTTP middleware patterns.',
        'npm workflows and environment configuration.',
        'Integration with Express-style stacks and tooling.',
      ],
      done: [
        'Built and maintained Node-backed services alongside React clients.',
        'Handled validation, errors, and production logging.',
      ],
    },
    {
      slug: 'restful-apis',
      title: 'RESTful APIs',
      know: [
        'Resource modeling, HTTP semantics, and consistent error payloads.',
        'Pagination, filtering, and documentation mindset (OpenAPI/Swagger).',
        'Versioning and contract clarity for frontend teams.',
      ],
      done: [
        'Shipped production REST APIs consumed by React apps.',
        'Collaborated with frontend on performance and integration.',
      ],
    },
    {
      slug: 'microservices',
      title: 'Microservices Architecture',
      know: [
        'Service boundaries, contracts, and deployment independence.',
        'Trade-offs vs monoliths for scaling teams and codebases.',
        'Container-friendly packaging and observability basics.',
      ],
      done: [
        'Worked on service-oriented e-commerce coursework with Dockerized services.',
        'Focused on clear API contracts between services.',
      ],
    },
    {
      slug: 'react-native',
      title: 'React Native',
      know: [
        'Cross-platform mobile UI with React patterns.',
        'Navigation, lists, and platform differences.',
        'Bridging JS and native concerns at a high level.',
      ],
      done: [
        'Built and iterated mobile experiences using React Native in learning and project contexts.',
        'Applied reusable component thinking across web and mobile.',
      ],
    },
    {
      slug: 'postgresql',
      title: 'PostgreSQL',
      know: [
        'Relational modeling, indexes, constraints, and query tuning.',
        'JSON columns when appropriate vs normalized tables.',
        'Transactions and data integrity.',
      ],
      done: [
        'Primary production database for NestJS + Prisma backends.',
        'Optimized queries contributing to faster API responses.',
      ],
    },
    {
      slug: 'mysql',
      title: 'MySQL',
      know: [
        'Relational SQL, indexing, and schema evolution.',
        'Interoperability with ORMs and legacy systems.',
      ],
      done: [
        'Used MySQL in coursework and integration scenarios.',
        'Compared deployment trade-offs vs PostgreSQL when relevant.',
      ],
    },
    {
      slug: 'prisma',
      title: 'Prisma',
      know: [
        'Schema modeling, migrations, and type-safe queries.',
        'Relations, transactions, and performance awareness.',
      ],
      done: [
        'Used Prisma with PostgreSQL for BridgeUp and DXT-era projects.',
        'Maintained schema changes with migrations and reviews.',
      ],
    },
    {
      slug: 'typeorm',
      title: 'TypeORM',
      know: [
        'Entity definitions, repositories, and relational mappings.',
        'Migrations and query patterns in TypeScript services.',
      ],
      done: [
        'Applied TypeORM patterns where projects standardized on it.',
        'Worked with decorators and relational models in Node services.',
      ],
    },
    {
      slug: 'react-query',
      title: 'React Query',
      know: [
        'Queries, mutations, cache keys, invalidation, and stale times.',
        'Server-state separation from UI state.',
      ],
      done: [
        'Reduced redundant API calls and improved UX at BridgeUp and DXT.',
        'Aligned caching strategy with product needs.',
      ],
    },
    {
      slug: 'redux-toolkit',
      title: 'Redux Toolkit',
      know: [
        'Slices, configureStore, and predictable state updates.',
        'When global client state fits vs server cache.',
      ],
      done: [
        'Used RTK-style patterns where teams standardized on Redux for complex UI state.',
        'Kept state updates testable and traceable.',
      ],
    },
    {
      slug: 'context-api',
      title: 'Context API',
      know: [
        'Provider patterns and avoiding unnecessary re-renders.',
        'Composition with hooks for cross-cutting UI concerns.',
      ],
      done: [
        'Reduced prop drilling in medium-sized React trees.',
        'Combined with React Query for clear server vs client state split.',
      ],
    },
    {
      slug: 'cicd-github-actions',
      title: 'CI/CD (GitHub Actions)',
      know: [
        'Workflows, jobs, secrets, and artifact patterns.',
        'Automated test and deploy pipelines.',
      ],
      done: [
        'Set up and iterated CI pipelines for team repositories.',
        'Integrated checks to reduce regressions before merge.',
      ],
    },
    {
      slug: 'docker',
      title: 'Docker',
      know: [
        'Images, multi-stage builds, and reproducible environments.',
        'Compose for local development stacks.',
      ],
      done: [
        'Dockerized services in microservices-style projects.',
        'Aligned dev/prod parity for fewer environment issues.',
      ],
    },
    {
      slug: 'vercel',
      title: 'Vercel',
      know: [
        'Deployments, preview URLs, and environment variables.',
        'Framework presets for Next.js and static sites.',
      ],
      done: [
        'Deployed frontend projects with fast preview and production workflows.',
      ],
    },
    {
      slug: 'render',
      title: 'Render',
      know: [
        'Managed web services, workers, and environment configuration.',
        'Health checks and deploy hooks.',
      ],
      done: [
        'Hosted APIs and connected databases on Render in project work.',
      ],
    },
    {
      slug: 'jest',
      title: 'Jest',
      know: [
        'Unit tests, mocks, matchers, and CI integration.',
        'Coverage goals and meaningful assertions.',
      ],
      done: [
        'Wrote unit tests for services and UI logic targeting ~80% coverage goals.',
      ],
    },
    {
      slug: 'react-testing-library',
      title: 'React Testing Library',
      know: [
        'Testing user-observable behavior and accessibility-friendly queries.',
        'Async testing utilities.',
      ],
      done: [
        'Built integration-style component tests aligned with user flows.',
      ],
    },
    {
      slug: 'unit-integration-testing',
      title: 'Unit & Integration Testing',
      know: [
        'Test pyramid, fixtures, and deterministic suites.',
        'Flake reduction and CI speed trade-offs.',
      ],
      done: [
        'Maintained testing habits across NestJS and React codebases.',
      ],
    },
    {
      slug: 'jwt',
      title: 'JWT',
      know: [
        'Access/refresh flows, signing, and secure claims.',
        'Guard patterns in NestJS and SPA consumption.',
      ],
      done: [
        'Implemented JWT-based auth and RBAC for production modules.',
      ],
    },
    {
      slug: 'oauth2',
      title: 'OAuth2',
      know: [
        'Authorization flows at a practical integration level.',
        'Tokens, scopes, and secure redirects.',
      ],
      done: [
        'Integrated third-party auth patterns where products required delegated access.',
      ],
    },
    {
      slug: 'git-github',
      title: 'Git / GitHub',
      know: [
        'Branching, PRs, reviews, and release hygiene.',
        'CI integration and collaboration workflows.',
      ],
      done: [
        'Daily GitHub workflows in Agile teams with code review culture.',
      ],
    },
    {
      slug: 'swagger',
      title: 'Swagger',
      know: [
        'OpenAPI specs and keeping docs aligned with implementation.',
        'Sharing contracts with frontend teams.',
      ],
      done: [
        'Authored Swagger/OpenAPI documentation for NestJS APIs at DXT.',
      ],
    },
    {
      slug: 'jira',
      title: 'Jira',
      know: [
        'Sprints, backlog grooming, and traceability.',
        'Linking work to releases and stakeholders.',
      ],
      done: [
        'Delivered features on sprint cadence with clear ownership.',
      ],
    },
    {
      slug: 'figma',
      title: 'Figma',
      know: [
        'Reading specs, spacing, and component handoff.',
        'Asset export and design collaboration.',
      ],
      done: [
        'Implemented UIs from Figma with responsive behavior.',
      ],
    },
    {
      slug: 'cursor',
      title: 'Cursor',
      know: [
        'AI-assisted editing, prompts, and repo-aware workflows.',
        'Balancing speed with review and correctness.',
      ],
      done: [
        'Used Cursor to accelerate implementation and refactors in day-to-day delivery.',
      ],
    },
    {
      slug: 'github-copilot',
      title: 'GitHub Copilot',
      know: [
        'Inline suggestions, tests, and boilerplate generation.',
        'Responsible use with review and validation.',
      ],
      done: [
        'Leveraged Copilot alongside Cursor to speed up feature delivery by an estimated 30–40% in typical workflows.',
      ],
    },
  ],
} as const;
