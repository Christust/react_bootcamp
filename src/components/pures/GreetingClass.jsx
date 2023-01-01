import React, { Component } from "react";
import PropTypes from "prop-types";

class GreetingClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      age: 25,
    };
  }
  birthday = () => {
    this.setState((prevState) => ({
      age: prevState.age + 1,
    }));
  };
  render() {
    return (
      <div>
        <h1>Hola {this.props.name}</h1>
        <h2>Tu edad es de {this.state.age}</h2>
        <button onClick={this.birthday}>Aumentar</button>
      </div>
    );
  }
}

GreetingClass.propTypes = {
  name: PropTypes.string,
};

export default GreetingClass;
