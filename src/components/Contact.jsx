import React, { useState } from 'react'
import styles from './Contact.module.css'
import { AiFillLinkedin } from 'react-icons/ai'
import useOpenLink from './hooks/useOpenLink'

export default function Contact() {
    const [contacts, setContacts] = useState({
        linkedin: "https://www.linkedin.com/in/ericorodriguez/"
    })

    return (
        <div className={styles.contact}>
            <div className={styles.icons}>
                <span onClick={useOpenLink(contacts.linkedin)}><AiFillLinkedin color={"orange"} size={50}/></span>
            </div>
            {/* <div className={styles.contactlinks}>
                <div className={styles.link}>Link</div>
                <div className={styles.link}>Link</div>
            </div> */}
        </div>
    )
}
