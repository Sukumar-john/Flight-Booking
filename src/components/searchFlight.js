import React, { useState } from 'react'
import {Button} from '@mui/material'
import { Link } from 'react-router-dom';

function SearchFlight(props) {
  
    let fdata = props.value;
    // console.log(fdata);

    function handleFare(val) {
        props.handleviewFares(val);  
    }
   
  return (
    <div>
        <div><div className='header-div'></div></div>
         {fdata.map((item) =>(
          
          <div className='flight-div-cards'>
        
            <img src={item.img} />
            <p className='flightname'>{item.flightName}</p>
            <p className='f-code'>{item.code}</p>
            <p className='search-traveltype'>{item.travelType}</p>
             <div> <p className='time-style time-st'>{item.startTime}</p></div>
             <div class="line"></div>
             <div> <p className='time-style time-et'>{item.endTime}</p></div>
             <div class="line-vertical"></div>
             <div> <p className='time-style time-tt'>{item.totalTime}</p></div>
             <div><span className='rupee-div'>&#x20B9;</span><p className='price-ticket'>{item.price}</p></div>
             <div> <p className='deptfrom-fl'>{item.Departfrom}</p></div>
             <div> <p className='goito-fl'>{item.Goingto}</p></div>
                 {/* <p>{item.Departuredate}</p> */}
              {/* <p>{item.Returndate}</p> */}
              {/* <p>{item.Travellers_class}</p>  */}
              <Link to='/viewFares'>
                 <Button className='booknowbtn' variant='outlined' color='error' onClick={()=>{handleFare(item)}}>Book Now</Button>
                </Link>
               
          </div>
      ))} 
  
     </div> ) 
 
}

export default SearchFlight;
