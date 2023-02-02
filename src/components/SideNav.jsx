import React from 'react'
import { AiOutlineBars } from "react-icons/ai"
import styles from './SideNav.module.css'

export default function SideNav() {
  const scrollHandler = (id) => {
    const element = document.getElementById(id)
    if (element !== null) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className={styles.nav}>
    <div className={styles.navcomp}>
      <div className={styles.flexcontainer}>
        <div className={styles.innerflex}>
          <span onClick={() => { scrollHandler("about-me") }} className={styles.navlink}>About Me</span>
          <span onClick={() => { scrollHandler("resume") }} className={styles.navlink}>Resume</span>
          <span onClick={() => { scrollHandler("projects") }} className={styles.navlink}>Projects</span>
          <span onClick={() => { scrollHandler("contact") }} className={styles.navlink}>Contact</span>
        </div>
        <div className={styles.navbtn}>
          <AiOutlineBars color="white" size={30} />
        </div>
      </div>
    </div>
  </div>
  )
}
