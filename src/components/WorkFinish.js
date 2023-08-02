import React, { useEffect, useState } from "react";
import GetSessionStorageOrDefault from "./Session";

const WorkFinish = () => {

    const submitForm = () => {
        sessionStorage.clear();
    };

    return (
        <div>
            <div className="success">
                <div className="checkmark">
                    <div className="checkmark_stem"></div>
                    <div className="checkmark_kick"></div>
                </div>
            </div>
            <h1 className="cover-title">Congratulations, {GetSessionStorageOrDefault('BasicInfo', "displayName", "Eden")}</h1>
            <p className="cover-sub-title">You have completed onboarding, you can start using the {GetSessionStorageOrDefault('WorkDetails', "workspaceName", "Eden")}!</p>
            <div className="cover-content">
                <button className="btn" onClick={submitForm}>Launch {GetSessionStorageOrDefault('WorkDetails', "workspaceName", "Eden")}</button>
            </div>
        </div>
    )
}

export default WorkFinish;