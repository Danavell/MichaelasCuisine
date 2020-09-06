import React from 'react'
import styles from './contact.module.css'

const contact = () => {
    return (
        <div class={styles.contact} id="contact">
            <h1><i class="fas fa-chevron-circle-right"></i> Contact Us</h1>
            <p>Telephone: +45 91 99 54 15</p>
            <p>Email: kolningokologisk@gmail.com</p>
            <p>Address: Korning Gammelby 18, 8700 Horsens, Danmark</p>
        </div>
    )
}

export default contact