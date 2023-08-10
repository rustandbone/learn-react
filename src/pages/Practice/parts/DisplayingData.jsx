import { getRandom } from '@/utils/getRandomMinMax';

function DisplayingData({hidden, statusMessage}) {
  return (
    <>
      <dt hidden={hidden}>데이터 바인딩(data binding)</dt>
      <dd hidden={hidden}>
        <p>상태 메시지(status message)를 연결해 화면에 출력합니다.</p>
        <span className="status">
          {/* displaying data */}
          { statusMessage[0] }
          { statusMessage[1] }
          { statusMessage[2] }
          { statusMessage[3] }
          {/* JSX는 JS 표현식이므로 항상 결과 값을 반환 */}
          {/* 때문에 문을 사용할 수 없음(if, for, while, switch) */}
          {/* 유틸리티 함수 사용 권장 */}
          { statusMessage[Math.floor(Math.random() * statusMessage.length)] }
          { statusMessage[getRandom(statusMessage.length - 1)] }
          {/* 1-1. statusMessage 배열의 원소 중 하나의 값을 화면에 표시합니다.
              1-2. 랜덤 숫자 인덱스의 원소 값 표시도 도전! */}
          {/* 객체 타입은 React의 자식 타입으로 적절하지 않음 */}
          {/* { reactLibrary.author } */}
        </span>
      </dd>
    </>
  )
}

export default DisplayingData;