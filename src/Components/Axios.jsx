import {useEffect, useState} from 'react';
import axios from 'axios';

// Functional Methods for fetching data from API
export default function Axios() {
    const [todo, setTodo] = useState([])

    useEffect(() =>{
        axios.get('https://jsonplaceholder.typicode.com/todos/')
        .then(result => setTodo(result.data)
        .catch(err => console.log(err)));
       
    },[])
  return (
    <div>
       <h1>Axios API Calls</h1> 
       {todo.map((item)=>{
        return(
            <div key={item.id}>
            <h2>Title: {item.title}</h2>
            </div>
        )
       })}
      
    </div>
  )
}