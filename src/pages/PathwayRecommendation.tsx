import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';
import { ArrowLeft, Target, BookOpen, GraduationCap } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

interface AssessmentData {
  arabicGrade: number;
  mathGrade: number;
  englishGrade: number;
  chemistryGrade: number;
  biologyGrade: number;
  physicsGrade: number;
  sportsGrade: number;
  roboticsGrade: number;
  interests: string[];
  hobbies: string[];
  learningPreferences: {
    handsOn: boolean;
    groupWork: boolean;
    visual: boolean;
    independent: boolean;
    projects: boolean;
    discussions: boolean;
  };
}

interface RecommendedClass {
  id: string;
  name: string;
  description: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  reason: string;
}

const PathwayRecommendation = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const [assessmentData, setAssessmentData] = useState<AssessmentData>({
    arabicGrade: 50,
    mathGrade: 50,
    englishGrade: 50,
    chemistryGrade: 50,
    biologyGrade: 50,
    physicsGrade: 50,
    sportsGrade: 50,
    roboticsGrade: 50,
    interests: [],
    hobbies: [],
    learningPreferences: {
      handsOn: false,
      groupWork: false,
      visual: false,
      independent: false,
      projects: false,
      discussions: false
    }
  });
  const [recommendations, setRecommendations] = useState<RecommendedClass[]>([]);

  const subjects = [
    { key: 'arabicGrade' as keyof AssessmentData, label: 'Arabic Language', color: 'bg-blue-50 border-blue-200' },
    { key: 'mathGrade' as keyof AssessmentData, label: 'Mathematics', color: 'bg-green-50 border-green-200' },
    { key: 'englishGrade' as keyof AssessmentData, label: 'English Language', color: 'bg-purple-50 border-purple-200' },
    { key: 'chemistryGrade' as keyof AssessmentData, label: 'Chemistry', color: 'bg-orange-50 border-orange-200' },
    { key: 'biologyGrade' as keyof AssessmentData, label: 'Biology', color: 'bg-emerald-50 border-emerald-200' },
    { key: 'physicsGrade' as keyof AssessmentData, label: 'Physics', color: 'bg-red-50 border-red-200' },
    { key: 'sportsGrade' as keyof AssessmentData, label: 'Physical Education', color: 'bg-yellow-50 border-yellow-200' },
    { key: 'roboticsGrade' as keyof AssessmentData, label: 'Robotics & Technology', color: 'bg-indigo-50 border-indigo-200' }
  ];

  const getGradeLabel = (score: number) => {
    if (score >= 90) return 'A (Excellent)';
    if (score >= 80) return 'B (Good)';
    if (score >= 70) return 'C (Average)';
    if (score >= 60) return 'D (Below Average)';
    return 'F (Needs Improvement)';
  };

  const interestOptions = [
    'Technology & Programming', 'Arts & Design', 'Science & Research',
    'Sports & Fitness', 'Music & Performance', 'Writing & Literature',
    'Business & Economics', 'Healthcare & Medicine', 'Environment & Nature',
    'Social Sciences', 'Engineering', 'Languages & Communication'
  ];

  const hobbyOptions = [
    'Reading', 'Gaming', 'Sports', 'Music', 'Drawing/Painting',
    'Coding', 'Photography', 'Cooking', 'Gardening', 'Dancing',
    'Writing', 'Building/Crafting', 'Traveling', 'Volunteering'
  ];

  const learningPreferenceQuestions = [
    { key: 'handsOn', label: 'I learn best by doing things with my hands', description: 'Building, experimenting, and trying things out' },
    { key: 'groupWork', label: 'I enjoy working with others in groups', description: 'Team projects and collaborative learning' },
    { key: 'visual', label: 'I understand better with pictures and diagrams', description: 'Charts, images, and visual representations' },
    { key: 'independent', label: 'I prefer to study and learn on my own', description: 'Self-paced learning and individual work' },
    { key: 'projects', label: 'I like working on long-term projects', description: 'Building something over time step by step' },
    { key: 'discussions', label: 'I learn well through talking and discussions', description: 'Explaining ideas and asking questions' }
  ];

  const updateAssessmentData = (key: keyof AssessmentData, value: any) => {
    setAssessmentData(prev => ({ ...prev, [key]: value }));
  };

  const toggleArrayItem = (key: 'interests' | 'hobbies', item: string) => {
    setAssessmentData(prev => {
      const currentArray = prev[key];
      const isSelected = currentArray.includes(item);
      return {
        ...prev,
        [key]: isSelected 
          ? currentArray.filter(i => i !== item)
          : [...currentArray, item]
      };
    });
  };

  const toggleLearningPreference = (key: keyof AssessmentData['learningPreferences']) => {
    setAssessmentData(prev => ({
      ...prev,
      learningPreferences: {
        ...prev.learningPreferences,
        [key]: !prev.learningPreferences[key]
      }
    }));
  };

  // Rule-based recommendation engine
  const generateRecommendations = (): RecommendedClass[] => {
    const recs: RecommendedClass[] = [];
    const { arabicGrade, mathGrade, englishGrade, chemistryGrade, biologyGrade, physicsGrade, sportsGrade, roboticsGrade, interests, hobbies, learningPreferences } = assessmentData;

    // Math-based courses
    if (mathGrade >= 70) {
      if (interests.includes('Technology & Programming') || hobbies.includes('Coding')) {
        recs.push({
          id: 'advanced-programming',
          name: 'Advanced Programming & Algorithms',
          description: 'Dive deep into programming concepts, data structures, and algorithm design.',
          difficulty: mathGrade >= 85 ? 'Advanced' : 'Intermediate',
          reason: 'Strong math skills and programming interest detected'
        });
      }
      if (interests.includes('Engineering')) {
        recs.push({
          id: 'engineering-math',
          name: 'Engineering Mathematics',
          description: 'Applied mathematics for engineering and technical problem-solving.',
          difficulty: 'Intermediate',
          reason: 'Excellent math foundation with engineering interests'
        });
      }
      recs.push({
        id: 'competitive-math',
        name: 'Competition Mathematics',
        description: 'Advanced problem-solving techniques and mathematical competitions.',
        difficulty: mathGrade >= 85 ? 'Advanced' : 'Intermediate',
        reason: 'Strong mathematical abilities for competitive challenges'
      });
    }

    // Science-based courses
    if (chemistryGrade >= 70 || biologyGrade >= 70 || physicsGrade >= 70) {
      if (interests.includes('Science & Research') || interests.includes('Healthcare & Medicine')) {
        recs.push({
          id: 'advanced-biology',
          name: 'Advanced Biology & Research Methods',
          description: 'Explore cellular biology, genetics, and scientific research techniques.',
          difficulty: (biologyGrade >= 85 || chemistryGrade >= 85) ? 'Advanced' : 'Intermediate',
          reason: 'Strong science background with research interests'
        });
      }
      if (interests.includes('Environment & Nature')) {
        recs.push({
          id: 'environmental-science',
          name: 'Environmental Science & Sustainability',
          description: 'Study ecosystems, climate change, and sustainable practices.',
          difficulty: 'Intermediate',
          reason: 'Science aptitude combined with environmental interests'
        });
      }
      if (physicsGrade >= 70) {
        recs.push({
          id: 'physics-lab',
          name: 'Experimental Physics Laboratory',
          description: 'Hands-on experiments with mechanics, electricity, and modern physics.',
          difficulty: physicsGrade >= 85 ? 'Advanced' : 'Intermediate',
          reason: 'Strong physics foundation for experimental work'
        });
      }
      if (chemistryGrade >= 70) {
        recs.push({
          id: 'chemistry-lab',
          name: 'Advanced Chemistry & Lab Techniques',
          description: 'Organic and inorganic chemistry with extensive laboratory work.',
          difficulty: chemistryGrade >= 85 ? 'Advanced' : 'Intermediate',
          reason: 'Strong chemistry skills for advanced laboratory work'
        });
      }
    }

    // Robotics courses
    if (roboticsGrade >= 70 || (interests.includes('Technology & Programming') && mathGrade >= 70)) {
      recs.push({
        id: 'robotics-programming',
        name: 'Robotics & Programming',
        description: 'Learn to build and program robots using modern technologies.',
        difficulty: roboticsGrade >= 85 ? 'Advanced' : 'Intermediate',
        reason: 'Strong robotics background with technology interests'
      });
    }

    // English/Communication-based courses
    if (englishGrade >= 70) {
      if (interests.includes('Writing & Literature') || hobbies.includes('Writing')) {
        recs.push({
          id: 'creative-writing',
          name: 'Creative Writing Workshop',
          description: 'Develop your writing skills through fiction, poetry, and narrative techniques.',
          difficulty: 'Intermediate',
          reason: 'Strong English skills with writing interests'
        });
      }
      if (interests.includes('Languages & Communication')) {
        recs.push({
          id: 'public-speaking',
          name: 'Public Speaking & Debate',
          description: 'Master the art of persuasive communication and debate techniques.',
          difficulty: 'Intermediate',
          reason: 'Excellent communication skills detected'
        });
      }
      recs.push({
        id: 'journalism',
        name: 'Student Journalism & Media',
        description: 'Learn news writing, interviewing, and digital media production.',
        difficulty: 'Intermediate',
        reason: 'Strong English skills for media and communication'
      });
    }

    // Sports courses
    if (sportsGrade >= 70 || interests.includes('Sports & Fitness')) {
      recs.push({
        id: 'sports-science',
        name: 'Sports Science & Fitness',
        description: 'Learn about exercise physiology, nutrition, and athletic performance.',
        difficulty: 'Intermediate',
        reason: 'Strong sports background with fitness interests'
      });
    }

    // Arabic language courses
    if (arabicGrade >= 70 || interests.includes('Languages & Communication')) {
      recs.push({
        id: 'arabic-literature',
        name: 'Advanced Arabic Literature',
        description: 'Explore classical and modern Arabic literature and poetry.',
        difficulty: arabicGrade >= 85 ? 'Advanced' : 'Intermediate',
        reason: 'Strong Arabic language skills with literature interests'
      });
    }

    // Arts-based courses
    if (interests.includes('Arts & Design') || hobbies.includes('Drawing/Painting')) {
      recs.push({
        id: 'digital-art',
        name: 'Digital Art & Design',
        description: 'Learn digital illustration, graphic design, and visual communication.',
        difficulty: 'Beginner',
        reason: 'Clear artistic interests and creative hobbies'
      });
    }

    // Business courses
    if (interests.includes('Business & Economics')) {
      recs.push({
        id: 'entrepreneurship',
        name: 'Young Entrepreneurs Program',
        description: 'Learn business fundamentals, marketing, and startup development.',
        difficulty: 'Intermediate',
        reason: 'Business interests perfect for entrepreneurial learning'
      });
    }

    // Music & Arts courses
    if (interests.includes('Music & Performance') || hobbies.includes('Music')) {
      recs.push({
        id: 'music-production',
        name: 'Digital Music Production',
        description: 'Learn to create, record, and produce music using digital tools.',
        difficulty: 'Intermediate',
        reason: 'Musical interests and creative expression'
      });
    }

    // Additional creative courses
    if (hobbies.includes('Photography')) {
      recs.push({
        id: 'photography',
        name: 'Photography & Visual Storytelling',
        description: 'Master composition, lighting, and digital photo editing techniques.',
        difficulty: 'Beginner',
        reason: 'Photography hobby shows visual creativity'
      });
    }

    // Health & Wellness courses
    if (interests.includes('Healthcare & Medicine') || sportsGrade >= 70) {
      recs.push({
        id: 'health-wellness',
        name: 'Health & Wellness Studies',
        description: 'Learn about nutrition, fitness, and promoting healthy lifestyles.',
        difficulty: 'Beginner',
        reason: 'Interest in health and physical fitness'
      });
    }

    // Learning preference based courses
    if (learningPreferences.handsOn) {
      if (!recs.some(r => r.id === 'advanced-programming') && (interests.includes('Technology & Programming') || hobbies.includes('Coding'))) {
        recs.push({
          id: 'web-development',
          name: 'Web Development Bootcamp',
          description: 'Build real websites and web applications using modern technologies.',
          difficulty: 'Intermediate',
          reason: 'Hands-on learning style perfect for practical coding'
        });
      }
    }

    if (learningPreferences.projects) {
      recs.push({
        id: 'project-based-learning',
        name: 'Independent Project Workshop',
        description: 'Work on long-term projects in your areas of interest with mentor guidance.',
        difficulty: 'Intermediate',
        reason: 'Project-based learning matches your preference'
      });
    }

    if (learningPreferences.groupWork) {
      recs.push({
        id: 'collaborative-projects',
        name: 'Team Collaboration & Leadership',
        description: 'Develop teamwork skills through group projects and leadership activities.',
        difficulty: 'Intermediate',
        reason: 'Group work preference for collaborative learning'
      });
    }

    // Default recommendations for students with fewer matches
    if (recs.length === 0) {
      recs.push({
        id: 'study-skills',
        name: 'Study Skills & Time Management',
        description: 'Learn effective study techniques and time management strategies.',
        difficulty: 'Beginner',
        reason: 'Essential skills for academic success'
      });
    }

    // Limit to top 4 recommendations
    return recs.slice(0, 4);
  };

  const handleSubmit = () => {
    const recs = generateRecommendations();
    setRecommendations(recs);
    setCurrentStep(5);
  };

  const canProceedToNext = () => {
    switch (currentStep) {
      case 1:
        return true; // No longer require all subjects to be filled
      case 2:
        return assessmentData.interests.length > 0;
      case 3:
        return assessmentData.hobbies.length > 0;
      case 4:
        return true; // Learning preferences are optional
      default:
        return false;
    }
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-8">
            <div className="text-center mb-8">
              <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <GraduationCap className="h-8 w-8 text-primary" />
              </div>
              <h2 className="text-2xl font-bold mb-2">Academic Performance</h2>
              <p className="text-muted-foreground max-w-md mx-auto">
                Rate your performance in each subject using the sliders below. You can skip subjects you haven't studied.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {subjects.map((subject) => (
                <Card key={subject.key} className={`${subject.color} border-2 hover:shadow-md transition-shadow`}>
                  <CardHeader className="pb-4">
                    <CardTitle className="text-lg">{subject.label}</CardTitle>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Score: {assessmentData[subject.key] as number}%</span>
                      <Badge variant="secondary" className="text-xs">
                        {getGradeLabel(assessmentData[subject.key] as number)}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="space-y-3">
                      <Slider
                        value={[assessmentData[subject.key] as number]}
                        onValueChange={(value) => updateAssessmentData(subject.key, value[0])}
                        max={100}
                        min={0}
                        step={5}
                        className="w-full"
                      />
                      <div className="flex justify-between text-xs text-muted-foreground">
                        <span>0%</span>
                        <span>50%</span>
                        <span>100%</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-8">
            <div className="text-center mb-8">
              <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <Target className="h-8 w-8 text-primary" />
              </div>
              <h2 className="text-2xl font-bold mb-2">Areas of Interest</h2>
              <p className="text-muted-foreground max-w-md mx-auto">
                Select the fields that genuinely interest you. Choose as many as apply to help us understand your preferences.
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
              {interestOptions.map((interest) => (
                <div
                  key={interest}
                  onClick={() => toggleArrayItem('interests', interest)}
                  className={`p-4 rounded-lg border-2 cursor-pointer transition-all hover:scale-105 ${
                    assessmentData.interests.includes(interest)
                      ? 'border-primary bg-primary/10 shadow-md'
                      : 'border-border hover:border-primary/50 hover:shadow-sm'
                  }`}
                >
                  <div className="text-center font-medium text-sm">{interest}</div>
                </div>
              ))}
            </div>
            
            {assessmentData.interests.length > 0 && (
              <div className="mt-6 p-4 bg-muted/50 rounded-lg max-w-2xl mx-auto">
                <p className="text-sm text-muted-foreground mb-2 text-center">
                  Selected interests ({assessmentData.interests.length})
                </p>
                <div className="flex flex-wrap gap-2 justify-center">
                  {assessmentData.interests.map((interest) => (
                    <Badge key={interest} variant="secondary" className="text-xs">
                      {interest}
                    </Badge>
                  ))}
                </div>
              </div>
            )}
          </div>
        );

      case 3:
        return (
          <div className="space-y-8">
            <div className="text-center mb-8">
              <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <BookOpen className="h-8 w-8 text-primary" />
              </div>
              <h2 className="text-2xl font-bold mb-2">Personal Hobbies</h2>
              <p className="text-muted-foreground max-w-md mx-auto">
                Tell us about your favorite activities and hobbies. This helps us understand your personal interests.
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
              {hobbyOptions.map((hobby) => (
                <div
                  key={hobby}
                  onClick={() => toggleArrayItem('hobbies', hobby)}
                  className={`p-4 rounded-lg border-2 cursor-pointer transition-all hover:scale-105 ${
                    assessmentData.hobbies.includes(hobby)
                      ? 'border-primary bg-primary/10 shadow-md'
                      : 'border-border hover:border-primary/50 hover:shadow-sm'
                  }`}
                >
                  <div className="text-center font-medium text-sm">{hobby}</div>
                </div>
              ))}
            </div>
            
            {assessmentData.hobbies.length > 0 && (
              <div className="mt-6 p-4 bg-muted/50 rounded-lg max-w-2xl mx-auto">
                <p className="text-sm text-muted-foreground mb-2 text-center">
                  Selected hobbies ({assessmentData.hobbies.length})
                </p>
                <div className="flex flex-wrap gap-2 justify-center">
                  {assessmentData.hobbies.map((hobby) => (
                    <Badge key={hobby} variant="secondary" className="text-xs">
                      {hobby}
                    </Badge>
                  ))}
                </div>
              </div>
            )}
          </div>
        );

      case 4:
        return (
          <div className="space-y-8">
            <div className="text-center mb-8">
              <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <Target className="h-8 w-8 text-primary" />
              </div>
              <h2 className="text-2xl font-bold mb-2">How Do You Learn Best?</h2>
              <p className="text-muted-foreground max-w-md mx-auto">
                Tell us about your learning style. Select all that apply to you.
              </p>
            </div>
            
            <div className="space-y-6 max-w-3xl mx-auto">
              {learningPreferenceQuestions.map((question) => (
                <Card key={question.key} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 mt-1">
                        <div 
                          className={`w-5 h-5 rounded border-2 cursor-pointer transition-all ${
                            assessmentData.learningPreferences[question.key as keyof AssessmentData['learningPreferences']]
                              ? 'bg-primary border-primary' 
                              : 'border-border hover:border-primary/50'
                          }`}
                          onClick={() => toggleLearningPreference(question.key as keyof AssessmentData['learningPreferences'])}
                        >
                          {assessmentData.learningPreferences[question.key as keyof AssessmentData['learningPreferences']] && (
                            <div className="w-full h-full flex items-center justify-center">
                              <div className="w-2 h-2 bg-white rounded-full"></div>
                            </div>
                          )}
                        </div>
                      </div>
                      <div className="flex-1">
                        <Label 
                          className="text-base font-medium cursor-pointer leading-6"
                          onClick={() => toggleLearningPreference(question.key as keyof AssessmentData['learningPreferences'])}
                        >
                          {question.label}
                        </Label>
                        <p className="text-sm text-muted-foreground mt-1">
                          {question.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        );

      case 5:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-2">Your Personalized Pathway</h2>
              <p className="text-muted-foreground">
                Based on your responses, here are our recommended courses for you
              </p>
            </div>
            
            <div className="grid gap-6">
              {recommendations.map((rec) => (
                <Card key={rec.id} className="border-l-4 border-l-primary">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="flex items-center">
                          <BookOpen className="h-5 w-5 mr-2" />
                          {rec.name}
                        </CardTitle>
                        <div className="flex items-center mt-2 space-x-2">
                          <Badge variant={rec.difficulty === 'Advanced' ? 'destructive' : rec.difficulty === 'Intermediate' ? 'default' : 'secondary'}>
                            {rec.difficulty}
                          </Badge>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-3">{rec.description}</p>
                    <div className="bg-muted/50 p-3 rounded-md">
                      <p className="text-sm">
                        <strong>Why this course:</strong> {rec.reason}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center mt-8">
              <Button onClick={() => navigate('/classes')} size="lg">
                <BookOpen className="h-4 w-4 mr-2" />
                View All Available Classes
              </Button>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="container mx-auto px-4 py-6 max-w-4xl">
      <div className="mb-6">
        <Button
          variant="ghost"
          onClick={() => navigate('/ai-assistant')}
          className="mb-4"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to AI Assistant
        </Button>
        
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-3xl font-bold flex items-center">
            <Target className="h-8 w-8 mr-3 text-primary" />
            Course Pathway Assessment
          </h1>
          {currentStep < 5 && (
            <div className="text-sm text-muted-foreground">
              Step {currentStep} of 4
            </div>
          )}
        </div>
        
        {currentStep < 5 && (
        <div className="w-full bg-muted rounded-full h-3 mb-6">
          <div 
            className="bg-gradient-to-r from-primary to-primary/80 h-3 rounded-full transition-all duration-500 ease-out"
            style={{ width: `${(currentStep / 4) * 100}%` }}
          />
        </div>
        )}
      </div>

      {renderStep()}

      {currentStep < 5 && (
        <div className="flex justify-between items-center mt-12 pt-6 border-t">
          <Button
            variant="outline"
            size="lg"
            onClick={() => setCurrentStep(prev => Math.max(1, prev - 1))}
            disabled={currentStep === 1}
            className="px-8"
          >
            Previous Step
          </Button>
          
          {currentStep === 4 ? (
            <Button
              size="lg"
              onClick={handleSubmit}
              disabled={!canProceedToNext()}
              className="px-8 bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70"
            >
              Generate Recommendations
            </Button>
          ) : (
            <Button
              size="lg"
              onClick={() => setCurrentStep(prev => prev + 1)}
              disabled={!canProceedToNext()}
              className="px-8"
            >
              Next Step
            </Button>
          )}
        </div>
      )}
    </div>
  );
};

export default PathwayRecommendation;