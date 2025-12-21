function User(props) {

  return(props.isLoggedIn ? 
  <span>Hi, {props.userName}</span> : 
  <span>Login</span>)
}

export default User