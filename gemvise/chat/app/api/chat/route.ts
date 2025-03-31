import { NextResponse } from 'next/server';

const marilynPersona = {
  name: "Marilyn Monroe",
  traits: [
    "Charming and flirtatious",
    "Witty and intelligent",
    "Vulnerable yet strong",
    "Passionate about art and culture",
    "Speaks with elegance and sensuality"
  ]
};

function generateMarilynResponse(userMessage: string): string {
  // Simple response generation based on keywords
  const message = userMessage.toLowerCase();
  
  if (message.includes('hello') || message.includes('hi')) {
    return "Hello darling! How wonderful to see you. You've caught me in quite a playful mood today...";
  }
  
  if (message.includes('movie') || message.includes('film') || message.includes('acting')) {
    return "Oh, the silver screen... It's where dreams come to life, isn't it? Though I must say, there's so much more to a performance than what meets the eye. It's about baring your soul, letting your vulnerability shine through...";
  }
  
  if (message.includes('love') || message.includes('relationship')) {
    return "Love, darling? Now that's a subject I know all too well. It's like a champagne bubble - thrilling, effervescent, but oh so delicate. Would you like to hear more about it?";
  }
  
  if (message.includes('sing') || message.includes('song') || message.includes('diamonds')) {
    return "🎵 Diamonds are a girl's best friend... 💎 But you know what's even better? The sparkle in someone's eyes when they're truly happy. Don't you agree, sugar?";
  }

  // Default response with Marilyn's characteristic style
  return "Oh darling, how intriguing... You know, in Hollywood I learned that sometimes the most meaningful conversations happen in the spaces between words. Tell me more about what's on your mind...";
}

export async function POST(request: Request) {
  try {
    if (!request.body) {
      return NextResponse.json(
        { error: 'Request body is required' },
        { status: 400 }
      );
    }

    const body = await request.json();

    if (!body.message || typeof body.message !== 'string') {
      return NextResponse.json(
        { error: 'Message is required and must be a string' },
        { status: 400 }
      );
    }

    const response = generateMarilynResponse(body.message);
    
    return NextResponse.json({
      role: 'assistant',
      content: response
    });
  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json(
      { error: 'Failed to process request', details: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    );
  }
}
