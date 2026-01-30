import type { Company } from '../data/experience';

export interface ExperienceRepository {
  getCompanies(lang: string): Promise<Company[]>;
}
