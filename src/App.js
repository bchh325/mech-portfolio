import './App.css';
import Contact from './components/Contact';
import Information from './components/Information';
import ProjContainer from './components/ProjContainer';
import Resume from './components/Resume';
import SideNav from './components/SideNav';
import styles from './gridstyles.module.css'

/*

All elements will eventually be put into their own components. 
The current state of the App component is strictly for styling purposes.

*/

function App() {
  return (
    <div className="App">
      <SideNav />
      <div className={styles.gridcontainer}>
        <div className={styles.minibar} />
        <div className={`${styles.gridchild} ${styles.childcontainer}`}>
          <Information />
          <div className="section-title">
            <span>Resume</span>
          </div>
          <Resume />
          <div className="section-title">
            <span>Projects</span>
          </div>
          <ProjContainer />
          <div className="section-title">
            <span>Contact</span>
          </div>
          <Contact />
        </div>
      </div>
    </div>
  );
}

export default App;
