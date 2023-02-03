import React from 'react'
import styles from './ProjContainer.module.css'
import Project from './Project'

export default function ProjContainer() {
    return (
        <div className={styles.gallery}>
            <Project />
            <Project />
            <Project />
            <Project />
        </div>
    )
}
