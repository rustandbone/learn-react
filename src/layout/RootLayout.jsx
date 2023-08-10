import HeaderBar from './HeaderBar';
import FooterBar from './FooterBar';

function RootLayout(props) {
  return ( 
    <>
      {/* <React.Fragment> */}
        <HeaderBar />
        {/* eslint-disable-next-line react/prop-types */}
        <main>{props.children}</main>
        <FooterBar />
    </>
    );
  // return [
  //     <HeaderBar key="header-bar" />,
  //     <main key="main">{props.children}</main>,
  //     <FooterBar key="footer-bar" />
  //   ];
}

export default RootLayout;