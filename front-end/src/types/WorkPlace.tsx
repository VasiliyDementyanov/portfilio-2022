export interface WorkPlace {
  projectName: string;
  location: string;
  duration: string;
  theses: Thesis[];
  technologies: Thesis[];
}

interface Thesis {
  name: string;
  link?: string;
  descriptionLines: string[];
}
