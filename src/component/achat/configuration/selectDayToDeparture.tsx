import { useState } from "react"
import {AiFillCaretDown} from "react-icons/ai"
import { useSelector } from "react-redux"
import { Istate } from "../../../store"
const SelectDayToDepparture = () => {
    const [isExpanded, setExpanded] = useState<boolean>(false)
    const dayToDepartureListe = useSelector((state: Istate) => state.configuration.dayToDepartureList)

    console.log("dd",dayToDepartureListe)
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
                        {dayToDepartureListe.map(dayToDeparture => (
                            <li key={dayToDeparture.nbrDays} >
                                <span>
                                    {dayToDeparture.nbrDays} jours
                                </span>

                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}
export default SelectDayToDepparture