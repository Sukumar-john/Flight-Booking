import  React,{useState} from 'react'
import { Button, TextField, InputLabel, MenuItem, Checkbox, Select} from "@mui/material";
import {ArrowForward}  from '@mui/icons-material';
import airIndia from '../img/airIndia.png';
import IndiGo from '../img/IndiGo.png';
import SpiceJet from '../img/SpiceJet-Logo.png'
import { Link } from 'react-router-dom';


 export default function Flightbooking(props){
    const [deptfrom, setDeptfrom] = useState('');
    const [deptTo,setDeptTo] = useState('');
    const [deptDate,setDeptdate] = useState('')
    const [returnDate,setReturndate] = useState('')
    const [travelclass,setTravelClass] = useState('')
    const [isChecked,setChecked] = useState(false)
    const [isCheckedsf,setCheckedsf] = useState(false)
    const [isCheckedaf,setCheckedaf] = useState(false)
    const [isCheckedsc,setCheckedsc] = useState(false)
    const [isSearchFlight,setSearchf] = useState(false)

    const handleChangeDeptfrom = (event) => {
        setDeptfrom(event.target.value);
      };
    const handleChangeDeptTo = (e) => {
        setDeptTo(e.target.value)
    }
    const handleflightData = (e) => {
        props.handleFlightData(e);
    }
    let flightData = [
        {
            "sno":1,
            'flightNo':'Airbus-AI312',
             "Departfrom": deptfrom,
             "Goingto": deptTo,
             "Departuredate":deptDate,
             "Returndate": returnDate,
             "Travellers_class":travelclass,
             "img":airIndia,
             'code':'AI-805',
             'startTime':'18:20',
             'endTime':'02:35',
             'totalTime':'02h 15m',
             'price':'8,578',
             
        },
        {
            "sno":2,
            'flightNo':'Airbus-6E312',
            "Departfrom": deptfrom,
            "Goingto":deptTo,
            "Departuredate":deptDate,
            "Returndate":returnDate,
            "Travellers_class":travelclass,
            "img":IndiGo,
            'code':'6E-2114',
            'startTime':'21:45',
            'endTime':'00:10',
            'totalTime':'02h 25m',
            'price':'8,400',
            
       },
       {
        "sno":3,
        'flightNo':'Airbus-SEJ321',
        "Departfrom": deptfrom,
        "Goingto":deptTo,
        "Departuredate":deptDate,
        "Returndate":returnDate,
        "Travellers_class":travelclass,
        "img":SpiceJet,
        'code':'sej-775',
        'startTime':'21:45',
        'endTime':'00:10',
        'totalTime':'02h 25m',
        'price':'8,500',
        
   },
]
  
    return(<>
    
        <div className='flight-main-div'>
            <div>
                <Button variant='outlined' >ONE WAY</Button>
                <Button variant='outlined' >ROUND TRIP</Button>
            </div>
            <div>
                <TextField value={deptfrom} id="standard-deptfrom" label="Dept From" variant='standard' onChange={handleChangeDeptfrom} /> 
                <span className='flight-main-div-inp2'>
                    <TextField  value={deptTo} id="standard-deptto" label="Going To" variant='standard' onChange={handleChangeDeptTo} />
                    </span>
            </div>
            <div> 
                <TextField value={deptDate} id='standard-date' label='Departure Date' variant='standard' onChange={(e) => {setDeptdate(e.target.value)}} />
                <span className='flight-main-div-inp4'>
                    <TextField value={returnDate} id='standard-date' label='Return Date' variant='standard' onChange={(e) => {setReturndate(e.target.value)}} />
                    </span>
            </div> 
            <div className='div-box-1'>
                <span>
                    <InputLabel className='inp' id="demo-simple-select-label"  >Travellers Class</InputLabel>
                    <Select 
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
                <div>
                    <span>
                        <Button variant='contained' endIcon={<ArrowForward />}>Check Your Refund</Button>
                        <Link to = "/searchFlight" >
                            <Button variant='contained' endIcon={<ArrowForward />}
                            //   onClick={() => {setSearchf(!isSearchFlight)}}
                            onClick={()=>{handleflightData(flightData)}}
                              color='error'>Search Flights</Button>
                        </Link>
                    </span>
                </div>
        </div>
  
        </>)
}