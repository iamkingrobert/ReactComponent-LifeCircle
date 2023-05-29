// eslint-disable-next-line no-unused-vars
import React, { Component } from 'react'

export default class ReactLifeCircleClass extends Component {

    constructor(props) {
        super(props);
        this.state = {
          number: 0,
        };
      }

    //Component Did Mount
    componentDidMount(){
        setTimeout(() => {
            console.log("Component Mount Success!");
        }, 1000);
    }

    componentDidUpdate(){
        console.log("There's Change In State, Component Updated");
    }

    componentWillUnmount(){
        console.log("Component Unmount Success");
    }

    handleClick = () => {
        this.setState((prevState) => ({
          number: prevState.number + 1,
        }));
      };
    

  render() {
    return (
      <div>
        <h1>Class Component LifeCircle</h1>
        <h2>Number: {this.state.number}</h2>
        <button onClick={this.handleClick}>Increment</button>
      </div>
    )
  }
}
