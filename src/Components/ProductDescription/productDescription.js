import React from 'react'
import styles from './productDescription.module.css'

const description = (props) => {
    return (
        <div className={styles.description}>
            <h3>{props.name}</h3>
            <h4>{props.price}</h4>
        </div>
    )
}

export default description