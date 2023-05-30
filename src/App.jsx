import './App.css'
import API from './Components/API'
// import ReactLifeCircle from './Components/ReactLifeCircle'
// import ReactLifeCircleClass from './Components/ReactLifeCircleClass'

//JS Promise
// let user = "Robert"
// const newData = new Promise((resolve, reject)=>{
// if (user === "Robert"){
//   resolve("User exist and is a member of the council")
// }else{
//   reject("User data not found, kindly register")
// }
// })
// newData.then((resolve)=>{
// console.log(resolve);
// }).catch((err)=>{
//   console.log(err);
// });

function App() {

  return (
    <>
     {/* <ReactLifeCircleClass/>  */}
     {/* <ReactLifeCircle/> */}
     <API/>
    </>
  )
}

export default App
