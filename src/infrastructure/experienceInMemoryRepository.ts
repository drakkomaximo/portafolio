import { companies } from '../data/experience';
import type { Company } from '../data/experience';
import type { ExperienceRepository } from '../domain/experienceRepository';

export const experienceInMemoryRepository: ExperienceRepository = {
  async getCompanies(_lang: string): Promise<Company[]> {
    return companies;
  }
};
