import React, { Component } from 'react';

import { isMobile } from 'react-device-detect';
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";

import Button from '../../Components/Button/button'
import styles from './carousel.module.css'
import Thumbnail from '../../Components/Thumbnail/thumbnail'

export default class Carousel extends Component {
    state = {
        currentIndex: 0
    }
    responsive = {
        650: { items: 2 },
        980: { items: 3 }
    }

    renderButtons = () => {
        let content
        if (!isMobile) {
            content = (
                < div className={styles.buttons} >
                    <Button
                        left={true}
                        onClick={() => this.Carousel.slidePrev()}
                    />
                    <Button
                        left={false}
                        onClick={() => this.Carousel.slideNext()}
                    />
                </div >)
        }
        return content
    }

    render() {
        return (
            <div id='gallery'>
                <div className={styles.flexItems}>
                    <h2>{this.props.title}</h2>
                    {this.renderButtons()}
                </div>
                <div className={styles.carousel}>
                    <AliceCarousel
                        items={
                            this.props.data.map(card =>
                                <Thumbnail
                                    title={this.props.title}
                                    image={card.image}
                                    name={card.name}
                                    price={card.price}
                                    key={`${this.props.title}-${card.id}`}
                                    index={card.id}
                                />
                            )
                        }
                        responsive={this.responsive}
                        buttonsDisabled={true}
                        dotsDisabled={true}
                        ref={(el) => this.Carousel = el}
                    />
                </div>
            </div >
        )
    }
}