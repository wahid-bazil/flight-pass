import { ReactElement, useState, MouseEvent } from "react"
import { IconType } from "react-icons/lib"
import { useDispatch, useSelector } from "react-redux"
import { Istate } from "../../../../store"
import { homeActions } from "../../../../store/home"
import { Item } from "../../../../type"

const CustSelect: React.FC<{ selectRef: any, icon: ReactElement<any, any>, onchange: () => void, items: { label: string, value: string }[], iconLabel: HTMLElement }> = (props) => {
    const currentSegment_id = useSelector((state: Istate) => state.home.currentSegment_id)
    const currentArrivalAirport = useSelector((state: Istate) => state.home.segmentList).find(element => element.segmentId == currentSegment_id)?.arrivalAirportRef.name || ""
    const test = useSelector((state: Istate) => state.home.segmentList)
    const value: Item = { label: currentArrivalAirport, value: currentSegment_id.toString() }

    const isSelectOpen = useSelector((state: Istate) => state.home.isSelectOpen)
    const dispatch = useDispatch()
    const onSelectChange = (event: MouseEvent) => {
        dispatch(homeActions.setcurrentSegment(Number(event.currentTarget.id)))
        dispatch(homeActions.openSelect())
    }
    return (
        <div ref={props.selectRef} className="cust-select">
            <div className="select-container">
                <div className="value ">
                    <i className="icon-label">
                        {props.iconLabel}
                    </i>
                    <span className="label">{value.label}</span>
                    <button onClick={() => dispatch(homeActions.openSelect())}>
                        <i className="icon-down">{props.icon}</i>
                    </button>
                </div>
                <div className={!isSelectOpen ? "items closed" : "items"}>
                    <ul>
                        {props.items.map(item => (
                            <li id={item.value} key={item.value} onClick={onSelectChange}>
                                {item.label}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}
export default CustSelect