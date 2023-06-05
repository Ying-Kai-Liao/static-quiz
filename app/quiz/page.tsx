// Utils
import { shuffleArray } from '@/utils/arrayUtils';
// Components
import Quiz from './QuizClient';
// Types
import { Difficulty, QuestionsState, Question } from '@/types/quiz';


const getQuestions = async () => {
  const data = {
    response_code: 0,
    results: [
      {
        category: '財經',
        type: 'multiple',
        difficulty: Difficulty.EASY,
        question: '理財書籍怎麼挑選?',
        correct_answer: '適合自己的',
        incorrect_answers: ['名氣大的', '我又沒時間看書']
      },
      {
        category: '財經',
        type: 'multiple',
        difficulty: Difficulty.EASY,
        question: '關於投資，正確的是?',
        correct_answer: '建立賠錢心理準備',
        incorrect_answers: ['小額嘗試', '就是買股票']
      },
      {
        category: '財經',
        type: 'multiple',
        difficulty: Difficulty.EASY,
        question: '關於退休，正確的是?',
        correct_answer: '了解需求，全面規劃',
        incorrect_answers: ['只存ETF', '政府退休金']
      },
      {
        category: '財經',
        type: 'multiple',
        difficulty: Difficulty.EASY,
        question: '有了洗還，怎麼理財?',
        correct_answer: '考慮到大學學費，適度省錢',
        incorrect_answers: ['什麼都用最好，小孩是寶', '靠政府的育兒津貼']
      },
      {
        category: '財經',
        type: 'multiple',
        difficulty: Difficulty.EASY,
        question: '關於ETF，正確的是?',
        correct_answer: '要仔細檢視',
        incorrect_answers: ['安全零風險', '不會賠錢']
      }
    ]
  };

  return data.results.map((question: Question) => ({
    ...question,
    answers: shuffleArray([...question.incorrect_answers, question.correct_answer])
  }));
};

const Home = async () => {
  const questions = await getQuestions();

  return (
    <div className='pt-20'><Quiz questions={questions} totalQuestions={5} /></div>
    )
};

export default Home;
