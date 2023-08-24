import { useState } from 'react';

function FooterBar() {
  const [currentYear] = useState(() => new Date().getFullYear());

  return (
    <footer className="p-5 grid place-content-center bg-slate-200">
      <small className='text-base text-slate-700'>
        Copyright {currentYear} &copy; 모든 저작권은 (EUID)에 있습니다.</small>
    </footer>
  )
}

export default FooterBar;