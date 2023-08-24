// 컴포넌트 간 로직 공유
// 사용자 정의 훅(함수)를 작성

import { useEffect, useState } from 'react';

const defaultOptions = {
  method: 'GET',
};

export default function useFetchData(endpoint, options = {}) {
  // 훅의 규칙(컴포넌트 또는 다른 훅 내부에서만 사용 가능)
  // custom hook 내부에서 built-in-hook 사용 가능

  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    //중단(abort) 컨트롤러 생성
    const controller = new AbortController();

    setIsLoading(true);

    async function fetchData() {
      try {
        const response = await fetch(endpoint, {
          ...defaultOptions,
          ...options,
          signal: controller.signal,
        });
        const responseData = await response.json();
        setData(responseData);
      } catch (error) {
        // 통신 중단에 따른 오류가 아니라면 오류 설정
        if (!(error instanceof DOMException)) {
          setError(error);
        }
      } finally {
        setIsLoading(false);
      }
    }

    fetchData();

    //Strict Mode(detect impure function component)
    //mount(1) => unmount => mount(2)
    return () => {
      controller.abort();
    };
  }, [endpoint, options]);

  return { data, isLoading, error };
}
