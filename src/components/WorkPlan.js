import React, { useEffect, useState } from "react";
import avator from './images/avator.png';
import group from './images/group.png';
import GetSessionStorageOrDefault from "./Session";

const WorkPlan = (props) => {

    const [plan1, setPlan1] = useState(
        GetSessionStorageOrDefault('WorkPlan', "plan1", "active-list")
    );

    const [plan2, setPlan2] = useState(
        GetSessionStorageOrDefault('WorkPlan', "plan2", "")
    );

    const handleClick = (e) => {
        if (e.target.id === "plan1" || e.currentTarget.id == "plan1") {
            setPlan1('active-list');
            setPlan2('');
        } else {
            setPlan1('');
            setPlan2('active-list');
        }
    }

    const submitForm = () => {
        const WorkPlan = {
            plan1: plan1,
            plan2: plan2
        }
        sessionStorage.setItem('WorkPlan', JSON.stringify(WorkPlan));
        props.handleSteps('work-finish');
    };

    return (
        <div>
            <h1 className="cover-title">How are you planning to use Eden?</h1>
            <p className="cover-sub-title">We'll streamline your setup experience accordingly.</p>
            <div className="cover-content">
                <ul>
                    <li className={"cover-list " + plan1} id="plan1" onClick={handleClick}>
                        <img src={avator} alt="avator" width="20px" />
                        <h2>For Myself</h2>
                        <p>Write better. Think more clearly. Stay organized.</p>
                    </li>
                    <li className={"cover-list " + plan2} id="plan2" onClick={handleClick}>
                        <img src={group} alt="group" width="20px" />
                        <h2>With my team</h2>
                        <p>Wikis, docs, tasks & projects, all in one place.</p>
                    </li>
                </ul>
                <button className="btn" onClick={submitForm}>Create Workspace</button>
            </div>
        </div>
    )
}

export default WorkPlan;