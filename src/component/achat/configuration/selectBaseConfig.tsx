import { useState } from "react"
import { AiFillCaretDown } from "react-icons/ai"
import { useSelector } from "react-redux"
import { Istate } from "../../../store"
const SelectBaseConfig = () => {
    const [isExpanded, setExpanded] = useState<boolean>(false)
    const baseConfigListe = useSelector((state: Istate) => state.configuration.baseConfigList)

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
                        {baseConfigListe.map(baseConfig => (
                            <li key={baseConfig.nbrFlights} >

                                <span>
                                    {baseConfig.nbrFlights} coupons
                                </span>

                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}
export default SelectBaseConfig