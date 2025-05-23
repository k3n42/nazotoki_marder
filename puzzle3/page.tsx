'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Puzzle2() {
  const [who, setWho] = useState('');
  const [where, setWhere] = useState('');
  const [how, setHow] = useState('');
  const [hintVisible, setHintVisible] = useState(false);
  const router = useRouter();

  const handleSubmit = () => {
    const correctWho = '田中';
    const correctWhere = '倉庫';
    const correctHow = '毒';

    if (
      who.trim() === correctWho &&
      where.trim() === correctWhere &&
      how.trim() === correctHow
    ) {
      router.push('/puzzle3');
    } else {
      alert('どれかが違います。もう一度考えてみましょう。');
    }
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gray-100 px-4">
      <h2 className="text-2xl font-bold mb-6 text-center">第2問：事件の真相を明らかにせよ</h2>

      {/* 解答欄 */}
      <div className="w-full max-w-md space-y-4 mb-6">
        <div>
          <label className="block mb-1 font-semibold">誰が</label>
          <input
            type="text"
            value={who}
            onChange={(e) => setWho(e.target.value)}
            placeholder="例：田中"
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div>
          <label className="block mb-1 font-semibold">どこで</label>
          <input
            type="text"
            value={where}
            onChange={(e) => setWhere(e.target.value)}
            placeholder="例：倉庫"
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div>
          <label className="block mb-1 font-semibold">なぜ</label>
          <input
            type="text"
            value={how}
            onChange={(e) => setHow(e.target.value)}
            placeholder="例：復讐のため"
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>

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
            ヒント：関係者の行動記録や物証に注目してみよう。
          </p>
        )}
      </div>
    </main>
  );
}
