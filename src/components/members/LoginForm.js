// import { BadgeBase } from '@reusejs/react/dist/types';
import React from 'react'

function LoginForm() {
  const [loginData,setLoginData] = React.useState("");
      const handleSubmit = e =>{
            e.preventDefault();
            alert(loginData)
      }
      const handleChange = e =>{
        setLoginData(e.target.value);
      }
      console.log("Your Data",loginData)
  return (
    <>
      <form onSubmit={handleSubmit}>
            <h1 className='text-red-500 bg-blue-300'>Hello</h1>
            {/* <BadgeBase label='Email Address' /> */}
            <input type="text" placeholder='Enter Username' value={loginData} onChange={handleChange}/>
            <br/>
            <button type="submit">Login</button>
      </form>
    </>
    
  )
}

export default LoginForm