import Switcher from '@/components/Switcher/Switcher';
import { useState } from 'react';

function Demo() {
  //상태 관리는 페이지 컴포넌트에서 진행
  //React.useState() 훅으로 선언된 상태로 제어
  //on / off 상태 변수(관리할 데이터 타입은 Boolean)

  //다크 모드 상태 관리
  const [isDrkMode, setIsDarkMode] = useState(false);
  const handleToggleDarkMode = () => {
    setIsDarkMode(!isDrkMode);
  };

  //리듀스 모션 상태 관리
  const [isReducedMotion, setIsReducedMotion] = useState(true);
  const handleToggleRuducedMotion = () => {
    setIsReducedMotion((prevState) => {
      const nextState = !prevState;
      return nextState;
    })
  };

  //아 유 레디 상태 관리
  const [isReady, setIsReady] = useState(false);


  //리액트가 요구하는 방법대로 상태를 업데이트(변경)하면?
  //렌더링 트리거 => 컴포넌트 렌더링 => DOM 커밋 순으로 진행

  const handleToggleReady = () => {
    setIsReady(!isReady)
  }

  return (
    <div
      style={{
        padding: 40,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-end',
        gap: 8,
      }}
    >
      {/* Atomic Component */}
      <Switcher
        on={isDrkMode}
        label="다크 모드"
        onClick={handleToggleDarkMode}
      />
      <Switcher
        on={isReducedMotion}
        onText="on"
        offText="off"
        label="리듀스 모션"
        onClick={handleToggleRuducedMotion}
      />
      <Switcher
        on={isReady}
        label="a u reday"
        onClick={handleToggleReady}
      />
    </div>
  );
}

export default Demo;