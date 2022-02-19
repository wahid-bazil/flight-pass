import React, { ReactEventHandler, useEffect, useState, useRef, LegacyRef } from 'react';
import Slider, { Settings } from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FC } from "react";
import { IconContext } from "react-icons";
import { GoChevronRight, GoChevronLeft } from "react-icons/go";
import { useDispatch, useSelector } from 'react-redux';
import { Istate } from '../../../../store';
import { homeActions } from '../../../../store/home';
import { Portlet } from '../../../../type';
import { CircularProgress } from '@mui/material';





const SliderIdex = () => {
    const [ImageIndex, setImageIndex] = useState<number>(0);
    const sliderRef = useRef<Slider | null>(null) // type: Slider | null
    const LoadDefaultConfiguration = useSelector((state: Istate) => state.home.LoadDefaultConfiguration)
    const segment_id = useSelector((state: Istate) => state.home.currentSegment_id)
    const defaultConfiguration = useSelector((state: Istate) => state.home.DefaultConfiguration)
    //the portlets slider of all segments
    let portletSliderList = useSelector((state: Istate) => {
        let test: { segment_id: number, portlet: Portlet }[] = [];
        state.portlet.portletList.forEach(element => {
            let index = 0
            while (index < element.portlets.length) {
                if (element.portlets[index].position == "SLIDER") {
                    break;
                }
                index++;
            }
            if (index < element.portlets.length) {
                test.push({
                    segment_id: element.segment_id,
                    portlet: element.portlets[index]
                })
            }
        });
        return test

    });
    useEffect(() => {

        const currentIndex = portletSliderList.find(element => element.segment_id == segment_id)?.portlet.imageDisplayingOrder;
        if (currentIndex) {

            sliderRef.current?.slickGoTo(currentIndex - 1);
        }
    }, [segment_id])


    const dispatch = useDispatch()


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
            <div className='' />
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
        beforeChange: (current: number, next: number) => {
            const segmentId = portletSliderList[next].segment_id
            setImageIndex(next)
            dispatch(homeActions.setcurrentSegment(segmentId))

        },

        customPaging: i => (<div className={ImageIndex == i ? "active dot" : "dot "} />)

    };


    return (
        <div className="slider ">
            {/*<div className='title'>
                <div className="main">RAM FlightPass</div>
                <div className="second">Billets multiples, Prix garanti</div>
                <button>Découvrir</button>
    </div>*/}
            <div className="cart">
                <img src="./assets/images/Groupe-902.png" alt="" />
            </div>
            {/* <div className="base-price">
                <img src="./assets/images/Groupe 979.png" alt=""/>
            </div>*/}
           {/* <div className='promotion'>
                <div className='position-relative'>
                    {LoadDefaultConfiguration ?
                        <div className="circularProgress">
                            <CircularProgress style={{ 'color': 'white' }} />
                        </div>
                        :
                        null
                    }
                    
                    <div className={LoadDefaultConfiguration ? "load" : ''}>
                        <p >
                            Passez
                            <br />
                            vos vacances
                            <br />
                            d’été à {}
                            <br />
                            à partir de
                            <br />
                            <span>{defaultConfiguration.price | 10} <i>DH</i></span>
                        </p>
                    </div>
                    
                </div>

            </div>
                */}
            <Slider ref={sliderRef} className="slider-container" {...slickSettings}>
                {portletSliderList.map((portletSlider, idx) => (
                    <div className={idx == ImageIndex ? "ActiveSlide" : "Inactive"}>
                        <img src={portletSlider.portlet.imagePath} alt="" />
                    </div>
                ))}
            </Slider>
        </div>
    );

}
export default SliderIdex


