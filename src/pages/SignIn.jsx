import pb from "@/api/pocketbase";
import debounce from "@/utils/debounce";
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

  const handleInput = debounce((e) => {
    const {name, value} = e.target;
    setFormState({
      ...formState,
      [name]:value
    })
  }, 500)

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
        {
          true && 
        <button type="button" onClick={async() => {
          if(confirm('정말 탈퇴하실 건가요?')) {
            if(pb.authStore.model) {
              try {
                await pb.collection('users').delete(pb.authStore.model.id)
                console.log('탈퇴 성공')
              } catch(error) {
                console.log(error);
              }
            }
          }
          console.log('탈퇴 성공')
        }}>탈퇴</button>
        }
    </div>
  )
}