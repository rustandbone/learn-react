//데이터 가져오기(PocketBase 서버 : 백엔드 데이터베이스 솔루션)
//1. 컴포넌트에서 관리할 상태 정의
//2. 서버에 데이터 가져오기 요청/응답
//3. 응답된 상황(status)에 따라 뷰(view) 전환 : 조건부 렌더링
// 3-1. 로딩 상황 화면
// 3-2. 오류 상황 화면
// 3-3. 성공 상황 화면: 데이터 기반으로 리스트 렌더링

import Spinner from "@/components/Spinner";
import { useEffect, useState } from "react";

function LearnStateAndEffects() {
  const [data, setData] = useState(null);
  const [status, setStatus] = useState('pending');
  const [error, setError] = useState(null);

  // 이펙트 필요
  // React 외적인 일을 처리
  useEffect(() => {
    const controller = new AbortController();
    const {signal} = controller;
    //fetch + promise | async function + fetch
    fetch('http://127.0.0.1:3000/api/collections/todos/records', {signal})
      .then(response => response.json())
      .then(responseData => {
        setStatus('success');
        setData(responseData)
      })
      .catch(error => {
        setStatus('error')
        setError(error)
      })
      
      return () => {
        controller.abort();
      }
  }, [])

  // 함수 몸체 : 문 또는 식
  // 상황별 조건 처리(화면 표시 모드)
  // 로딩 중
  if(status === 'loading') {
    return <Spinner size={160} title="데이터를 가져오는 중입니다." />
  }

  // 오류 발생 화면
  if(status === 'error') {
    return (
      <div role="alert">
        <h2>{error.type}</h2>
        <p>{error.message}</p>
      </div>
    )
  }

  return (
    <div className="m-10 flex flex-col gap-2 items-start" lang="en">
      <h2 className={`text-indigo-600 font-suit text-2xl uppercase`}>
        상태 및 이펙트 학습하기
      </h2>
      {/* JSX 식만 사용 가능 */}
      {
        data && (
          <ul>
            { data.items?.map((item) => (
              <li key={item.id}>
                <label htmlFor=""><input type="checkbox" checked={item.done} readOnly />{item.doit}</label>
              </li>
            ))}
          </ul>
        )
      }
    </div>
  )
}

export default LearnStateAndEffects;