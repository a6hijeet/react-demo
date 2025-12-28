import { useState } from "react";
import College from "./College";
import { SubjectContext } from "./ContextData";

function ContextTest() {
  const [subject, setSubject] = useState("");



  return(
    <div style={{backgroundColor:"yellow", padding:"10px", color:"black"}}>
    <h1>Context API</h1>
    <SubjectContext.Provider value={subject}>
      <select onChange={(e) => setSubject(e.target.value)}>
        <option value="">Select Subject</option>
        <option value="Maths">Maths</option>
        <option value="Physics">Physics</option>
        <option value="Chemistry">Chemistry</option>
        <option value="Biology">Biology</option>
        <option value="English">English</option>
      </select>
    <College />
    </SubjectContext.Provider>
    </div>
  )
}

export default ContextTest;