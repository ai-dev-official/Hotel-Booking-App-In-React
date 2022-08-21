import "./searchItem.css";
import { Link } from "react-router-dom";

const SearchItem = ({item}) => {
  return (
    <div className="searchItem">
        <img src={item.photos[0]}
        alt="Search Result" 
        className="searchItemImg"/>
        <div className="searchItemDesc">
            <h1 className="searchItemTitle">{item.name}</h1>
            <span className="searchItemDistance">{item.distance}m from center</span>
            <span className="searchItemTaxi">Free Airport taxi</span>
            <span className="searchItemSubtitle">Studio Apartment with air conditioning</span>
            <span className="searchItemCancelOption">Free Cancellation • No prepayment needed</span>
            <span className="searchItemFeatures">{item.desc} • 1 bathroom • 21m<sup>2</sup> 1 full bed</span>
            <span className="searchItemOptionsSubtitle">
            You can cancel later, so lock in this great price today!
            </span>
        </div>
        <div className="searchItemDetails">
            {item.rating && <div className="searchItemRating">
                <div className="itemLeft">
                    <span className="itemRemarks">Excellent</span>
                    <span className="itemReviews">3,667 reviews</span>
                </div>
                <button>{item.rating}</button>
            </div>}
            <div className="searchItemDetailsText">
                <span className="offer">1 night, 2 adults</span>
                <span className="searchItemPrice">€ {item.cheapestPrice}</span>
                <span className="searchItemTaxiOptions">Includes taxes and fees </span>
                <Link to={`/hotels/${item._id}`}>
                <button className="searchItemCheckButton">See availability </button>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default SearchItem