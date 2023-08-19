import HeaderBar from './HeaderBar';
import FooterBar from './FooterBar';
import { Outlet } from 'react-router-dom';

function RootLayout(props) {
  return ( 
    <>
        <HeaderBar />
        <main className='p-5'>
          <Outlet />
        </main>
        <FooterBar />
    </>
    );
}

export default RootLayout;