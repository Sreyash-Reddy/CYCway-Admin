import { ref, onValue } from "firebase/database";
import {db} from "./firebase";
import {useState,useEffect} from "react";
import { redirect, useNavigate } from "react-router-dom";


function App() {
  let navigate = useNavigate();
  const [id,setid] = useState("");
  const [idArr ,setidArr] = useState([]);
  const [status,setstatus] = useState("");
  const [locstatus,setlocstatus] = useState("test");
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
        navigate("/363337393633373736313739323037373635363236393734363532303732363536343639373236353633373436353634323037343666323036343631373336383632366636313732363432633230363936363230373436383639373332303631363436343732363537333733323036393733323036363666373536653634323036663735373432303734363836353665323036393734373332303631323036333666366437303732366636643639373336353230336132393362",{state:{loc: locate }});
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
                <option value="test">test</option>
                <option value="test2">test2</option>
                <option value="test3">test3</option>
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
