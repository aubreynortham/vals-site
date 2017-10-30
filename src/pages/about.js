import React from "react";
import Helmet from 'react-helmet';
import Link from 'gatsby-link';

import '../assets/styles/site.scss';

export default () =>
  <div>
      <div
          className="banner"
          style={{
              backgroundImage: `url(${require('../assets/images/val2.jpg')})`
          }}>
        <Link to="/">Home</Link>
        <h1 className="title">About Me</h1>
      </div>
  </div>
