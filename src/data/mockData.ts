import { Class, Teacher, Announcement, Enrollment } from '@/types';

export const mockClasses: Class[] = [
  // Original classes
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
  },
  // New classes from pathway recommendations
  {
    id: '5',
    name: 'Advanced Programming & Algorithms',
    description: 'Dive deep into programming concepts, data structures, and algorithm design.',
    teacher: 'Dr. Alex Kumar',
    teacherId: '5',
    schedule: 'Mon, Wed, Fri 1:00-2:30 PM',
    capacity: 20,
    enrolled: 12,
    category: 'Computer Science',
    level: 'advanced'
  },
  {
    id: '6',
    name: 'Engineering Mathematics',
    description: 'Applied mathematics for engineering and technical problem-solving.',
    teacher: 'Prof. Lisa Martinez',
    teacherId: '6',
    schedule: 'Tue, Thu 9:00-10:30 AM',
    capacity: 25,
    enrolled: 16,
    category: 'Mathematics',
    level: 'intermediate'
  },
  {
    id: '7',
    name: 'Competition Mathematics',
    description: 'Advanced problem-solving techniques and mathematical competitions.',
    teacher: 'Dr. Sarah Johnson',
    teacherId: '1',
    schedule: 'Sat 10:00-12:00 PM',
    capacity: 15,
    enrolled: 8,
    category: 'Mathematics',
    level: 'advanced'
  },
  {
    id: '8',
    name: 'Advanced Biology & Research Methods',
    description: 'Explore cellular biology, genetics, and scientific research techniques.',
    teacher: 'Dr. Maria Santos',
    teacherId: '7',
    schedule: 'Mon, Wed, Fri 10:00-11:30 AM',
    capacity: 20,
    enrolled: 14,
    category: 'Science',
    level: 'advanced'
  },
  {
    id: '9',
    name: 'Environmental Science & Sustainability',
    description: 'Study ecosystems, climate change, and sustainable practices.',
    teacher: 'Prof. John Green',
    teacherId: '8',
    schedule: 'Tue, Thu 2:00-3:30 PM',
    capacity: 25,
    enrolled: 18,
    category: 'Science',
    level: 'intermediate'
  },
  {
    id: '10',
    name: 'Experimental Physics Laboratory',
    description: 'Hands-on experiments with mechanics, electricity, and modern physics.',
    teacher: 'Dr. Robert Kim',
    teacherId: '9',
    schedule: 'Wed, Fri 3:00-4:30 PM',
    capacity: 16,
    enrolled: 11,
    category: 'Science',
    level: 'intermediate'
  },
  {
    id: '11',
    name: 'Advanced Chemistry & Lab Techniques',
    description: 'Organic and inorganic chemistry with extensive laboratory work.',
    teacher: 'Prof. Anna Petrov',
    teacherId: '10',
    schedule: 'Mon, Wed 2:00-3:30 PM',
    capacity: 18,
    enrolled: 13,
    category: 'Science',
    level: 'advanced'
  },
  {
    id: '12',
    name: 'Robotics & Programming',
    description: 'Learn to build and program robots using modern technologies.',
    teacher: 'Dr. Tech Williams',
    teacherId: '11',
    schedule: 'Tue, Thu 1:00-2:30 PM',
    capacity: 20,
    enrolled: 17,
    category: 'Technology',
    level: 'intermediate'
  },
  {
    id: '13',
    name: 'Public Speaking & Debate',
    description: 'Master the art of persuasive communication and debate techniques.',
    teacher: 'Prof. Michael Chen',
    teacherId: '2',
    schedule: 'Mon, Wed 3:00-4:30 PM',
    capacity: 20,
    enrolled: 15,
    category: 'Communication',
    level: 'intermediate'
  },
  {
    id: '14',
    name: 'Student Journalism & Media',
    description: 'Learn news writing, interviewing, and digital media production.',
    teacher: 'Ms. Rachel Taylor',
    teacherId: '12',
    schedule: 'Tue, Thu 10:00-11:30 AM',
    capacity: 15,
    enrolled: 9,
    category: 'Media',
    level: 'intermediate'
  },
  {
    id: '15',
    name: 'Sports Science & Fitness',
    description: 'Learn about exercise physiology, nutrition, and athletic performance.',
    teacher: 'Coach Mark Davis',
    teacherId: '13',
    schedule: 'Mon, Wed, Fri 4:00-5:30 PM',
    capacity: 25,
    enrolled: 20,
    category: 'Sports',
    level: 'intermediate'
  },
  {
    id: '16',
    name: 'Advanced Arabic Literature',
    description: 'Explore classical and modern Arabic literature and poetry.',
    teacher: 'Prof. Ahmed Hassan',
    teacherId: '14',
    schedule: 'Tue, Thu 11:00-12:30 PM',
    capacity: 20,
    enrolled: 12,
    category: 'Languages',
    level: 'intermediate'
  },
  {
    id: '17',
    name: 'Digital Art & Design',
    description: 'Learn digital illustration, graphic design, and visual communication.',
    teacher: 'Ms. Sophie Clark',
    teacherId: '15',
    schedule: 'Mon, Wed 1:00-2:30 PM',
    capacity: 18,
    enrolled: 14,
    category: 'Arts',
    level: 'beginner'
  },
  {
    id: '18',
    name: 'Young Entrepreneurs Program',
    description: 'Learn business fundamentals, marketing, and startup development.',
    teacher: 'Mr. James Wilson',
    teacherId: '16',
    schedule: 'Fri 2:00-4:00 PM',
    capacity: 20,
    enrolled: 11,
    category: 'Business',
    level: 'intermediate'
  },
  {
    id: '19',
    name: 'Digital Music Production',
    description: 'Learn to create, record, and produce music using digital tools.',
    teacher: 'Prof. Nina Jazz',
    teacherId: '17',
    schedule: 'Sat 2:00-4:00 PM',
    capacity: 15,
    enrolled: 8,
    category: 'Music',
    level: 'intermediate'
  },
  {
    id: '20',
    name: 'Photography & Visual Storytelling',
    description: 'Master composition, lighting, and digital photo editing techniques.',
    teacher: 'Mr. Carlos Photo',
    teacherId: '18',
    schedule: 'Thu, Sat 10:00-11:30 AM',
    capacity: 16,
    enrolled: 10,
    category: 'Arts',
    level: 'beginner'
  },
  {
    id: '21',
    name: 'Health & Wellness Studies',
    description: 'Learn about nutrition, fitness, and promoting healthy lifestyles.',
    teacher: 'Dr. Emma Health',
    teacherId: '19',
    schedule: 'Wed, Fri 1:00-2:30 PM',
    capacity: 22,
    enrolled: 16,
    category: 'Health',
    level: 'beginner'
  },
  {
    id: '22',
    name: 'Web Development Bootcamp',
    description: 'Build real websites and web applications using modern technologies.',
    teacher: 'Dr. Emily Rodriguez',
    teacherId: '3',
    schedule: 'Mon, Wed, Fri 2:00-3:30 PM',
    capacity: 20,
    enrolled: 18,
    category: 'Computer Science',
    level: 'intermediate'
  },
  {
    id: '23',
    name: 'Independent Project Workshop',
    description: 'Work on long-term projects in your areas of interest with mentor guidance.',
    teacher: 'Various Mentors',
    teacherId: '20',
    schedule: 'Flexible scheduling',
    capacity: 12,
    enrolled: 7,
    category: 'Project Work',
    level: 'intermediate'
  },
  {
    id: '24',
    name: 'Team Collaboration & Leadership',
    description: 'Develop teamwork skills through group projects and leadership activities.',
    teacher: 'Coach Leadership',
    teacherId: '21',
    schedule: 'Tue, Thu 3:00-4:30 PM',
    capacity: 18,
    enrolled: 13,
    category: 'Leadership',
    level: 'intermediate'
  },
  {
    id: '25',
    name: 'Study Skills & Time Management',
    description: 'Learn effective study techniques and time management strategies.',
    teacher: 'Ms. Study Skills',
    teacherId: '22',
    schedule: 'Mon, Wed 11:00-12:00 PM',
    capacity: 25,
    enrolled: 19,
    category: 'Academic Skills',
    level: 'beginner'
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