import User from "./User"
function ButtonIn(){

  const styles = {
      backgroundColor: "blue",
      padding:"10px 20px",
      borderRadius: "10px",
      color: "black",
      border:"none",
  }
  return (
    <button style={styles}>
      <User isLoggedIn={true} userName="ABC123"/>
    </button>
  )
}

export default ButtonIn