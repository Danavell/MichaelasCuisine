import React from 'react'
import { Link } from 'react-router-dom'

import styles from './styles.module.css'

const thumbnail = (props) => {
    console.log(props.title)
    return (
        < Link to={{
            pathname: `/product/${props.index}`,
        }
        }>
            <div className={styles.container}>
                <img src={props.image} alt="" />
                <h2>{props.name}</h2>
                <h3>{props.price}</h3>
            </div>
        </Link >
    )
}

export default thumbnail