import { gsap } from 'gsap'
import { useLayoutEffect, useRef } from "react"

export default function RefExampleReferencingDOM() {
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

function Circle() {
  const componentRef = useRef(null);
  const imageRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      //CSS 선택자 사용하기(GSAP 사용자 방식)
      // gsap.to('img', { })

      //2.Refs 사용하기(React 방식)
      gsap.to(imageRef.current, { })
    }, componentRef);

    return () => {
      ctx.revert();
    }
  }, [])

  return (
    <figure role="none" 
      ref={componentRef}
      id="circle" className="w-16 h-16 rounded-full bg-yellow-400">
      <img ref={imageRef} src='/vite.svg' alt="Vite" />
    </figure>
  )
}