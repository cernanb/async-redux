import React from "react";
import "./App.css";
import People from "./components/People";
import { connect } from "react-redux";
import { addMorePeople, clearPeople } from "./redux/actions/peopleActions";

class App extends React.Component {
  render() {
    return (
      <div>
        <button onClick={() => this.props.addMorePeople()}>
          Add More People
        </button>
        <button onClick={() => this.props.clearPeople()}>Clear People</button>
        <People />
      </div>
    );
  }
}

export default connect(null, { addMorePeople, clearPeople })(App);
