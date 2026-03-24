export interface SkillDetailEntry {
  slug: string;
  title: string;
  know: readonly string[];
  done: readonly string[];
}

export function findSkillBySlug(
  slug: string | undefined,
  entries: readonly SkillDetailEntry[] | ReadonlyArray<SkillDetailEntry>
): SkillDetailEntry | undefined {
  if (!slug) return undefined;
  return entries.find((e) => e.slug === slug);
}
