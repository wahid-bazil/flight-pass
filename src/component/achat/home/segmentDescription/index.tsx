import { GiAirplaneArrival } from "react-icons/gi";
import { RiArrowLeftRightLine } from "react-icons/ri";
import { GiAirplaneDeparture } from "react-icons/gi";
import { RiSendPlane2Line } from "react-icons/ri";
import MapEarth from "./mapEarth";
import Options from "./options";

const SgmentDescriptionIndex = () => {
    return (
        <div className="segmentDescription">
            <h4>Nos Passes De Vols :</h4>
            <div className="d-flex justify-content-between">
                <div className="col-12 col-md-6 col-lg-5">
                    <Options />
                </div>
                <div className="col-12 col-md-6 col-lg-6">
                    <MapEarth />
                </div>
            </div>
        </div>

    )
}
export default SgmentDescriptionIndex