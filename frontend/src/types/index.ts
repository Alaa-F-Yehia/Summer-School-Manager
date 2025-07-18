export interface User {
  id: string;
  name: string;
  email: string;
  role: 'student' | 'manager';
  avatar?: string;
}

export interface Class {
  id: string;
  name: string;
  description: string;
  teacher: string;
  teacherId: string;
  schedule: string;
  capacity: number;
  enrolled: number;
  category: string;
  level: 'beginner' | 'intermediate' | 'advanced';
}

export interface Teacher {
  id: string;
  name: string;
  bio: string;
  specialties: string[];
  avatar?: string;
  rating: number;
  experience: string;
}

export interface Announcement {
  id: string;
  title: string;
  content: string;
  author: string;
  authorId: string;
  createdAt: string;
  priority: 'low' | 'medium' | 'high';
  category: string;
}

export interface Enrollment {
  id: string;
  studentId: string;
  classId: string;
  enrolledAt: string;
  status: 'active' | 'dropped' | 'completed';
}

export interface PathwayRecommendation {
  id: string;
  title: string;
  description: string;
  classes: string[];
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  duration: string;
  category: string;
}