
export interface Course {
  title: string;
  description: string;
  tag: string;
}

export interface TabContent {
  title: string;
  description: string;
  courses: Course[];
  cta?: {
    text: string;
    link: string;
  }
}

export interface TabData {
  label: string;
  icon: React.ReactNode;
  content: TabContent;
}

export interface CourseCategory {
  id: string;
  title: string;
  description: string;
  playlistId: string;
  ctaText: string;
}
