import { useSelector } from "react-redux"
import { Istate } from "../../../store"
import { AiFillCaretDown } from "react-icons/ai"
import { useState } from "react"

const SelectSegment = () => {
    const segmentList = useSelector((state: Istate) => state.home.segmentList)
    const [isExpanded, setExpanded] = useState<boolean>(false)
    return (
        <div className="cust-select">
            <div className="select-container">
                <div className="value ">
                    <span className="label">value</span>
                    <button onClick={() => setExpanded(!isExpanded)}>
                        <i className="icon-down">
                            <AiFillCaretDown />
                        </i>
                    </button>
                </div>
                <div className={isExpanded ? "items" : "items closed"}>
                    <ul>
                        {segmentList.map(segment => (
                            <li id={segment.segmentId.toString()} key={segment.segmentId} >
                                <i className="air-plan">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 45.456 47.448">
                                        <g id="Groupe_647" data-name="Groupe 647" transform="translate(-3.412 3.659) rotate(-7)">
                                            <path id="Tracé_140" data-name="Tracé 140" d="M41.012,23.222a2.839,2.839,0,0,0-.026-1.077,25.327,25.327,0,0,0-3.34-5.351c-2.361-2.374-5.052-3.223-8.186-4.028l-3.885-1a.056.056,0,0,1-.033-.022L18.456,1.669A.987.987,0,0,0,18,1.313L16.022.566a.61.61,0,0,0-.788.774l2.926,8.435a.057.057,0,0,1-.068.074l-9.352-2.4L8.6,7.413A7.2,7.2,0,0,1,4.383,4.288L2.042.557A1.181,1.181,0,0,0,1.561.108,1.092,1.092,0,0,0,0,1.146L.282,7.7A2.659,2.659,0,0,0,1.9,10.031l2.376,1.01,13.65,5.591,19.289,7.9C39.1,25.336,40.731,24.747,41.012,23.222Z" transform="translate(0 27.998) rotate(-43)" fill="#ba182c" />
                                            <path id="Tracé_141" data-name="Tracé 141" d="M10.024,2.346,4.306,0,.208,2.573a.442.442,0,0,0-.08.685l.391.4a2.221,2.221,0,0,0,2.067.612Z" transform="translate(19.3 33.358) rotate(-43)" fill="#ba182c" />
                                        </g>
                                    </svg>

                                </i>
                                <span>
                                    {segment.departureAirportRef.name}
                                </span>
                                <i className="arrow"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 37.887 28">
                                    <g id="Groupe_646" data-name="Groupe 646" transform="translate(-207.5 -1735)">
                                        <g id="Groupe_631" data-name="Groupe 631" transform="translate(209.343 1735)">
                                            <line id="Ligne_6369" data-name="Ligne 6369" x2="33.166" transform="translate(0 6.449)" fill="none" stroke="#b59966" stroke-width="2" />
                                            <path id="Polygone_1" data-name="Polygone 1" d="M6.449,0,12.9,11.055H0Z" transform="translate(30.517 16.023) rotate(-150)" fill="#b69a63" />
                                        </g>
                                        <g id="Groupe_632" data-name="Groupe 632" transform="translate(243.544 1763) rotate(180)">
                                            <line id="Ligne_6369-2" data-name="Ligne 6369" x2="33.166" transform="translate(0 6.449)" fill="none" stroke="#b59966" stroke-width="2" />
                                            <path id="Polygone_1-2" data-name="Polygone 1" d="M6.449,0,12.9,11.055H0Z" transform="translate(30.517 16.023) rotate(-150)" fill="#b69a63" />
                                        </g>
                                    </g>
                                </svg>
                                </i>
                                <span>
                                    {segment.arrivalAirportRef.name}
                                </span>
                                <i className="air-plan">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 43.065 28.375">
                                        <g id="Groupe_678" data-name="Groupe 678" transform="matrix(0.788, 0.616, -0.616, 0.788, 17.237, -18.484)">
                                            <path id="Tracé_140" data-name="Tracé 140" d="M41.012,23.222a2.839,2.839,0,0,0-.026-1.077,25.327,25.327,0,0,0-3.34-5.351c-2.361-2.374-5.052-3.223-8.186-4.028l-3.885-1a.056.056,0,0,1-.033-.022L18.456,1.669A.987.987,0,0,0,18,1.313L16.022.566a.61.61,0,0,0-.788.774l2.926,8.435a.057.057,0,0,1-.068.074l-9.352-2.4L8.6,7.413A7.2,7.2,0,0,1,4.383,4.288L2.042.557A1.181,1.181,0,0,0,1.561.108,1.092,1.092,0,0,0,0,1.146L.282,7.7A2.659,2.659,0,0,0,1.9,10.031l2.376,1.01,13.65,5.591,19.289,7.9C39.1,25.336,40.731,24.747,41.012,23.222Z" transform="translate(0 27.998) rotate(-43)" fill="#ba182c" />
                                            <path id="Tracé_141" data-name="Tracé 141" d="M10.024,2.346,4.306,0,.208,2.573a.442.442,0,0,0-.08.685l.391.4a2.221,2.221,0,0,0,2.067.612Z" transform="translate(19.3 33.358) rotate(-43)" fill="#ba182c" />
                                        </g>
                                    </svg>
                                </i>
                               
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}
export default SelectSegment