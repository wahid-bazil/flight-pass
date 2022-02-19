import HeaderInder from "./component/header";
import { BrowserRouter, Route } from "react-router-dom";
import "./style/header.scss"
import "./style/userInterface.scss"
import "./style/header.scss"
import "./style/util.scss"
import "./style/map-vol.scss"
import "./style/slider.scss"
import "./style/configuration.scss"
import "./style/description.scss"
import "./style/customization.scss"
import "./style/home.scss"
import "./style/App.scss"
import "./style/auth.scss"
import "./style/select.scss"

import HomeIndex from "./component/achat/home/index";
import ConfigurationIndex from "./component/achat/configuration";
import axiosInstance from "./axiosConfig";
import { useDispatch } from 'react-redux';
import { authActions } from './store/auth';
import { User } from "./type";
import Login from "./component/auth/login";
import Select from "./component/achat/home/segmentDescription/select";
import { Slide, Slider } from "@mui/material";
import SliderDelay from "./component/achat/configuration/sliderDelay";



const App: React.FunctionComponent = () => {
    /*const dispatch = useDispatch();
    axiosInstance
        .post("./auth")
        .then((res) => {
            const user: User = {
                firstName: res.data.firstName,
                lastName: res.data.lastName,
            }
            dispatch(authActions.login(user));
        })
        */
    const marks = [
        {
            value: 0,
            label: '0°C',
        },
        {
            value: 20,
            label: '20°C',
        },
        {
            value: 37,
            label: '37°C',
        },
        {
            value: 100,
            label: '100°C',
        },
    ];

    function valuetext(value: number) {
        return `${value}°C`;
    }

    function valueLabelFormat(value: number) {
        return marks.findIndex((mark) => mark.value === value) + 1;
    }

    return (
        <div className="App">
            <HeaderInder />
            <BrowserRouter>
                <Route exact path="/" component={HomeIndex} />
                <Route exact path="/configuration" component={ConfigurationIndex} />
                <Route exact path="/login" component={Login} />
            </BrowserRouter>
        </div>
    );
};

export default App;

