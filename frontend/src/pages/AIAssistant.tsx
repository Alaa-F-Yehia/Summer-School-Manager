import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Brain, MessageSquare, Target, BookOpen, Sparkles, Clock } from 'lucide-react';

const AIAssistant = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  return (
    <div className="container mx-auto px-4 py-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2 flex items-center">
          <Brain className="h-8 w-8 mr-3 text-primary" />
          AI Assistant
        </h1>
        <p className="text-muted-foreground">
          Get personalized recommendations and assistance powered by AI
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Course Pathway Recommendations */}
        <Card className="cursor-pointer hover:shadow-lg transition-shadow">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Target className="h-6 w-6 mr-3 text-primary" />
              Course Pathway Recommendations
            </CardTitle>
            <CardDescription>
              Answer questions about your grades, interests, and hobbies to get personalized course recommendations
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button 
              onClick={() => navigate('/pathway-recommendation')}
              className="w-full"
            >
              <Target className="h-4 w-4 mr-2" />
              Start Pathway Assessment
            </Button>
          </CardContent>
        </Card>

        {/* Chat Assistant */}
        <Card className="cursor-pointer hover:shadow-lg transition-shadow">
          <CardHeader>
            <CardTitle className="flex items-center">
              <MessageSquare className="h-6 w-6 mr-3 text-primary" />
              Chat Assistant
            </CardTitle>
            <CardDescription>
              Ask questions about courses, study tips, or get general guidance from our AI assistant
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button 
              onClick={() => navigate('/chat-assistant')}
              className="w-full"
            >
              <MessageSquare className="h-4 w-4 mr-2" />
              Start Chat
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions for Managers */}
      {user?.role === 'manager' && (
        <Card className="mt-6">
          <CardHeader>
            <CardTitle className="flex items-center">
              <BookOpen className="h-5 w-5 mr-2" />
              Manager AI Tools
            </CardTitle>
            <CardDescription>
              AI-powered tools to help manage your summer school program
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Button variant="outline" className="h-auto p-4">
                <div className="text-center">
                  <Sparkles className="h-6 w-6 mx-auto mb-2" />
                  <div className="font-medium">Generate Announcements</div>
                  <div className="text-sm text-muted-foreground">
                    Create engaging announcements with AI
                  </div>
                </div>
              </Button>
              <Button variant="outline" className="h-auto p-4">
                <div className="text-center">
                  <Target className="h-6 w-6 mx-auto mb-2" />
                  <div className="font-medium">Analyze Enrollment</div>
                  <div className="text-sm text-muted-foreground">
                    Get insights on class performance
                  </div>
                </div>
              </Button>
              <Button variant="outline" className="h-auto p-4">
                <div className="text-center">
                  <Clock className="h-6 w-6 mx-auto mb-2" />
                  <div className="font-medium">Schedule Optimization</div>
                  <div className="text-sm text-muted-foreground">
                    Optimize class schedules with AI
                  </div>
                </div>
              </Button>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default AIAssistant;