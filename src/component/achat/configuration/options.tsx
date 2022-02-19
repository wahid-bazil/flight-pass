import Checkbox from '@mui/material/Checkbox';
import { GiAirplaneDeparture } from 'react-icons/gi';
import { RiArrowLeftRightFill } from 'react-icons/ri';
import { GiAirplaneArrival } from 'react-icons/gi';
import { IoMdArrowDropdown } from 'react-icons/io';
import Slider from '@mui/material/Slider';
import { makeStyles } from '@mui/styles';
import SliderDelay from './sliderDelay';
import SelectSegment from './selectSegment';
import SelectBaseConfig from './selectBaseConfig';
import SelectDayToDepparture from './selectDayToDeparture';

const useStyles = makeStyles({
    root: {
        width: '',
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
        <div className=" ">
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
                        <SelectSegment/>
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
                        <SelectBaseConfig/>
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
                            <SelectDayToDepparture/>
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
                        <SliderDelay />
                    </div>
                </div>
               
            </div>
        </div>
    )
}
export default ConfigurationOptions
