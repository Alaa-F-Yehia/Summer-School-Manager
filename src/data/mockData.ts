import { Class, Teacher, Announcement, Enrollment } from '@/types';

export const mockClasses: Class[] = [
  {
    id: '1',
    name: 'Advanced Mathematics',
    description: 'Calculus, algebra, and advanced mathematical concepts for college preparation.',
    teacher: 'Dr. Sarah Johnson',
    teacherId: '1',
    schedule: 'Mon, Wed, Fri 9:00-10:30 AM',
    capacity: 25,
    enrolled: 18,
    category: 'Mathematics',
    level: 'advanced'
  },
  {
    id: '2',
    name: 'Creative Writing Workshop',
    description: 'Develop your creative writing skills through workshops and peer feedback.',
    teacher: 'Prof. Michael Chen',
    teacherId: '2',
    schedule: 'Tue, Thu 2:00-3:30 PM',
    capacity: 20,
    enrolled: 15,
    category: 'Literature',
    level: 'intermediate'
  },
  {
    id: '3',
    name: 'Introduction to Programming',
    description: 'Learn the fundamentals of programming with Python and JavaScript.',
    teacher: 'Dr. Emily Rodriguez',
    teacherId: '3',
    schedule: 'Mon, Wed, Fri 11:00-12:30 PM',
    capacity: 30,
    enrolled: 28,
    category: 'Computer Science',
    level: 'beginner'
  },
  {
    id: '4',
    name: 'World History',
    description: 'Explore major historical events and their impact on modern society.',
    teacher: 'Prof. David Thompson',
    teacherId: '4',
    schedule: 'Tue, Thu 10:00-11:30 AM',
    capacity: 25,
    enrolled: 22,
    category: 'History',
    level: 'intermediate'
  }
];

export const mockTeachers: Teacher[] = [
  {
    id: '1',
    name: 'Dr. Sarah Johnson',
    bio: 'PhD in Mathematics from MIT. 15 years of teaching experience in advanced mathematics.',
    specialties: ['Calculus', 'Algebra', 'Statistics', 'Mathematical Analysis'],
    rating: 4.8,
    experience: '15 years'
  },
  {
    id: '2',
    name: 'Prof. Michael Chen',
    bio: 'Award-winning author and creative writing instructor. Published 5 novels.',
    specialties: ['Creative Writing', 'Fiction', 'Poetry', 'Literature Analysis'],
    rating: 4.9,
    experience: '12 years'
  },
  {
    id: '3',
    name: 'Dr. Emily Rodriguez',
    bio: 'Computer Science professor specializing in software development and programming education.',
    specialties: ['Python', 'JavaScript', 'Web Development', 'Algorithm Design'],
    rating: 4.7,
    experience: '8 years'
  },
  {
    id: '4',
    name: 'Prof. David Thompson',
    bio: 'History professor with expertise in world civilizations and modern history.',
    specialties: ['World History', 'Modern History', 'Historical Research', 'Cultural Studies'],
    rating: 4.6,
    experience: '20 years'
  }
];

export const mockAnnouncements: Announcement[] = [
  {
    id: '1',
    title: 'Summer Program Registration Now Open',
    content: 'Registration for the 2024 Summer School Program is now open. Early bird discount available until April 15th.',
    author: 'Administration',
    authorId: 'admin',
    createdAt: '2024-03-15T10:00:00Z',
    priority: 'high',
    category: 'Registration'
  },
  {
    id: '2',
    title: 'New AI-Powered Course Recommendations',
    content: 'We\'ve launched our new AI assistant to help you find the perfect courses for your learning goals.',
    author: 'Tech Team',
    authorId: 'tech',
    createdAt: '2024-03-10T14:30:00Z',
    priority: 'medium',
    category: 'Technology'
  },
  {
    id: '3',
    title: 'Library Hours Extended',
    content: 'The library will now be open until 9 PM on weekdays to accommodate summer students.',
    author: 'Library Staff',
    authorId: 'library',
    createdAt: '2024-03-08T09:00:00Z',
    priority: 'low',
    category: 'Facilities'
  }
];

export const mockEnrollments: Enrollment[] = [
  {
    id: '1',
    studentId: '2',
    classId: '1',
    enrolledAt: '2024-03-01T12:00:00Z',
    status: 'active'
  },
  {
    id: '2',
    studentId: '2',
    classId: '2',
    enrolledAt: '2024-03-01T12:05:00Z',
    status: 'active'
  }
];