import React from 'react';
import useFetch from '../../hooks/useFetch';
import "./homebanner.css";



const Homebanner = () => {

    const {data, loading, error } = useFetch("/hotels/countByCity?cities=dublin,galway,cork,killarney,wexford");

  return (
    <div className="homebanner">
         {loading ? ("Loading, please wait...") :
         <>
        <div className="homebannerFirst">
            <div className="homebannerItem">
                <img src="https://cf.bstatic.com/xdata/images/city/square250/682071.webp?k=d7fb5b90756ec0cafe4350896101d959673d75796d3932cb8c4692bcbe6e6eb5&o=" className="homebannerImg"></img>
                <div className="homebannerTitles">
                    <h1>Dublin</h1>
                    <h2>{data[0]} Properties</h2>
                </div>
            </div>
            <div className="homebannerItem">
                <img src="https://cf.bstatic.com/xdata/images/city/square250/968434.webp?k=0de1e8366a7c18c6258c80e2fb373378e58786f8b95c2e29ac99c6f7982f66e4&o=" className="homebannerImg"></img>
                <div className="homebannerTitles">
                    <h1>Galway</h1>
                    <h2>{data[1]} Properties</h2>
                </div>
            </div>
        </div>
        <div className="homebannerLast">
            <div className="homebannerItem">
                <img src="https://cf.bstatic.com/xdata/images/city/square250/968006.webp?k=8ec66eac93f95c8f57fedbf37abb1f71641d2a5f612340741b2e853fa02fe937&o=" className="homebannerImg"></img>
                <div className="homebannerTitles">
                    <h1>Cork</h1>
                    <h2>{data[2]} Properties</h2>
                </div>
            </div>
            <div className="homebannerItem">
                <img src="https://cf.bstatic.com/xdata/images/city/square250/682092.webp?k=89e08026bf3e6c9159ef6d0deada5bf7e655a41320f585273014b504953f1f2e&o=" className="homebannerImg"></img>
                <div className="homebannerTitles">
                    <h1>Killarney</h1>
                    <h2>{data[3]} Properties</h2>
                </div>
            </div>
            <div className="homebannerItem">
                <img src="https://cf.bstatic.com/xdata/images/city/square250/968000.webp?k=57cee3ca431f28b443b0d43e7a41628a376145e098c54ba63d08f34d7d00f3a6&o=" className="homebannerImg"></img>
                <div className="homebannerTitles">
                    <h1>Wexford</h1>
                    <h2>{data[4]} Properties</h2>
                </div>
            </div>
            
        </div>
        </>
        }
    </div>
  )
}

export default Homebanner