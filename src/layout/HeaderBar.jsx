import Heading from "../components/Heading";
import styles from '@/styles/HeaderBar.module.css';

function HeaderBar() {
  return (
    <header className={`bg-indigo-950 text-indigo-50 p-5`}>
      <Heading />
    </header>
  )
}

export default HeaderBar;

