export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  link?: string;
  github?: string;
  icon: string;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string[];
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  date: string;
  type: 'degree' | 'course' | 'language';
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  avatarInitials: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
}
