import React, { useContext } from 'react'
import "./hotel.css";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBed, faCheck, faCircleArrowLeft, faCircleArrowRight, faCircleXmark, faLocationDot, faNeuter, faParking, faSackDollar, faStaffAesculapius } from '@fortawesome/free-solid-svg-icons'
import MailList from '../../components/maillist/MailList';
import Footer from '../../components/footer/Footer';
import { useState } from 'react';
import id from 'date-fns/locale/id/index';
import useFetch from '../../hooks/useFetch';
import { useLocation, useNavigate } from 'react-router-dom';
import { SearchContext } from '../../context/SearchContext';
import { AuthContext } from '../../context/AuthContext';
import Reserve from '../../components/reserve/Reserve';

const Hotel = () => {
  const location = useLocation();
  const id = location.pathname.split("/")[2];

  const [slideNumber, setSlideNumber] = useState(0);
  const [open, setOpen] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  const {data, loading, error } = useFetch(`/hotels/find/${id}`);

  const { dates, options} = useContext(SearchContext);
   
  const MILLISECONDS_PER_DAY = 1000 * 60 * 69 * 24;
   function dayDiff(date1, date2) {
        const timeDiff = Math.abs(date2.getTime() - date1.getTime());
        const diffDays = Math.ceil(timeDiff / MILLISECONDS_PER_DAY);
        return diffDays;
   }

   const days = dayDiff(dates[0].endDate, dates[0].startDate);
   const { user } = useContext(AuthContext);
   const navigate = useNavigate();

  const handleOpen = (i)=> {
    setSlideNumber(i);
    setOpen(true);
  };

  const handleMove = (direction) => {
    let newSlideNumber;
    if(direction === "l"){
      newSlideNumber = slideNumber === 0 ? 5 : slideNumber-1
    } else {
      newSlideNumber = slideNumber === 5 ? 0 : slideNumber+1
    }

    setSlideNumber(newSlideNumber);
  }

  const handleClick = () => {
    if(user) {
      setOpenModal(true);
    }else {
      navigate("/login");
    }
  }

  return (
    <div>
      <Navbar/>
      <Header type="list"/>
      {loading ? ( 
        "loading" 
        ) : (
      <div className="hotelContainer">
        {open &&<div className="slider">
            <FontAwesomeIcon icon={faCircleXmark}  className="close" onClick={()=>setOpen(false)}/>
            <FontAwesomeIcon icon={faCircleArrowLeft} className="arrow" onClick={()=>handleMove("l")}/>
            <div className="sliderWrapper">
              <img src={data.photos[slideNumber]} alt="" className="sliderImg" />
            </div>
            <FontAwesomeIcon icon={faCircleArrowRight} className="arrow" onClick={()=>handleMove("r")}/>
        </div>}
        <div className="hotelWrapper">
          <div className="hotelWrapperTitles">
            <div className="hotelTitlesText">
              <h1 className="hotelTitle">{data.name}</h1>
              <div className="hotelAddress">
                <FontAwesomeIcon icon={faLocationDot}/>
                <span>{data.address}</span>
              </div>
              <span className="hotelDistance">
                Excellent location - {data.distance}m from city center
              </span>
              <br />
              <span className="hotelPriceHighlight">
                Book a stay over €{data.cheapestPrice} at this property and get a free airport taxi
              </span>
            </div>
          
            <button className="bookNow">Reserve!</button>
          </div>
          <div className="hotelImgs">
            {data.photos?.map((photo, i)=>(
              <div className="hotelImgWrapper">
                <img onClick={()=>handleOpen(i)} src={photo} alt="hotel Image" className="hotelImg" 
                />
              </div>
            ))}
          </div>
          <div className="hotelDetails">
            <div className="hotelDetailsText">
              <h1 className="hotelTitle">{data.name}</h1>
              <p className="hotelDesc">{data.desc} </p>
            </div>
            <div className="hotelsBook">
              <h1>Property highlights</h1>
              <h2>Perfect for a {days}-night stay!</h2>
              <p className="hotelHighs"><span><FontAwesomeIcon icon={faLocationDot}/> </span>{data.address} is close to bus routes, airport taxi and recreational facilities.</p>
              <p className="hotelHighs"><span><FontAwesomeIcon icon={ faNeuter }/> </span>{data.name} is {data.distance}m from city center.</p>
              <p className="hotelHighs"><span><FontAwesomeIcon icon={ faStaffAesculapius }/> </span>Pay €{days * data.cheapestPrice * options.room} only for {days} nights.</p>
             
              <h2>Breakfast Info</h2>
              <p>Continental, Full English/Irish, Vegetarian, Vegan, Gluten-free starting from €{data.cheapestPrice}.</p>
              <p className="hotelHighs"><span><FontAwesomeIcon icon={ faParking }/> </span> Free parking available at {data.name}.</p>
              <h2>Loyal Customers</h2>
              <p className="hotelHighs"><span><FontAwesomeIcon icon={ faCheck }/> </span> Excellent rating by thousands of {data.name} customers.</p>
              <button
               onClick={handleClick}>Reserve or Book Now!</button>
            </div>
            
          </div>
        </div>
        <MailList/>
        <Footer/>
      </div> 
      )}   
      {openModal && <Reserve setOpen={setOpenModal} hotelId={id} />}  
    </div>
  );
};


export default Hotel