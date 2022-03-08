import { useState, useEffect } from "react";

function getSavedValue(key, initialvalue) {
    const savedValue =JSON.parse(localStorage.getItem(key));
    if (savedValue){
        return savedValue;
    }else{
        return initialvalue;
    }
}

export default function LocalStorage(key, initialvalue){
    let [value, setValue] = useState(() => {
        return getSavedValue(key, initialvalue);
    });

    useEffect(() =>{
        localStorage.setItem(key, JSON.stringify(value));
    }, [value, key]);

    return [value, setValue];
}