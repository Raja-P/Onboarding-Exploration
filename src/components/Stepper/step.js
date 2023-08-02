import React from "react";

const Step = (props) => {
    let classN = 'step';
    if (props.active === 0 && props.id == 0) {
        classN += ' selected';
    } else if (props.active === 1 && (props.id <= 1 && props.active <= 1)) {
        classN += ' selected';
    } else if (props.active === 2 && (props.id <= 2 && props.active <= 2)) {
        classN += ' selected';
    } else if (props.active === 3 && (props.id <= 3 && props.active <= 3)) {
        classN += ' selected';
    }
    let stepName = props.id + 1;

    const stepNav = (e) => {
        console.log(e);
        if (e.target.classList[1] === 'selected') {
            props.handleEvent(e.target.id);
        }
    };

    return (
        <li className={classN} title={props.name} key={stepName} id={props.pathName} onClick={e => stepNav(e)}>
            {stepName}
        </li>
    )
}

export default Step
