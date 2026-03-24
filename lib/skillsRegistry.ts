/** Category keys must match `messages.skills.categories` */
export type SkillCategoryKey = 'frontend' | 'backend' | 'database' | 'state' | 'devops' | 'testing';

/** Single source of truth: order + URL slugs for Technical Skills */
export const SKILLS_STRUCTURE: { key: SkillCategoryKey; slugs: readonly string[] }[] = [
  {
    key: 'frontend',
    slugs: [
      'react',
      'typescript',
      'javascript-es6',
      'nextjs',
      'vite',
      'tailwindcss',
      'ant-design',
      'html5',
      'css3',
    ],
  },
  {
    key: 'backend',
    slugs: ['nodejs', 'nestjs', 'restful-apis', 'jwt-authentication', 'prisma-orm'],
  },
  {
    key: 'database',
    slugs: ['postgresql', 'mysql', 'mongodb', 'database-design'],
  },
  {
    key: 'state',
    slugs: ['react-query', 'context-api', 'ssr-ssg'],
  },
  {
    key: 'devops',
    slugs: ['git-github', 'docker', 'linux', 'swagger', 'jira', 'figma', 'vercel', 'render'],
  },
  {
    key: 'testing',
    slugs: ['jest', 'react-testing-library', 'unit-integration-testing'],
  },
] as const;

export const ALL_SKILL_SLUGS = SKILLS_STRUCTURE.flatMap((g) => [...g.slugs]);
