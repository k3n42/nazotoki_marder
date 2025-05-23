'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function PuzzlePage() {
  const [answer, setAnswer] = useState('');
  const [isCorrect, setIsCorrect] = useState(false);
  const router = useRouter();

  const handleSubmit = () => {
    if (answer.trim() === '正解') {
      setIsCorrect(true);
    } else {
      alert('違います。もう一度考えてみよう。');
    }
  };

  const handleNext = () => {
    router.push('/puzzle3');
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gray-100 px-4">
      <h2 className="text-2xl font-bold mb-6 text-center">第2問</h2>

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
            あなたたちはキャンパス内を探索し暗証番号を突き止めた。
          </p>
          <p>
            USBのデータを見てみると、中には、
            <strong>犯人の候補とその動機が詳細にまとめられたデータ</strong>が収められていた。
          </p>
          <p>
            これは、事件の真相に迫る決定的な一歩となるかもしれない――。
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
