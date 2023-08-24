//컴포넌트 함수 외부의 것을 변경해서는 안 된다.
//렌더링 프로세스에 영향을 미치기 때문
console.log(Switcher)
function Switcher() {
  // 로컬 뮤테이션 (뮤턴트: 돌연변이)
  // 컴포넌트 함수 내부의 것을 변경하는 것은 가능하다.
  // const memory = {
  //   cache: 100
  // }

  //순수하지 않은 코드
  //리액트 렌더링 단계에서 문제를 일으킬 가능성이 있는 코드
  //사이드 이펙트 코드

  //DOM 스크립트(DOM 요소 접근/조작)
  // Switcher 컴포넌트를 구성하는 버튼 요소에 class 설정하고 싶음
  // document.querySelector('button').classList.add('switcher');
  
  //CRUD(쓰기, 읽기, 수정, 삭제)
  //fetch API
  function fetchRandomUsers() {
    fetch('https://random-data-api.com/api/v2/users?size=2')
    .then(response => response.json())
    .then(data => {
      document.querySelector('button').classList.add('switcher');
      console.log(data)
    })
    .catch(error => console.log(error))
  }

  //타이머 조작
  setTimeout(() => {
    // fetchRandomUsers();
  }, 3000);

  const handleClick = () => {
    //이벤트 리스너는 리액트 렌더링 단계에 영향을 미치지 않음
    // 리액트 컴포넌트의 순수함을 유지하지 않아도 되는 영역
    fetchRandomUsers();
  }

  return (
    <button type="button" onClick={handleClick}></button>
  ) 
}