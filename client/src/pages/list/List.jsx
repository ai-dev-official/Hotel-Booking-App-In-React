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

const List = () => {

  const location = useLocation();
  const [destination, setDestination] = useState(location.state.destination);
  const [date, setDate] = useState(location.state.date);
  const [openDate, setOpenDate] = useState(false);
  const [options, setOptions] = useState(location.state.options);

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
                {`${format(date[0].startDate, "MM/dd/yyyy" )} to ${format(date[0].endDate, "MM/dd/yyyy" )}`}
              </span>
              {
                openDate && (<DateRange 
                  onChange={(item) => setDate([item.selection])}
                  minDate={new Date()}
                  ranges={date}
                />
              )}
            </div>
            <div className="listSearchItem">
              <label>Options</label>
              <div className="optionsWrapper">
              <div className="listSearchOptionItem">
                <span className="listSearchOptionText">Min Price <small>per night</small></span>
                <input min={1} type="number" className="listSearchOptionInput" />
              </div>
              <div className="listSearchOptionItem">
                <span className="listSearchOptionText">Max Price <small>per night</small></span>
                <input min={1} type="number" className="listSearchOptionInput" />
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
            <button>Search</button>
          </div>
        <div className="listResult">
          <SearchItem />
          <SearchItem />
          <SearchItem />
          <SearchItem />
          <SearchItem />
          <SearchItem />
          <SearchItem />
          <SearchItem />
          <SearchItem />
        </div>
        </div>
        <MailList/>
        <Footer/>
      </div>
    </div>
  )
}


export default List