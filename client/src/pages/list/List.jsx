import "./list.css";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import { useLocation } from 'react-router-dom';
import { useState } from 'react';
import {format} from "date-fns";
import { DateRange } from 'react-date-range';
import SearchItem from "../../components/searchitem/SearchItem";
import Footer from "../../components/footer/Footer";
import MailList from "../../components/maillist/MailList";
import useFetch from "../../hooks/useFetch";

const List = () => {

  const location = useLocation();
  const [destination, setDestination] = useState(location.state.destination);
  const [dates, setDates] = useState(location.state.dates);
  const [openDate, setOpenDate] = useState(false);
  const [options, setOptions] = useState(location.state.options);
  const [min, setMin] = useState(undefined);
  const [max, setMax] = useState(undefined);

  const {data, loading, error, reFetch } = useFetch(`/hotels?city=${destination}&min=${min || 0}&max=${max || 9999}`);

  const handleClick = () => {
    reFetch();
  };


  return (
    <div>
      <Navbar/>
      <Header type="list"/>
      <div className="listContainer">
        <div className="listWrapper">
          <div className="listSearch">
            <h1 className="listTitle">Search</h1>
            <div className="listSearchItem">
              <label>Destination</label>
              <input type="text" placeholder={destination} />
            </div>
            <div className="listSearchItem">
              <label>Check-in Date</label>
              <span onClick={()=>setOpenDate(!openDate)}>
                {`${format(dates[0].startDate, "MM/dd/yyyy" )} to ${format(dates[0].endDate, "MM/dd/yyyy" )}`}
              </span>
              {
                openDate && (<DateRange 
                  onChange={(item) => setDates([item.selection])}
                  minDate={new Date()}
                  ranges={dates}
                />
              )}
            </div>
            <div className="listSearchItem">
              <label>Options</label>
              <div className="optionsWrapper">
              <div className="listSearchOptionItem">
                <span className="listSearchOptionText">Min Price <small>per night</small></span>
                <input type="number" onChange={e=>setMin(e.target.value)} className="listSearchOptionInput" />
              </div>
              <div className="listSearchOptionItem">
                <span className="listSearchOptionText">Max Price <small>per night</small></span>
                <input onChange={e=>setMax(e.target.value)} type="number" className="listSearchOptionInput" />
              </div>
              <div className="listSearchOptionItem">
                <span className="listSearchOptionText">Adult</span>
                <input min={1} type="number" className="listSearchOptionInput" placeholder={options.adult} />
              </div>
              <div className="listSearchOptionItem">
                <span className="listSearchOptionText">Children</span>
                <input min={0} type="number" className="listSearchOptionInput" placeholder={options.children}/>
              </div>
              <div className="listSearchOptionItem">
                <span className="listSearchOptionText">Room</span>
                <input min={1} type="number" className="listSearchOptionInput" placeholder={options.room}/>
              </div>
              </div>
            </div>
            <button onClick={handleClick}>Search</button>
          </div>
        <div className="listResult">

          { loading ? "loading" : <>

            {data.map((item)=>(

              <SearchItem item={item} key={item._id}/>
              
            ))}
            
          </>}
          
        </div>
        </div>
        <MailList/>
        <Footer/>
      </div>
    </div>
  )
}


export default List