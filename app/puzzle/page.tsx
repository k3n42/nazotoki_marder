'use client';

import { useState } from 'react';

export default function PuzzlePage() {
  const [answer, setAnswer] = useState('');
  const [hintVisible, setHintVisible] = useState(false);

  const handleSubmit = () => {
    if (answer.trim() === '正解') {
      alert('正解です！');
    } else {
      alert('違います。もう一度考えてみよう。');
    }
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gray-100 px-4">
      <h2 className="text-2xl font-bold mb-6 text-center">ここから謎解きスタート！</h2>

      {/* 解答欄 */}
      <div className="mb-4 w-full max-w-sm">
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

      {/* ヒント表示 */}
      <div className="text-center">
        <button
          onClick={() => setHintVisible(!hintVisible)}
          className="text-sm underline text-blue-600 hover:text-blue-800 mb-2"
        >
          {hintVisible ? 'ヒントを隠す' : 'ヒントを見る'}
        </button>

        {hintVisible && (
          <p className="text-gray-700 border border-gray-300 bg-white p-4 rounded max-w-sm">
            ヒント：◯◯に注目してみよう。
          </p>
        )}
      </div>
    </main>
  );
}
