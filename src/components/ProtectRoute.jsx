import { useAuth } from "@/contexts/Auth";
import { element } from 'prop-types';
import { useEffect } from "react";
import toast from "react-hot-toast";
import { useLocation } from "react-router-dom";
import { Navigate } from "react-router-dom";

//인증 여부를 모른 채 보호된 루트로 사용자가 URL을 직접 입력 접근 시도
//인증 여부 확인
//1. 인증 사용자 -> children
//2. 비인증 사용자 -> 로그인 페이지 이동
//사용자 로그인 시도
//가입된 사용자의 경우 로그인 성공(인증)
//사용자의 기대 사항 - 원래 접속하려던 주소로 이동하는 것
//사용자가 본래 접속하려던 주소로 페이지를 전환

//globalThis.location.href

export default function ProtectRoute({children}) {
  const { pathname, search, hash } = useLocation();
  const {isAuth} = useAuth();

  const wishLocationPath = `${pathname}${search}${hash}`;

  useEffect(() => {
    if(!isAuth) {
      //only development mode
      (import.meta.env.MODE === 'development') && toast.dismiss();

      toast('로그인 된 사용자만 이용 가능합니다.', {
        position: 'top-right',
        icon: '🚨',
        ariaProps: {
          role: 'alert',
          'aria-live': 'polite'
        }
      });
    }

  }, [isAuth]);

  if(!isAuth) {
    return <Navigate to="/signin" state={{wishLocationPath}} />;
  }

  return (
    children
  )
}

ProtectRoute.propTypes = {
  children: element //React.ReactElement(JSX)
}