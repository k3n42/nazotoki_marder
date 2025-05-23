'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function PuzzlePage() {
  const [answer, setAnswer] = useState('');
  const [isCorrect, setIsCorrect] = useState(false);
  const router = useRouter();
  const correctAnswers = ['戸山公園', 'とやまこうえん']

  const handleSubmit = () => {
    if (correctAnswers.includes(answer.trim())) {
      setIsCorrect(true);
    } else {
      alert('違います。もう一度考えてみよう。');
    }
  };

  const handleNext = () => {
    router.push('/puzzle2');
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gray-100 px-4">
      <p className="text-2xl font-bold mb-6 text-center">第１問 集めた文字を組み替えて言葉にしろ</p>

      {!isCorrect && (
        
        <div className="w-full max-w-sm mb-6">
          <input
            type="text"
            placeholder="ここに答えを入力"
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded mb-2"
          />
          <button
            onClick={handleSubmit}
            className="w-full bg-amber-400 hover:bg-amber-500 text-black font-bold py-2 px-4 rounded"
          >
            解答する
          </button>
        </div>
      )}

      {isCorrect && (
        <section className="max-w-md text-center space-y-6 text-lg leading-relaxed">
          <p>
            あなたは謎のメモに書かれていた手がかりをもとに、戸山公園へ向かった。
          </p>
          <p>
            そこで発見したのは、一つのUSB。中を開こうとすると、
            <strong>暗証番号</strong>でロックがかけられているようだ。
          </p>
          <p>
            あなたはロックを解除するため西早稲田キャンパス内を探索しなければならない
          </p>

          <button
            onClick={handleNext}
            className="mt-4 bg-amber-400 hover:bg-amber-500 text-black font-bold py-2 px-6 rounded"
          >
            次へ進む
          </button>
        </section>
      )}
    </main>
  );
}
