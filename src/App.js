// import React, { Component } from "react";
// import { ImagePropTypes } from "react-native";
import React from "react";
// class App extends Component {
//   render() {
//     return(
//     <div>
//       <Cat name={"tTaro"}/>
//     </div>)
//   }
// }

const App = () => {
  const profiles = [
    {
      name: "taro",
      age: 10,
    },
    {
      name: "t",
      age: 0,
    },
  ];
  return (
    <div>
      {profiles.map((profile, index) => {
        return <Cat name={profile.name} age={profile.age} key={index} />;
      })}
      {/* <Cat name={"tTaro"} age={10} /> */}
    </div>
  );
};
// function App() {
//   return <div>helloWorld</div>;
// }

const Cat = (props) => {
  return (
    <div>
      This {props.name}
      {props.age}{" "}
    </div>
  );
};
//defaultのあたい
Cat.defaultProps = {
  age: 1,
};
export default App;
