import React from "react";
import "./stepper.css"
import Step from './step';

const Stepper = (props) => {
    let activePosition = '0';
    const stepperDetails = [
        { name: "basic-info", label: "Workspace Basic Information", position: "0" },
        { name: "work-details", label: "Workspace Details", position: "1" },
        { name: "work-plan", label: "Workspace Plan", position: "2" },
        { name: "work-finish", label: "Finish", position: "3" }
    ];

    stepperDetails.forEach(element => {
        if (props.active == element.name) {
            activePosition = element.position;
        }
    });
    const listItems = stepperDetails.map((value, key) =>
        <Step
            key={key}
            id={key}
            name={value.label}
            active={activePosition}
            pathName={value.name}
            handleEvent={props.handleSteps}
        />
    );
    return (
        <ul className="progressbar">
            {listItems}
        </ul>
    );
};

export default Stepper