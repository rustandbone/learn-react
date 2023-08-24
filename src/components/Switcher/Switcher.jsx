import styles from './Switcher.module.css';
import { bool, string, oneOf } from 'prop-types';

function Switcher({ 
  on = false, 
  // onLabel = '', 
  // offLabel= '',
  onText ='',
  offText ='',
  label ='',
  size = 'sm', // sm, md, lg
  ...restProps 
}) {
  return (
    <div className='SwitcherWrapper'>
      <button
        type="button"
        className={`${styles.Switcher} ${styles[size]} ${on ? styles.on : ''}`.trim()}
        {...restProps}
      >
        <span className={styles.handle}>
          { on ? onText : offText }
        </span>
        <span></span>
      </button>
      <span className={styles.label}>{label}</span>
    </div>
  );
}

Switcher.propTypes = {
  on: bool,
  onText: string,
  offText: string,
  label: string,
  size: oneOf(['sm', 'md', 'lg']),
};

export default Switcher;