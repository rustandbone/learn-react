import HeaderBar from './HeaderBar';
import FooterBar from './FooterBar';

function RootLayout(props) {
  console.log(props)
  return (
    <div>
      <HeaderBar />
        {/* eslint-disable-next-line react/prop-types */}
        <main>{props.children}</main>
      <FooterBar />
    </div>
  );
}

export default RootLayout;