/**
 * This file will hold the Main content that lives in the main body of the site
 * 
 */
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./main.css";
import logo from '../images/logo.png';
import Stepper from '../Stepper';
import BasicInfo from '../BasicInfo';
import WorkDetails from '../WorkDetails';
import WorkPlan from '../WorkPlan';
import WorkFinish from '../WorkFinish';

const Main = (props) => {

    /**
     * Display list of user filtered products
     * @memberof Main
     * @param Router path name [String] - the props value from the parent component app.js
     */
    const [activeStep, setActiveStep] = useState('basic-info');
    const navigate = useNavigate();

    const components = {
        'basic-info': BasicInfo,
        'work-details': WorkDetails,
        'work-plan': WorkPlan,
        'work-finish': WorkFinish
    };

    const handleActiveStep = (active) => {
        navigate("/" + active);
        setActiveStep(active);
    };

    const renderStepPanel = () => {
        if (props.pathName !== activeStep) {
            handleActiveStep(props.pathName);
        }
        const TabPanel = components[activeStep];
        return <TabPanel handleSteps={handleActiveStep} />;
    };

    /**
     * Renders the default app in the window, we have assigned this to an element called root.
     * 
     * @returns JS
     * @memberof Main
    */
    return (
        <div className="page">
            <div className="cover">
                <img src={logo} alt="Eden" width="90px" />
                <Stepper active={activeStep} handleSteps={handleActiveStep} />
                {renderStepPanel()}
            </div>
        </div>
    )
}

// Export out the React Component
export default Main
