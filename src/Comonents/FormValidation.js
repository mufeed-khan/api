import React, { useState } from 'react'

const FormValidation = () => {
    const [user, setuser] = useState('')
    const [password, setpassword] = useState('')
    const [userErr, setuserErr] = useState(false)
    const [passErr, setpassErr] = useState(false)

    function userhandler(e) {
        let item=e.target.value
        if(item.length<3){
            setuserErr(true)
        }
        else
        {
            setuserErr(false)
        }
        setuser(item)
        
        
    }

    function passwordhandler(e) {
        let item=e.target.value
        if(item.length<3){
            setpassErr(true)
        }
        else
        {
            setpassErr(false)
        }
        setpassword(item)
        
    }


    function loginHandler(e){

        if(user.length<3 || password.length<3){
            alert('type correct value')
        }
        else
        {
            alert('All good')
        }
        e.preventDefault()
    }

   
    
    return (
        <div >
          <form onSubmit={loginHandler}>
          <h1>Login</h1>
            <input type="text" onChange={userhandler} /> {userErr ? <span>user not valid</span>:""} <br /><br />
            <input type="password" onChange={passwordhandler}/>{passErr ? <span>password not valid</span>:""} <br /><br />
            <button >Login</button>
          </form>

        </div>
    )

}

export default FormValidation




