import Checkbox from '@mui/material/Checkbox';
import { GiAirplaneDeparture } from 'react-icons/gi';
import { RiArrowLeftRightFill } from 'react-icons/ri';
import { GiAirplaneArrival } from 'react-icons/gi';
import { IoMdArrowDropdown } from 'react-icons/io';
import Slider from '@mui/material/Slider';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    root: {
        width:'',
        '& .MuiSlider-thumb': {
            borderRadius: '1px',
            width: "5px",
            background: " #d00b41",
        },
        '& .MuiSlider-rail': {
            background: "#d00b41",
        },
        '& .MuiSlider-dragging': {
            background: " #d00b41",
        },
        '& .MuiSlider-track': {
            background: " #d00b41",
        }


    }
});


const ConfigurationOptions = () => {
    const classes = useStyles();
    return (
        <div className="options row">
            <div className="col-4 border-right">
                <div>
                    <div className="label">
                        <Checkbox sx={{
                            color: '#C20831',
                            '&.Mui-checked': {
                                color: '#C20831',
                            },
                        }} defaultChecked /><span>Itinéraire sélectionné</span>
                    </div>
                    <div className='value'>
                        <i className='air-plan'><GiAirplaneDeparture /></i><span>Casablanca</span><i className='arrow-left-right'><RiArrowLeftRightFill /></i><i className='air-plan'><GiAirplaneArrival /></i><span>Paris</span>
                    </div>
                </div>
            </div>
            <div className="col-4 border-right">
                <div>
                    <div className="label">
                        <Checkbox sx={{
                            color: '#C20831',
                            '&.Mui-checked': {
                                color: '#C20831',
                            },
                        }} defaultChecked /><span>Configuration Basique</span>
                    </div>
                    <div className='value'>
                        <span>6 Coupons</span><i><IoMdArrowDropdown /></i>
                    </div>
                </div>
            </div>
            <div className="col-4 border-0">
                <div>
                    <div className='label'>
                        <Checkbox sx={{
                            color: '#C20831',
                            '&.Mui-checked': {
                                color: '#C20831',
                            },
                        }} defaultChecked /><span>Réservation à l’avance</span>
                    </div>
                    <div className='value'>
                        <span>12 Jours</span><i><IoMdArrowDropdown /></i>
                    </div>
                </div>
            </div>
            <div className="col-12 border-0">
                <div>
                    <div className='label'>
                        <Checkbox sx={{
                            color: '#C20831',
                            '&.Mui-checked': {
                                color: '#C20831',
                            },
                        }} defaultChecked /><span>Durée du passe</span>
                    </div>
                    <div>
                        <div className='slider'>
                            <Slider
                                className={classes.root}
                                aria-label="Temperature"
                                defaultValue={30}
                                valueLabelDisplay="auto"
                                step={10}
                                marks
                                min={10}
                                max={110}
                            />
                            <i className='left'>
                                <img src="./assets/images/Groupe 894.svg"/>
                            </i>
                            <i className='right'>
                                <img src="./assets/images/Groupe 894.svg"/>
                            </i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ConfigurationOptions