import { Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import RootLayout from './layout/RootLayout';
import Home from './pages/Router/Home';
import Products from './pages/Router/Products';
import Contact from './pages/Router/Contact';
import ProductEdit from './pages/Router/ProductEdit';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import PassingProps from './learn/1-passing-props';
import LiftingStateUp from './learn/2-lifting-state-up';
import ReactContextAPI from './learn/4-2-seperation-react-context'
import PropsDrillingIssue from './learn/3-prop-drilling-issue';

// 구버전처럼 사용할 사용자를 위한 최신 방법
// 배열 → JSX 
const router = createBrowserRouter(
  // 유틸리티 함수
  createRoutesFromElements(
    <Route path="/" element={<RootLayout displaySideMenu />}>
      <Route index element={<Home />} />
      {/* <Route path="learn/01" element={<PassingProps />} />
      <Route path="learn/02" element={<LiftingStateUp />} /> */}
      <Route path="learn">
        <Route path="01" element={<PassingProps />} />
        <Route path="02" element={<LiftingStateUp />} />
        <Route path="03" element={<PropsDrillingIssue />} />
        <Route path="04" element={<ReactContextAPI />} />
      </Route>
      <Route path="signup" element={<SignUp />} />
      <Route path="signin" element={<SignIn />} />
      <Route path="products" element={<Products />} />
      <Route path="product/edit/:productId" element={<ProductEdit />} />
      <Route path="contact" element={<Contact />} />
    </Route>
  )
)

export default router;

// 최신 방법(기본 방법)
// 배열 → 객체 
// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <RootLayout />,
//     // 중첩된 라우트
//     children: [
//       // '/'
//       { index: true, element: <Home /> },
//       // '/products'
//       { path: 'products', element: <Products /> },
//       // '/contact'
//       { path: 'contact', element: <Contact /> },
//     ],
//   },
// ]);