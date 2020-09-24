import React, { Component } from "react";
// import { ImagePropTypes } from "react-native";
// import React from "react";
// class App extends Component {
//   render() {
//     return(
//     <div>
//       <Cat name={"tTaro"}/>
//     </div>)
//   }
// }

const App = () => {
  return (
    <div>
      <Counter></Counter>
    </div>
  );
};

class Counter extends Component {
  constructor(props) {
    super(props);
    console.log(this.state);
    this.state = { count: 0 };
  }

  plusButton = () => {
    const currentCount = this.state.count;
    this.setState({ count: currentCount + 1 });
  };
  mainasButton = () => {
    const currentCount = this.state.count;
    //setStateが呼ばれるとrenderが呼ばれるため直接買えてはいけない
    this.setState({ count: currentCount - 1 });
  };
  render() {
    return (
      <React.Fragment>
        <div>count:{this.state.count}</div>
        <button onClick={this.plusButton}>+1</button>
        <button onClick={this.mainasButton}>-1</button>
      </React.Fragment>
    );
  }
}

export default App;
