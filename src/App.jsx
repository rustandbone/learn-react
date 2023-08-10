// import Heading from "./components/Heading";
// import Description from './components/Description';
// import List from "./components/RenderingProcessList"
import RootLayout from './layout/RootLayout';
import About from './pages/About';
import Home from './pages/Home';

// {/* 홈페이지 : index.html */}
// {/* 소개 페이지 : about.html */}
// {/* 제품 목록 페이지 : products.html */}
// {/* 의뢰 페이지 : contact.html */}

//App 함수 컴포넌트를 작성합니다
function App() {
  //JSX 값 반환
  return (
    <div>
      <RootLayout>
        {/* 페이지의 주요 콘텐츠 */} {/* props.children */}
        <Home />
      </RootLayout>
    </div>
  )
}

export default App;

//  {/* <Heading>React</Heading> */}
//  <Heading />
//  {/* <Description>...</Description> */}
//  <Description />
//    {/* <List></List> */}
//  <List />