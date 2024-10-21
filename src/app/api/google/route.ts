import { NextRequest, NextResponse } from "next/server";
import {
  GoogleGenerativeAI,
  HarmBlockThreshold,
  HarmCategory,
} from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY || "");

const safetySettings = [
  {
    category: HarmCategory.HARM_CATEGORY_HARASSMENT,
    threshold: HarmBlockThreshold.BLOCK_NONE,
  },
  {
    category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
    threshold: HarmBlockThreshold.BLOCK_NONE,
  },
  {
    category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT,
    threshold: HarmBlockThreshold.BLOCK_NONE,
  },
  {
    category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
    threshold: HarmBlockThreshold.BLOCK_NONE,
  },
];

const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
  safetySettings: safetySettings,
});

export async function POST(req: NextRequest) {
  try {
    const raw = await req.text();
    console.log(raw);
    //const description =
    //"You are a quiz wizard. You will be given either one of 3 different type of question: Icebreaker, Who Question, and Juicest. Icebreakers: Easy questions like Whats your go-to drink at a bar?,  If you could be any animal for a day, what would it be?. For Who Questions: questions like ho in this room would survive the longest in a zombie apocalypse? and Juciest: The spiciest freakiest questions for example relationship related stuff or like sex related. You need to come up with 20 questions for the selected category. ";
    //const finalPrompt = description + " " + "who questions";

    //const result = await model.generateContent(finalPrompt);

    return NextResponse.json({ message: raw });
  } catch (error) {
    console.error(error);
    return NextResponse.json(error);
  }
}
