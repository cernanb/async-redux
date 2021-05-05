import React, { Component } from "react";
import { getPeople } from "../redux/actions/peopleActions";
import { connect } from "react-redux";

class People extends Component {
  componentDidMount() {
    this.props.getPeople();
  }

  render() {
    console.log(this.props.people);
    if (this.props.people.length === 0) {
      return <h1>Loading...</h1>;
    }
    return (
      <div>
        {this.props.people.map((person) => (
          <p>{person.name}</p>
        ))}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    people: state.people,
  };
};

export default connect(mapStateToProps, { getPeople })(People);
