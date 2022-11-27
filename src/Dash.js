import { useLocation } from "react-router-dom";
import QR from "./QRGenerator";

function Dash() {
    const {state} = useLocation();
    let locationVal = state.loc;
    return(
        <QR locData={locationVal}/>
    )
}

export default Dash;
