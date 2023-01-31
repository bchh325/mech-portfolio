import React from 'react'
import { AiOutlineBars } from "react-icons/ai"
import styles from './SideNav.module.css'

export default function SideNav() {
  return (
    <div className={styles.nav}>
    <div className={styles.navcomp}>
      <div className={styles.flexcontainer}>
        <div className={styles.innerflex}>
          <span className={styles.navlink}>About Me</span>
          <span className={styles.navlink}>Resume</span>
          <span className={styles.navlink}>Projects</span>
          <span className={styles.navlink}>Contact</span>
        </div>
        <div className={styles.navbtn}>
          <AiOutlineBars color="white" size={30} />
        </div>
      </div>
    </div>
  </div>
  )
}
