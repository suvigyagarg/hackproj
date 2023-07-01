import React, { useContext, useEffect, useState } from 'react'
import DonationForm from '../../components/donationForm/donationForm'
import axios from 'axios';
import { Context } from '../../context/Context';


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

    <DonationForm/>
    <h1>Donations</h1>
    {donations.map((donation) => (
      <div key={donation._id}>
        <h3>{donation.foodItemType}</h3>
        <p>{donation.quantity}</p>
        <p>{donation.pickupDate}</p>
        <p>{donation.pickupTime}</p>
        <p>{donation.pickupLocation}</p>
        <p>{donation.mealSize}</p>
        <p>{donation.username}</p>
        <p>{donation.pickupAddress}</p>
      </div>
    ))
    }
    </>
  )}



