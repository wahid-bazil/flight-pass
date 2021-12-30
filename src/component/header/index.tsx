import {BiUser} from 'react-icons/bi';
import {BiUserCircle} from 'react-icons/bi';
function Header() {
    const image = ['./assets/images/logo.png', './assets/images/oneworld-logo.png']
    return (
        <header className="bg-white ">
            <div className="d-flex justify-content-between align-items-center ">
                <div className="logo col-6 ">
                    <div className="ram">
                        <img src={image[0]} />
                    </div>
                    <div className="one-world">
                        <img src={image[1]} />
                    </div>
                </div>
                <ul className="d-flex justify-content-between col-6">
                    <li>
                        Comment ça fonctionne ?
                    </li>
                    <li>
                        FAQ
                    </li>
                    <li>
                        <button className='btn btn-sign-in'>
                            <i><BiUserCircle/></i><span>Connexion</span>
                        </button>
                    </li>
                </ul>
            </div>

        </header>
    );
}
export default Header