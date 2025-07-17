import { useState } from 'react';
import { useAuth } from '@/hooks/useAuth';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { Brain, Send, Sparkles, BookOpen, Target, Clock } from 'lucide-react';
import { createClaudeService } from '@/services/claude';

const AIAssistant = () => {
  const { user } = useAuth();
  const [apiKey, setApiKey] = useState('');
  const [chatMessage, setChatMessage] = useState('');
  const [chatHistory, setChatHistory] = useState<Array<{role: 'user' | 'assistant', content: string}>>([]);
  const [loading, setLoading] = useState(false);

  // Pathway recommendation form
  const [interests, setInterests] = useState<string[]>([]);
  const [currentLevel, setCurrentLevel] = useState('');
  const [goals, setGoals] = useState('');
  const [timeCommitment, setTimeCommitment] = useState('');
  const [recommendation, setRecommendation] = useState('');

  const handleChat = async () => {
    if (!apiKey || !chatMessage.trim()) return;

    setLoading(true);
    const claudeService = createClaudeService(apiKey);
    
    try {
      const response = await claudeService.chatWithAssistant(chatMessage);
      setChatHistory(prev => [
        ...prev,
        { role: 'user', content: chatMessage },
        { role: 'assistant', content: response }
      ]);
      setChatMessage('');
    } catch (error) {
      console.error('Chat error:', error);
    } finally {
      setLoading(false);
    }
  };

  const handlePathwayRecommendation = async () => {
    if (!apiKey || !interests.length || !currentLevel || !goals) return;

    setLoading(true);
    const claudeService = createClaudeService(apiKey);
    
    try {
      const response = await claudeService.generatePathwayRecommendation(
        interests, currentLevel, goals, timeCommitment
      );
      setRecommendation(response);
    } catch (error) {
      console.error('Recommendation error:', error);
    } finally {
      setLoading(false);
    }
  };

  const addInterest = (interest: string) => {
    if (interest.trim() && !interests.includes(interest.trim())) {
      setInterests(prev => [...prev, interest.trim()]);
    }
  };

  const removeInterest = (interest: string) => {
    setInterests(prev => prev.filter(i => i !== interest));
  };

  return (
    <div className="container mx-auto px-4 py-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2 flex items-center">
          <Brain className="h-8 w-8 mr-3 text-primary" />
          AI Assistant
        </h1>
        <p className="text-muted-foreground">
          Get personalized recommendations and assistance powered by Claude AI
        </p>
      </div>

      {/* API Key Input */}
      <Card className="mb-6">
        <CardHeader>
          <CardTitle className="text-lg">API Configuration</CardTitle>
          <CardDescription>
            Enter your Claude API key to enable AI features
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex gap-2">
            <Input
              type="password"
              placeholder="Enter your Claude API key"
              value={apiKey}
              onChange={(e) => setApiKey(e.target.value)}
              className="flex-1"
            />
            <Button 
              variant="outline" 
              onClick={() => setApiKey('')}
              disabled={!apiKey}
            >
              Clear
            </Button>
          </div>
          <p className="text-xs text-muted-foreground mt-2">
            Your API key is only stored locally and never sent to our servers.
          </p>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Pathway Recommendations */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Target className="h-5 w-5 mr-2" />
              Course Pathway Recommendations
            </CardTitle>
            <CardDescription>
              Get personalized course recommendations based on your interests and goals
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label htmlFor="interests">Interests</Label>
              <div className="flex gap-2 mb-2">
                <Input
                  id="interests"
                  placeholder="Add an interest (press Enter)"
                  onKeyPress={(e) => {
                    if (e.key === 'Enter') {
                      addInterest(e.currentTarget.value);
                      e.currentTarget.value = '';
                    }
                  }}
                />
              </div>
              <div className="flex flex-wrap gap-2">
                {interests.map(interest => (
                  <Badge key={interest} variant="secondary" className="cursor-pointer">
                    {interest}
                    <button
                      onClick={() => removeInterest(interest)}
                      className="ml-2 text-xs"
                    >
                      ×
                    </button>
                  </Badge>
                ))}
              </div>
            </div>

            <div>
              <Label htmlFor="level">Current Level</Label>
              <select
                id="level"
                value={currentLevel}
                onChange={(e) => setCurrentLevel(e.target.value)}
                className="w-full p-2 border rounded-md"
              >
                <option value="">Select your level</option>
                <option value="beginner">Beginner</option>
                <option value="intermediate">Intermediate</option>
                <option value="advanced">Advanced</option>
              </select>
            </div>

            <div>
              <Label htmlFor="goals">Learning Goals</Label>
              <Textarea
                id="goals"
                placeholder="What do you want to achieve?"
                value={goals}
                onChange={(e) => setGoals(e.target.value)}
              />
            </div>

            <div>
              <Label htmlFor="time">Time Commitment</Label>
              <Input
                id="time"
                placeholder="e.g., 2 hours per day, weekends only"
                value={timeCommitment}
                onChange={(e) => setTimeCommitment(e.target.value)}
              />
            </div>

            <Button 
              onClick={handlePathwayRecommendation}
              disabled={!apiKey || !interests.length || !currentLevel || !goals || loading}
              className="w-full"
            >
              <Sparkles className="h-4 w-4 mr-2" />
              {loading ? 'Generating...' : 'Get Recommendations'}
            </Button>

            {recommendation && (
              <div className="mt-4 p-4 bg-muted rounded-md">
                <h3 className="font-medium mb-2">AI Recommendation:</h3>
                <p className="text-sm whitespace-pre-wrap">{recommendation}</p>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Chat Assistant */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Brain className="h-5 w-5 mr-2" />
              Chat Assistant
            </CardTitle>
            <CardDescription>
              Ask questions about courses, study tips, or get general guidance
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-64 overflow-y-auto mb-4 p-4 border rounded-md bg-muted/50">
              {chatHistory.length === 0 ? (
                <p className="text-muted-foreground text-center">
                  Start a conversation with the AI assistant
                </p>
              ) : (
                <div className="space-y-4">
                  {chatHistory.map((message, index) => (
                    <div key={index} className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                      <div className={`max-w-[80%] p-3 rounded-lg ${
                        message.role === 'user' 
                          ? 'bg-primary text-primary-foreground' 
                          : 'bg-background border'
                      }`}>
                        <p className="text-sm whitespace-pre-wrap">{message.content}</p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="flex gap-2">
              <Input
                placeholder="Ask me anything..."
                value={chatMessage}
                onChange={(e) => setChatMessage(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleChat()}
                className="flex-1"
              />
              <Button onClick={handleChat} disabled={!apiKey || !chatMessage.trim() || loading}>
                <Send className="h-4 w-4" />
              </Button>
            </div>
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