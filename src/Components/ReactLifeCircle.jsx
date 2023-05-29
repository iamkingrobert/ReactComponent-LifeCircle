import { useEffect, useState } from 'react'

export default function ReactLifeCircle() {
    const[num, setNum] = useState(0)
    useEffect(()=>{
        setTimeout(() => {
            console.log("Component Mount Success!");
        }, 1000);
    },[])

    useEffect(()=>{
        console.log("Component Updated");
        
        //Component Unmounted Operation Below
        return ()=>{
            console.log("Component Unmounted Success!");
        }
    },[num])

    //This approach uses one UseEffect to perform all three components mountion operations
    // useEffect(()=>{
    //     console.log("Component Mounted Success!");
    //     return ()=>{
    //         console.log("Component Unmounted Success!");
    //     }
    // },[num])

   const handleClick = () => {
        setNum(num +1);
    }
  return (
    <div>
        <h1>React LifeCircle Functional Component</h1>
        <h2>Number: {num}</h2>
        <button onClick={handleClick}>Increment</button>
    </div>
  )
}
