import React, { useEffect } from 'react';
import { isMobile } from 'react-device-detect';
import { useSelector } from 'react-redux'

import Carousel from '../../Containers/Carousel/carousel'
import Description from '../../Components/ProductDescription/productDescription'
import Hero from '../ProductHero/productHero'
import styles from './product.module.css'

const Product = (props) => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    let id = parseInt(props.match.params.productId)

    const desserts = useSelector(state => state.desserts)
    const cheeses = useSelector(state => state.cheeses)

    let combined = desserts.concat(cheeses)
    const data = combined.find(el => el.id === id)
    combined = combined.filter(el => el.id !== id)

    console.log(data)

    const shuffle = (array) => {
        for (let i = array.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array
    }

    combined = shuffle(combined)

    return (
        <div className={styles.product}>
            <Hero
                image={data.image}
                name={data.name}
                desc={data.desc}
                price={data.price}
            />
            {isMobile
                ? <Description name={data.name} desc={data.desc} price={data.price} />
                : ''
            }
            <Carousel
                title={'You may also like'}
                data={combined}
            />
        </div >
    )
}

export default Product