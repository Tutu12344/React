// import React, { Component } from "react";
// import { ImagePropTypes } from "react-native";
import React from "react";
import PropTypes from "prop-types";
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
    {
      name: 1,
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
Cat.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number.isRequired,
};
export default App;
