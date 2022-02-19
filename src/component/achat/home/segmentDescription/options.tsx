import { IoSend } from "react-icons/io5"
import { useDispatch, useSelector } from "react-redux";
import { Istate } from "../../../../store";
import React, { useEffect, useRef } from "react";

import { homeActions } from "../../../../store/home";
import CustSelect from "./select";
import { Item } from "../../../../type";
import { Value } from "sass";
import { AiFillCaretDown } from "react-icons/ai";
import { CircularProgress } from "@mui/material";

const airplan: any = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 33.169 21.519">
    <g id="Groupe_917" data-name="Groupe 917" transform="translate(17.259 -14.836) rotate(47)">
        <path id="Tracé_140" data-name="Tracé 140" d="M31.867,18.044a2.206,2.206,0,0,0-.021-.837,19.679,19.679,0,0,0-2.6-4.157c-1.835-1.845-3.925-2.5-6.361-3.129l-3.018-.775a.043.043,0,0,1-.025-.017L14.341,1.3a.767.767,0,0,0-.356-.276L12.449.44a.474.474,0,0,0-.612.6L14.11,7.6a.044.044,0,0,1-.053.057L6.791,5.787,6.681,5.76A5.59,5.59,0,0,1,3.406,3.332L1.587.433A.918.918,0,0,0,1.213.084.849.849,0,0,0,0,.89L.219,5.98A2.066,2.066,0,0,0,1.472,7.794l1.846.784,10.606,4.344,14.988,6.139C30.382,19.686,31.649,19.229,31.867,18.044Z" transform="translate(0 21.754) rotate(-43)" fill="#cf013e" />
        <path id="Tracé_141" data-name="Tracé 141" d="M7.789,1.823,3.346,0,.161,2A.344.344,0,0,0,.1,2.532l.3.311a1.726,1.726,0,0,0,1.606.476Z" transform="translate(14.996 25.92) rotate(-43)" fill="#cf013e" />
    </g>
</svg>



