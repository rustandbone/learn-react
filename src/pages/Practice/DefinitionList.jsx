//내부에 분리된 컴포넌트 호출
import DisplayingData from './parts/DisplayingData';
import ConditionalRendering from './parts/ConditionalRendering';
import ConditionalDisplay from './parts/ConditionalDisplay.jsx';
import RenderingLists from './parts/RenderingLists.jsx';

// 스타일 및 에셋 연결
/* 데이터 */
const imageType = 'react';

const isShowReactImage = false;

const statusMessage = [
  '⌛️ 대기',
  '⏳ 로딩 중...',
  '✅ 로딩 성공!',
  '❌ 로딩 실패.',
];

const reactLibrary = {
  name: 'React',
  author: '조던 워케(Jordan Walke)',
  writtenIn: 'JavaScript',
  type: 'JavaScript 라이브러리',
  license: 'MIT',
};

function DefinitionList() {
  //배열 데이터 순환
  const renderList = () => {
    const renderListItem =message => (
      <li key={message}>{message}</li>
    );

    return statusMessage.map(renderListItem)
  };

  const allHidden = true;

  return (
    <dl className="descriptionList">
      <DisplayingData hidden={allHidden} statusMessage={statusMessage} />
      {/* 조건부 렌더링(rendering) vs. 조건부 표시(display) */}
      {/* SSR (존재 혹은 존재하지 않음) vs. Client (화면에 표시 혹은 감춤) */}
      <ConditionalRendering hidden={allHidden} imageType={imageType} />
      <ConditionalDisplay hidden={allHidden} isShowReactImage={isShowReactImage} />
      <RenderingLists statusMessage={statusMessage} renderList={renderList} />
    </dl>
  )
}

export default DefinitionList;