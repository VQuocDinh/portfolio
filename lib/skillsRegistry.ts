/** Category keys must match `messages.skills.categories` (aligned with CV) */
export type SkillCategoryKey =
  | 'frontend'
  | 'backend'
  | 'mobile'
  | 'database'
  | 'state'
  | 'devops'
  | 'testing'
  | 'tools';

/** Single source of truth: order + URL slugs for Technical Skills */
export const SKILLS_STRUCTURE: { key: SkillCategoryKey; slugs: readonly string[] }[] = [
  {
    key: 'frontend',
    slugs: ['react', 'nextjs', 'typescript', 'javascript-es6', 'tailwindcss'],
  },
  {
    key: 'backend',
    slugs: ['nestjs', 'nodejs', 'restful-apis', 'microservices'],
  },
  {
    key: 'mobile',
    slugs: ['react-native'],
  },
  {
    key: 'database',
    slugs: ['postgresql', 'mysql', 'prisma', 'typeorm'],
  },
  {
    key: 'state',
    slugs: ['react-query', 'redux-toolkit', 'context-api'],
  },
  {
    key: 'devops',
    slugs: ['cicd-github-actions', 'docker', 'vercel', 'render'],
  },
  {
    key: 'testing',
    slugs: ['jest', 'react-testing-library', 'unit-integration-testing', 'jwt', 'oauth2'],
  },
  {
    key: 'tools',
    slugs: ['git-github', 'swagger', 'jira', 'figma', 'cursor', 'github-copilot'],
  },
] as const;

export const ALL_SKILL_SLUGS = SKILLS_STRUCTURE.flatMap((g) => [...g.slugs]);
