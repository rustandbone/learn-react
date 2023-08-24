import { motion } from "framer-motion";
import { useState } from "react";
import { useLayoutEffect, useRef } from "react"

export default function FramerMotion_Animation() {
  const [count, setCount] = useState(0);
  const [keys, setKeys] = useState(
    Array(3)
      .fill(null)
      .map(() => Math.random())
  );

  const handleCountUp = () => {
    setCount((c) => c + 10)
  }

  const handleResetAnimation = () => {
    setKeys(keys.map(() => Math.random()));
  };

  return (
    <>
      <h2 className="mb-8">컴포넌트 내부의 DOM 요소를 직접 참조하는 Refs</h2>
      <div className="flex gap-2 mb-4">
        <button type="button" className="py-1.5 px-2.5 border border-slate-200 roundede-md shadow-lg"
          onClick={handleCountUp}>
          {count}
        </button>
        <button type="button" className="py-1.5 px-2.5 border border-slate-200 roundede-md shadow-lg"
          onClick={handleResetAnimation}>
          <svg
            className="w-4 h-4 text-gray-800 dark:text-white"
            aria-hidden="true"
            fill="none"
            viewBox="0 0 18 20"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1}
              d="M16 1v5h-5M2 19v-5h5m10-4a8 8 0 0 1-14.947 3.97M1 10a8 8 0 0 1 14.947-3.97"
            />
          </svg>
        </button>
      </div>
      <div className="flex gap-10">
        {
          keys.map(key => (
            <Circle key={key} />
          ))
        }
      </div>
    </>
  )
}

function Circle() {
  return (
    <motion.figure 
      initial={{y: -150}}
      animate={{y: 0}}
      transition={{
        type: 'spring',
        stiffness: 400,
        damping: 10
      }}
      role="none" 
      id="circle" className="grid place-content-center w-16 h-16 rounded-full bg-yellow-400">
      <motion.img 
        //초기 상태
        initial={{scale: 0}}
        //애니메이션 상태
        animate={{rotate: 180, scale: 1}}
        //트랜지션 상태
        transition={{
          type: 'spring',
          stiffness: 260, //팽팽함
          damping: 20, //마찰
        }}
        src='/react.png' alt="Vite" className="w-10 h-10" />
    </motion.figure>
  )
}