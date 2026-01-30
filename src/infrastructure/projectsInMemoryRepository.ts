import { projects } from '../data/projects';
import type { Project } from '../data/projects';
import type { ProjectsRepository } from '../domain/projectsRepository';

export const projectsInMemoryRepository: ProjectsRepository = {
  async getProjects(_lang: 'es' | 'en'): Promise<Project[]> {
    return projects;
  }
};
