import Subject from "./Subject";

function Student() {
  return(
    <div style={{backgroundColor:"green", padding:"10px", color:"black"}}>
      <h3>Student component</h3>
      <Subject />
    </div>
  )
}

export default Student;