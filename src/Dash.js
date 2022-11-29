import { redirect, useLocation } from "react-router-dom";
import QR from "./QRGenerator";
import Error from "./Error";

function Dash() {
    const {state} = useLocation();
    let locationVal = state?.loc;
    console.log({locationVal})
    if(!locationVal){
        // redirect("/error")
        return(
            <Error></Error>
        )
    }
    else{
        return(
            <QR locData={locationVal}/>
        )
    }
    
}

export default Dash;
