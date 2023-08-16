import { useState } from "react";

const initialRepository = {
  id: 'repo-101',
  title: 'yamoo9/likelion-FEQA',
  link: 'https://github.com/yamoo9/likelion-FEQA',
  profile: {
    url: 'https://avatars.githubusercontent.com/u/1850554?s=16&v=4',
    label: 'yamoo9'
  }
}

function LearnStateAndEffects() {

  //숫자 값 상태 관리
  //마우스의 x 좌표
  // const [mouseX, setMouseX] = useState(0)
  //마우스의 y 좌표
  // const [mouseY, setMouseY] = useState(0)

  //개별 상태 관리 => 그룹(묶음) 상태 관리
  //객체 상태 관리
  const [mousePosition, setMousePosition] = useState({ x : 0, y : 0 });

  const handlePrintMousePosition = ({clientX: x, clientY: y}) => {
    // setMouseX(e.clientX);
    // setMouseY(e.clientY);
    setMousePosition({x,y})
  };

  //배열 상태 관리
  const [repository, setRepository] = useState(initialRepository);

  const handleResetRepository = (e) => {
    setRepository(initialRepository);
  }

  return (
    <div className="m-10 flex flex-col gap-2 items-start" lang="en"
      onMouseMove={handlePrintMousePosition}>
      <h2 className="text-indigo-600 text-2xl uppercase">
        상태 및 이펙트 학습하기
      </h2>

      <output>
        마우스 X 좌표 : {mousePosition.x} / 마우스 Y 좌표 : {mousePosition.y}
      </output>

      <h2 className="text-2xl font-semibold mt-10">
        저장소 정보 수정
      </h2>

      <form className="w-1/2" onSubmit={(e) => {
        e.preventDefault();
        console.log(repository)
      }}>
        <div className="flex items-center gap-2 w-full">
          <label htmlFor="repoTitle" className="font-medium">타이틀(title)</label>
          <input type="text" name="repoTitle" id="repoTitle"
            className="flex-1 p-1 border-b-2 border-slate-400 bg-transparent placeholder:text-slate-400"
            placeholder="yamoo9/repository"
            value={repository.title}
            onChange={(e) => {
              setRepository({
                ...repository,
                title: e.target.value
              })
            }} />
        </div>
        <div className="flex items-center gap-2 w-full">
          <label htmlFor="repoLink" className="font-medium">링크(href)</label>
          <input type="text" name="repoLink" id="repoLink"
            className="flex-1 p-1 border-b-2 border-slate-400 bg-transparent placeholder:text-slate-400"
            placeholder="http://my-web-service.dev"
            value={repository.link}
            onChange={(e) => {
              setRepository({
                ...repository,
                link: e.target.value
              })
            }} />
        </div>
        <div className="flex items-center gap-2 w-full">
          <label htmlFor="repoProfileLabel" className="font-medium">프로필 레이블(profile.label)</label>
          <input type="text" name="repoProfileLabel" id="repoProfileLabel"
            className="flex-1 p-1 border-b-2 border-slate-400 bg-transparent placeholder:text-slate-400"
            placeholder="yamoo9"
            value={repository.profile.label}
            onChange={(e) => {
              setRepository({
                ...repository,
                profile: {
                  ...repository.profile,
                  label: e.target.value
                }
              })
            }} />
        </div>
        <div role="group" className="flex gap-1 mt-5">
          <button type="submit" className="py-1.5 px-2.5 bg-sky-500">저장</button>
          <button type="reset" className="py-1.5 px-2.5 bg-rose-500"
          onClick={handleResetRepository}
            >취소</button>
        </div>
      </form>
    </div>
  )
}

export default LearnStateAndEffects;