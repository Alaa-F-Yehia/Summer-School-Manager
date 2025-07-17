import { Class, Teacher, Announcement, Enrollment } from '@/types';

export const mockClasses: Class[] = [
  {
    id: '1',
    name: 'Arduino Adventure Lab',
    description: 'Build cool gadgets and learn programming with Arduino microcontrollers. Create blinking LEDs, sensors, and fun interactive projects!',
    teacher: 'Mr. Tech Wizard',
    teacherId: '1',
    schedule: 'Mon, Wed, Fri 9:00-11:00 AM',
    capacity: 15,
    enrolled: 12,
    category: 'Technology',
    level: 'beginner'
  },
  {
    id: '2',
    name: 'Robot Building Workshop',
    description: 'Design, build, and program your own robots! From simple moving bots to complex maze-solvers.',
    teacher: 'Dr. Robot Master',
    teacherId: '2',
    schedule: 'Tue, Thu 10:00-12:00 PM',
    capacity: 12,
    enrolled: 10,
    category: 'Technology',
    level: 'intermediate'
  },
  {
    id: '3',
    name: 'Game Development for Kids',
    description: 'Create your own video games using Scratch and simple programming. No experience needed!',
    teacher: 'Ms. Game Designer',
    teacherId: '3',
    schedule: 'Mon, Wed, Fri 1:00-3:00 PM',
    capacity: 20,
    enrolled: 18,
    category: 'Technology',
    level: 'beginner'
  },
  {
    id: '4',
    name: 'Mad Science Experiments',
    description: 'Explosive fun with safe science experiments! Make slime, volcanoes, and learn cool chemistry tricks.',
    teacher: 'Professor Mad Science',
    teacherId: '4',
    schedule: 'Tue, Thu 9:00-11:00 AM',
    capacity: 18,
    enrolled: 15,
    category: 'Science',
    level: 'beginner'
  },
  {
    id: '5',
    name: 'Outdoor Adventure Club',
    description: 'Rock climbing, hiking, orienteering, and outdoor survival skills. Connect with nature!',
    teacher: 'Ranger Rick',
    teacherId: '5',
    schedule: 'Mon, Wed, Fri 2:00-4:00 PM',
    capacity: 16,
    enrolled: 14,
    category: 'Adventure',
    level: 'beginner'
  },
  {
    id: '6',
    name: 'Arts & Crafts Studio',
    description: 'Pottery, painting, jewelry making, and creative projects. Express your artistic side!',
    teacher: 'Ms. Artsy',
    teacherId: '6',
    schedule: 'Tue, Thu 1:00-3:00 PM',
    capacity: 20,
    enrolled: 17,
    category: 'Arts',
    level: 'beginner'
  },
  {
    id: '7',
    name: 'Music & Performance Camp',
    description: 'Learn instruments, singing, and put on amazing performances for friends and family!',
    teacher: 'Maestro Music',
    teacherId: '7',
    schedule: 'Mon, Wed, Fri 11:00-1:00 PM',
    capacity: 25,
    enrolled: 22,
    category: 'Music',
    level: 'beginner'
  },
  {
    id: '8',
    name: 'Sports & Games Galore',
    description: 'Basketball, soccer, capture the flag, and team building games. Stay active and have fun!',
    teacher: 'Coach Champion',
    teacherId: '8',
    schedule: 'Daily 4:00-6:00 PM',
    capacity: 30,
    enrolled: 28,
    category: 'Sports',
    level: 'beginner'
  },
  {
    id: '9',
    name: 'Digital Photography Safari',
    description: 'Learn photography basics and go on photo adventures around camp. Capture amazing memories!',
    teacher: 'Shutter Bug Sam',
    teacherId: '9',
    schedule: 'Wed, Fri 9:00-11:00 AM',
    capacity: 14,
    enrolled: 11,
    category: 'Arts',
    level: 'beginner'
  },
  {
    id: '10',
    name: 'Cooking & Baking Fun',
    description: 'Learn to cook simple meals and bake delicious treats. Safety first, fun always!',
    teacher: 'Chef Cookie',
    teacherId: '10',
    schedule: 'Mon, Wed 3:00-5:00 PM',
    capacity: 12,
    enrolled: 10,
    category: 'Life Skills',
    level: 'beginner'
  },
  {
    id: '11',
    name: 'Space Exploration Camp',
    description: 'Build rockets, learn about planets, and explore the mysteries of space through fun activities!',
    teacher: 'Captain Cosmos',
    teacherId: '11',
    schedule: 'Tue, Thu 2:00-4:00 PM',
    capacity: 20,
    enrolled: 16,
    category: 'Science',
    level: 'beginner'
  },
  {
    id: '12',
    name: 'Drama & Theater Workshop',
    description: 'Act out stories, learn improv, and put on theatrical performances. Become a star!',
    teacher: 'Drama Queen Diane',
    teacherId: '12',
    schedule: 'Mon, Fri 10:00-12:00 PM',
    capacity: 18,
    enrolled: 15,
    category: 'Performance',
    level: 'beginner'
  },
  {
    id: '13',
    name: 'Nature & Wildlife Study',
    description: 'Discover local plants and animals, go on nature walks, and learn about ecosystems.',
    teacher: 'Naturalist Ned',
    teacherId: '13',
    schedule: 'Tue, Thu 8:00-10:00 AM',
    capacity: 16,
    enrolled: 13,
    category: 'Science',
    level: 'beginner'
  },
  {
    id: '14',
    name: 'Magic & Illusion Academy',
    description: 'Learn amazing magic tricks and put on spectacular magic shows. Amaze your friends!',
    teacher: 'The Great Mysterio',
    teacherId: '14',
    schedule: 'Wed, Fri 2:00-4:00 PM',
    capacity: 15,
    enrolled: 12,
    category: 'Performance',
    level: 'beginner'
  },
  {
    id: '15',
    name: 'Woodworking & Building',
    description: 'Learn basic woodworking skills and build cool projects like birdhouses and toys.',
    teacher: 'Builder Bob',
    teacherId: '15',
    schedule: 'Mon, Wed 9:00-11:00 AM',
    capacity: 10,
    enrolled: 8,
    category: 'Crafts',
    level: 'beginner'
  },
  {
    id: '16',
    name: 'Water Sports & Swimming',
    description: 'Swimming lessons, water games, and pool activities. Make a splash this summer!',
    teacher: 'Aqua Anna',
    teacherId: '16',
    schedule: 'Daily 11:00-1:00 PM',
    capacity: 25,
    enrolled: 23,
    category: 'Sports',
    level: 'beginner'
  },
  {
    id: '17',
    name: 'Minecraft Architecture',
    description: 'Build amazing structures in Minecraft while learning real architecture and design principles.',
    teacher: 'Block Master Mike',
    teacherId: '17',
    schedule: 'Tue, Thu 3:00-5:00 PM',
    capacity: 16,
    enrolled: 14,
    category: 'Technology',
    level: 'beginner'
  },
  {
    id: '18',
    name: 'Friendship Bracelet & Jewelry',
    description: 'Make beautiful bracelets, necklaces, and accessories. Perfect gifts for friends!',
    teacher: 'Jewelry Jen',
    teacherId: '18',
    schedule: 'Mon, Wed, Fri 11:00-12:30 PM',
    capacity: 20,
    enrolled: 18,
    category: 'Crafts',
    level: 'beginner'
  },
  {
    id: '19',
    name: 'Storytelling & Creative Writing',
    description: 'Write amazing stories, create comic books, and share your tales with fellow campers.',
    teacher: 'Story Steve',
    teacherId: '19',
    schedule: 'Tue, Thu 11:00-1:00 PM',
    capacity: 18,
    enrolled: 14,
    category: 'Arts',
    level: 'beginner'
  },
  {
    id: '20',
    name: 'Skateboarding & BMX',
    description: 'Learn skateboarding and BMX bike tricks in our safe practice areas with protective gear.',
    teacher: 'Skate Master Tony',
    teacherId: '20',
    schedule: 'Mon, Wed, Fri 3:00-5:00 PM',
    capacity: 12,
    enrolled: 9,
    category: 'Sports',
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