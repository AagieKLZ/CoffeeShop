"use client";
import React from "react";
import Text from "@/components/ui/text";

type Props = {};

const questionsAndAnswers = [
  {
    question: "Lorem ipsum dolor sit amet consectetur",
    answers: [
      "Lorem ipsum dolor",
      "Lorem ipsum dolor",
      "Lorem ipsum dolor",
      "Lorem ipsum dolor",
    ],
  },
  {
    question: "Lorem ipsum dolor sit amet consectetur",
    answers: [
      "Lorem ipsum dolor",
      "Lorem ipsum dolor",
      "Lorem ipsum dolor",
      "Lorem ipsum dolor",
    ],
  },
  {
    question: "Lorem ipsum dolor sit amet consectetur",
    answers: [
      "Lorem ipsum dolor",
      "Lorem ipsum dolor",
      "Lorem ipsum dolor",
      "Lorem ipsum dolor",
    ],
  },
];

export default function Question({}: Props) {
  const [question, setQuestion] = React.useState(0);
  return (
    <>
      <div className="animate-in fade-in-50 slide-in-from-bottom-12">
        <Text size={"4xl"} weight={"semibold"}>
          Lorem ipsum dolor sit amet consectetur.
        </Text>
      </div>
      <form>
        {questionsAndAnswers[question].answers.map((answer, index) => (
          <div
            key={index}
            className={`flex items-center justify-start w-full px-8 py-4 mt-4 delay-[${
              index * 100
            }ms] rounded-xl animate-in slide-in-from-bottom-10 fade-in-100`}
          >
            <input
              defaultValue={"off"}
              type="radio"
              name="answer"
              id={`${answer}_${index}`}
              className="w-4 h-4 mr-4 rounded-full text-coffee-500 border-coffee-500 accent-coffee-900"
            />
            <label
              htmlFor={`${answer}_${index}`}
              className="text-lg font-semibold text-coffee-900"
            >
              {answer}
            </label>
          </div>
        ))}
      </form>
    </>
  );
}
