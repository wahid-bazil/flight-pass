import { BiUser } from 'react-icons/bi';
import { BiUserCircle } from 'react-icons/bi';
import { FiMenu } from "react-icons/fi";
import { useSelector, useDispatch } from 'react-redux';
import { Istate } from '../../store';
import { User } from '../../type';

const HeaderInder = () => {

    const image = ['./assets/images/logo-ram.svg', './assets/images/oneworld.png']
    const isAuthenticated: boolean = useSelector((state: Istate) => state.auth.isAuthenticated);
    const user: User = useSelector((state: Istate): User => {
        return { firstName: state.auth.firstName, lastName: state.auth.lastName }
    })

    return (
        <header>
            <div className="d-flex justify-content-between align-items-center ">
                <div className="logo">
                    <div className="ram">
                        <img src={image[0]} alt="" />
                    </div>
                    <div className="hl" />
                    <div className="one-world">
                        <img src={image[1]} alt="" />
                    </div>
                </div>
                <ul className="menu-large-device">
                    <li>
                        Comment ça fonctionne ?
                    </li>
                    <li>
                        FAQ
                    </li>
                    <li>
                        {!isAuthenticated ?
                            <button className='btn btn-sign-in'>
                                <i><BiUserCircle /></i><span>Connexion</span>
                            </button>
                            :
                            <span>{user.firstName} {user.lastName}</span>
                        }

                    </li>
                </ul>
                <ul className="menu-small-device">
                    <li className="menu-icon">
                        <FiMenu />
                    </li>
                </ul>
            </div>
        </header>
    );
}
export default HeaderInder