import { useId } from "react";
import { useState } from "react";

// const getOne = () => 1;

function LearnStateAndEffects() {
  const [count, setCount] = useState(100);
  const [step, setStep] = useState(12)

  // 관리가 까다로운 ID 속성 값을 자동 생성하는 훅
  const stepperId = useId();

  return (
    <div className="m-10 flex flex-col gap-2 items-start" lang="en">
      <h2 className="text-indigo-600 text-2xl uppercase">
        Learn State And Effects {count}
      </h2>
      <div className='flex flex-col gap-2 items-end'>
        <div className='flex gap-2 items-center'>
          <label htmlFor={stepperId} className="text-lable">step</label>
          <input 
            type="number" 
            id={stepperId} defaultValue={step} onChange={(e) => {
              const nextStep = +(e.target.value);
              setStep(nextStep);
            }} 
            className="w-[60px] py-1 px-2 border-slate-300 border rounded-xl"
          />
        </div>
        <button
          type="button"
          onClick={() => setCount(count + step)}
          className="py-0.5 px-2.5 border rounded-md border-slate-600">+{step}
        </button>
      </div>
    </div>
  )
}

export default LearnStateAndEffects;