import React, { ReactEventHandler, useEffect, useState } from 'react';
import logo from './logo.svg';

import Slider, { Settings } from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Settings as CarouselSettings } from 'react-slick';
import { FC } from "react";
import { MdNavigateNext } from "react-icons/md";
import { IconContext } from "react-icons";
import { GoChevronRight, GoChevronLeft } from "react-icons/go";



const image = [
    { label: 'paris', value: './assets/images/Paris.png' },
    { label: 'spain', value: './assets/images/Spain.png' },
    { label: 'roma', value: './assets/images/Roma.png' },
    { label: 'dakar', value: './assets/images/Dakar.png' }
]



const SliderIdex = () => {
    const [ImageIndex, setImageIndex] = useState<number>(0);
    useEffect(() => {
        console.log(ImageIndex);

    }, [ImageIndex])
    interface Props {
        onClick?: ReactEventHandler
    }
    const NextArrow: FC<Props> = ({ onClick }) => {
        return (
            <button className="arrow next" onClick={onClick}>
                <IconContext.Provider
                    value={{ color: 'white' }}
                >
                    <i><GoChevronRight /></i>
                </IconContext.Provider>
            </button>
        );
    };

    const PrevArrow: FC<Props> = ({ onClick }) => {
        return (
            <button className="arrow prev" onClick={onClick}>
                <IconContext.Provider
                    value={{ color: '#C72D2D' }}
                >
                    <i><GoChevronLeft /></i>
                </IconContext.Provider>
            </button>
        );
    };

    const Dot: FC<Props> = () => {
        return (
            <div className='dot' />
        )
    }

    const slickSettings: Settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: '0',
        beforeChange: (current: number, next: number) => setImageIndex(next),
        customPaging: i => (<div className={ImageIndex == i ? "active dot" : "dot "} />)
    };
    return (
        <div className="slider ">
            <div className='title'>
                <h1>RAM FlightPass</h1>
                <h2>Billets multiples, Prix garanti</h2>
                <button className='btn'>Découvrir</button>
            </div>
            <div className='promotion'>
                <p >
                    Passez
                    <br/>
                    vos vacances
                    <br/>
                    d’été à Paris
                    <br/>
                    à partir de
                    <br/>
                    <span>500 <i>DH</i></span>
                </p>
            </div>
            <Slider className="" {...slickSettings}>
                {image.map((img, idx) => (
                    <div className={idx == ImageIndex ? "ActiveSlide" : "Inactive"}>
                        <img src={img.value} alt={img.label} />
                    </div>
                ))}
            </Slider>
        </div>
    );
}
export default SliderIdex