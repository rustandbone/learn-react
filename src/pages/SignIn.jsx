import pb from "@/api/pocketbase";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

export default function SignIn() {
  const navigate = useNavigate();
  
  const [formState, setFormState] = useState({
    email:'',
    password:'',
  })

  const handleSignIn = async (e) => {
    e.preventDefault();
    //PocketBase SDK 인증 요청
    const { email, password } = formState;
    console.log(email, password)

    const authData = await pb.collection('users').authWithPassword(email, password)
    console.log(authData);

    navigate('/');
  }

  const handleInput = (e) => {
    const {name, value} = e.target;
    setFormState({
      ...formState,
      [name]:value
    })
  }

  return (
    <div>
      <h2>로그인 form</h2>
        <form onSubmit={handleSignIn}>
          <div>
            <label htmlFor="email">이메일 또는 계정 이름</label>
            <input type="text" name="email" id="email" defaultValue={formState.email} onChange={handleInput}
              className="border border-slate-300 mt-2" />
          </div>
          <div>
            <label htmlFor="password">비밀번호</label>
            <input type="password" name="password" id="password" defaultValue={formState.password} onChange={handleInput}
              className="border border-slate-300 mt-2"  />
          </div>
          <button type="submit"
            // disabled={true} className="disabled:cursor-not-allowed"
            >로그인</button>
          <button type="reset">취소</button>
        </form>

        <Link to="/signup">회원가입</Link>
    </div>
  )
}