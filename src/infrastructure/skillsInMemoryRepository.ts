import { skillsData } from '../data/skills';
import type { SkillsData } from '../data/skills';
import type { SkillsRepository } from '../domain/skillsRepository';

export const skillsInMemoryRepository: SkillsRepository = {
  async getSkills(): Promise<SkillsData> {
    return skillsData;
  }
};
