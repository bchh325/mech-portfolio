import React from 'react'
import styles from './Information.module.css'

export default function Information() {
    return (
        <div className={styles.information}>
            <div className={styles.background} />
            <div className={`${styles.infochild} ${styles.hide} ${styles.fadeIn} ${styles.delayOne}`}>
                <span className={styles.default}>John <span className={styles.highlight}>Doe</span></span>
            </div>
            <div className={`${styles.infochild}`}>
                <div className={styles.borderLeft}>
                    <p className={`${styles.details} ${styles.slideText} ${styles.initialTransform} ${styles.delayTwo}`}>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente quos, voluptatibus accusamus nemo impedit praesentium laudantium odio ipsa odit commodi officiis rem aut perferendis? Repellendus pariatur debitis sit hic quia!
                    </p>
                </div>
            </div>
            <div className={`${styles.infochild}`}>
                <div className={styles.borderRight}>
                    <p className={`${styles.details} ${styles.slideTextAlt} ${styles.initialTransformAlt} ${styles.delayFour}`}>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente quos, voluptatibus accusamus nemo impedit praesentium laudantium odio ipsa odit commodi officiis rem aut perferendis? Repellendus pariatur debitis sit hic quia!
                    </p>
                </div>
            </div>
            <div className={`${styles.infochild}  ${styles.hide} ${styles.fadeIn} ${styles.delayThree}`}>
                <span className={styles.default}>Aerospace <span className={styles.highlight}>Engineering</span></span>
            </div>
        </div>
    )
}
