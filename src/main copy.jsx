//React 모듈 불러오기
import * as React from 'react';
console.log(`React Version : ${React.version}`)
//ReactDom 모듈 불러오기
import * as ReactDOM from 'react-dom';
console.log(`ReactDOM Version : ${ReactDOM.version}`)

//React 요소 작성(React API)
const visualBoldElement = React.createElement('b', null, 'awesome')
const headlineElement = React.createElement(
  'h1', 
  {
    title: 'React is Awesome!',
  },
  'React는',
  visualBoldElement,
  '해~'
);

const domAbbrElement = React.createElement('abbr', {title: 'Document Object Model'}, 'DOM');
const uiAbbrElement = React.createElement('abbr', {title: 'User Interface'}, 'UI');

const descriptionForReactElement = React.createElement('p', {}, 
  'React는 가상 ',
  domAbbrElement,
  '을 사용하는 ',
  uiAbbrElement,
  '라이브러리입니다.'
);

const appElement = React.createElement(
  /* type */'div', 
  /* props{} */ {className : 'App', id : 'reactAppElement', 'data-type' : 'React.ReactElement'},
  /* ...children -> [child, child ...] */
  React.createElement(
    'h1',
    {
      title: 'React is awesome!'
    },
  /* ...children -> [child, child, child, ...] */
  headlineElement,
  descriptionForReactElement
  )
  );
console.log(appElement);

//React 요소 작성(with JSX)
const appElementJSX = (
  <div 
    className='App'
    id="reactAppElement"
    data-type="React.ReactElement"
  >
    <h1 title='React is awesome'>Awesome React</h1>
    <p>React는 가상 DOM을 사용하는 <abbr title="Document Object Model">DOM</abbr>을 사용하는 <abbr title="User Interface">UI</abbr> 라이브러리입니다.</p>
  </div>
);
console.log(appElementJSX);

/* React 요소를 재사용하기 위한 함수 작성 */

{
  // const domAbbrElement = React.createElement('abbr', {title: 'Document Object Model'}, 'DOM');
  //const uiAbbrElement = React.createElement('abbr', {title: 'User Interface'}, 'UI');

  //[] React 요소를 반환하는 함수 만들기
  //[] 인수를 전달해 재사용 가능하도록 구현
  // eslint-disable-next-line no-inner-declarations
  function createAbbrElement(props, ...children) {
    return React.createElement('abbr', props, children);
  }
  
  const domAbbrElement = createAbbrElement({
    title: 'Document Object Model'
  }, 'D', 'O', 'M')

  const uiAbbrElement = createAbbrElement({
    title: 'User Interface'
  }, 'UI')
  
  console.log(domAbbrElement, uiAbbrElement)
}

/* React 요소 vs 컴포넌트 */

//createAbbrElement 함수 만들기


//Abbr 함수 컴포넌트 만들기(React용)
function Abbr(props) {
  // eslint-disable-next-line react/prop-types
  return <abbr title={props.title}>{props.children}</abbr>
}

// console.log(React.createElement(Abbr)) //<Abbr />

//App 함수 컴포넌트 만들기
const App = () => {
  return (
    <div>
      <Abbr title="Document Object Model">
        DOM
      </Abbr>
      <Abbr title="User Interface">
        UI
      </Abbr>
    </div>
  )
}

//JSX(대문자로 시작하는 함수)
console.log("App : ", <App />)

/* 
- 리액트 규칙
1. JSX만 사용
2. 컴포넌트 이름은 첫글자가 항상 대문자로
=> 그래야 JSX 구문에서 사용 가능하니까 */

//ReactDOM.createRoot()를 사용해서 DOM 요소를 ReactDOMRoot 객체로 생성
//ReactDOMRoot.render() 메서드로 App을 화면에 표시(렌더링)