import ConfigurationIndex from "./component/configuration";
import FormContact from "./component/configuration/form-contact";
import ConfigurationOptions from "./component/configuration/options";
import ConfigurationStepper from "./component/configuration/stepper";
import HeaderInder from "./component/header";
import DescriptionIndex from "./component/home/description";
import MapVolIndex from "./component/home/map-vol";
import SliderIdex from "./component/home/slider";





function App() {
  return (
    <div className="container configuration App  mt-3">
    {/*  <HeaderInder/>
      <SliderIdex/>
      <DescriptionIndex/>
      <MapVolIndex/>
    */}
    
      < FormContact/>
    </div>
  );
};


export default App;

