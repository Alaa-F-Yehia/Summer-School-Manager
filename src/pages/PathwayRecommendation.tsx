import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { ArrowLeft, Target, BookOpen } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

interface AssessmentData {
  arabicGrade: string;
  mathGrade: string;
  englishGrade: string;
  chemistryGrade: string;
  biologyGrade: string;
  physicsGrade: string;
  sportsGrade: string;
  roboticsGrade: string;
  interests: string[];
  hobbies: string[];
  careerGoals: string;
  learningPreference: string;
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
    arabicGrade: '',
    mathGrade: '',
    englishGrade: '',
    chemistryGrade: '',
    biologyGrade: '',
    physicsGrade: '',
    sportsGrade: '',
    roboticsGrade: '',
    interests: [],
    hobbies: [],
    careerGoals: '',
    learningPreference: ''
  });
  const [recommendations, setRecommendations] = useState<RecommendedClass[]>([]);

  const subjects = [
    { key: 'arabicGrade' as keyof AssessmentData, label: 'Arabic' },
    { key: 'mathGrade' as keyof AssessmentData, label: 'Mathematics' },
    { key: 'englishGrade' as keyof AssessmentData, label: 'English' },
    { key: 'chemistryGrade' as keyof AssessmentData, label: 'Chemistry' },
    { key: 'biologyGrade' as keyof AssessmentData, label: 'Biology' },
    { key: 'physicsGrade' as keyof AssessmentData, label: 'Physics' },
    { key: 'sportsGrade' as keyof AssessmentData, label: 'Sports' },
    { key: 'roboticsGrade' as keyof AssessmentData, label: 'Robotics' }
  ];

  const gradeOptions = [
    { value: 'A', label: 'A (90-100%)' },
    { value: 'B', label: 'B (80-89%)' },
    { value: 'C', label: 'C (70-79%)' },
    { value: 'D', label: 'D (60-69%)' },
    { value: 'F', label: 'F (Below 60%)' }
  ];

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

  const careerGoalOptions = [
    'Technology/Software', 'Healthcare', 'Business/Finance', 'Education',
    'Arts/Entertainment', 'Science/Research', 'Engineering', 'Law/Politics',
    'Sports/Fitness', 'Social Work', 'Undecided', 'Entrepreneurship'
  ];

  const learningPreferenceOptions = [
    { value: 'hands-on', label: 'Hands-on/Practical Learning' },
    { value: 'theoretical', label: 'Theoretical/Conceptual Learning' },
    { value: 'visual', label: 'Visual Learning (Charts, Diagrams)' },
    { value: 'collaborative', label: 'Group Work & Collaboration' },
    { value: 'independent', label: 'Independent Study' }
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

  // Rule-based recommendation engine
  const generateRecommendations = (): RecommendedClass[] => {
    const recs: RecommendedClass[] = [];
    const { arabicGrade, mathGrade, englishGrade, chemistryGrade, biologyGrade, physicsGrade, sportsGrade, roboticsGrade, interests, hobbies, careerGoals, learningPreference } = assessmentData;

    // Math-based courses
    if (['A', 'B'].includes(mathGrade)) {
      if (interests.includes('Technology & Programming') || hobbies.includes('Coding')) {
        recs.push({
          id: 'advanced-programming',
          name: 'Advanced Programming & Algorithms',
          description: 'Dive deep into programming concepts, data structures, and algorithm design.',
          difficulty: mathGrade === 'A' ? 'Advanced' : 'Intermediate',
          reason: 'Strong math skills and programming interest detected'
        });
      }
      if (interests.includes('Engineering') || careerGoals === 'Technology/Software') {
        recs.push({
          id: 'engineering-math',
          name: 'Engineering Mathematics',
          description: 'Applied mathematics for engineering and technical problem-solving.',
          difficulty: 'Intermediate',
          reason: 'Excellent math foundation with engineering interests'
        });
      }
    }

    // Science-based courses
    if (['A', 'B'].includes(chemistryGrade) || ['A', 'B'].includes(biologyGrade) || ['A', 'B'].includes(physicsGrade)) {
      if (interests.includes('Science & Research') || careerGoals === 'Healthcare') {
        recs.push({
          id: 'advanced-biology',
          name: 'Advanced Biology & Research Methods',
          description: 'Explore cellular biology, genetics, and scientific research techniques.',
          difficulty: (['A'].includes(biologyGrade) || ['A'].includes(chemistryGrade)) ? 'Advanced' : 'Intermediate',
          reason: 'Strong science background with research/healthcare interests'
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
    }

    // Robotics courses
    if (['A', 'B'].includes(roboticsGrade) || (interests.includes('Technology & Programming') && ['A', 'B'].includes(mathGrade))) {
      recs.push({
        id: 'robotics-programming',
        name: 'Robotics & Programming',
        description: 'Learn to build and program robots using modern technologies.',
        difficulty: roboticsGrade === 'A' ? 'Advanced' : 'Intermediate',
        reason: 'Strong robotics background with technology interests'
      });
    }

    // English/Communication-based courses
    if (['A', 'B'].includes(englishGrade)) {
      if (interests.includes('Writing & Literature') || hobbies.includes('Writing')) {
        recs.push({
          id: 'creative-writing',
          name: 'Creative Writing Workshop',
          description: 'Develop your writing skills through fiction, poetry, and narrative techniques.',
          difficulty: 'Intermediate',
          reason: 'Strong English skills with writing interests'
        });
      }
      if (interests.includes('Languages & Communication') || careerGoals === 'Law/Politics') {
        recs.push({
          id: 'public-speaking',
          name: 'Public Speaking & Debate',
          description: 'Master the art of persuasive communication and debate techniques.',
          difficulty: 'Intermediate',
          reason: 'Excellent communication skills detected'
        });
      }
    }

    // Sports courses
    if (['A', 'B'].includes(sportsGrade) || interests.includes('Sports & Fitness')) {
      recs.push({
        id: 'sports-science',
        name: 'Sports Science & Fitness',
        description: 'Learn about exercise physiology, nutrition, and athletic performance.',
        difficulty: 'Intermediate',
        reason: 'Strong sports background with fitness interests'
      });
    }

    // Arabic language courses
    if (['A', 'B'].includes(arabicGrade) || interests.includes('Languages & Communication')) {
      recs.push({
        id: 'arabic-literature',
        name: 'Advanced Arabic Literature',
        description: 'Explore classical and modern Arabic literature and poetry.',
        difficulty: arabicGrade === 'A' ? 'Advanced' : 'Intermediate',
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
    if (interests.includes('Business & Economics') || careerGoals === 'Business/Finance') {
      recs.push({
        id: 'entrepreneurship',
        name: 'Young Entrepreneurs Program',
        description: 'Learn business fundamentals, marketing, and startup development.',
        difficulty: 'Intermediate',
        reason: 'Business interests align with entrepreneurial goals'
      });
    }

    // Hands-on learning preference courses
    if (learningPreference === 'hands-on') {
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

    // Default recommendations for undecided students
    if (recs.length === 0 || careerGoals === 'Undecided') {
      recs.push({
        id: 'career-exploration',
        name: 'Career Exploration Workshop',
        description: 'Discover your passions and explore various career paths through interactive activities.',
        difficulty: 'Beginner',
        reason: 'Perfect for exploring different interests and career options'
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
        return subjects.every(subject => assessmentData[subject.key] !== '');
      case 2:
        return assessmentData.interests.length > 0;
      case 3:
        return assessmentData.hobbies.length > 0;
      case 4:
        return assessmentData.careerGoals !== '' && assessmentData.learningPreference !== '';
      default:
        return false;
    }
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold mb-2">Your Academic Performance</h2>
              <p className="text-muted-foreground">
                Tell us about your grades in different subjects to help us understand your strengths
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {subjects.map((subject) => (
                <Card key={subject.key} className="p-4">
                  <div className="mb-3">
                    <h3 className="font-medium">{subject.label}</h3>
                  </div>
                  <RadioGroup
                    value={assessmentData[subject.key] as string}
                    onValueChange={(value) => updateAssessmentData(subject.key, value)}
                  >
                    {gradeOptions.map((grade) => (
                      <div key={grade.value} className="flex items-center space-x-2">
                        <RadioGroupItem value={grade.value} id={`${subject.key}-${grade.value}`} />
                        <Label htmlFor={`${subject.key}-${grade.value}`} className="text-sm">{grade.label}</Label>
                      </div>
                    ))}
                  </RadioGroup>
                </Card>
              ))}
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold mb-2">Your Interests</h2>
              <p className="text-muted-foreground">
                Select the areas that interest you most (choose as many as you like)
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {interestOptions.map((interest) => (
                <div
                  key={interest}
                  onClick={() => toggleArrayItem('interests', interest)}
                  className={`p-4 rounded-lg border-2 cursor-pointer transition-all ${
                    assessmentData.interests.includes(interest)
                      ? 'border-primary bg-primary/10'
                      : 'border-border hover:border-primary/50'
                  }`}
                >
                  <div className="text-center font-medium">{interest}</div>
                </div>
              ))}
            </div>
            
            <div className="mt-4">
              <p className="text-sm text-muted-foreground mb-2">
                Selected: {assessmentData.interests.length} interest(s)
              </p>
              <div className="flex flex-wrap gap-2">
                {assessmentData.interests.map((interest) => (
                  <Badge key={interest} variant="secondary">
                    {interest}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold mb-2">Your Hobbies</h2>
              <p className="text-muted-foreground">
                What do you enjoy doing in your free time?
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {hobbyOptions.map((hobby) => (
                <div
                  key={hobby}
                  onClick={() => toggleArrayItem('hobbies', hobby)}
                  className={`p-4 rounded-lg border-2 cursor-pointer transition-all ${
                    assessmentData.hobbies.includes(hobby)
                      ? 'border-primary bg-primary/10'
                      : 'border-border hover:border-primary/50'
                  }`}
                >
                  <div className="text-center font-medium">{hobby}</div>
                </div>
              ))}
            </div>
            
            <div className="mt-4">
              <p className="text-sm text-muted-foreground mb-2">
                Selected: {assessmentData.hobbies.length} hobby/hobbies
              </p>
              <div className="flex flex-wrap gap-2">
                {assessmentData.hobbies.map((hobby) => (
                  <Badge key={hobby} variant="secondary">
                    {hobby}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        );

      case 4:
        return (
          <div className="space-y-6">
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold mb-2">Goals & Learning Style</h2>
              <p className="text-muted-foreground">
                Help us understand your future goals and how you learn best
              </p>
            </div>
            
            <Card>
              <CardHeader>
                <CardTitle>Career Goals</CardTitle>
                <CardDescription>What field interests you for your future career?</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {careerGoalOptions.map((goal) => (
                    <div
                      key={goal}
                      onClick={() => updateAssessmentData('careerGoals', goal)}
                      className={`p-3 rounded-lg border-2 cursor-pointer transition-all text-center ${
                        assessmentData.careerGoals === goal
                          ? 'border-primary bg-primary/10'
                          : 'border-border hover:border-primary/50'
                      }`}
                    >
                      <div className="font-medium text-sm">{goal}</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Learning Preference</CardTitle>
                <CardDescription>How do you prefer to learn new things?</CardDescription>
              </CardHeader>
              <CardContent>
                <RadioGroup
                  value={assessmentData.learningPreference}
                  onValueChange={(value) => updateAssessmentData('learningPreference', value)}
                >
                  {learningPreferenceOptions.map((pref) => (
                    <div key={pref.value} className="flex items-center space-x-2">
                      <RadioGroupItem value={pref.value} id={pref.value} />
                      <Label htmlFor={pref.value}>{pref.label}</Label>
                    </div>
                  ))}
                </RadioGroup>
              </CardContent>
            </Card>
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
          <div className="w-full bg-muted rounded-full h-2 mb-6">
            <div 
              className="bg-primary h-2 rounded-full transition-all duration-300"
              style={{ width: `${(currentStep / 4) * 100}%` }}
            />
          </div>
        )}
      </div>

      {renderStep()}

      {currentStep < 5 && (
        <div className="flex justify-between mt-8">
          <Button
            variant="outline"
            onClick={() => setCurrentStep(prev => Math.max(1, prev - 1))}
            disabled={currentStep === 1}
          >
            Previous
          </Button>
          
          {currentStep === 4 ? (
            <Button
              onClick={handleSubmit}
              disabled={!canProceedToNext()}
            >
              Get Recommendations
            </Button>
          ) : (
            <Button
              onClick={() => setCurrentStep(prev => prev + 1)}
              disabled={!canProceedToNext()}
            >
              Next
            </Button>
          )}
        </div>
      )}
    </div>
  );
};

export default PathwayRecommendation;