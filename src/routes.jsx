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
import ReactContextAPI1 from './learn/4-react-context-api'
import ReactContextAPI2 from './learn/4-2-seperation-react-context'
import PropsDrillingIssue from './learn/3-prop-drilling-issue';
import RefExampleMemoValues from './learn/5-ref-1-memo-values';
import RefExampleReferencingDOM from './learn/6-ref-2-referencing-dom';
import FramerMotion_Animation from './learn/8-framer-motion-declaration-ani';
import GSAP_Animation from './learn/7-ref-3-gsap-animation';
import GSAP_Context from './learn/7-2-ref-gsap-context';
import ProtectRoute from './components/ProtectRoute';
import ComponentPropTyeps from './learn/9-component-prop-types';
import LocalStorage from './learn/10-local-storage';
import ProductNew from './pages/Router/ProductNew';

// 구버전처럼 사용할 사용자를 위한 최신 방법
// 배열 → JSX 
const router = createBrowserRouter(
  // 유틸리티 함수
  createRoutesFromElements(
    <Route path="/" element={<RootLayout displaySideMenu={true} />}>
      <Route index element={<Home />} />
      {/* <Route path="learn/01" element={<PassingProps />} />
      <Route path="learn/02" element={<LiftingStateUp />} /> */}
      <Route path="learn">
        <Route path="01" element={<PassingProps />} />
        <Route path="02" element={<LiftingStateUp />} />
        <Route path="03" element={<PropsDrillingIssue />} />
        <Route path="04/01" element={<ReactContextAPI1 />} />
        <Route path="04/02" element={<ReactContextAPI2 />} />
        <Route path="05" element={<RefExampleMemoValues />} />
        <Route path="06" element={<RefExampleReferencingDOM />} />
        <Route path="07/01" element={<GSAP_Animation />} />
        <Route path="07/02" element={<GSAP_Context />} />
        <Route path="08" element={<FramerMotion_Animation />} />
        <Route path="09" element={<ComponentPropTyeps />} />
        <Route path="10" element={<LocalStorage />} />
      </Route>
      <Route path="signup" element={<SignUp />} />
      <Route path="signin" element={<SignIn />} />
      <Route path="products" element={<Products />} />
      <Route path="product/new" element={
        <ProtectRoute>
          <ProductNew />
        </ProtectRoute>
      } />
      <Route path="product/edit/:productId" element={
        <ProtectRoute>
          <ProductEdit />
        </ProtectRoute>
      } />
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