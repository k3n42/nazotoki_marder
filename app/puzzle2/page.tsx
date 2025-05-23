'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { ChevronDown, ChevronUp } from 'lucide-react'; // ← 追加

export default function PuzzlePage() {
  const [answer, setAnswer] = useState('');
  const [isCorrect, setIsCorrect] = useState(false);
  const [showExtraImages, setShowExtraImages] = useState(false);
  const router = useRouter();

  const handleSubmit = () => {
    if (answer.trim() === '手') {
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
        <Image
          src="/quiz.png"
          alt="クイズ画像"
          width={300}
          height={200}
          className="mb-6"
        />
      )}

      {/* ▼ 手がかり表示ボタン（アイコン付き＋装飾） */}
      {!isCorrect && (
        <button
          onClick={() => setShowExtraImages((prev) => !prev)}
          className="mb-6 flex items-center gap-2 px-4 py-2 bg-white border border-blue-300 rounded shadow hover:bg-blue-50 text-blue-600 font-semibold"
        >
          {showExtraImages ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
          {showExtraImages ? '手がかりを隠す' : '手がかりはこちら'}
        </button>
      )}


      {/* ▼ 手がかり画像（アニメーション付き） */}
      {!isCorrect && showExtraImages && (
        <div className="flex flex-row justify-center items-center gap-4 mb-6 flex-wrap transition-all duration-500">
          <Image src="/statue.png" alt="クイズ1" width={300} height={200} className="rounded shadow" />
          <Image src="/qwarehouse.png" alt="クイズ2" width={300} height={200} className="rounded shadow" />
          <Image src="/わせぐまカード.png" alt="クイズ3" width={400} height={300} className="rounded shadow" />
          <Image src="/caution.png" alt="クイズ4" width={200} height={100} className="rounded shadow" />
        </div>
      )}

      {/* ▼ 解答欄 */}
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

      {/* ▼ 正解後のメッセージ */}
      {isCorrect && (
        <section className="max-w-md text-center space-y-6 text-lg leading-relaxed">
          <p className="whitespace-nowrap">あなたたちはキャンパス内を探索し暗証番号を突き止めた。</p>
          <p className="whitespace-nowrap">
            USBのデータを見てみると、中には<br />
            <strong>犯人の候補とその動機が詳細にまとめられたデータ</strong>が収められていた。
          </p>
          <p className="whitespace-nowrap">これは、事件の真相に迫る決定的な一歩となるかもしれない――。</p>

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
