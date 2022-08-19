import "./searchItem.css";

const SearchItem = () => {
  return (
    <div className="searchItem">
        <img src="https://cf.bstatic.com/xdata/images/hotel/square200/266595542.webp?k=8ce173d0d56c7b555048e9b6183594f7081de4d3632a1e752b146efedd031066&o=&s=1"
        alt="Search Result" 
        className="searchItemImg"/>
        <div className="searchItemDesc">
            <h1 className="searchItemTitle">Tower Street Apartments</h1>
            <span className="searchItemDistance">500m from center</span>
            <span className="searchItemTaxi">Free Airport taxi</span>
            <span className="searchItemSubtitle">Studio Apartment with air conditioning</span>
            <span className="searchItemCancelOption">Free Cancellation • No prepayment needed</span>
            <span className="searchItemFeatures">Entrance Studio • 1 bathroom • 21m<sup>2</sup> 1 full bed</span>
            <span className="searchItemOptionsSubtitle">
            You can cancel later, so lock in this great price today!
            </span>
        </div>
        <div className="searchItemDetails">
            <div className="searchItemRating">
                <div className="itemLeft">
                    <span className="itemRemarks">Excellent</span>
                    <span className="itemReviews">3,667 reviews</span>
                </div>
                <button>8.9</button>
            </div>
            <div className="searchItemDetailsText">
                <span className="offer">1 night, 2 adults</span>
                <span className="searchItemPrice">€ 180 </span>
                <span className="searchItemTaxiOptions">Includes taxes and fees </span>
                <button className="searchItemCheckButton">See availability </button>
            </div>
        </div>
    </div>
  )
}

export default SearchItem