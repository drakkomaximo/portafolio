import type { Project } from '../data/projects';

export interface ProjectsRepository {
  getProjects(lang: 'es' | 'en'): Promise<Project[]>;
}
