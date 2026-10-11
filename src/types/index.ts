export interface ClassProgram {
  id: string;
  name: string;
  age: string;
  tagline: string;
  description: string;
  badgeColor: string;
  cardColor: string;
  borderColor: string;
  iconBg: string;
  textColor: string;
  features: string[];
  activities: string[];
  scheduleSnippet: string;
  ratio: string;
}

export interface GalleryItem {
  id: number;
  src: string;
  title: string;
  category: "all" | "graduation" | "festivals" | "admissions" | "activities";
  description: string;
  featured?: boolean;
}

export interface Testimonial {
  name: string;
  parentOf: string;
  grade: string;
  rating: number;
  comment: string;
}

export interface FaqItem {
  question: string;
  answer: string;
  category?: string;
}
