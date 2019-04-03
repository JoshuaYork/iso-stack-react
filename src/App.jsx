import React from "react";
import { connect } from "react-redux";

const AppDisplay = () => (
  <div>
    <h1>Isomorphic React Stackoverflow</h1>
  </div>
);

const mapStateToProps = (state, ownProps) => {
    return {
        ...state
    }
};

export default connect() (AppDisplay);
