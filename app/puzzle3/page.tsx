'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';

export default function Puzzle2() {
  const [who, setWho] = useState('');
  const [where, setWhere] = useState('');
  const [how, setHow] = useState('');
  const [hintVisible, setHintVisible] = useState(false);
  const [popupMessage, setPopupMessage] = useState<string | null>(null);
  const router = useRouter();
  const [isCorrectAnimating, setIsCorrectAnimating] = useState(false);
  const [isFadingOut, setIsFadingOut] = useState(false);

  const handleSubmit = () => {
    const correctWho = '平田浩介';
    const correctWhere = 'ロープ';
    const correctHow = '口封じ';

    if (
      who.trim() === correctWho &&
      where.trim() === correctWhere &&
      how.trim() === correctHow
    ) {
      setIsCorrectAnimating(true);
      setTimeout(() => {
        setIsFadingOut(true);
      }, 2000);
      setTimeout(() => {
        router.push('/ending');
      }, 3000);
    } else {
      setPopupMessage('本当にその推理は正しいのだろうか。もう一度考えてみよう。');
    }
  };

  const handlePopupClose = () => {
      setPopupMessage(null);
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gray-100 px-4 relative">
      <h2 className="text-2xl font-bold mb-6 text-center">第3問：事件の真相を明らかにせよ</h2>

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
          <label className="block mb-1 font-semibold">なにで</label>
          <input
            type="text"
            value={where}
            onChange={(e) => setWhere(e.target.value)}
            placeholder="例：包丁"
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

      {/* ポップアップ表示 */}
      {popupMessage && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded shadow-lg max-w-sm text-center space-y-4">
            <p className="text-lg">{popupMessage}</p>
            <button
              onClick={handlePopupClose}
              className="bg-amber-400 hover:bg-amber-500 text-black font-bold py-2 px-4 rounded"
            >
              OK
            </button>
          </div>
        </div>
      )}

      {isCorrectAnimating && (
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1.1, opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60 z-50"
        >
          <div className="text-white text-4xl font-bold animate-pulse">
            真相解明
          </div>
        </motion.div>
      )}
    </main>
  );
}
