
export interface ProjectPhase {
  title: string;
  description: string;
}

export interface Project {
  id: string;
  client: string;
  industry: string;
  summary: string;
  before: string;
  after: string;
  results: string[];
  image: string;
}

export interface Service {
  title: string;
  description: string;
  icon: React.ReactNode;
}
