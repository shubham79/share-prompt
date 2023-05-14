import Prompt from '@models/prompt';
import { connectDB } from '@utils/database';

export const POST = async (req) => {
  const { userId, prompt, tag } = await req.json();

  try {
    await connectDB();

    const newPrompt = new Prompt({
      creator: userId,
      prompt,
      tag,
    });

    await newPrompt.save();

    return new Response(JSON.stringify(newPrompt), { status: 201 });
  } catch (error) {
    console.log('error', error);
    return new Response('Failed to create a Prompt', { status: 500 });
  }
};
