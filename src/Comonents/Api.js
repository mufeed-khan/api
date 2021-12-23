import React, { useEffect, useState } from "react";

const Api = () => {
  const [data, setdata] = useState([]);

  useEffect(() => {
    
    getList()
  }, []);


  function getList(){
    fetch("http://localhost:3000/users").then((result) => {
      result.json().then((response) => {
        setdata(response);
      });
    });
  }

  function deleteUser(id){
    alert(id)
    fetch(`http://localhost:3000/users/${id}`,{
      method:'DELETE',
    }).then((result)=>{
      result.json().then((response)=>{
        console.log(response);
        getList()
      })
    })

  }
  console.log(data);
  return (
    <div>
      <h1>Get Api Call</h1>

      <table border="1">
        <tr>
          <td>Id</td>
          <td>Name</td>
          <td>Email</td>
          <td>Adderess</td>
          <td>DeleteUser</td>

        </tr>
        {data.map((item,id) => 
            
          <tr key={id}>
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>{item.email}</td>
            <td>{item.Adderess}</td>
            <td><button onClick={()=>deleteUser(item.id)} >Delete</button></td>
          </tr>
        )}
      </table>
    </div>
  );
        }     

export default Api
