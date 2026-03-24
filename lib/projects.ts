export interface ProjectDetailItem {
  slug: string;
  title: string;
  description: string;
  detailOverview: string;
  highlights: readonly string[];
}

export function findProjectBySlug<T extends { slug: string }>(
  slug: string | undefined,
  items: readonly T[] | ReadonlyArray<T>
): T | undefined {
  if (!slug) return undefined;
  return items.find((item) => item.slug === slug);
}
