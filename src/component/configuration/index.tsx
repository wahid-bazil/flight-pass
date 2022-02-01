import { Stepper } from "@mui/material"
import ConfigurationForm from "./form"
import ConfigurationOptions from "./options"
import ConfigurationStepper from "./stepper"

const ConfigurationIndex = () => {
    return (
        <div className="configuration">
            <div className="mb-5">
                <ConfigurationStepper />
            </div>
            <ConfigurationOptions />
            <div className="total">
                <div>
                    <h2>9000</h2> <span>MAD</span>
                    <p>(Taxes include et surcharges)</p>
                </div>
            </div>
        </div>
    )
}
export default ConfigurationIndex