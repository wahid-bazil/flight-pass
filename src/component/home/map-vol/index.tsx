import { GiAirplaneArrival } from "react-icons/gi";
import { RiArrowLeftRightLine } from "react-icons/ri";
import { GiAirplaneDeparture } from "react-icons/gi";
import { RiSendPlane2Line } from "react-icons/ri";
import MapEarth from "./mapEarth";

const MapVolIndex = () => {
    return (
        <div className="vol-map">
            <div className="row">
                <div className="details col-6">
                    <div className="position-relative">
                        <img src="./assets/images/Intersection-29.png" alt="" />
                        <div className="title">
                            <h4>FlightPass</h4>
                        </div>
                        <div className="options">
                            <div>
                                <div className="label">
                                    Options fixes
                                </div>
                                <div className="Itineraries">
                                    <div className="text-secondary">
                                        Itinéraires
                                    </div>
                                    <div>
                                        <i className="air-plan"><GiAirplaneArrival /></i><span>Casa</span><i className="arrow"><RiArrowLeftRightLine /></i><i className="air-plan"><GiAirplaneDeparture /></i><span>Barcelone</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="options">
                            <div>
                                <div className="text-secondary">
                                    Voyage vers le même aéroport<br /><span>Jusqu’à 10 fois</span>
                                </div>
                                <br />
                                <div className="text-secondary">
                                    Nombre de vol <br /><span>10</span>
                                </div>
                                <br />
                                <div className="text-secondary">
                                    Période de voyage <br /><span>6 mois</span>
                                </div>
                                <br />
                                <div className="label">
                                    Options fixes
                                </div>
                                <ul>
                                    <li>
                                        <i><RiSendPlane2Line /></i>Voyage aux heures de pointe
                                    </li>
                                    <li>
                                        <i><RiSendPlane2Line /></i> Compensation carbone
                                    </li>
                                    <li>
                                        <i><RiSendPlane2Line /></i>  Période de réservation anticipée
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="d-flex  align-items-center justify-content-between p-3 pt-2 pb-2">
                            <button className="btn-Configurator">
                                Configurator
                            </button>
                            <div className="total">
                                6000 <span>DH</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-6 map">
                    <MapEarth/>
                </div>
            </div>
        </div>

    )
}
export default MapVolIndex