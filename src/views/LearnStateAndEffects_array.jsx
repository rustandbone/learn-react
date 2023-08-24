import { useState } from "react";

const fontWeightList = (Array(9).fill(1).map((n,i) => 100 * (i + 1)))

const getFontWeight = (selectedFontWeight) => {
  let fontWeight = '';

  switch(selectedFontWeight) {
    default: 
    case 400:
      fontWeight = 'font-normal';
      break;
    case 100:
      fontWeight = 'font-thin';
      break;
    case 200:
      fontWeight = 'font-extralight';
      break;
    case 300:
      fontWeight = 'font-light';
      break;
    case 500:
      fontWeight = 'font-medium';
      break;
    case 600:
      fontWeight = 'font-semibold';
      break;
    case 700:
      fontWeight = 'font-bold';
      break;
    case 800:
      fontWeight = 'font-extrabold';
      break;
    case 900:
      fontWeight = 'font-black';
  }

  return fontWeight;
}

function LearnStateAndEffects() {
  const [fontWeights] = useState(fontWeightList);
  const [selectedFontWeight, setSelectedFontWeight] = useState(fontWeightList[3]);


  const fontWeight = getFontWeight(selectedFontWeight);
  const handleChangeFontWeight = (index) => {
    setSelectedFontWeight(fontWeightList[index])
  }

  return (
    <div className="m-10 flex flex-col gap-2 items-start" lang="en">
      <h2 className={`text-indigo-600 font-suit text-2xl uppercase ${fontWeight}`}>
        상태 및 이펙트 학습하기
      </h2>
      <h3>글자 두께 설정</h3>     
      <div role="group" className="bg-stone-200 py-1 px-4 rounded-full shadow-lg shadow-indigo-300/40">
        {
          fontWeights.map((weight, index) => {
            const isActive = weight === selectedFontWeight
            return (
              <button key={weight} type="button" 
                onClick={() => handleChangeFontWeight(index)}
                className={`py-0.5 px-1.5 bg-stone-200 text-stone-600
                ${isActive ? 'bg-stone-950 text-stone-50 rounded-full' : 'font-normal' } 
                hover:bg-indigo-100 transition-colors duration-200`}>
                {weight}
              </button>
            )
          })
        }
    </div>
    </div>
  )
}

export default LearnStateAndEffects;