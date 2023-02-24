import React,{useState} from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import FlightIcon from '@mui/icons-material/Flight'
import HotelIcon from '@mui/icons-material/Hotel'
import BusIcon from '@mui/icons-material/BusAlert'
import PositionedMenu from './btnOption';

import { Button, TextField, InputLabel, MenuItem, Checkbox, Select} from "@mui/material";
import {ArrowForward}  from '@mui/icons-material';
import airIndia from '../img/airindia.jpg';
import IndiGo from '../img/IndiGo.png';
import go from '../img/go.png'
import { Link } from 'react-router-dom';

 function TabPanel(props) {
    
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs(props) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const [deptfrom, setDeptfrom] = useState('');
    const [deptTo,setDeptTo] = useState('');
    const [deptDate,setDeptdate] = useState('');
    const [returnDate,setReturndate] = useState('');
    const [travelclass,setTravelClass] = useState('');
    const [isChecked,setChecked] = useState(true);
    const [checkedValue,setCheckedValue] = useState('');
    const [isCheckedsf,setCheckedsf] = useState(false);
    const [isCheckedaf,setCheckedaf] = useState(false);
    const [isCheckedsc,setCheckedsc] = useState(false);
    const [isValidate,setValidate] = useState(false);
    const [isTxtEnable,setTxtEnable] = useState(true);
    const [isDisable,setDisable] = useState(false);

    const handleChangeDeptfrom = (event) => {
        setDeptfrom(event.target.value);
      };
    const handleReturnField = (e) => {
        setReturndate(e.target.value)
      }
    const handleChangeDeptTo = (e) => {
        setDeptTo(e.target.value)
    }
    const handleflightData = (e) => {

      if(deptfrom === null || deptfrom === ''){
        alert('enter Departure place')
        return
      }
      else if(deptTo === null || deptTo === ''){
        alert('enter Destination place')
        return
      }
      else if(deptDate === ''){
        alert('enter Date of departure')
        return
      }
      // else if(isTxtEnable === false){
       else if(returnDate === ''){
        alert('enter Date of return')
        return
      }
    // }
      else if(travelclass === ''){
          alert('select  travel class')
          return
      }
      else if(!/^[a-zA-Z]+$/.test(deptfrom)){
        alert(`Enter Alphabets only in departure field`)
        return
      }
    
      else if(!/^[a-zA-Z]+$/.test(deptTo)){
          alert('Enter Alphabets only in destination field')
          return
        }
    
      else{
        setValidate(!isValidate)
        props.handleFlightDetails(e);
      }
       
    }

    let flightData = [
        {
            sno:1,
            flightName:'Air India',
            flightNo:'Airbus-AI312',
             Departfrom: deptfrom,
             Goingto: deptTo,
             Departuredate:deptDate,
             Returndate: returnDate,
             Travellers_class:travelclass,
             img:airIndia,
             code:'AI-805',
             startTime:'18:20',
             endTime:'02:35',
             totalTime:'02h 15m',
             price:'8,578',
            travelType:'Non-Stop',
             
        },
        {
            sno:2,
            flightName:'IndiGo',
            flightNo:'Airbus-6E312',
            Departfrom: deptfrom,
            Goingto:deptTo,
            Departuredate:deptDate,
            Returndate:returnDate,
            Travellers_class:travelclass,
            img:IndiGo,
            code:'6E-2114',
            startTime:'21:45',
            endTime:'00:10',
            totalTime:'02h 25m',
            price:'8,400',
            travelType:'Non-Stop',
       },
       {
        sno:3,
        flightName:'Go First',
        flightNo:'Airbus-SEJ321',
        Departfrom: deptfrom,
        Goingto:deptTo,
        Departuredate:deptDate,
        Returndate:returnDate,
        Travellers_class:travelclass,
        img:go,
        code:'sej-775',
        startTime:'21:45',
        endTime:'00:10',
        totalTime:'02h 25m',
        price:'8,500',
        travelType:'Non-Stop',
   },
]
    // console.log(flightData);
  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} textColor='secondary' onChange={handleChange} aria-label="basic tabs example">
          <Tab icon={<FlightIcon />} label="Flights"  {...a11yProps(0)} />
          <Tab icon={<HotelIcon />} label="Hotels" {...a11yProps(1)} />
          <Tab icon={<BusIcon />} label="Buses" {...a11yProps(2)} />
          <div className='profiles'><PositionedMenu /></div>
          
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
            <div className='flightbooking-div'>
       
                    <div className='flight-main-div'>
                    <span className='flight-main-span'>
                      <p className='flight-main-header'>Book Flights, Hotels and Holiday Packages</p>
                    <div className='flight-main-btns'>
                        <Button variant='outlined' >ONE WAY</Button>
                        <Button variant='outlined' 
                      //  onClick={}
                        >ROUND TRIP</Button>
                    </div>
                    <div className='flight-main-btns'>
                        <TextField value={deptfrom} id="standard-deptfrom" label="Dept From" variant='standard' onChange={handleChangeDeptfrom} /> 
                        <span className='flight-main-div-inp2'>
                            <TextField  value={deptTo} id="standard-deptto" label="Going To" variant='standard' onChange={handleChangeDeptTo} />
                          </span>
                    </div>
                    <div className='flight-main-btns'> 
                        <TextField value={deptDate} id='standard-date' label='Departure Date' variant='standard' onChange={(e) => {setDeptdate(e.target.value)}} />
                        <span className='flight-main-div-inp4'>
                          <TextField value={returnDate} id='standard-date' label='Return Date' variant='standard' onChange={handleReturnField} 
                          //  disabled={isTxtEnable}
                           />
                        </span>
                    </div> 
                    <div className='div-box-1'>
                        <span className='inp-label'>
                            <InputLabel  id="demo-simple-select-label"  >Travellers Class</InputLabel>
                            <Select className='inp'
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={travelclass}
                            label="Travellers Class"
                            onChange={(e)=>{setTravelClass(e.target.value)}}
                            >
                            <MenuItem value={"Economy"}>1 Traveller(s),Economy</MenuItem>
                            <MenuItem value={"Business"}>1 Traveller(s),Business</MenuItem>
                            <MenuItem value={"First class"}>1 Traveller(s),First class</MenuItem>
                            </Select>
                        </span>
                    </div>
                    <div className='div1-check'>
                        <span>
                            <Checkbox checked={isChecked} label="Non Stop Flights" onChange={()=>{setChecked(!isChecked)}} />Non Stop Flights
                        </span>
                        <span>
                            <Checkbox checked={isCheckedsf} label="" onChange={()=>{setCheckedsf(!isCheckedsf)}} />Student Fare
                        </span>
                    </div>
                    <div  className='div2-check'>
                        <span>
                            <Checkbox checked={isCheckedaf} label="" onChange={()=>{setCheckedaf(!isCheckedaf)}} />Armed Forces
                        </span>
                        <span>
                            <Checkbox checked={isCheckedsc} label="" onChange={()=>{setCheckedsc(!isCheckedsc)}} />Senior Citizen
                        </span>
                    </div>
  
                    {/* <div className='div1-check'>
                        <span>
                            <Checkbox checked={isChecked} name="Non Stop" label="Non Stop" value="Armed Forces" onChange={(e)=>{handleChecked}} />Non Stop
                        </span>
                        <span>
                            <Checkbox checked={isChecked} name="Student Fare"  value="Student Fare" label="" onChange={()=>{handleChecked}} />Student Fare
                        </span>
                    </div>
                    <div  className='div2-check'>
                        <span>
                            <Checkbox checked={isChecked} name="Armed Forces" value="Armed Forces" label="" onChange={()=>{handleChecked}} />Armed Forces
                        </span>
                        <span>
                            <Checkbox checked={isChecked} name="Senior Citizen"  value="Senior Citizen" label="" onChange={()=>{handleChecked}} />Senior Citizen
                        </span>
                    </div> */}
                        <div className='sumbit-btns'>
                            <span>
                                <Button variant='contained' endIcon={<ArrowForward />}>Check Your Refund</Button>
                               
                           { isValidate ? (<Link to = "/searchFlight" >
                                      <Button variant='contained' endIcon={<ArrowForward />}
                                      onClick={()=>{handleflightData(flightData)}}
                                      color='error'>Search Flights</Button>
                                  </Link>) : (
                                // <Link to = "/searchFlight" >
                                  <Button variant='contained' endIcon={<ArrowForward />}
                                  onClick={()=>{handleflightData(flightData)}}
                                  color='error'>Search Flights</Button>
                                // </Link>
                                )
                            }
                            </span>
                        </div>
                    </span>
                </div>
        </div>

      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
 
    </Box>
  );
}
