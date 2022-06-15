import { useEffect, useState } from "react"

const useCustom=(sizeInp)=>{
    const [screenSize,setScreenSize]=useState(false);

    useEffect(()=>{
        const chkScreenSize=()=>{
            setScreenSize(window.innerWidth<sizeInp);
        };

        chkScreenSize();

        window.addEventListener('resize',chkScreenSize);

        return ()=>window.removeEventListener('resize',chkScreenSize);
    },[sizeInp]);

    return screenSize;
};

export default useCustom;