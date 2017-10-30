import React from "react";
import Helmet from 'react-helmet';
import Link from 'gatsby-link';

import '../assets/styles/site.scss';

function LikeGrid(){
    var likes = [{name: "Favorite jewy this side of saint louie", img: "https://www.wellandgood.com/wp-content/uploads/2016/10/ilana-glazer.jpg"},
        {name: "Diamonds", img: "https://images-na.ssl-images-amazon.com/images/I/41X4cUBnnlL._UY395_.jpg"},
        {name: "Pool", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRm5YqSajNLh5jBkCc9jp_liWNFxHuFhpxjv72Ew5aIw4-BnYVKgg"}];
    return (
        <div>
            <ul className="likeList">
                {likes.map((likeItem, index) => {
                    return (
                        <li className="like-item">
                            <ul className="space-list-items">
                                <li>
                                    <img
                                        className="avatar"
                                        src={likeItem.img}
                                        alt={'Img for ' + likeItem.name} />
                                </li>
                                <li>{index + 1}.  {likeItem.name}</li>
                            </ul>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default () =>
  <div>
      <div
          className="banner"
          style={{
              backgroundImage: `url(${require('../assets/images/val2.jpg')})`
          }}>
        <Link to="/">Home</Link>
        <h1 className="title">About Me</h1>
          <h3>A few of my favorite things</h3>
          <LikeGrid/>
      </div>
  </div>
