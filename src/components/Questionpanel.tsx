"use client";

import Counter from "@/components/Counter";
import { Button } from "@/components/ui/button";
import React, { useState } from "react";

export default function Questionpanel({
  questionType,
  questions,
}: {
  questionType: string;
  questions: string[];
}) {
  const [question, setQuestion] = useState("What is your favorite hobby?");

  const handleNextQuestion = () => {
    const randomIndex = Math.floor(Math.random() * questions.length);
    setQuestion(questions[randomIndex]);
  };

  return (
    <div className="relative flex items-center justify-center h-screen bg-gradient-to-r from-yellow-200 to-orange-200">
      {/* Timer in the top right */}
      <div className="absolute top-4 right-4 text-2xl font-bold text-gray-900">
        <Counter timer={10} />
      </div>

      {/* Question box */}
      <div className="w-full max-w-2xl p-8 bg-white rounded-lg shadow-lg text-center">
        <h1 className="text-2xl font-semibold text-gray-900 mb-4">
          {questionType} Question
        </h1>
        <p className="text-lg text-gray-700 mb-6">{question}</p>
        <Button
          className="px-6 py-2 text-lg font-medium bg-blue-500 text-white rounded hover:bg-blue-600"
          onClick={handleNextQuestion}
        >
          Next Question
        </Button>
      </div>
    </div>
  );
}
