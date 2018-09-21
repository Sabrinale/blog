import React, { Component } from "react";
import { Link } from 'react-router-dom';

import Post from "../Post";
import category from "../../category.js";

const Main = ({ singlePost, all_posts }) => {
    const CategoryButtons = Object.keys(category).map(e => {
          return (
            <Link to={`/category/${e}`} key={e}>
              <div className="category-name">{category[e]}</div>
            </Link>
          );
        });
    const FeaturedPostList = singlePost.map(e => {
        return <Post data={e} key={e.id} />;
        });
    return (
        <React.Fragment>
        <div className="categories">{CategoryButtons}</div>
        <div className="categories">{FeaturedPostList}</div>
       <div className="date">Jul 2</div>
      </React.Fragment>
    );
}
export default Main;