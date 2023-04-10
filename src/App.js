import logo from './logo.svg';
import './App.css';
import React from 'react';

const eng = ['apple','apple','banana','banana','chocolate','chocolate'];
const jap = [,'りんご',,'バナナ',,'チョコレート'];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {i:0};
  }
      
  handleClick() {
    this.setState({i:this.state.i+1});
  }

  render() {    
    return (
      <div className="App">
        <button onClick={() => {this.handleClick()}}>○</button>
        <button onClick={() => {this.handleClick()}}>{eng[this.state.i]}</button>
        <button onClick={() => {this.handleClick()}}>×</button>
        <h1>{jap[this.state.i]}</h1>
      </div>
    );
  }
}
export default App;
