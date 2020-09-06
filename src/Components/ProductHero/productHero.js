import React from 'react'

import { isMobile } from 'react-device-detect';

import styles from './productHero.module.css'

const description = (props) => {
    return (
        <div className={styles.description}>
            <h1>{props.name}</h1>
            <h3>{props.desc}</h3>
            <h3>{props.price}</h3>
        </div>
    )
}

const productHero = (props) => {
    return (
        <div className={styles.productHero}>
            <img src={props.image} alt="" />
            {isMobile ? '' : description(props)}
        </div>
    )
}

export default productHero