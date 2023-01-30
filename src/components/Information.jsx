import React from 'react'
import styles from './Information.module.css'

export default function Information() {
    return (
        <div className={styles.information}>
            <div className={styles.background}/>
            <div className={`${styles.infochild}`}>
                <span className={styles.default}>John <span className={styles.highlight}>Doe</span></span>
            </div>
            <div className={`${styles.infochild}`}>
                <p className={styles.details}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi culpa aliquam necessitatibus, laborum tenetur magnam, excepturi hic voluptate reprehenderit harum a possimus, deserunt delectus assumenda aperiam placeat fuga? Expedita, sit. </p>
            </div>
            <div className={`${styles.infochild}`}>
                <span className={styles.default}>Aerospace <span className={styles.highlight}>Engineering</span></span>
            </div>
            <div className={`${styles.infochild}`}>
                <p className={styles.details}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente quos, voluptatibus accusamus nemo impedit praesentium laudantium odio ipsa odit commodi officiis rem aut perferendis? Repellendus pariatur debitis sit hic quia!</p>
            </div>
        </div>
    )
}
