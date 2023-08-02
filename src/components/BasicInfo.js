import React, { useState } from "react";
import GetSessionStorageOrDefault from "./Session";

const BasicInfo = (props) => {

    const [fullName, setFullName] = useState(
        GetSessionStorageOrDefault('BasicInfo', "fullName", "")
    );
    const [displayName, setDisplayName] = useState(
        GetSessionStorageOrDefault('BasicInfo', "displayName", "")
    );
    const [fullNameError, setFullNameError] = useState("");
    const [displayNameError, setDisplayNameError] = useState("");

    const validation = () => {
        let flag = true;
        if (fullName == '') {
            flag = false;
            setFullNameError('error');
        } else {
            setFullNameError('');
        }
        if (displayName == '') {
            flag = false;
            setDisplayNameError('error');
        } else {
            setDisplayNameError('');
        }
        return flag;
    }

    const onChangeValidation = (e) => {
        if (e.target.id === 'fullName') {
            setFullName(e.target.value);
            setFullNameError('');
        } else if (e.target.id === 'displayName') {
            setDisplayName(e.target.value);
            setDisplayNameError('');
        }
    }

    const submitForm = () => {
        if (validation()) {
            const BasicInfo = {
                fullName: fullName,
                displayName: displayName
            }
            sessionStorage.setItem('BasicInfo', JSON.stringify(BasicInfo));
            sessionStorage.removeItem("WorkDetails");
            props.handleSteps('work-details');
        }
    };

    return (
        <div>
            <h1 className="cover-title">Welcome! First things first...</h1>
            <p className="cover-sub-title">You can always change them later.</p>
            <div className="cover-content">
                <div className="cover-fields">
                    <label htmlFor="fullName">Full Name</label>
                    <input type="text" placeholder="Steve Jobs" autocomplete="off" name="fullName" id="fullName" value={fullName} onChange={e => onChangeValidation(e)} className={fullNameError} />
                </div>
                <div className="cover-fields">
                    <label htmlFor="displayName">Display Name</label>
                    <input type="text" placeholder="Steve" autocomplete="off" name="displayName" id="displayName" value={displayName} onChange={e => onChangeValidation(e)} className={displayNameError} />
                </div>
                <button className="btn" onClick={submitForm}>Create Workspace</button>
            </div>
        </div>
    )
}

export default BasicInfo;