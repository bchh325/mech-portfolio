import React from 'react'
import { AiOutlineMenu } from "react-icons/ai"
import styles from './SideNav.module.css'

export default function SideNav() {
  return (
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
          <AiOutlineMenu size={30} />
        </div>
      </div>
    </div>
  </div>
  )
}
