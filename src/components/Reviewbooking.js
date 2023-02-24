import React, { useState } from 'react';
import $ from 'jquery';
import { Link } from 'react-router-dom';
import {Button,TextField} from '@mui/material'

 export default function Reviewbooking(props) {
   const [firstname,setFirstname] = useState('')
   const [lastname,setLn] = useState('')
   const [phno,setphno] = useState();
   const [mail,setMail] = useState('');
   const [isBtndisable,setbtn] = useState(false);
   const [isDisc,setDisc] = useState(false)
   const [isDiscval,setDiscval] = useState()
   const [promoc,setpromoc] = useState('')

   let promoData,fareAmt,fdata;
   let flightview = props.flightViewfare;
   console.log(flightview.price);
   fareAmt = flightview.price;
    fareAmt=fareAmt.replace(/\,/g,''); 
    fareAmt=parseInt(fareAmt,10);
    console.log(fareAmt);

   function selectPromoOptions() {
     
      console.log($($('input[name=radiobutton]:checked').closest('.promo-options-text').find("input[type=text]")).val());
      promoData = $($('input[name=radiobutton]:checked').closest('.promo-options-text').find("input[type=text]")).val();
      setpromoc(promoData);

      switch(promoData){

         case 'FLYNOW-5%OFF': var disc = (fareAmt * 5)/100;
                              fareAmt -= disc;
                              break;
         case 'PAYUPI-8%OFF':var discs = (fareAmt * 8)/100;
                              fareAmt -= discs;
                              break;
         case 'JULYOFF-15%OFF': var discnt = (fareAmt * 15)/100;
                                 fareAmt -= discnt;
                                 break;
         case 'GPAYOFF-10%OFF':var discnts = (fareAmt * 10)/100;
                                 fareAmt -= discnts;
                                 break;
         // default : fareAmt;
                     
      }
     
      console.log(fareAmt);
      
   //  fdata=fareAmt
    setDiscval(fareAmt);
   setDisc(false);
     // return fareAmt
   
    }
   function handlePromoip(){
      setDisc(true);
   }
   function handleBookSubmit(){
      if(firstname === '' || lastname === '' || phno === '' || mail === ''){
         alert('Booking details cant be empty!')
         return
      }
      else if(!/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/.test(mail)){
         alert('enter correct Email format')
         return
     }
      else if(!/^[6-9]{1}[0-9]{9}$/.test(phno)){
         alert('mobile no should contain numbers only')
         return
      }
      else if (!/^[a-zA-Z]+$/.test(firstname))
      {
          alert('firstname should contain alphabets')
           return
      }            
      else if(!/^[a-zA-Z]+$/.test(lastname)){
         alert('lastname should contain alphabets')
         return
      }
      else{
         setbtn(!isBtndisable)
      }

   }

  return (
    <div className='review-bookin-main-div'>
        <span>Review Your Booking</span>
        <div className='review.ticket'>
           
                    <div className='review-bookin-data'>
                         <p className='review-fname'>{flightview.flightName}</p>
                         <p className='review-deptfrom'>{flightview.Departfrom}</p>
                         <p className='review-deptto'>{flightview.Goingto}</p>
                         <p className='review-deptdate'>{flightview.Departuredate}</p>
                         <p className='review-rdate'>{flightview.Returndate}</p>
                         <div className="review-line-horizontal"></div>
                         <p className='review-class'>{flightview.Travellers_class}</p>
                        <span className='img-review'><img src={flightview.img}/></span>
                        <p className='review-flightdet'>{flightview.flightNo}</p>
                         <p className='review-code'>{flightview.code}</p>
                        <p className='review-startt'>{flightview.startTime}</p>
                         <p className='review-endt'>{flightview.endTime}</p>
                         <p className='review-tt'>Total Time: {flightview.totalTime}</p>
                         {/* <p className='rev-price'>{item.trvaelPrice}</p> */}
                         <div className='rev-price-div'>
                           <p  className='rev-pay'>Fare Price: &#x20B9; {flightview.price}</p>
                           {isDisc && selectPromoOptions()}
                           <span className='Discount-if'>Discount(if any): {promoc}</span>
                           <span className='disc-tpay'>Total Pay: {isDiscval} </span>
                        </div>
               
                     </div>
                  
            <div className='boarding-precautions'>
               <p className='precautions-header'>Compulsory Guidelines for Passengers</p>
                 <p>- Wear your mask at all times </p>
                 <p>- Practice physical distancing wherever possible, including when boarding the aircraft</p>
                 <p>- Wash or sanitize hands frequently by washing with soap and water or using alcohol-based hand sanitizers</p>
                 <p>- Avoid touching your eyes, nose or mouth, especially after contact with commonly touched surfaces</p>
                 
            </div>
             <p className='fare-span'>Fare Details</p>
            <div className='review-fare-details'>
               <span className='trveller-detailes'>Enter Traveller Details</span>
               <div id='review-fare-traveller'>
                  <span className='contact-det'>Contact Details</span>
                  <span className='input-mail-ph'>
                     <TextField placeholder='Enter Email address' variant='outlined' value={mail} onChange={(e)=>{setMail(e.target.value)}}/>
                     <TextField className='phtext' placeholder='Enter Mobile No' variant='outlined' value={phno} onChange={(e)=>{setphno(e.target.value)}} />
                  </span>
                 <span className='book-inform'>Your Booking details will be sent to this Email Address</span>
               <div className='traveler-names'>
                  <span className='trvel-det'>Traveller Information</span>
                  <span>
                     <TextField placeholder='Enter Firstname' variant='outlined' value={firstname} onChange={(e)=>{setFirstname(e.target.value)}}/>
                     <TextField className='' placeholder='Enter Lastname' variant='outlined' value={lastname} onChange={(e)=>{setLn(e.target.value)}} />
                  </span>
               </div>
               </div>
            </div>
            <div className='rev-promo-code'>
               <span className='promo-text'>Promo Code</span>
               {/* <TextField id="promocode" placeholder='Enter Promo Code' variant='outlined'/> 
               <Button variant='outlined' onClick={selectPromoOptions}>Apply</Button> */}
               <input placeholder='Enter Promo Code' className='promoinp' onChange={handlePromoip}/>
               <button value='APPLY' onClick={selectPromoOptions} style={{height:32}}>APPLY</button>
               <div className='promo-options'>
                  <div className='promo-options-text'>
                     <input type="radio" name="radiobutton" /> 
                     <input className='promo-input' type="text" value='FLYNOW-5%OFF'  readOnly />
                  </div>
                  <div className='promo-options-text'>
                       <input type="radio" name="radiobutton" />
                       <input className='promo-input' type="text" value='PAYUPI-8%OFF' readOnly />
                  </div>
                  <div className='promo-options-text'>
                     <input type="radio" name="radiobutton" />
                     <input className='promo-input' type="text" value='JULYOFF-15%OFF' readOnly />
                  </div>
                  <div className='promo-options-text'> 
                     <input type="radio" name="radiobutton" /> 
                     <input className='promo-input' type="text" value='GPAYOFF-10%OFF' readOnly />
               </div>
            </div>
         </div>
     </div>
     { isBtndisable ? 
     <Link to='/'>
       <Button variant='contained' className='submit-btn' onClick={handleBookSubmit}>Submit</Button>
     </Link> :
      <Button variant='contained' className='submit-btn' onClick={handleBookSubmit}>Submit</Button>
     }
   </div>
   )
}
