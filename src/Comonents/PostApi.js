import React,{useState} from 'react'

const PostApi = () => {
    const [name, setname] = useState('')
    const [email, setemail] = useState('')
    const [Adderess, setadderess] = useState('')

    function saveUser(){
        console.log(name,email,Adderess);
        let data= {name,email,Adderess}

        fetch('http://localhost:3000/users',{
            method:'POST',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify(data)

        }).then((result)=>{
            // console.log("Result:" ,response);
            result.json().then((response)=>{
                console.log('Results', response);
            })
    })

    }
    return (
        <div>
            <h1>Post Api Example</h1>
            <input type="text" value={name}  onChange={(e)=>{setname(e.target.value)}}  name="name"  placeholder='enter name...' /> <br /><br />
            <input type="text" value={email} onChange={(e)=>{setemail(e.target.value)}} name="email" placeholder='enter email..' /><br /><br />
            <input type="text"  value={Adderess} onChange={(e)=>{setadderess(e.target.value)}} name="Adderess" placeholder='enter adderess'/><br /><br />
            <button type='button' onClick={saveUser}>Save newUser</button>

        </div>
    )
}

export default PostApi
