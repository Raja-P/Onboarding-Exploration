import React, { useState } from "react";
import GetSessionStorageOrDefault from "./Session";

const WorkDetails = (props) => {

    const [workspaceName, setWorkspaceName] = useState(
        GetSessionStorageOrDefault('WorkDetails', "workspaceName", "")
    );
    const [workspaceURL, setWorkspaceURL] = useState(
        GetSessionStorageOrDefault('WorkDetails', "workspaceURL", "")
    );
    const [workspaceNameError, setWorkspaceNameError] = useState("");

    const onChangeValidation = (e) => {
        if (e.target.id === 'workspaceName') {
            setWorkspaceName(e.target.value);
            setWorkspaceNameError('');
        }
    }

    const validation = () => {
        let flag = true;
        if (workspaceName === '') {
            flag = false;
            setWorkspaceNameError('error');
        } else {
            setWorkspaceNameError('');
        }
        return flag;
    }

    const submitForm = () => {
        if (validation()) {
            const WorkDetails = {
                workspaceName: workspaceName,
                workspaceURL: workspaceURL
            }
            sessionStorage.setItem('WorkDetails', JSON.stringify(WorkDetails));
            sessionStorage.removeItem("WorkPlan");
            props.handleSteps('work-plan');
        }
    };
    return (
        <div>
            <h1 className="cover-title">Let's set up a home for all your work</h1>
            <p className="cover-sub-title">You can always create another workspace later.</p>
            <div className="cover-content">
                <div className="cover-fields">
                    <label htmlFor="workspaceName">Workspace Name</label>
                    <input type="text" placeholder="Eden" name="workspaceName" autocomplete="off" id="workspaceName" value={workspaceName} onChange={e => onChangeValidation(e)} className={workspaceNameError} />
                </div>
                <div className="cover-fields">
                    <label htmlFor="displayName">Workspace URL <span>(optional)</span></label>
                    <div className="cover-fieldGroup">
                        <div>www.eden.com/</div>
                        <input type="text" placeholder="Example" name="workspaceURL" autocomplete="off" id="workspaceURL" value={workspaceURL} onChange={e => setWorkspaceURL(e.target.value)} />
                    </div>

                </div>
                <button className="btn" onClick={submitForm}>Create Workspace</button>
            </div>
        </div>
    )
}

export default WorkDetails;
