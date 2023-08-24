import { gsap } from 'gsap'
import { useLayoutEffect, useRef } from "react"

export default function GSAP_Animation() {
  return (
    <>
      <h2 className="mb-10">컴포넌트 내부의 DOM 요소를 직접 참조하는 Refs</h2>
      <div className="flex gap-10">
        <Circle />
        <Circle />
        <Circle />
      </div>
    </>
  )
}

// React 컴포넌트는 순수해야 한다(렌더링 프로세스는 순수해야 하기 때문에)
// Web Animation, GSAP, jQuery와 같은 API는 명령형 프로그래밍
// 그러므로 컴포넌트 내부에 직접 사용할 수 없음
// 명령형 프로그래밍을 작성할 수 있는 구간은 2군데
// 1. useLayoutEffect 훅 (브라우저 페인팅 이전에 실행)
// 2. Event Handler(Listener)

// React 요소(가상)가 실제 DOM에 렌더링 된 후 요소를 찹조하려면?
// 기존의 document.getElementById, document.querySelector 사용이 권장되지 않음
// => useRef 훅을 사용해 Refs 객체 생성하여 활용하라
// const anyRef = useRef(null);

// React 컴포넌트에서 명령형 방식으로 애니메이션 하는 절차
// 1. useRef 훅을 사용해서 Refs 객체 생성
// 2. JSX 요소 ref 속성(prop)에 Refs 연결
// 3-1. useLayoutEffect 훅 안에서 Refs 현재(current) 값으로 명령형 프로그래밍
// 3-2. 사용자와 상호작용하는 이벤트 핸들러 내부에서 명령형 프로그래밍

function Circle() {
  // DOM 요소를 참조하기 위한 Refs 생성
  const circleRef = useRef(null);

  useLayoutEffect(() => {
    // 3-1. 사이드 이펙트 처리가 가능한 구간에서
    // Refs 객체의 current 속성에 할당된 DOM 요소
    // (= JSX 요소 -> 실제 DOM 마운트된 요소)
    const {current: circleElement} = circleRef;

    // const circleElement = document.getElementById('circle');
    gsap.set(circleElement, {scale: 0.5});

    const handleScale = (e) => {
      gsap.to(circleElement, { scale: 2})
    }

    circleElement.addEventListener('click', handleScale);

    return () => {
      circleElement.removeEventListener('click', handleScale);
    }
  }, [])

  //이벤트 핸들러
  const handleEnter = (() => {
    gsap.to(circleRef.current, {opacity: 0.5, scale: 4})
  })

  const handleLeave = (() => {
    gsap.to(circleRef.current, {opacity: 1, scale: 1})
  })

  return (
    <figure role="none" 
    id="circle"
    ref={circleRef}
    onPointerEnter={handleEnter}
    onPointerLeave={handleLeave}  
    className="w-16 h-16 rounded-full bg-yellow-400" />
  )
}