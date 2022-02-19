import {MdAirlineSeatFlatAngled} from "react-icons/md";
import {GoPlus} from "react-icons/go";
import {IoMdPricetags} from "react-icons/io";
import {FaCalendarAlt} from "react-icons/fa";

const CustomizationIndex = () => {
    return (
        <div className="customization">
            <ul className="small-device">
                <li>
                    <div>
                        <i className="seat">
                            <MdAirlineSeatFlatAngled/>
                        </i>
                        <span>Siège garanti</span>
                    </div>
                    <i className="plus">
                        <GoPlus/>
                    </i>
                </li>

                <li>
                    <div>
                        <i className="price">
                            <IoMdPricetags/>
                        </i>
                        <span>Prix fixe garanti</span>
                    </div>
                    <i className="plus">
                        <GoPlus/>
                    </i>
                </li>
                <li>
                    <div>
                        <i className="calendar">
                            <FaCalendarAlt/>
                        </i>
                        <span>Personnalisez-le</span>
                    </div>
                    <i className="plus">
                        <GoPlus/>
                    </i>
                </li>
            </ul>
            <ul className="large-device">
                <li className="">
                    <div className="d-flex">
                        <i><MdAirlineSeatFlatAngled /></i>
                        <div>
                            <h6>Siège garanti</h6>
                            <p>
                                Achetez votre abonnement <br/> maintenant et réservez vos <br/> vols à votre convenance
                            </p>
                        </div>
                    </div>
                </li>
                <li className="">
                    <div className="d-flex">
                        <i><IoMdPricetags /></i>
                        <div>
                            <h6>Prix fixe garanti</h6>
                            <p>
                                Achetez votre abonnement <br/> maintenant  et réservez vos <br/> vols à votre convenance
                            </p>
                        </div>
                    </div>
                </li>
                <li className="">
                    <div className="d-flex">
                        <i><FaCalendarAlt /></i>
                        <div>
                            <h6>Personnalisez-le</h6>
                            <p>
                                Achetez votre abonnement<br/> maintenant et réservez vos <br/> vols à votre convenance
                            </p>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    )
}
export default CustomizationIndex