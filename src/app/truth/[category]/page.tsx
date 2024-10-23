import { fetchQuestion } from "@/app/data/actions";
import Questionpanel from "@/components/Questionpanel";

export default async function Icebreaker({
  params,
}: {
  params: { category: string };
}) {
  const questions = await fetchQuestion(params.category);
  const questionsMessage = questions.message;
  let questionsArray = questionsMessage.split("\n");
  questionsArray = questionsArray
    .slice(1)
    .filter((q: string) => q.trim() !== "");

  const cleanedQuestionsArray = questionsArray.map((question: string) =>
    question
      .replace(/^\d+\.\s*/, "")
      .replace(/\*\*/g, "")
      .trim()
  );

  const finalQuestionsArray = cleanedQuestionsArray
    .map((question: string) => question.replace(/(^"|"$)/g, "").trim())
    .filter((q: string) => q !== "");
  console.log(finalQuestionsArray);

  const category = params.category;

  return (
    <section>
      <Questionpanel questionType={category} questions={finalQuestionsArray} />
    </section>
  );
}
