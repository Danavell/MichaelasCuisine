import React from 'react'
import styles from './about.module.css'

const about = (props) => {
    return (
        <div class={styles.about}>
            <h1><i class="fas fa-leaf"></i> Local Ecological Food</h1>
            <p>
                Our delicious Romanian-style delicasies are all created using
                ecological ingredients from local farmers.
        </p>
        </div>
    )
}

export default about
