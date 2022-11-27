import { set ,ref, onValue, update } from "firebase/database";
// import { collection , add } from "firebase/firestore";

import {db,db2} from "./firebase";
import {useState,useEffect} from "react";

const QR = (locData) => {
    const [dataQR,setDataQR] = useState("");
    const [dataFlag,setDataFlag] = useState(-1);
    const [dataName,setDataName] = useState("");
    const [disName,setDisName] = useState(" - - ");
    const [dataCycleName,setDataCycleName] = useState("");
    const [disCycleName,setDisCycleName] = useState(" - - ");
    const [dataCycleCount,setDataCycleCount] = useState();
    const [ridescount,setridescount] = useState();
    let data1=locData;

    let finalURL = "Location/"+data1.locData+"/valuedQR";
    let finalURL2 = "Location/"+data1.locData+"/count";
    let finalURL3 = "";
    let fdrt = document.getElementById("finaldatadisplay");
    const audio = new Audio("ding.mp3");

    // console.log({finalURL})

    useEffect(()=>{
        
      
        // audio.play();
    
        onValue(ref(db,finalURL), snapshot => {
          const data=snapshot.val()
          if(data !== null){
            setDataQR(data.valueDis);
            setDataFlag(data.flag);
            setDataName(data.name);
            setDataCycleName(data.cylScn);
            // console.log(dataQR);
          }
        });
        onValue(ref(db,finalURL2), snapshot1 => {
          const datacnt=snapshot1.val()
          if(datacnt !== null){
            setDataCycleCount(datacnt.cycCnt);
          }
        });
        
      },[])

    //   console.log(dataQR);
      let srcorig = "https://api.qrserver.com/v1/create-qr-code/?size=500x500&data=";
      
      if(dataFlag === 1){
        srcorig = srcorig+dataQR;
      }
      else if(dataFlag === 0){
        let start = (data1.locData).length+1;
        let QRlastData = dataQR.substring(start);
        let QRlastDataint = parseInt(QRlastData);
        QRlastDataint = QRlastDataint + 1;
        // console.log(dataMain);
        // console.log(QRlastDataint);
        setDisName(dataName);
        setDisCycleName(dataCycleName);
        setDataCycleCount(dataCycleCount + 1);
        let QRmodifiedData = data1.locData+"-"+ QRlastDataint;
        finalURL3="cycles/"+dataCycleName;


        // console.log(finalURL3);
        set(ref(db , finalURL),{
            flag:1,
            name:"",
            cylScn:"",
            valueDis:QRmodifiedData,
          });
        set(ref(db , finalURL2),{
            cycCnt: dataCycleCount+1
          });
        update(ref(db , finalURL3),{
            location:data1.locData
          });
          fdrt.classList.remove('finalData1')
          fdrt.classList.add('finalData');
          setTimeout(() => {
            fdrt.classList.remove('finalData')
            fdrt.classList.add('finalData1');

          }, 4000);

          


        // srcorig = srcorig+QRmodifiedData;

        // db2.collection()

        

      }

      


    return ( 

      
        <>
          <div className="dummyMainDashDiv">
            <div className="opacdiv1"></div>
            <div className="opacdiv2"></div>
            <div className="finalData1" id="finaldatadisplay">{disName}  has completed the ride succesfully 
            <div className="underlinediv"></div></div>
            <div className="dummyDashBody">
              
              <div className="DashBody">
                <div className="Dashimg">
                  <img src={srcorig}></img>
                </div>
              <div className="datacyc">
                {/* <audio src="/ding.mp3"></audio> */}
                <h1>Location:  {data1.locData} </h1>
                <h1>Last Cycle Scanned Information:</h1>
                <h2>Name : {disName}</h2>
                <h2>Cycle : {disCycleName}</h2>

                <h2>Total number of cycles available : {dataCycleCount}</h2>
              </div>
              </div>
            </div>
          </div>

        </>
     );
}
 
export default QR;