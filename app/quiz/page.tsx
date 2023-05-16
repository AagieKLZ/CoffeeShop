import Navbar from '@/components/ui/navbar';
import Text from '@/components/ui/text';
import React from 'react'

type Props = {}

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

const matchDelay = (index: number) => {
  switch (index) {
    case 0:
      return "delay-100";
    case 1:
      return "delay-150";
    case 2:
      return "delay-200";
    case 3:
      return "delay-300";
    case 4:
      return "delay-500";
    default:
      return "delay-100";
  }
};

export default function Page({}: Props) {
  return (
    <>
        <Navbar />
        <main className='flex flex-col items-center justify-center w-full h-screen pt-16'>
        <div className="duration-500 animate-in fade-in-0 slide-in-from-bottom-12">
            <span className='text-4xl font-semibold'>Lorem ipsum dolor sit amet consectetur.</span>
        </div>
      <form>
        {questionsAndAnswers[0].answers.map((answer, index) => (
          <div
            key={index}
            className={`flex items-center justify-start w-full px-8 py-4 mt-4 ${matchDelay(index)} duration-2000 rounded-xl animate-in slide-in-from-bottom-full fade-in-25`}
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
        </main>
    </>
  )
}