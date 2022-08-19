import React from 'react'
import "./hotel.css";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBed, faCheck, faCircleArrowLeft, faCircleArrowRight, faCircleXmark, faLocationDot, faNeuter, faParking } from '@fortawesome/free-solid-svg-icons'
import MailList from '../../components/maillist/MailList';
import Footer from '../../components/footer/Footer';
import { useState } from 'react';
import id from 'date-fns/locale/id/index';

const Hotel = () => {

  const [slideNumber, setSlideNumber] = useState(0);
  const [open, setOpen] = useState(false);
  const photos = [
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/171318707.jpg?k=61ef3e11c4989aa236d84b7118cf5586c5791238b911e2090977bfeec19b9112&o=&hp=1"
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/371954319.jpg?k=39141ece900b08b2e77da7abf8004351ec474a7bbfaa6fc5ebdb3368820c9aa1&o=&hp=1"
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/147147586.jpg?k=5cf553149481fe21511033a7a49ab27f53c92cdd94a2112c9071a14a0b75ca16&o=&hp=1"
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/266595542.jpg?k=f10646a6b4d69bf6f99a928e2443b46e49f1322372a82baba0d1904edf9c3ad9&o=&hp=1"
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/251242963.jpg?k=ebda141fb772518011bf136481ef460687dd0c22b7e031e5a5124b5e564e9a05&o=&hp=1"
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/158074699.jpg?k=1d1cab3ad353d61075d3bd5bfca8ec970a906913253f07878eef260e7122d400&o=&hp=1"
    },
  ];

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

  return (
    <div>
      <Navbar/>
      <Header type="list"/>
      <div className="hotelContainer">
        {open &&<div className="slider">
            <FontAwesomeIcon icon={faCircleXmark}  className="close" onClick={()=>setOpen(false)}/>
            <FontAwesomeIcon icon={faCircleArrowLeft} className="arrow" onClick={()=>handleMove("l")}/>
            <div className="sliderWrapper">
              <img src={photos[slideNumber].src} alt="" className="sliderImg" />
            </div>
            <FontAwesomeIcon icon={faCircleArrowRight} className="arrow" onClick={()=>handleMove("r")}/>
        </div>}
        <div className="hotelWrapper">
          <div className="hotelWrapperTitles">
            <div className="hotelTitlesText">
              <h1 className="hotelTitle">Sheraton Hotels</h1>
              <div className="hotelAddress">
                <FontAwesomeIcon icon={faLocationDot}/>
                <span>Elton St 128 New Jersey</span>
              </div>
              <span className="hotelDistance">
                Excellent location - 500m from center
              </span>
              <span className="hotelPriceHighlight">
                Book a stay over €280 at this property and get a free airport taxi
              </span>
            </div>
          
            <button className="bookNow">Reserve!</button>
          </div>
          <div className="hotelImgs">
            {photos.map((photo, i)=>(
              <div className="hotelImgWrapper">
                <img onClick={()=>handleOpen(i)} src={photo.src} alt="hotel Image" className="hotelImg" 
                />
              </div>
            ))}
          </div>
          <div className="hotelDetails">
            <div className="hotelDetailsText">
              <h1 className="hotelTitle">Menlo Park Hotel</h1>
              <p className="hotelDesc">
              Located in its own private grounds, this 4-star hotel offers spacious, elegant rooms. It is only 20 minutes’ walk from Galway’s center and 5 minutes' walk from the nearest shopping center. The property is within easy access from main roads, and free parking and free WiFi are available.
              </p>
              <p>
              Stylishly furnished, each room at Menlo Park Hotel includes a spacious bathroom and a hairdryer. Guests can relax in the room with comfortable Divine Duvets, satellite TV, and a welcome tray with tea and coffee. Newspapers are also available on request.
              </p>
              <p>
              The Bia Beo Restaurant serves an extensive wine list and hearty food made with fresh, locally sourced produce. The P.Francis & Son Bar and Bistro provides fresh coffees, as well as an extensive bar food menu and carvery lunch.
              </p>
              <p>
              Galway Cathedral and the Town Hall can both be reached in a 15-minute walk from Menlo Park. Galway is famous for its frequent festivals throughout the year, and Galway Bay can be reached in 10 minutes by car.
              </p>
              <p>
              Couples in particular like the location – they rated it 8.4 for a two-person trip. 
              </p>
            </div>
            <div className="hotelsBook">
              <h1>Property highlights</h1>
              <h2>Perfect for a 9-night stay!</h2>
              <p className="hotelHighs"><span><FontAwesomeIcon icon={faLocationDot}/> </span>Top Location: Highly rated by recent guests (8.5)</p>
              <p className="hotelHighs"><span><FontAwesomeIcon icon={ faNeuter }/> </span>  Want a great night's sleep? This hotel was highly-rated for its very comfy beds. </p>
             
              <h2>Breakfast Info</h2>
              <p>Continental, Full English/Irish, Vegetarian, Vegan, Gluten-free</p>
              <p className="hotelHighs"><span><FontAwesomeIcon icon={ faParking }/> </span> Free parking available at the hotel</p>
              <h2>Loyal Customers</h2>
              <p className="hotelHighs"><span><FontAwesomeIcon icon={ faCheck }/> </span> Free parking available at the hotel</p>
              <button>Reserve or Book Now!</button>
            </div>
            
          </div>
        </div>
        <MailList/>
        <Footer/>
      </div>      
    </div>
  )
}


export default Hotel