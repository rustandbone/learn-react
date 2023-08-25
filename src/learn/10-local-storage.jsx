import useStorage from "@/hooks/useStorage"
import { useRef } from "react"

export default function LocalStorage() {
  const inputRef = useRef(null);
  const {storageData, update, remove} = useStorage('dlehdgh')

  return (
    <>
      <h2>로컬 스토리지 관리</h2>
      <div className="flex gap-2">
        <button type="button"
          onClick={() => {
            update(inputRef.current.value)
          }}
          className="border border-slate-300 p-2 my-2">저장</button>
        <button type="button"
          onClick={() => {
            remove()
          }}
          className="border border-red-300 p-2 my-2">삭제</button>
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="storage-data">스토리지 데이터</label>
        <input type="text"
          ref={inputRef}
          id="storage-data"
          placeholder="기억할 메시지 작성"
          className="border border-slate-300"
          />
          <p>{storageData ? '데이터가 존재' : '데이터 없음'}</p>
      </div>
    
    </>
  )
}