//에셋 이미지 호출
import reactImagePath from '@/assets/react.svg'
import viteImagePath from '@/assets/vite.svg'

// 데이터 가져오기
/* 비동기 함수
RESTful API(CRUD)

client -> server(요청, Request)
clien <- server(응답, Response)

통신 상태
-isPending
-isLoading
-isSuccess
-isError */

const status = 'isSuccess'

function ConditionalRendering({hidden, imageType}) {
  switch(status) {
    case 'isPending' : return <p>대기 중입니다.</p>
    case 'isLoading' : return <p>로딩 중입니다.</p>
    case 'isError' : return <p>오류 발생</p>
    default: 
  }

  // 2-1. 조건 문 - 함수 내부 사용
  let imageComponent;
  if (imageType === 'vite') {
    imageComponent = <img src={viteImagePath} alt="비트" />;
  } else {
    imageComponent = <img src={reactImagePath} alt="리액트" />;
  }

  // 2-2-1. 3항 연산식
  const imageComponent2 = imageType === 'vite' ? (
    <img src={viteImagePath} alt="비트" />
  ) : (
    <img src={reactImagePath} alt="리액트" />
  );

  const isReactImage = imageType === 'react';
  const imageLabel = isReactImage ? 'React' : 'Vite';

  const isShowImage = false;
  const isntShowImageLabel = false;

  return (
    <div hidden={hidden}>
      <dt>조건부 렌더링(conditional rendering)</dt>
      <dd>
        <p>이미지 타입(image type)에 따라 렌더링 여부를 결정합니다.</p>
        <div className="conditionalRendering">
          {/* imageType 값이 'vite'인 경우 Vite 이미지를, 'react'인 경우 React 이미지를 화면에 표시합니다. */}
          
          {/* src/assets 동적 자원 호출 */}
          <img src={reactImagePath} alt="리액트" />
          <img src={viteImagePath} alt="비트" />
          
          {/* public 정적 자원 호출 */}
          <img src="/react.avif" alt="리액트" />
          <img src="/vite.svg" alt="비트" />

          {/* 조건문으로 렌더링 */}
          <strong>if 조건문으로 조건 처리</strong>
          { imageComponent }
          
          {/* 조건식으로 렌더링 - 함수 실행, 3항 연산식, 논리곱/합 연산자, null 병합 연산자, 옵셔널 체이닝*/}
          <strong>3항 연산식으로 조건 처리</strong>
          {imageType.includes('vite') ? (
          <img src={viteImagePath} alt="비트" />
          ) : (
            <img src={reactImagePath} alt="리액트" />
          )}

          <img src={
            isReactImage ? "/react.avif" : '/vite.svg'
          } alt={isReactImage ? "리액트" : '비트'} 
          />
          {/* imageType이 'vite'인 경우 'Vite', 'react'인 경우 'React' 텍스트를 화면에 표시합니다. */}
          {isReactImage ? 'React' : 'Vite'}

          {
            isShowImage && (
              <img src={isReactImage ? '/react.avif' : '/vite.svg'} />
            )
          }

          {/* {isReactImage? 'React' : 'Vite'} */}
          {isntShowImageLabel || imageLabel}
        </div>
      </dd>
      <dd style={{ marginTop: 12 }}>
        <p>
          spinner 또는 vite 이미지가 랜덤으로 화면에 렌더링 되도록 합니다.
        </p>
        <div className="conditionalRendering">
          {
            renderRandomImageOrSpinner()
          }
        </div>
      </dd>
    </div>
  )
}

function renderRandomImageOrSpinner() {
  return Math.random() >= 0.5 ? (
    <img className='spineer' src='/spinner.svg' alt='로딩 중' />
    ) : (
    <img src='/vite.svg' alt='Vite' style={{ height: 42 }} />
  )
}

export default ConditionalRendering;