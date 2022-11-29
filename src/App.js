import { ref, onValue } from "firebase/database";
import {db} from "./firebase";
import {useState,useEffect} from "react";
import { redirect, useNavigate } from "react-router-dom";


function App() {
  let navigate = useNavigate();
  const [id,setid] = useState("");
  const [idArr ,setidArr] = useState([]);
  const [status,setstatus] = useState("");
  const [locstatus,setlocstatus] = useState("ScienceBlock");
  let keyId = 0;

  useEffect(()=>{
    
    onValue(ref(db,"ID"), snapshot => {
      setidArr([]);
      const data=snapshot.val()
      if(data !== null){
        Object.values(data).map((ele) => {
          setidArr(oldArray => [...oldArray,ele]);
        });
      }
    });
  },[])



  const handleToDoChange=(e)=>{
    setid(e.target.value);
  }

  const redirectedPage = ()=>{
    for (var j = 0 ; j < idArr.length; j++){
      if(idArr[j].idnum == id){
        keyId = j;
        setstatus("true");
        let data = idArr[keyId].name;
        let locate = locstatus;
        // console.log(locate);
        navigate("/dashboard",{state:{loc: locate }});
        break;
      }
      if(j===idArr.length-1){
        navigate("/error");
      }
    }
    
    


    setid("");
  }




  return (
    //dummyAppBody is just for designing purpose
    <div className="dummyMainDiv">
      <div className="opacdiv1"></div>
      <div className="opacdiv2"></div>
      <div className="dummyAppBody">
        <div className="AppBody">
          <div className="AppbodyMain">
            <div className="App">
              <h1>Admin Login</h1>
              <h2>Enter your id: </h2>
              <input type="text" placeholder="Enter your ID number" value={id} onChange={handleToDoChange}></input>
              <h2>Location: </h2>
              <select value={locstatus} onChange={(e) => setlocstatus(e.target.value)}>
                <option value="ScienceBlock">Science Block</option>
                <option value="AdminBlock">Admin Block</option>
                <option value="MainGate">Main Gate</option>
                <option value="PoovamGate">Poovam Gate</option>
                <option value="BOH">BOH</option>
                <option value="GLH">GLH</option>
                <option value="MoyarHostel">Moyar Hostel</option>
                <option value="Canteen">Canteen</option>
              </select>
              <div className="button" onClick={redirectedPage}>Submit</div>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default App;
