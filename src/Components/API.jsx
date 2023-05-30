
import { Component } from 'react'
export default class API extends Component {
    constructor(){
        super()
        this.state = {data:[]};
    }
    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/posts/')
        .then(results=> results.json())
        .then(posts=> this.setState({data: posts}))      
    }
  render() {
    return (
      <div>
        <h1>Making API Calls</h1>
        {this.state.data.map((postData)=>(
          <div key={postData.id}>
          <h2>User ID: {postData.userId}</h2>
          <h2>Title: {postData.title}</h2>
          </div>
        ))}
      </div>
    )
  }
}


//Functional Methods
// export default function API() {
//   return (
//     <div>
        
//     </div>
//   )
// }
