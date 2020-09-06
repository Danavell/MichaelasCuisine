import React from 'react';
import styles from './hero.module.css'

const hero = (props) => {
    return (
        <div class={styles.hero} id="home">
            <div>
                <h1>{props.name}</h1>
                <h3>{props.desc}</h3>
                <h3>{props.price}</h3>
            </div>
        </div>
    )
}

export default hero;