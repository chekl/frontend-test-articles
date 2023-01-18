import React from "react";
import {
    BrowserRouter as Router,
    useRoutes,
  } from "react-router-dom";

import App from "../../Pages/App";
import Article from "../../Pages/Article";

const Element = () => {
    let element = useRoutes([
      {
        path: "/",
        element: <App />,
      },
      { 
        path: ":id", 
        element: <Article /> 
      }, 
    ]);
  
    return element;
  }

const Wrapper = () => {
    return (
        <Router>
          <Element/>
        </Router>
    );
}

export default Wrapper;