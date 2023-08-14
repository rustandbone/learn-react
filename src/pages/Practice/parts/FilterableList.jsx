import styles from '@/styles/FilterableList.module.css';
import SideEffect from '@/components/SideEffect';

function FilterableList() {
  return (
    <>
      <SideEffect />
      <form>
        <div>
          <label htmlFor="todo"></label>
          <input id="todo" type="text" 
          placeholder="휴일에 할 일" className={`${styles.primary}`} />
        </div>
        <button type="submit">추가</button>
      </form>
    </>
  )
}

export default FilterableList