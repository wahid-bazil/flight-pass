
const active = true;

const ConfigurationStepper = () => {
    return (
        <div className="stepper">
            <div className="col-4 selection ">
                <div className={active ? 'active-phase' : ''}>
                    <i><img src='./assets/images/Untitled-1-03.png' alt="" /></i>
                    <h6>Sélection</h6>
                </div>
            </div>
            <div className="col-4">
                <div>
                    <i><img src='./assets/images/Groupe 868.png' /></i>
                    <h6>Informations personnels</h6>
                </div>
            </div>
            <div className="col-4">
                <div>
                    <i><img src='./assets/images/Untitled-1-04.png' /></i>
                    <h6>Paiement</h6>
                </div>
            </div>
        </div>
    )
}
export default ConfigurationStepper