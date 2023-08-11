// 스타일 파일 호출
import "./Practice.css"

// 컴포넌트 호출
import DefinitionList from "./DefinitionList";
import Controller from "./parts/Controller";

//public - 정적 자원 - 자주 바뀌지 않는 이미지
//assets - 동적 자원 - 빌드 때마다 파일명 다르게(해시값) 업로드됨 - 자주 바뀌니까 업로드 반영 위함
//사진 파일 다르게 관리

function Practice() {
  return (
    <div className="Practice">
      <h2>JSX 인 액션</h2>
      <hr />

      {/* 컴포넌트 추출 Extracting Component */}
      <DefinitionList />

      {/* 스크롤 다운/업 버튼에 이벤트를 연결해 App 컴포넌트가 부드럽게 스크롤 되도록 핸들러를 작성합니다. */}
      {/* Controller 컴포넌트 분리 추출하기 */}
      <Controller />
    </div>
  );
}

export default Practice;
