import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ArrowLeft, MessageSquare, Send, Brain, Lightbulb, BookOpen, Users } from 'lucide-react';

interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

const ChatAssistant = () => {
  const navigate = useNavigate();
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      role: 'assistant',
      content: 'Hello! I\'m your AI assistant for the Summer School program. I can help you with:\n\n• Course information and recommendations\n• Study tips and learning strategies\n• Schedule and enrollment questions\n• General academic guidance\n\nWhat would you like to know today?',
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const suggestedQuestions = [
    "What are the most popular courses this summer?",
    "How can I improve my study habits?",
    "What prerequisites do I need for advanced courses?",
    "How do I balance multiple courses effectively?",
    "What career paths align with STEM courses?",
    "Can you explain the grading system?",
    "What resources are available for struggling students?",
    "How do I prepare for college applications?"
  ];

  // Mock AI responses - in a real app, this would call the Claude API
  const generateAIResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase();
    
    if (lowerMessage.includes('course') || lowerMessage.includes('class')) {
      return "Our summer school offers a variety of courses including:\n\n📚 **Core Subjects**: Advanced Math, Science, English, History\n🔬 **STEM**: Programming, Engineering, Environmental Science\n🎨 **Creative**: Digital Art, Creative Writing, Music\n💼 **Career Prep**: Business Fundamentals, Public Speaking\n\nEach course is designed to be engaging and practical. Would you like specific information about any particular subject area?";
    }
    
    if (lowerMessage.includes('study') || lowerMessage.includes('learn')) {
      return "Here are some effective study strategies for summer courses:\n\n✅ **Time Management**: Create a schedule and stick to it\n✅ **Active Learning**: Take notes, ask questions, participate\n✅ **Practice Regularly**: Don't cram - spread learning over time\n✅ **Study Groups**: Collaborate with classmates\n✅ **Break Tasks**: Divide large assignments into smaller parts\n✅ **Take Breaks**: Use the Pomodoro technique (25 min work, 5 min break)\n\nWhat specific subject are you looking to improve in?";
    }
    
    if (lowerMessage.includes('prerequisite') || lowerMessage.includes('requirement')) {
      return "Prerequisites vary by course level:\n\n🟢 **Beginner Courses**: No prerequisites required\n🟡 **Intermediate Courses**: Completion of basic level or equivalent grade (C+ or higher)\n🔴 **Advanced Courses**: Strong performance in intermediate level (B+ or higher)\n\nSome specific requirements:\n• Advanced Programming: Basic Programming + Math B or higher\n• Engineering Math: Algebra II completion\n• Advanced Biology: Biology I + Chemistry recommended\n\nWhich course are you interested in? I can provide specific requirements.";
    }
    
    if (lowerMessage.includes('popular') || lowerMessage.includes('trending')) {
      return "This summer's most popular courses are:\n\n🥇 **Web Development Bootcamp** - 95% enrollment\n🥈 **Creative Writing Workshop** - 87% enrollment  \n🥉 **Environmental Science** - 82% enrollment\n\n**Rising Stars**:\n• Digital Art & Design\n• Public Speaking & Debate\n• Young Entrepreneurs Program\n\nThese courses fill up quickly, so early enrollment is recommended! Are you interested in any of these areas?";
    }
    
    if (lowerMessage.includes('balance') || lowerMessage.includes('multiple')) {
      return "Managing multiple courses effectively:\n\n⏰ **Time Blocking**: Assign specific hours to each subject\n📅 **Weekly Planning**: Review all upcoming assignments on Sundays\n🎯 **Prioritization**: Focus on deadlines and difficulty first\n📝 **Assignment Tracking**: Use a planner or digital tool\n🤝 **Communication**: Talk to teachers if you're overwhelmed\n\n**Recommended Load**:\n• 2-3 courses for most students\n• 1-2 if taking advanced/intensive courses\n• Consider your other summer commitments\n\nHow many courses are you considering?";
    }
    
    if (lowerMessage.includes('career') || lowerMessage.includes('future')) {
      return "Here are some career pathway connections:\n\n💻 **Technology**: Programming → Software Developer, Web Designer, IT Specialist\n🔬 **Science**: Biology/Chemistry → Healthcare, Research, Environmental Science\n📚 **Liberal Arts**: English/Writing → Journalism, Law, Education, Marketing\n🎨 **Creative**: Art/Design → Graphic Designer, UX/UI Designer, Animator\n💼 **Business**: Entrepreneurship → Business Owner, Manager, Consultant\n🏛️ **Social Studies**: History/Politics → Law, Government, Non-profit work\n\nMany careers combine multiple areas! What interests you most?";
    }
    
    if (lowerMessage.includes('grade') || lowerMessage.includes('grading')) {
      return "Our grading system is designed to be fair and encouraging:\n\n📊 **Grade Scale**:\n• A: 90-100% (Excellent)\n• B: 80-89% (Good)\n• C: 70-79% (Satisfactory)\n• D: 60-69% (Needs Improvement)\n• F: Below 60% (Unsatisfactory)\n\n📈 **Grade Composition** (typical):\n• Participation: 20%\n• Assignments/Projects: 40%\n• Quizzes/Tests: 30%\n• Final Project/Exam: 10%\n\n✨ **Improvement Opportunities**: Most teachers allow revisions and offer extra credit. We focus on learning, not just grades!";
    }
    
    if (lowerMessage.includes('help') || lowerMessage.includes('struggling') || lowerMessage.includes('support')) {
      return "We have extensive support resources available:\n\n👥 **Tutoring Services**: Free peer and teacher tutoring\n📚 **Study Hall**: Supervised study time with help available\n💻 **Online Resources**: Digital libraries, practice tests, video tutorials\n🤝 **Study Groups**: Organized group sessions for each subject\n📞 **Academic Counseling**: One-on-one guidance sessions\n♿ **Accessibility Services**: Accommodations for all learning needs\n\n**Getting Help**:\n1. Talk to your teacher first\n2. Visit the help center (Room 101)\n3. Schedule tutoring through the portal\n4. Join subject-specific study groups\n\nDon't hesitate to ask for help early - we're here to support your success!";
    }
    
    if (lowerMessage.includes('college') || lowerMessage.includes('application')) {
      return "Summer school can strengthen your college applications:\n\n🎯 **How It Helps**:\n• Shows academic initiative and dedication\n• Demonstrates ability to handle challenging coursework\n• Provides additional GPA opportunities\n• Offers unique experiences for essays\n• Builds relationships with teachers (recommendation letters)\n\n📝 **Application Tips**:\n• Highlight leadership roles in courses\n• Mention specific projects or achievements\n• Connect summer learning to your intended major\n• Discuss skills developed (time management, independence)\n\n🏆 **Advanced Courses**: Taking advanced summer courses shows college readiness\n\nAre you focusing on any particular colleges or majors?";
    }
    
    // Default response
    return "That's a great question! While I can provide general guidance on academic topics, course information, and study strategies, I'd recommend reaching out to your specific instructors or the academic office for detailed or course-specific questions.\n\nIs there anything else about summer school programs, study techniques, or academic planning I can help you with?";
  };

  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return;

    const userMessage: ChatMessage = {
      role: 'user',
      content: inputMessage,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsLoading(true);

    // Simulate API delay
    setTimeout(() => {
      const aiResponse: ChatMessage = {
        role: 'assistant',
        content: generateAIResponse(inputMessage),
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, aiResponse]);
      setIsLoading(false);
    }, 1000);
  };

  const handleSuggestedQuestion = (question: string) => {
    setInputMessage(question);
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
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
        
        <h1 className="text-3xl font-bold flex items-center mb-2">
          <MessageSquare className="h-8 w-8 mr-3 text-primary" />
          Chat Assistant
        </h1>
        <p className="text-muted-foreground">
          Get instant help with courses, study tips, and academic guidance
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Chat Interface */}
        <div className="lg:col-span-3">
          <Card className="h-[600px] flex flex-col">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center text-lg">
                <Brain className="h-5 w-5 mr-2" />
                AI Assistant
              </CardTitle>
              <CardDescription>
                Ask me anything about courses, studying, or academic planning
              </CardDescription>
            </CardHeader>
            
            <CardContent className="flex-1 flex flex-col">
              {/* Messages Area */}
              <div className="flex-1 overflow-y-auto mb-4 space-y-4 pr-2">
                {messages.map((message, index) => (
                  <div key={index} className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                    <div className={`max-w-[80%] p-4 rounded-lg ${
                      message.role === 'user' 
                        ? 'bg-primary text-primary-foreground' 
                        : 'bg-muted border'
                    }`}>
                      <p className="text-sm whitespace-pre-wrap">{message.content}</p>
                      <p className={`text-xs mt-2 ${
                        message.role === 'user' ? 'text-primary-foreground/70' : 'text-muted-foreground'
                      }`}>
                        {formatTime(message.timestamp)}
                      </p>
                    </div>
                  </div>
                ))}
                
                {isLoading && (
                  <div className="flex justify-start">
                    <div className="bg-muted border p-4 rounded-lg">
                      <div className="flex items-center space-x-2">
                        <div className="animate-pulse flex space-x-1">
                          <div className="h-2 w-2 bg-primary rounded-full animate-bounce"></div>
                          <div className="h-2 w-2 bg-primary rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                          <div className="h-2 w-2 bg-primary rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                        </div>
                        <span className="text-sm text-muted-foreground">AI is typing...</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              
              {/* Input Area */}
              <div className="flex gap-2">
                <Input
                  placeholder="Ask me anything about courses, studying, or academic planning..."
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                  className="flex-1"
                />
                <Button 
                  onClick={handleSendMessage} 
                  disabled={!inputMessage.trim() || isLoading}
                >
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Suggested Questions Sidebar */}
        <div className="lg:col-span-1">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center text-lg">
                <Lightbulb className="h-5 w-5 mr-2" />
                Suggested Questions
              </CardTitle>
              <CardDescription>
                Click any question to get started
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {suggestedQuestions.map((question, index) => (
                  <Button
                    key={index}
                    variant="ghost"
                    className="w-full text-left justify-start h-auto p-3 text-sm"
                    onClick={() => handleSuggestedQuestion(question)}
                  >
                    {question}
                  </Button>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Quick Links */}
          <Card className="mt-4">
            <CardHeader>
              <CardTitle className="flex items-center text-lg">
                <BookOpen className="h-5 w-5 mr-2" />
                Quick Links
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <Button
                variant="outline"
                className="w-full justify-start"
                onClick={() => navigate('/classes')}
              >
                <BookOpen className="h-4 w-4 mr-2" />
                View All Classes
              </Button>
              <Button
                variant="outline"
                className="w-full justify-start"
                onClick={() => navigate('/pathway-recommendation')}
              >
                <Users className="h-4 w-4 mr-2" />
                Course Recommendations
              </Button>
              <Button
                variant="outline"
                className="w-full justify-start"
                onClick={() => navigate('/teachers')}
              >
                <Users className="h-4 w-4 mr-2" />
                Meet Our Teachers
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ChatAssistant;