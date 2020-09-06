import React from 'react'

const button = (props) => {
    let direction = 'right'
    if (props.left) {
        direction = 'left'
    }

    return (
        < i
            className={`fas fa-arrow-circle-${direction} testicle fa-2x`}
            onClick={props.onClick}
        ></i >
    )
}

export default button