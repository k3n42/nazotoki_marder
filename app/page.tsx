'use client';

import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Fragment } from 'react';

const text = `昨晩、理工展準備中に
副代表が何者かに
【殺】
された。

警察の捜査は難航し
犯人も動機も不明。

しかし、現場に遺された
一連の「謎のメモ」が
あなたたちに配られる。

それはまるで、あなたたちを
嘲笑うかのような謎解き。

この謎を解いたものだけが
真実への手がかりを掴む。

参加者（あなたたち）は、この謎に挑み、
事件の真相を突き止めなければならない。`;

export default function Home() {
  const router = useRouter();

  return (
    <main className="min-h-screen bg-white px-6 pt-24 pb-16 flex flex-col items-center">
      <header className="fixed top-0 left-0 w-full bg-amber-400 py-4 text-center shadow-md z-50">
        <h1 className="text-2xl font-bold font-serif tracking-wide">Rikoten Murder Mystery</h1>
      </header>

      <section className="max-w-md text-lg leading-loose text-center font-medium mt-8 whitespace-pre-wrap">
        <AnimatedText text={text} />
      </section>

      <button
        onClick={() => router.push('/puzzle')}
        className="mt-12 bg-amber-400 hover:bg-amber-500 text-black font-bold py-2 px-6 rounded"
      >
        謎解きを始める
      </button>
    </main>
  );
}

function AnimatedText({ text }: { text: string }) {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: 0.03,
          },
        },
      }}
    >
      {text.split('').map((char, i) => {
        if (char === '【' || char === '】') return <Fragment key={i} />;

        if (char === '殺') {
          return (
            <motion.span
              key={i}
              className="relative inline-block w-[200px] h-[200px] mx-1 align-middle"
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1 },
              }}
            >
              <Image
              src="/blood.png"
              alt="血痕"
              fill
              className="absolute inset-0 object-contain opacity-70 pointer-events-none z-0"
            />
            <span className="relative z-10 flex justify-center items-center w-full h-full text-5xl font-bold">
              殺
            </span>
          </motion.span>
          );
        }

        return (
          <motion.span
            key={i}
            className="inline-block"
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1 },
            }}
          >
            {char === '\n' ? <br /> : char}
          </motion.span>
        );
      })}
    </motion.div>
  );
}
