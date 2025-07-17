import { Class, Teacher, Announcement, Enrollment } from '@/types';

export const mockClasses: Class[] = [
  {
    id: '1',
    name: 'Arduino Adventure Lab',
    description: 'Build cool gadgets and learn programming with Arduino microcontrollers. Create blinking LEDs, sensors, and fun interactive projects!',
    teacher: 'Mr. Ali Mokdad',
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
    teacher: 'Dr. Salwa Karaki',
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
    teacher: 'Ms. Lara Nassif',
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
    teacher: 'Professor Rami Farah',
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
    teacher: 'Ranger Nadia Khoury',
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
    teacher: 'Ms. Maya Stephan',
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
    teacher: 'Maestro Khalil Tabsh',
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
    teacher: 'Coach Samir Awad',
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
    teacher: 'Shutter Dina Harb',
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
    teacher: 'Chef Marwan Khalife',
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
    teacher: 'Captain Ahmad Salam',
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
    teacher: 'Drama Zeina Frem',
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
    teacher: 'Naturalist Fouad Rizk',
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
    teacher: 'The Great Maroun',
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
    teacher: 'Builder Elie Jreij',
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
    teacher: 'Aqua Rana Haddad',
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
    teacher: 'Block Master Karim',
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
    teacher: 'Jewelry Yasmine Zaher',
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
    teacher: 'Story Tamer Ayoub',
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
    teacher: 'Skate Master Tony Bitar',
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
    name: 'Mr. Ali Mokdad',
    bio: 'Electronics engineer with passion for teaching kids about technology. 10 years experience making Arduino fun and accessible.',
    specialties: ['Arduino Programming', 'Electronics', 'Circuit Design', 'STEM Education'],
    rating: 4.9,
    experience: '10 years'
  },
  {
    id: '2',
    name: 'Dr. Salwa Karaki',
    bio: 'Robotics engineer and former camp counselor. Loves helping kids build their first robots and discover engineering.',
    specialties: ['Robot Building', 'Programming', 'Mechanical Design', 'Team Leadership'],
    rating: 4.8,
    experience: '8 years'
  },
  {
    id: '3',
    name: 'Ms. Lara Nassif',
    bio: 'Game developer and computer science teacher. Creates engaging programming experiences for young learners.',
    specialties: ['Game Development', 'Scratch Programming', 'Creative Coding', 'Digital Literacy'],
    rating: 4.7,
    experience: '6 years'
  },
  {
    id: '4',
    name: 'Professor Rami Farah',
    bio: 'Chemistry professor who makes science explosive and safe! Known for amazing experiments that wow campers.',
    specialties: ['Chemistry Experiments', 'Science Safety', 'Lab Techniques', 'STEM Fun'],
    rating: 4.9,
    experience: '12 years'
  },
  {
    id: '5',
    name: 'Ranger Nadia Khoury',
    bio: 'Outdoor education specialist and adventure enthusiast. Mountain climber and nature lover.',
    specialties: ['Rock Climbing', 'Hiking', 'Outdoor Safety', 'Environmental Education'],
    rating: 4.8,
    experience: '15 years'
  },
  {
    id: '6',
    name: 'Ms. Maya Stephan',
    bio: 'Professional artist and art therapist. Believes every child is an artist waiting to be discovered.',
    specialties: ['Pottery', 'Painting', 'Arts & Crafts', 'Creative Expression'],
    rating: 4.9,
    experience: '11 years'
  },
  {
    id: '7',
    name: 'Maestro Khalil Tabsh',
    bio: 'Musician and composer with experience in youth orchestras. Makes music magical and accessible.',
    specialties: ['Music Education', 'Performance', 'Composition', 'Instrument Instruction'],
    rating: 4.8,
    experience: '14 years'
  },
  {
    id: '8',
    name: 'Coach Samir Awad',
    bio: 'Former professional athlete turned youth sports coordinator. Emphasizes fun and teamwork over competition.',
    specialties: ['Team Sports', 'Physical Fitness', 'Leadership', 'Fair Play'],
    rating: 4.7,
    experience: '9 years'
  },
  {
    id: '9',
    name: 'Shutter Dina Harb',
    bio: 'Professional photographer specializing in nature and youth photography. Captures magical camp moments.',
    specialties: ['Digital Photography', 'Photo Editing', 'Visual Storytelling', 'Nature Photography'],
    rating: 4.8,
    experience: '7 years'
  },
  {
    id: '10',
    name: 'Chef Marwan Khalife',
    bio: 'Culinary school graduate who loves teaching kids cooking basics and food safety in a fun environment.',
    specialties: ['Cooking Basics', 'Baking', 'Food Safety', 'Nutrition Education'],
    rating: 4.9,
    experience: '8 years'
  },
  {
    id: '11',
    name: 'Captain Ahmad Salam',
    bio: 'Aerospace engineer and space enthusiast. Makes rocket science fun and understandable for young minds.',
    specialties: ['Space Science', 'Rocket Building', 'Astronomy', 'Physics Experiments'],
    rating: 4.9,
    experience: '13 years'
  },
  {
    id: '12',
    name: 'Drama Zeina Frem',
    bio: 'Theater director and drama teacher. Helps shy kids find their voice and confident kids shine brighter.',
    specialties: ['Theater Arts', 'Improvisation', 'Public Speaking', 'Creative Expression'],
    rating: 4.8,
    experience: '10 years'
  },
  {
    id: '13',
    name: 'Naturalist Fouad Rizk',
    bio: 'Marine biologist and nature educator. Passionate about local wildlife and environmental conservation.',
    specialties: ['Wildlife Education', 'Ecosystem Studies', 'Nature Walks', 'Environmental Science'],
    rating: 4.7,
    experience: '16 years'
  },
  {
    id: '14',
    name: 'The Great Maroun',
    bio: 'Professional magician and entertainer. Former engineer who discovered the magic of inspiring young minds.',
    specialties: ['Magic Performance', 'Illusion Design', 'Entertainment', 'Confidence Building'],
    rating: 4.9,
    experience: '12 years'
  },
  {
    id: '15',
    name: 'Builder Elie Jreij',
    bio: 'Carpenter and woodworking instructor. Teaches kids valuable hands-on skills and safety practices.',
    specialties: ['Woodworking', 'Tool Safety', 'Building Projects', 'Craftsmanship'],
    rating: 4.8,
    experience: '18 years'
  },
  {
    id: '16',
    name: 'Aqua Rana Haddad',
    bio: 'Professional swimming instructor and water safety expert. Former competitive swimmer.',
    specialties: ['Swimming Instruction', 'Water Safety', 'Pool Games', 'Aquatic Sports'],
    rating: 4.9,
    experience: '11 years'
  },
  {
    id: '17',
    name: 'Block Master Karim',
    bio: 'Architect and urban planner who discovered Minecraft as a teaching tool for design principles.',
    specialties: ['Minecraft Architecture', 'Design Principles', 'Spatial Thinking', 'Creative Building'],
    rating: 4.8,
    experience: '6 years'
  },
  {
    id: '18',
    name: 'Jewelry Yasmine Zaher',
    bio: 'Jewelry designer and crafts instructor. Specializes in teaching fine motor skills through beautiful projects.',
    specialties: ['Jewelry Making', 'Beadwork', 'Fine Motor Skills', 'Design Aesthetics'],
    rating: 4.8,
    experience: '9 years'
  },
  {
    id: '19',
    name: 'Story Tamer Ayoub',
    bio: 'Published author and storytelling enthusiast. Believes every child has amazing stories to share.',
    specialties: ['Creative Writing', 'Storytelling', 'Comic Creation', 'Literary Arts'],
    rating: 4.9,
    experience: '13 years'
  },
  {
    id: '20',
    name: 'Skate Master Tony Bitar',
    bio: 'Professional skateboarder and extreme sports coach. Emphasizes safety while building confidence.',
    specialties: ['Skateboarding', 'BMX', 'Extreme Sports Safety', 'Youth Coaching'],
    rating: 4.7,
    experience: '12 years'
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