import React from 'react'

function RegisterForm() {
  const [userName, setUserName] = React.useState("")
  const [pass, setPass] = React.useState("")
const handleSubmit = e => {
  e.preventDefault();
  alert(userName,  pass)
}
  return (
    <>
     <form onSubmit={handleSubmit}>
            <input type="text" placeholder='Enter Username' value={userName} onChange={(e) => setUserName(e.target.value)}/>
            <br/>
            <input type="password" placeholder='Enter Password' value={pass} onChange={(e) => setPass(e.target.value)}/>
            <br/>
            <button type='submit'>Register</button>
      </form>
    </>
  )
}

export default RegisterForm