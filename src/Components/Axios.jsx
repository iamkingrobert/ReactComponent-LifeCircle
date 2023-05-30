import {useEffect, useState} from 'react';
import axios from 'axios';

// Functional Methods for fetching data from API
export default function Axios() {
    const [users, setUsers] = useState([])

    useEffect(() =>{
        axios.get('https://jsonplaceholder.typicode.com/users/')
        .then(result => setUsers(result.data)
        .catch(err => console.log(err)));
       
    },[])
  return (
    <div>
       <h1>Axios API Calls</h1> 
       {users.map((item)=>{
        return(
            <div key={item.id}>
            <h2>Name: {item.name}</h2>
            <h2>Name: {item.username}</h2>
            <h2>Name: {item.email}</h2>
            </div>
        )
       })}
      
    </div>
  )
}