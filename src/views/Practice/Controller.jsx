import GoToButton from "./GoToButton";
import { getNode } from '@/utils/getNode';

function Controller() {
  //순수 함수(pure function) 영역
  //React 렌더링 과정에서 불필요한 코드가 이곳에 배치되면 안됨
  return (
    <div role="group" className="buttonGroup">
      <GoToButton 
      onClick={() => {
        //사이드 이펙트 영역
        //렌더링 과정과 상관 없이 어떤 코드든 작성 가능
        const practiceElement = getNode('.Practice')
        practiceElement.scroll({top: 900, behavior: 'smooth'})
      }} 
      /* onPointerEnter={function() {
        console.log('pointer enter')
      }} 
      onMouseEnter={function() {
        console.log('mouse enter')
      }} 
      onMouseLeave={function() {
        console.log('mouse leave')
      }} 
      onKeyDown={function() {
        console.log('key down')
      }} 
      onKeyUp={function() {
        console.log('key up')
      }} */ 
      direction="down" label="스크롤 다운" />
      <GoToButton       
      onClick={() => {
        const practiceElement = getNode('.Practice')
        practiceElement.scroll({top: 0, behavior: 'smooth'})
      }} direction="up" label="스크롤 업" />
    </div>
  )
}

export default Controller;