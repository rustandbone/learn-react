import styles from '@/styles/FilterableList.module.css';

function FilterableList() {
  return (
    <>
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