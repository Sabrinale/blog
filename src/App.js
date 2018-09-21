import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { connect } from "react-redux";

import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Editor from "./components/Editor";

import "./App.css";

class App extends Component {
  displayPosts = posts => {
    return posts.map( id => this.props.data[id]);
};
  render() {
    const posts = this.displayPosts(this.props.featured_posts);
    return (
      <Router>
        <React.Fragment>
    <Route path="/"  render={props => <Navbar {...props} />}/>
          <Route
            path="/"
            exact={true}
            render={() => (
              <Main singlePost = {posts}
                  allPosts = {this.props.data}
              />
            )}
          />
          <Route path="/new" render={() => <Editor />} />
        </React.Fragment>
      </Router>
    );
  }
}

const mapStateToProps = state => {
  return {
    featured_posts: state.data.featured_posts,
    data: state.data.all_posts
  };
};

export default connect(mapStateToProps, null)(App);