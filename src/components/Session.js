import React from "react";

const Session = (key, name, defaultValue) => {
    const stored = sessionStorage.getItem(key);
    if (!stored) {
        return defaultValue;
    }
    const value = JSON.parse(stored);
    return value[name];
}

export default Session;