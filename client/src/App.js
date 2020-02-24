import React, {Component} from 'react';
import './App.css';



class App extends Component {

  state = {
    test : ""
  }

  componentDidMount() {
    console.log("running ... test")
  this.getTest()
}

getTest = () => {
  fetch('/api/test')
      .then(res => res.json())
      .then(test => this.setState({ test }, ()=> {console.log("test loaded")}));
}

  render() {
    return (
      <div>
      <h1> Page has loaded </h1>
      <h1>{this.state.test} </h1>
      </div>
      )
  }

}

export default App;
