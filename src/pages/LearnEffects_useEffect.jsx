// 상태는 스냅샷 같이 작동한다.
// 상태란? 시간의 흐름에 따라 변하는 데이터를 말함
// 스냅샷은 흐르는 상태의 특정 시저에서의 데이터 조각을 말함
// 스냅샷은 현재 실행된 함수 몸체 안에서 변경이 불가능함
// 렌더 트리거(요청)를 수행하는 상태 업데이트 함수에 전달한 nextState는 다음 렌더링 시점에 반영됨
// 그렇다면 현재 시점에서 변경될 상태에 접근할 수 없나?
// 사이드 이펙트로 하면 처리 가능
// 1. 이벤트 핸들러
// 2. useEffect 훅

import { useEffect, useState } from "react";

function LearnStateAndEffects() {
  const [count, setCount] = useState(0);

  // 이펙트 사용(동기화)
  // 상태의 변경이 발생하면 이펙트에 설정된 콜백 함수 실행
  //즉 다음 상태에 접근 가능

  useEffect(
    // 1단계 : 이펙트 콜백 함수
    () => {
    // DOM 커밋 이후에 시행
    // 이펙트 콜백 함수
    console.log('count in effect ', count)
  },
  // 2단계 : 이펙트 콜백 함수를 실행시키는 조건(배열 포함된 항목)
  // 종속성 배열이 없는 경우, 컴포넌트 렌더링 될 때마다 이펙트 함수가 항상 실행
  // [] - 종속성 배열이 빈 경우, 컴포넌트 최초 렌더링 시 1회 실행
  // 종속성 배열에 의존하는 상태를 설정하면, 리액트는 종속된 상태의 변경을 감지(이전 -> 이후)
  // 상태가 변경되면 이펙트 콜백 함수 실행
  [count] 
  )

  const handleIncrement = () => {
    setCount(count + 10);
    console.log('count in event handler? ', count)
  }

  const [isShow, setIsShow] = useState(false);

  //current state snapshot

  useEffect(() => {
    console.log(isShow)
  }, [isShow])

  const handleToggle = () => {
    setIsShow(!isShow)
  }

   // 상태 (스냅샷)
  const [studyMessage, setStudyMessage] = useState('리액트에 대해서 알아봐요');

   // 이벤트 핸들러
  const handleChangeMessage = () => {
     // 상태 업데이트 함수 (실행되면 렌더 트리거)
    setStudyMessage('화이팅!!! 😄');
  }

   // 컴포넌트 렌더링 (함수 컴포넌트 다시 실행)
   // DOM 커밋: 상태가 다음 상태로 변경되어 렌더링 되면 리액트가 실제 DOM 변경 이력을 반영
   // 이펙트 (DOM 커밋 이후에 실행)
   // 이펙트 실행 조건(배열로 설정)
  useEffect(
     /* callback - when??? */
    () => {}, [studyMessage]
  )

  return (
    <div className="m-10 flex flex-col gap-2 items-start" lang="en">
      <h2 className={`text-indigo-600 font-suit text-2xl uppercase`}>
        상태 및 이펙트 학습하기 ({count})
      </h2>
      <button type="button" onClick={handleToggle}>{isShow ? '감춤' : '보임'}</button>
      {
        isShow && 
        <CountButton onIncrement={handleIncrement}>
          +10
        </CountButton>
        // <button type="button" onClick={handleClick}>+10</button>
      }
    </div>
  )
}

function CountButton({onIncrement}) {
  const [timer, setTimer] = useState(0);

// 3단계 : 클린업이 중요한 이유
// 컴포넌트 조건부 렌더링에 따라 마운트(DOM에 추가) | 언마운트(DOM에서 제거)
  useEffect(() => {
    // console.log('컴포넌트 마운트 될 때 1회 실행')
    //타이머
    //1초마다 내부 함수 실행(CountButton 상태 업데이트)
    //주기마다 실행되는 것을 멈출 수 있는 고유 키가 반환
    const cleanupKey = setInterval(() => {
      console.log('Interval')
      setTimer(timer => timer + 10)
    }, 1000)

    //클린업(정리)
    return function cleanup() {
      //저지른 일(주기마다 함수 실행)을 수습(실행되지 않도록 정리)
      clearInterval(cleanupKey);
    }

  }, [])

  return (
    <button type="button" onClick={onIncrement}>+10({timer})</button>
  )
}

export default LearnStateAndEffects;