import { useContext } from "react";
import { SubjectContext } from "./ContextData";

function Subject() {
  const subject = useContext(SubjectContext);
  return (
    <div style={{backgroundColor:"indigo", padding:"10px", color:"black"}}>
      <h4>Subject Component</h4>
      <p>{subject}</p>
    </div>
  )
}

export default Subject;