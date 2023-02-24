import './App.css';
import './components/booking.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import SearchFlight from './components/searchFlight';
import Reviewbooking from './components/Reviewbooking';
import { useState } from 'react';
import BasicTabs from './components/Tabpanel';

function App() {
  const [flight,setFlight] = useState([])
  const [fdetails,setFdetails] = useState({id:'',flightname:'',deptfrom:'',deptto:'',deptdate:'',rdate:'',tclass:'',fimg:'',flightdet:'',fcode:'',startTime:'',endTime:'',totalTime:'',trvaelPrice:'',travelType:''})
  const [selectedflight,setselectedflight] = useState({});
  
  const handledata = (e) => {
    setFlight(e)
  }
  console.log(flight);

  const handleFlightfare = (id) => {
    setselectedflight(id)

    // for(let i=0;i<flight.length;i++){
      // if(flight[i].sno === id){
          // setFdetails(
          //   {
          //     id:flight[i].sno,
          //     flightname:flight[i].flightName,
          //     deptfrom:flight[i].Departfrom,
          //     deptto:flight[i].Goingto,
          //     deptdate:flight[i].Departuredate,
          //     rdate:flight[i].Returndate,
          //     tclass:flight[i].Travellers_class,
          //     fimg:flight[i].img,
          //     flightdet:flight[i].flightNo,
          //     fcode:flight[i].code,
          //     startTime:flight[i].startTime,
          //     endTime:flight[i].endTime,
          //     totalTime:flight[i].totalTime,
          //     trvaelPrice:flight[i].price,
          //     travelTyp:flight[i].travelType,
          //   })
  //         setFlightArr([
  //           {
  //             id:flight[i].sno,
  //             flightname:flight[i].flightName,
  //             deptfrom:flight[i].Departfrom,
  //             deptto:flight[i].Goingto,
  //             deptdate:flight[i].Departuredate,
  //             rdate:flight[i].Returndate,
  //             tclass:flight[i].Travellers_class,
  //             fimg:flight[i].img,
  //             flightdet:flight[i].flightNo,
  //             fcode:flight[i].code,
  //             startTime:flight[i].startTime,
  //             endTime:flight[i].endTime,
  //             totalTime:flight[i].totalTime,
  //             trvaelPrice:flight[i].price,
  //             travelTyp:flight[i].travelType,
  //                 }])
  //     }
  // }
  }
  return (
          <>
            <Router>
              <Routes>
                  <Route path="/" element={  <BasicTabs handleFlightDetails={handledata}/>} />
                  <Route path="/searchFlight" element={<SearchFlight value={flight} handleviewFares={handleFlightfare} />}/>
                  <Route path="/viewFares" element={<Reviewbooking value={flight} flightViewfare={selectedflight} />}/> 
              </Routes>
            </Router>
          </> 
        );
}

export default App;
