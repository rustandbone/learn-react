import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
// import './styles/global.css'
import './styles/tailwind.css'

/* 
JSX가 하는 일은 React 요소 생성 -> 마크업 생성
JSX -> 컴파일러(변환기) -> React 요소 => ReactDom -> 실제 DOM 요소 생성 -> 구조 작성 
*/

//ReactDOMRoot 객체를 생성하는 함수 => render() 메서드를 사용해 React 요소를 실제 DOM 요소에 렌더링
createRoot(document.getElementById('root')).render(
  //App 컴포넌트를 렌더링할 수 있도록 JSX 구문을 추가
  <StrictMode>
    <App />
  </StrictMode>
)