import HeaderBar from './HeaderBar';
import FooterBar from './FooterBar';
import { Outlet } from 'react-router-dom';
import { Link } from 'react-router-dom';

function RootLayout({displaySideMenu = false}) {
  return ( 
    <>
        <HeaderBar />
        <main className='flex gap-4 p-5'>
          {
            displaySideMenu &&
            <nav className='bg-slate-100 py-3 px-4 min-w-[100px]'>
              <h3 className='sr-only'>학습 내비게이션 메뉴</h3>
              <ul>
                <li>
                  <Link to="/learn/01">Props 전달</Link>
                </li>
                <li>
                  <Link to="/learn/02">상태 끌어올리기</Link>
                </li>
                <li>
                  <Link to="/learn/03">속성 드릴링 이슈</Link>
                </li>
                <li>
                  <Link to="/learn/04">컨텍스트 상태 공유 Context API</Link>
                </li>
              </ul>
            </nav>
          }
          <div className='flex-1'>
            <Outlet />
          </div>
        </main>
        <FooterBar />
    </>
    );
}

export default RootLayout;