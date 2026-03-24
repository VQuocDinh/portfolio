/**
 * Project cards & detail pages — keep order aligned with `messages.projects.items`.
 */
export interface ProjectCardMeta {
  githubUrl: string;
  image: string;
  tags: readonly string[];
  /** Public deployment URL, or null if not available */
  liveUrl: string | null;
}

export const PROJECT_CARD_META: readonly ProjectCardMeta[] = [
  {
    githubUrl: 'https://github.com/VQuocDinh/aiwine',
    image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?q=80&w=1200&auto=format&fit=crop',
    tags: ['Next.js', 'React 19', 'WooCommerce', 'WordPress', 'Redis', 'Tailwind', 'TanStack Query'],
    liveUrl: 'https://aiwine.vn',
  },
  {
    githubUrl: 'https://github.com/VQuocDinh/PRMS',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1200&auto=format&fit=crop',
    tags: ['React', 'Vite', 'Express', 'MySQL', 'Python'],
    liveUrl: null,
  },
  {
    githubUrl: 'https://github.com/VQuocDinh/hancoffee-service-oriented',
    image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=1200&auto=format&fit=crop',
    tags: ['Docker', 'Microservices', 'React', 'Node.js'],
    liveUrl: null,
  },
  {
    githubUrl: 'https://github.com/VQuocDinh/play-music',
    image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=1200&auto=format&fit=crop',
    tags: ['Python', 'React', 'Machine Learning', 'AI'],
    liveUrl: null,
  },
] as const;

/** Show ownership / live-site notice modal before opening deployment URL */
export const LIVE_NOTICE_SLUGS = new Set<string>(['aiwine']);
