import { MdAirlineSeatFlatAngled } from 'react-icons/md';
import { IoMdPricetags } from 'react-icons/io';
import { FaCalendarAlt } from 'react-icons/fa';
import { IoMdAirplane } from 'react-icons/io';
import { BsSliders } from 'react-icons/bs';
import { MdSubscriptions } from 'react-icons/md';
import { RiBook2Line } from 'react-icons/ri';
const DescriptionIndex = () => {

    return (
        <div className="description bg-white ">
            <div className="section row">
                <div className="col-4">
                    <div className="d-flex">
                        <i><MdAirlineSeatFlatAngled /></i>
                        <div>
                            <h4>Siège garanti</h4>
                            <p className='col-8'>
                                Achetez votre abonnement maintenant et réservez vos vols à votre convenance
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-4">
                    <div className="d-flex">
                        <i><IoMdPricetags /></i>
                        <div>
                            <h4>Prix fixe garanti</h4>
                            <p className='col-8'>
                                Achetez votre abonnement maintenant et réservez vos vols à votre convenance
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-4">
                    <div className="d-flex">
                        <i><FaCalendarAlt /></i>
                        <div>
                            <h4>Personnalisez-le</h4>
                            <p className='col-8'>
                                Achetez votre abonnement maintenant et réservez vos vols à votre convenance
                            </p>
                        </div>
                    </div>
                </div>
            </div>
                <h2>
                    Comment Ça Fonctionne ?
                </h2>
            <div className='row'>
                <div className='col-3'>
                    <div className='section d-flex flex-column align-items-center'>
                        <i className='mb-3'><IoMdAirplane /></i>
                        <h6 className='mb-3'>
                            Choisissez
                            un FlightPass
                        </h6>
                        <p className='text-center'>
                            Achetez votre abonnement maintenant et réservez vos vols à votre convenance
                        </p>
                    </div>
                </div>
                <div className='col-3'>
                    <div className='section d-flex flex-column align-items-center'>
                        <i className='mb-3'><BsSliders /></i>
                        <h6 className='mb-3'>
                            Choisissez
                            un FlightPass
                        </h6>
                        <p className='text-center'>
                            Achetez votre abonnement maintenant et réservez vos vols à votre convenance
                        </p>
                    </div>
                </div>
                <div className='col-3'>
                    <div className='section d-flex flex-column align-items-center'>
                        <i className='mb-3'><MdSubscriptions /></i>
                        <h6 className='mb-3'>
                            Choisissez
                            un FlightPass
                        </h6>
                        <p className='text-center'>
                            Achetez votre abonnement maintenant et réservez vos vols à votre convenance
                        </p>
                    </div>
                </div>
                <div className='col-3'>
                    <div className='section d-flex flex-column align-items-center'>
                        <i className='mb-3'><RiBook2Line /></i>
                        <h6 className='mb-3'>
                            Choisissez
                            un FlightPass
                        </h6>
                        <p className='text-center'>
                            Achetez votre abonnement maintenant et réservez vos vols à votre convenance
                        </p>
                    </div>
                </div>
            </div>
        </div>

    )

}
export default DescriptionIndex