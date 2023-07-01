import React, { useContext, useEffect, useState } from 'react'
import DonationForm from '../../components/donationForm/donationForm'
import axios from 'axios';
import { Context } from '../../context/Context';
import './donation.css';


export default function Donation() {
  const { user } = useContext(Context);
const token = user?.token;

const [donations, setDonations] = useState([]);

useEffect(() => {
  const fetchDonations = async () => {
    const res = await axios.get('/donation', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    setDonations(res.data);
  };
  fetchDonations();
}, [token]);


  return (
    <>
    <div className="donationPage">
      <div className="donationTop">
        <DonationForm/>
      </div>
    </div>
    <hr className="ruler"/>
    <h1 className='donations'>Donations</h1>
    <div className="donationBottom">
    {donations.map((donation) => (
      <div key={donation._id} className='donation'>
        <p><b>Veg/Non-veg</b>: {donation.foodItemType}</p>
        <p><b>Quantity (No. of items) </b>: {donation.quantity}</p>
        <p><b>Pickup Date </b>: {donation.pickupDate}</p>
        <p><b>Pickup Time </b>: {donation.pickupTime}</p>
        <p><b>Pickup Location </b>: {donation.pickupLocation}</p>
        <p><b>Meal Size (Adult/Children) </b>: {donation.mealSize}</p>
        <p><b>Username </b>: {donation.username}</p>
      </div>
    ))
    }
    </div>
    
    </>
  )}