const Options = () => {
    const dispatch = useDispatch()
    const LoadDefaultConfiguration = useSelector((state: Istate) => state.home.LoadDefaultConfiguration)
    const selectRef = useRef<HTMLDivElement>(null);
    const currentSegment = useSelector((state: Istate) => state.home.currentSegment)
    const defaultConfig=useSelector((state:Istate)=>state.home.DefaultConfiguration)
    const arrivalAirportList: Item[] = useSelector((state: Istate) => state.home.segmentList).map(segment => (
        {
            label: segment.arrivalAirportRef.name,
            value: segment.segmentId.toString()
        }
    ))

    const onSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        dispatch(homeActions.setcurrentSegment(Number(event.currentTarget.value)))
    };
    /*useEffect(() => {
        const handleClickOutside = (event: any) => {
            if (!selectRef?.current?.contains(event.target)) {
                if (isSelectOpen) {
                    dispatch(homeActions.openSelect());
                }
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
    }, [currentSegment, selectRef])
    */
    useEffect(() => {
        console.log(LoadDefaultConfiguration, "in option")
    })

    return (
        <div className="options">
            {LoadDefaultConfiguration ?
                <div className="circularProgress">
                    <CircularProgress style={{ 'color': '#C82345' }} />
                </div>
                :
                null
            }
            <div className="title">
                {/* <img src="./assets/images/pexels-jorge-samper-6479613.png" alt="" />*/}
                <h4>FlightPass</h4>
            </div>
            <div className={LoadDefaultConfiguration ? "load" : ""}>
                <div className="options-fixes">
                    <div className="label">
                        <div className="main">
                            Options fixes
                        </div>
                        <div className="secondary">
                            Itinéraires
                        </div>
                    </div>
                    <div className="segment-container">
                        <div className="segment">
                            <div className="air-port ">
                                <i className="air-plan ">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36.519 35.9">
                                        <g id="Groupe_916" data-name="Groupe 916" transform="translate(0 0)">
                                            <path id="Tracé_140" data-name="Tracé 140" d="M31.867,18.044a2.206,2.206,0,0,0-.021-.837,19.679,19.679,0,0,0-2.6-4.157c-1.835-1.845-3.925-2.5-6.361-3.129l-3.018-.775a.043.043,0,0,1-.025-.017L14.341,1.3a.767.767,0,0,0-.356-.276L12.449.44a.474.474,0,0,0-.612.6L14.11,7.6a.044.044,0,0,1-.053.057L6.791,5.787,6.681,5.76A5.59,5.59,0,0,1,3.406,3.332L1.587.433A.918.918,0,0,0,1.213.084.849.849,0,0,0,0,.89L.219,5.98A2.066,2.066,0,0,0,1.472,7.794l1.846.784,10.606,4.344,14.988,6.139C30.382,19.686,31.649,19.229,31.867,18.044Z" transform="translate(0 21.754) rotate(-43)" fill="#cf013e" />
                                            <path id="Tracé_141" data-name="Tracé 141" d="M7.789,1.823,3.346,0,.161,2A.344.344,0,0,0,.1,2.532l.3.311a1.726,1.726,0,0,0,1.606.476Z" transform="translate(14.996 25.92) rotate(-43)" fill="#cf013e" />
                                        </g>
                                    </svg>
                                </i><span>{currentSegment?.departureAirportRef.name}</span>
                            </div>
                            <i className="arrow  ">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 23.741 17.546">
                                    <g id="Groupe_915" data-name="Groupe 915" transform="translate(-207.5 -1735)">
                                        <g id="Groupe_631" data-name="Groupe 631" transform="translate(208.655 1735)">
                                            <line id="Ligne_6369" data-name="Ligne 6369" x2="20.783" transform="translate(0 4.041)" fill="none" stroke="#cb952b" stroke-width="2" />
                                            <path id="Polygone_1" data-name="Polygone 1" d="M4.041,0,8.082,6.928H0Z" transform="translate(19.123 10.041) rotate(-150)" fill="#cb952b" />
                                        </g>
                                        <g id="Groupe_632" data-name="Groupe 632" transform="translate(230.086 1752.546) rotate(180)">
                                            <line id="Ligne_6369-2" data-name="Ligne 6369" x2="20.783" transform="translate(0 4.041)" fill="none" stroke="#cb952b" stroke-width="2" />
                                            <path id="Polygone_1-2" data-name="Polygone 1" d="M4.041,0,8.082,6.928H0Z" transform="translate(19.123 10.041) rotate(-150)" fill="#cb952b" />
                                        </g>
                                    </g>
                                </svg>
                            </i>

                            <div className="air-port-list ">
                                <CustSelect selectRef={selectRef} iconLabel={airplan} items={arrivalAirportList} icon={<AiFillCaretDown />} onchange={() => (onSelectChange)} />
                            </div>

                        </div>

                        <div className="text-secondary">
                            Voyage vers le même aéroport<br /><span>Jusqu’à {defaultConfig.nbrFlight} fois</span>
                        </div>
                        <div className="text-secondary">
                            Nombre de vol <br /><span>{defaultConfig.nbrFlight}</span>
                        </div>
                        <div className="text-secondary">
                            Durée de Flightpass <br /><span>{defaultConfig.delay} mois</span>
                        </div>
                        <div className="text-secondary">
                            Réservation à l'avance <br /><span>{defaultConfig.dayToDeparture} jours</span>
                        </div>
                    </div>
                </div>
                <div className="options-to-choose">
                    <div className="label">
                        <div className="main">
                            Options à choisir
                        </div>
                    </div>
                    <ul>
                        <li>
                            <i><IoSend /></i>Voyage aux heures de pointe
                        </li>
                        <li>
                            <i><IoSend /></i> Compensation carbone
                        </li>
                        <li>
                            <i><IoSend /></i> Période de réservation anticipée
                        </li>
                    </ul>
                </div>
                <div className="price ">
                    <button>
                        Configurator
                    </button>
                    <div className="base-price">
                        {defaultConfig.price|10} <span>DH</span>

                    </div>
                </div>

            </div>

        </div>

    )
}
export default Options