import React, { Component } from 'react';
import './Project1.css';

export class NewsItem extends Component {  

 

  render() {

    let {title, description, imageurl, newsUrl, author, publishedAt } = this.props;

    

    return (
        <div className="card">
        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">{!author? "Unknown":author}
        </span>
            <img src={!imageurl? "https://images.odishatv.in/uploadimage/library/16_9/16_9_0/recent_photo_1696573651.webp": imageurl} className="card-img-top imgheight" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
                <br/>
                <p><small>Published on: {publishedAt}</small></p>
                <a href={newsUrl} className="btn btn-primary" >Read More</a>
            </div>
        </div>
    );
  }
}

export default NewsItem;
