'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { ChevronDown, ChevronRight, User, Zap, Laptop, Flame, Route, Croissant, UtensilsCrossed, ChefHat, Brain, AlertCircle, Warehouse, DoorClosedLocked, ShieldUser, BicepsFlexed, Glasses, Pointer } from 'lucide-react';

export default function Puzzle2() {
  const [who, setWho] = useState('');
  const [where, setWhere] = useState('');
  const [how, setHow] = useState('');
  const [hintVisible, setHintVisible] = useState(false);
  const [popupMessage, setPopupMessage] = useState<string | null>(null);
  const router = useRouter();
  const [isCorrectAnimating, setIsCorrectAnimating] = useState(false);
  const [isFadingOut, setIsFadingOut] = useState(false);
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({});

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
      setTimeout(() => setIsFadingOut(true), 2000);
      setTimeout(() => router.push('/ending'), 3000);
    } else {
      setPopupMessage('本当にその推理は正しいのだろうか。もう一度考えてみよう。');
    }
  };

  const handlePopupClose = () => setPopupMessage(null);

  const toggleSection = (id: string) => {
    setExpandedSections((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gray-100 px-4 relative">
      <h2 className="text-2xl font-bold mb-6 text-center">第3問：事件の真相を明らかにせよ</h2>

      <div className="w-full max-w-md space-y-4 mb-6">
        <div>
          <label className="block mb-1 font-semibold">誰が</label>
          <input type="text" value={who} onChange={(e) => setWho(e.target.value)} placeholder="例：田中" className="w-full p-2 border border-gray-300 rounded" />
        </div>
        <div>
          <label className="block mb-1 font-semibold">なにで</label>
          <input type="text" value={where} onChange={(e) => setWhere(e.target.value)} placeholder="例：包丁" className="w-full p-2 border border-gray-300 rounded" />
        </div>
        <div>
          <label className="block mb-1 font-semibold">なぜ</label>
          <input type="text" value={how} onChange={(e) => setHow(e.target.value)} placeholder="例：復讐のため" className="w-full p-2 border border-gray-300 rounded" />
        </div>
        <button onClick={handleSubmit} className="w-full bg-amber-400 hover:bg-amber-500 text-black font-bold py-2 px-4 rounded">解答する</button>
      </div>

      <section className="w-full max-w-3xl mt-8 space-y-4">

        <div className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4 rounded">
            <p className="font-semibold">※注意事項</p>
            <p className="text-sm mt-1">
              以下の情報はUSBから復元されたものです。犯行時間には、一つの場所に一人がそれぞれ別のものと動機を持っていたようだ。
              <strong>この画面を局長に見せ、推理シートを受け取り</strong>慎重に推理してください。
            </p>
          </div>

        {[{
          id: 'suspects',
          title: '容疑者',
          items: [
            { name: '安達茜', desc: '総務局/', icon: <User className="inline mr-2 text-blue-500" size={16} /> },
            { name: '平田浩介', desc: '広報局/影の実力者', icon: <Glasses className="inline mr-2 text-red-500" size={16} /> },
            { name: '中町太郎', desc: '企画局/いつも明るく元気なお兄さん', icon: <Zap className="inline mr-2 text-orange-500" size={16} /> },
            { name: '関涼太', desc: '情報局/昼夜逆転しているとの噂', icon: <Laptop className="inline mr-2 text-purple-500" size={16} /> }
          ]
        }, {
          id: 'weapons',
          title: '凶器',
          items: [
            { name: 'フォーク', desc: '金属製で人を殺すには十分尖っている', icon: <UtensilsCrossed className="inline mr-2 text-gray-600" size={16} /> },
            { name: 'ロープ', desc: 'かなり太く簡単にはちぎれなさそうだ', icon: <Route className="inline mr-2 text-gray-600" size={16} /> },
            { name: '冷凍された矢口くんパン', desc: 'カチカチに凍ったそれはもはや凶器だろう', icon: <Croissant className="inline mr-2 text-gray-600" size={16} /> },
            { name: '水酸化ナトリウム', desc: '最近倉庫から見つかったがどこに保管されていたのだろうか', icon: <AlertCircle className="inline mr-2 text-gray-600" size={16} /> }
          ]
        }, {
          id: 'locations',
          title: '現場',
          items: [
            { name: '倉庫', desc: 'みんなの倉庫', icon: <Warehouse className="inline mr-2 text-teal-600" size={16} /> },
            { name: '制作部屋', desc: '誰でも開けられるわけではない', icon: <DoorClosedLocked className="inline mr-2 text-teal-600" size={16} /> },
            { name: 'カフェテリア', desc: 'とても広くて見通しがいい', icon: <ChefHat className="inline mr-2 text-teal-600" size={16} /> },
            { name: '連絡部屋', desc: 'あまり人が出入りしない', icon: <Brain className="inline mr-2 text-teal-600" size={16} /> }
          ]
        }, {
          id: 'motives',
          title: '動機',
          items: [
            { name: '口封じ', desc: '犯人にとって不都合な秘密を握っていた。', icon: <ShieldUser className="inline mr-2 text-pink-600" size={16} /> },
            { name: '野心', desc: '副代表の座を奪うには殺すしかない', icon: <Flame className="inline mr-2 text-pink-600" size={16} /> },
            { name: '力の誇示', desc: '力こそpower, power is 力', icon: <BicepsFlexed className="inline mr-2 text-pink-600" size={16} /> },
            { name: '興味本位', desc: '実施にやってみないと分からない', icon: <Pointer className="inline mr-2 text-pink-600" size={16} /> }
          ]
        }].map(({ id, title, items }) => (
          <div key={id} className="border rounded">
            <button onClick={() => toggleSection(id)} className="w-full flex items-center justify-between px-4 py-2 font-semibold bg-gray-200 hover:bg-gray-300">
              <span>{title}</span>
              {expandedSections[id] ? <ChevronDown size={20} /> : <ChevronRight size={20} />}
            </button>
            {expandedSections[id] && (
              <ul className="p-4 space-y-2 bg-white">
                {items.map((item, index) => (
                  <li key={index}>
                    <p className="font-bold flex items-center">{item.icon}{item.name}</p>
                    <p className="text-sm text-gray-700">{item.desc}</p>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </section>

      <section className="w-full max-w-2xl mt-10 p-4 bg-white rounded shadow">
        <h3 className="text-xl font-semibold mb-3">手がかりと証拠</h3>
        <ul className="list-disc pl-5 space-y-2 text-gray-800">
          <li>安達茜はフォークを持っていなかった</li>
          <li>賢い平田が力の誇示や興味本位で人を殺すとは思えない</li>
          <li>水酸化ナトリウムは制作部屋に保管されていたようだ</li>
          <li>あなたはカフェテリアでフォークを見かけた</li>
          <li>矢口くんパンを凍らせていた人は野心を持っていたようだ</li>
          <li>中町太郎は最近筋トレに勤しんでいた。成長した筋肉を見せつけたいようだ</li>
          <li>ロープを持っていた人物は何かがバレて虫のいどころが悪そうにしていた</li>
          <li>関涼太は連絡部屋で用事を済ませていたようだ</li>
          <li><strong>死体は倉庫で発見された</strong></li>
        </ul>
      </section>

      {popupMessage && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded shadow-lg max-w-sm text-center space-y-4">
            <p className="text-lg">{popupMessage}</p>
            <button onClick={handlePopupClose} className="bg-amber-400 hover:bg-amber-500 text-black font-bold py-2 px-4 rounded">OK</button>
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
