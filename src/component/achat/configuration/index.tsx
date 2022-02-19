
import { getConfig } from "@testing-library/react"
import { useEffect } from "react"
import { useDispatch } from "react-redux"
import axiosInstance from "../../../axiosConfig"
import configuration, { configActions } from "../../../store/configuration"
import { homeActions } from "../../../store/home"
import { baseConfig } from "../../../type"
import ConfigurationOptions from "./options"
import ConfigurationStepper from "./stepper"

const ConfigurationIndex = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        const getConfig = async () => {
            await Promise.all([
                axiosInstance.get<baseConfig[]>("/api/config/baseConfig"),
                axiosInstance.get("/api/config/passDelay"),
                axiosInstance.get("/api/config/dayToDeparture"),
                axiosInstance.get("/business/segment/getAll")

            ]).then((res) => {
                console.log(res[2].data, 'ress')
                dispatch(configActions.setBaseConfigList(res[0].data))
                dispatch(configActions.setDelayList(res[1].data))
                dispatch(configActions.setDayToDepartureList(res[2].data))
                dispatch(homeActions.setSegmants(res[3].data.content))

            }).catch(() => {

            })

        }
        getConfig()




    }, [])

    return (
        <div className="configuration p-5">
            <div className="mb-5">
                <ConfigurationStepper />
            </div>
    
            {/*<ConfigurationOptions />*/}

           {/* <div className="total">
                <div>
                    <h2>9000</h2> <span>MAD</span>
                    <p>(Taxes include et surcharges)</p>
                </div>
            </div>
    */}
        </div>
    )
}
export default ConfigurationIndex