import { Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import RootLayout from './layout/RootLayout';
import Home from './pages/Router/Home';
import Products from './pages/Router/Products';
import Contact from './pages/Router/Contact';
import ProductEdit from './pages/Router/ProductEdit';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';

// 구버전처럼 사용할 사용자를 위한 최신 방법
// 배열 → JSX 
const router = createBrowserRouter(
  // 유틸리티 함수
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
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