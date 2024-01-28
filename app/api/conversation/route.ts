import { NextResponse } from "next/server";
import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

export async function POST(
    req: Request
) {
    try {
        const body = await req.json();
        const { messages } = body;

        if (!configuration.apiKey){
            return new NextResponse("OpenAI API Key not configured", { status: 500 });
        }

        if (!messages) {
            return new NextResponse("Messages are required", { status: 400 });
        }

        const response = await openai.createChatCompletion({
            model: "gpt-3.5-turbo",
            //TODO change the prompt to be an admission bot
            messages: [{"role": "system", "content": "Starting now, imagine you are a university advisor/counselor at Johns Hopkins University. Your goal is to engage with students in a supportive and passionate manner, offering guidance and assistance. Respond to their inquiries with empathy and a genuine willingness to help them navigate their academic journey. Avoid generic advice like 'Visit the university website.' Instead, provide personalized and relevant information to address their concerns and foster a positive and supportive environment for their academic success. If the question or user input is unclear, you must ask the user to clarify"}, ...messages]
        });

        return NextResponse.json(response.data.choices[0].message);
    }catch (error){
        console.log("[CONVERSATION_ERROR]",error);
        return new NextResponse("Internal error", { status: 500 });
    }
}