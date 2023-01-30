import React from 'react'
import styles from './Resume.module.css'

export default function Resume() {
    return (
        <div className={styles.resume}>
            <div className={styles.resumeinfo}>
                <div className={styles.resumecol}>Info Column</div>
                <div className={styles.resumecol}>Info Column</div>
            </div>
            <div className={styles.resumelink}>Link</div>
        </div>
    )
}
