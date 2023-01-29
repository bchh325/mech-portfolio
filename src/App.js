import './App.css';
import styles from './gridstyles.module.css'
import { AiOutlineMenu } from "react-icons/ai"


/*

All elements will eventually be put into their own components. 
The current state of the App component is strictly for styling purposes.

*/

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
        <div>curr</div>
        <div className={`${styles.gridchild} ${styles.childcontainer}`}>
          <div className={`${styles.content} ${styles.information}`}>
            <div className={styles.infochild}>grid child</div>
            <div className={styles.infochild}>grid child</div>
            <div className={styles.infochild}>grid child</div>
            <div className={styles.infochild}>grid child</div>
          </div>
          <div className={styles.content}>project gallery</div>
          <div className={styles.gallery}>
            <div className={styles.gallerychild}>Gallery Child</div>
            <div className={styles.gallerychild}>Gallery Child</div>
            <div className={styles.gallerychild}>Gallery Child</div>
            <div className={styles.gallerychild}>Gallery Child</div>
            <div className={styles.gallerychild}>Gallery Child</div>
            <div className={styles.gallerychild}>Gallery Child</div>
            <div className={styles.gallerychild}>Gallery Child</div>
            <div className={styles.gallerychild}>Gallery Child</div>
          </div>
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
