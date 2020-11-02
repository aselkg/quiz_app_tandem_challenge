import React from "react";
import { Link, withRouter } from "react-router-dom";

function Navigation(props) {
  return (
    <div>
      <nav class="pa3 pa4-ns">
      <a class="link dim dark-blue f-subheadline lh-title tc db mb3 mb4-ns" href="#" title="Home">Quiz App</a>
        <div class="tc pb3">
          <Link class="link dim dark-gray f4 lh-copy dib mr3" to="/instructions">
              Instructions
          </Link>
          <Link class="link dim dark-gray f4 lh-copy dib mr3" to="/play">
          Take the Quiz
          </Link>
          </div>
      </nav>
    </div>
    
  );
}

export default withRouter(Navigation);
