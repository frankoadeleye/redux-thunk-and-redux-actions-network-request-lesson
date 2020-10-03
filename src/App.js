import React from "react";
import "./App.css";
import { fetchGitHubUser } from "./redux/user/user.actions";
import { connect } from "react-redux";
import { store } from "./store";

//now we have to introduce redux thunk to help us convert the returned function in our fetchUserProfile() below to an object as the reducer expects... remember reducers only receives objects...
//note that the returned function in the fetchUserProfile below is also a thunk.

class App extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchGitHubUser());
  }

  render() {
    const { error, loading, userDetails } = this.props;

    if (error) {
      return <div>Error! {userDetails.message}</div>;
    }

    if (loading) {
      return <div>Loading...</div>;
    }

    return (
      <div>
        <h5>
          {" "}
          Change the username in the api in user.actions.js to yours to load
          your details
        </h5>
        <h1>{userDetails.login}</h1>
        <img
          style={{ width: "5rem", height: "auto" }}
          src={userDetails.avatar_url}
          alt="avatar"
        />
      </div>
    );
  }
}

//we need some stuffs from the redux store and we therefore use the mapStateToProps to grab them:
//Note that these items which we are grabbing from the redux store are from the initialState of our userReducer...that proves that the initial state of the reducer is what makes up the redux store...
const mapStateToProps = (state) => {
  return {
    userDetails: state.user.userDetails,
    loading: state.user.loading,
    error: state.user.error,
  };
};

export default connect(mapStateToProps)(App);
