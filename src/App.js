import './App.css';
import styles from './gridstyles.module.css'
import { AiOutlineMenu } from "react-icons/ai"

function App() {
  return (
    <div className="App">
      <div className={styles.nav}>
        <div className={styles.navcomp}>
          <div className={styles.flexcontainer}>
            <div className={styles.innerflex}>
              <span>Spans</span>
              <span>Spans</span>
              <span>Spans</span>
              <span>Spans</span>
              <span>Spans</span>
              <span>Spans</span>
            </div>
            <div className={styles.navbtn}>
              <AiOutlineMenu size={50}/>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.gridcontainer}>
        <div>current</div>
        <div className={`${styles.gridchild} ${styles.childcontainer}`}>
          <div className={styles.content}>children</div>
          <div className={styles.content}>children</div>
          <div className={styles.content}>children</div>
          <div className={styles.content}>children</div>
          <div className={styles.content}>children</div>
          <div className={styles.content}>children</div>
          <div className={styles.content}>children</div>
          <div className={styles.content}>children</div>
          <div className={styles.content}>children</div>
          <div className={styles.content}>children</div>
          <div className={styles.content}>children</div>
        </div>
      </div>
    </div>
  );
}

export default App;
