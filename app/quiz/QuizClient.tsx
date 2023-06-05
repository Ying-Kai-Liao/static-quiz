'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
// Components
import QuestionCard from '@/components/QuestionCard/QuestionCard';
import Button from '@/components/Button/Button';
// Types
import { QuestionsState } from '@/types/quiz';

import useWindowSize from '../hook/useWindowSize';

type Props = {
  questions: QuestionsState;
  totalQuestions: number;
};

const Quiz = ({ questions, totalQuestions }: Props) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = React.useState(0);
  const [score, setScore] = React.useState(0);
  const [userAnswers, setUserAnswers] = React.useState<Record<number, string>>({});
  const size = useWindowSize();

  const isQuestionAnswered = userAnswers[currentQuestionIndex] ? true : false;

  const router = useRouter();

  const handleOnAnswerClick = (answer: string, currentQuestionIndex: number) => {
    // If user has already answered, do nothing
    if (isQuestionAnswered) return;
    // Check answer against correct answer
    const isCorrect = questions[currentQuestionIndex].correct_answer === answer;
    // Add score if answer is correct
    if (isCorrect) setScore(prev => prev + 1);
    // Save the answer in the object for user answers
    setUserAnswers(prev => ({ ...prev, [currentQuestionIndex]: answer }));
  };

  const handleChangeQuestion = (step: number) => {
    const newQuestionIndex = currentQuestionIndex + step;
    if (newQuestionIndex < 0 || newQuestionIndex >= totalQuestions) return;
    setCurrentQuestionIndex(newQuestionIndex);
  };

  const sizeNow = size.height > 700 ? "mt-[30vh]" : "mt-[25vh]"

  return (
    <div className=' text-black text-center justify-center'>
      <div className={sizeNow}>
        <p className='p-8 font-bold text-[20px]'>得分: {score}</p>
        <p className='text-black font-bold text-[16px] '>
          當前第 {currentQuestionIndex + 1} 題  共 {totalQuestions} 題
        </p>
        <QuestionCard
          currentQuestionIndex={currentQuestionIndex}
          question={questions[currentQuestionIndex].question}
          answers={questions[currentQuestionIndex].answers}
          userAnswer={userAnswers[currentQuestionIndex]}
          correctAnswer={questions[currentQuestionIndex].correct_answer}
          onClick={handleOnAnswerClick}
        />
        <div className='flex justify-between mt-5 gap-6'>
          <Button text='上一題' onClick={() => handleChangeQuestion(-1)} />
          <Button
            text={currentQuestionIndex === totalQuestions - 1 ? '結束' : '下一題'}
            onClick={currentQuestionIndex === totalQuestions - 1 ? () => router.push(`/finish/${score}`) : () => handleChangeQuestion(1)}
          />
        </div>
      </div>
    </div>
  );
};

export default Quiz;
