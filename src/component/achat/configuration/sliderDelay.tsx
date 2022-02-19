import { ChangeEvent, useState, MouseEvent } from "react"
import { useSelector } from "react-redux"
import { Istate } from "../../../store"

const SliderDelay = () => {
    const [currentStep, setCurrentStep] = useState<number>(0)
    const passDelayList = useSelector((state: Istate) => state.configuration.delayList)
    const stepWidth = (100 / (passDelayList.length)) * currentStep
    const divStyle = {
        width: stepWidth.toString() + "%"

    };
    const divStylee = {
        marginLeft: ((100 / (passDelayList.length))).toString() + "%"

    }

    const divStyleee = {
        bottom: "47px"
    }
    const onchangeStep = (even: MouseEvent) => {
        setCurrentStep(Number(even.currentTarget.id) + 1)

    }

    return (

        <div className="sliderDelay">
            <div className="rail">
                <i className='left'>
                    <img src="./assets/images/Groupe 894.svg" />
                </i>
                <i className='right'>
                    <img src="./assets/images/Groupe 894.svg" />
                </i>

            </div>
            <div style={divStyle} className="stepContainer">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 6 29">
                    <line id="Ligne_6383" data-name="Ligne 6383" y2="29" transform="translate(3)" fill="none" stroke="#d00b41" stroke-width="6" />
                </svg>
            </div>

            <div className="d-flex">
                {passDelayList.map((delay, index) => (
                    <div key={index} id={delay.configId?.toString()} style={divStylee} className="step">
                        <button id={index.toString()} onClick={onchangeStep} className={index == currentStep - 1 ? "" : ""}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 6 29">
                                <line id="Ligne_6383" data-name="Ligne 6383" y2="29" transform="translate(3)" fill="none" stroke="black" stroke-width="6" />
                            </svg>
                        </button>
                        <span style={index % 2 != 0 ? divStyleee : {}}>
                            {delay.nbrMonths} Mois
                        </span>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default SliderDelay