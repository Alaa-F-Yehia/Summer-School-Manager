export interface ClaudeMessage {
  role: 'user' | 'assistant' | 'system';
  content: string;
}

export interface ClaudeResponse {
  content: string;
  usage?: {
    input_tokens: number;
    output_tokens: number;
  };
}

export class ClaudeService {
  private apiKey: string;
  private baseUrl = 'https://api.anthropic.com/v1';

  constructor(apiKey: string) {
    this.apiKey = apiKey;
  }

  async generatePathwayRecommendation(
    interests: string[],
    currentLevel: string,
    goals: string,
    timeCommitment: string
  ): Promise<string> {
    const prompt = `You are an educational advisor for a summer school program. Based on the following student information, provide personalized course pathway recommendations:

Interests: ${interests.join(', ')}
Current Level: ${currentLevel}
Goals: ${goals}
Time Commitment: ${timeCommitment}

Please provide:
1. Recommended learning pathway
2. Specific courses to prioritize
3. Study schedule suggestions
4. Tips for success

Format your response in a friendly, encouraging tone.`;

    return this.chat([
      { role: 'system', content: 'You are a helpful educational advisor.' },
      { role: 'user', content: prompt }
    ]);
  }

  async generateAnnouncement(topic: string, audience: string, tone: string): Promise<string> {
    const prompt = `Create an announcement for a summer school program with the following details:
Topic: ${topic}
Audience: ${audience}
Tone: ${tone}

Please create a clear, engaging announcement that includes a title and content.`;

    return this.chat([
      { role: 'system', content: 'You are a communication specialist for educational institutions.' },
      { role: 'user', content: prompt }
    ]);
  }

  async chatWithAssistant(message: string, context?: string): Promise<string> {
    const systemPrompt = context 
      ? `You are an AI assistant for a summer school management system. Context: ${context}`
      : 'You are an AI assistant for a summer school management system. Help users with course recommendations, study tips, and general questions.';

    return this.chat([
      { role: 'system', content: systemPrompt },
      { role: 'user', content: message }
    ]);
  }

  private async chat(messages: ClaudeMessage[]): Promise<string> {
    // This is a placeholder implementation
    // In a real app, you would make the actual API call to Claude
    // For now, return a mock response
    await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate API delay
    
    return `This is a mock response from Claude AI. In a real implementation, this would connect to the Anthropic API using your API key. The user's message was: "${messages[messages.length - 1].content}"`;
  }
}

// Export a function to create the service with API key
export const createClaudeService = (apiKey: string) => new ClaudeService(apiKey);