
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ArrowLeft, MessageSquare, Send, Brain, Lightbulb, BookOpen, Users, AlertCircle } from 'lucide-react';
import { ollamaService, OllamaMessage } from '@/services/ollama';
import { Alert, AlertDescription } from '@/components/ui/alert';

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
  const [ollamaStatus, setOllamaStatus] = useState<'checking' | 'connected' | 'disconnected'>('checking');

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

  useEffect(() => {
    checkOllamaConnection();
  }, []);

  const checkOllamaConnection = async () => {
    try {
      const isConnected = await ollamaService.testConnection();
      setOllamaStatus(isConnected ? 'connected' : 'disconnected');
    } catch (error) {
      setOllamaStatus('disconnected');
    }
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

    try {
      if (ollamaStatus !== 'connected') {
        throw new Error('Ollama is not connected');
      }

      // Convert chat messages to Ollama format
      const ollamaMessages: OllamaMessage[] = [
        {
          role: 'system',
          content: 'You are a helpful AI assistant for a Summer School program. You help students with course information, study tips, academic guidance, and general questions about education. Be friendly, informative, and encouraging. Keep responses concise but helpful.'
        },
        ...messages.map(msg => ({
          role: msg.role,
          content: msg.content
        })),
        {
          role: 'user',
          content: inputMessage
        }
      ];

      const aiResponseContent = await ollamaService.generateResponse(ollamaMessages);
      
      const aiResponse: ChatMessage = {
        role: 'assistant',
        content: aiResponseContent,
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, aiResponse]);
    } catch (error) {
      console.error('Error generating AI response:', error);
      
      const errorResponse: ChatMessage = {
        role: 'assistant',
        content: 'I apologize, but I\'m having trouble connecting to the AI service right now. Please make sure Ollama is running on your machine and try again. You can also try refreshing the page.',
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, errorResponse]);
    } finally {
      setIsLoading(false);
    }
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

        {/* Ollama Status Alert */}
        {ollamaStatus === 'disconnected' && (
          <Alert className="mt-4" variant="destructive">
            <AlertCircle className="h-4 w-4" />
            <AlertDescription>
              Unable to connect to Ollama. Please make sure Ollama is running on your machine and the llama3:instruct model is available.
            </AlertDescription>
          </Alert>
        )}

        {ollamaStatus === 'connected' && (
          <Alert className="mt-4">
            <Brain className="h-4 w-4" />
            <AlertDescription>
              Connected to Ollama Llama3 - AI responses are powered by your local model!
            </AlertDescription>
          </Alert>
        )}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Chat Interface */}
        <div className="lg:col-span-3">
          <Card className="h-[600px] flex flex-col">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center text-lg">
                <Brain className="h-5 w-5 mr-2" />
                AI Assistant {ollamaStatus === 'connected' && <span className="text-sm text-green-600 ml-2">(Ollama Connected)</span>}
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
                        <span className="text-sm text-muted-foreground">Llama3 is thinking...</span>
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
                  disabled={ollamaStatus !== 'connected'}
                />
                <Button 
                  onClick={handleSendMessage} 
                  disabled={!inputMessage.trim() || isLoading || ollamaStatus !== 'connected'}
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
                    disabled={ollamaStatus !== 'connected'}
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

          {/* Retry Connection Button */}
          {ollamaStatus === 'disconnected' && (
            <Card className="mt-4">
              <CardContent className="pt-6">
                <Button
                  onClick={checkOllamaConnection}
                  className="w-full"
                  variant="outline"
                >
                  Retry Connection
                </Button>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
};

export default ChatAssistant;
