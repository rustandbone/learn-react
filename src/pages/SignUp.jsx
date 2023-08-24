import pb from "@/api/pocketbase";
import debounce from "@/utils/debounce";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SignUp() {
  const navigate = useNavigate();
  
  const [formState, setFormState] = useState({
    name:'',
    username: '',
    email:'',
    password:'',
    passwordConfirm:''
  })

  const handleRegister = async (e) => {
    e.preventDefault();
    //PocketBase SDK 인증 요청
    const {password, passwordConfirm} = formState;
    if(password !== passwordConfirm) {
      alert('비밀번호가 일치하지 않습니다. 다시 확인해보세요.')
    }
    
    await pb.collection('users').create({
      ...formState,
      emailVisibility: true,
    })

    navigate('/');
  }


  const handleInput = (e) => {
    const {name, value} = e.target;
    setFormState({
      ...formState,
      [name]:value
    })
  }

  const handleDebounceInput = debounce(handleInput, 500);

  return (
    <div>
      <h2>회원가입</h2>
        <form onSubmit={handleRegister}>
          <div>
            <label htmlFor="name">이름</label>
            <input type="text" name="name" id="name" defaultValue={formState.name} onChange={handleDebounceInput}
              className="border border-slate-300 mt-2" />
          </div>
          <div>
            <label htmlFor="username">계정 이름</label>
            <input type="text" name="username" id="username" defaultValue={formState.username} onChange={handleDebounceInput}
              className="border border-slate-300 mt-2" />
          </div>
          <div>
            <label htmlFor="email">이메일</label>
            <input type="text" name="email" id="email" defaultValue={formState.email} onChange={handleDebounceInput}
              className="border border-slate-300 mt-2"  />
          </div>
          <div>
            <label htmlFor="password">비밀번호</label>
            <input type="password" name="password" id="password" defaultValue={formState.password} onChange={handleDebounceInput}
              className="border border-slate-300 mt-2"  />
          </div>
          <div>
            <label htmlFor="passwordConfirm">비밀번호 확인</label>
            <input type="password" name="passwordConfirm" id="passwordConfirm" defaultValue={formState.passwordConfirm} onChange={handleDebounceInput}
              className="border border-slate-300 mt-2"  />
          </div>
          <button type="submit"
            // disabled={true} className="disabled:cursor-not-allowed"
            >가입</button>
          <button type="reset">취소</button>
        </form>
    </div>
  )
}