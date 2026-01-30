import type { SkillsData } from '../data/skills';

export interface SkillsRepository {
  getSkills(): Promise<SkillsData>;
}
