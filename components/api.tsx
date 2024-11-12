import { GoogleGenerativeAI, HarmCategory, HarmBlockThreshold } from '@google/generative-ai';

const apiKey = 'AIzaSyCvZLJaOhrl2NGgGEXlno9JfwznLpuHo9k'; // Replace with your actual API key
const genAI = new GoogleGenerativeAI(apiKey);

const generationConfig = {
    temperature: 0.3,
    topP: 0.95,
    topK: 64,
    maxOutputTokens: 8192,
    responseMimeType: "text/plain",
};

const safetySettings = [
    { category: HarmCategory.HARM_CATEGORY_HARASSMENT, threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE },
    { category: HarmCategory.HARM_CATEGORY_HATE_SPEECH, threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE },
    { category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT, threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE },
    { category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT, threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE },
];

export const fetchBotResponse = async (message: string): Promise<string> => {
    const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash-latest' });
    const chatSession = model.startChat({ generationConfig, safetySettings });

    const result = await chatSession.sendMessage(message);
    return result.response.text(); // Return the bot's response text
};
