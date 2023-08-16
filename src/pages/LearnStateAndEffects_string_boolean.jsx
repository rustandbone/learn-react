import { useState } from "react";

function LearnStateAndEffects() {
  //성, 이름
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const fullName = lastName + firstName;
  const fullNameLength = lastName.length + firstName.length;
  const showYourName = lastName.length > 0 && firstName.length > 0;

  return (
    <div className="m-10 flex flex-col gap-2 items-start" lang="en">
      <h2 className="text-indigo-600 text-2xl uppercase">
        Learn State And Effects
      </h2>
      <h3>너의 이름은?</h3>
      <div className='flex gap-1'>
        <input
          type="text"
          name="lastName"
          aria-label="성"
          placeholder="김"
          value={lastName}
          onChange={(e) => {
            setLastName(e.target.value);
          }}
          className='w-7 border-2 border-indigo-400 px-1 rounded-sm text-center'
        />
        <input
          type="text"
          name="firstName"
          aria-label="이름"
          placeholder="덕구"
          value={firstName}
          onChange={(e) => {
            setFirstName(e.target.value);
          }}
          className='w-12 border-2 border-indigo-400 px-1 rounded-sm text-center'
        />
        <span className='text-base text-slate-600'>({fullNameLength})</span>
      </div>

      <hr className='w-full my-2 border-1 border-dashed border-indigo-300' />

      {
        showYourName &&
        <>
          <img src="https://bit.ly/45blNdl" alt="" className='h-40' />
          <p>아! 당신의 이름은 <b className='underline underline-offset-4 text-indigo-500'>{fullName}</b>이군요!</p>
        </>
      }
    </div>
  )
}

export default LearnStateAndEffects;