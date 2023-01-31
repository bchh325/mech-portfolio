import React, { useState } from 'react'
import styles from './Resume.module.css'
import { RxDotFilled } from 'react-icons/rx'

export default function Resume() {
    const [info, setInfo] = useState([
        "Designed structures for the BS2 rocket’s upper airframe to support the weight of the composite overwrapped pressure vessel (COPV) during flight",
        "Oversaw manufacturing process of upper airframe COPV cradle including creation of travelers, drawing, Fusion 360 gcode, and manual operations",
        "Calculated deflection of rubber insert between COPV cradle and COPV to prevent contact between both bodies to prevent marring",
        "Effectively communicated with other members design parameters and constraints including volume of the lower airframe fluids system to determine placement and spacing of stringers",
        "Collaborated with others to determine how to integrate components of lower airframe and optimal method to join each component to one another",
        "Created lower airframe assembly, and performed Solidworks FEA on stringers and lower airframe to analyze load components, to obtain stress experienced within an allowable factor of safety",
        "Utilized ANSYS static structural FEA on lower airframe assembly and top ring",
        "Researched properties and characteristics of supersonic flow and wrote a one page research and conveyed my finding to other subsystem members",
        "Managed a team of people to design, build, and budgeted a part’s list for a aluminum and polycarbonate blast shield to protect a high speed phantom camera recording BLT’s static fire of their LR-101 engine from 50ft away"
    ])

    const [skills, setSkills] = useState([
        
    ])

    return (
        <div className={styles.resume}>
            <div className={styles.resumegrid}>
                <div className={styles.resumecol}>
                    <div className={styles.infocontainer}>
                        <div className={styles.title}>
                            <span>Title</span>
                        </div>
                        <div>
                            <span>Skill 1</span>
                            <span>Skill 1</span>
                            <span>Skill 1</span>
                        </div>
                    </div>
                </div>
                <div className={styles.resumecol}>
                    <div className={styles.infocontainer}>
                        <div className={styles.title}>
                            <span>Title</span>
                            <span>Title</span>
                            <span>Title</span>
                        </div>
                        <div>
                            {info.map((item, index) => {
                                return (
                                    <div key={index} className={styles.resumeDetail}>
                                        <span><RxDotFilled size={20} /></span>
                                        <span>{item}</span>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.resumelink}>Link</div>
        </div>
    )
}
