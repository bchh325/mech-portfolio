import React from 'react'
import styles from './Contact.module.css'

export default function Contact() {
    return (
        <div className={styles.contact}>
            <div className={styles.icons}>Contant Icons</div>
            <div className={styles.contactlinks}>
                <div className={styles.link}>Link</div>
                <div className={styles.link}>Link</div>
            </div>
        </div>
    )
}
