import React from 'react';
import "./featured.css";

const Featured = () => {
  return (
    <div className="featured">
        <div className="featuredItem">
            <img src="https://cf.bstatic.com/xdata/images/city/square250/682071.webp?k=d7fb5b90756ec0cafe4350896101d959673d75796d3932cb8c4692bcbe6e6eb5&o=" className="featuredImg"></img>
            <div className="featuredTitles">
                <h1>Dublin</h1>
                <h2>1220 Properties</h2>
            </div>
        </div>
        <div className="featuredItem">
            <img src="https://cf.bstatic.com/xdata/images/city/square250/968434.webp?k=0de1e8366a7c18c6258c80e2fb373378e58786f8b95c2e29ac99c6f7982f66e4&o=" className="featuredImg"></img>
            <div className="featuredTitles">
                <h1>Galway</h1>
                <h2>404 Properties</h2>
            </div>
        </div>
        <div className="featuredItem">
            <img src="https://cf.bstatic.com/xdata/images/city/square250/968006.webp?k=8ec66eac93f95c8f57fedbf37abb1f71641d2a5f612340741b2e853fa02fe937&o=" className="featuredImg"></img>
            <div className="featuredTitles">
                <h1>Cork</h1>
                <h2>139 Properties</h2>
            </div>
        </div>
        <div className="featuredItem">
            <img src="https://cf.bstatic.com/xdata/images/city/square250/682092.webp?k=89e08026bf3e6c9159ef6d0deada5bf7e655a41320f585273014b504953f1f2e&o=" className="featuredImg"></img>
            <div className="featuredTitles">
                <h1>Killarney</h1>
                <h2>263 Properties</h2>
            </div>
        </div>
       
    </div>
  )
}

export default Featured