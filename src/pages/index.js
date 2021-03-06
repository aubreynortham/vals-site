import React from "react";
import Helmet from 'react-helmet';
import Link from 'gatsby-link';
import '../assets/styles/site.scss';

export default () =>
  <div>
    <div
      className="banner"
      style={{
        backgroundImage: `url(${require('../assets/images/val.jpg')})`
      }}>
      <h1 className="title">Val's Site.</h1>
      <Link to="/about/">About Me</Link>
    </div>
  </div>
