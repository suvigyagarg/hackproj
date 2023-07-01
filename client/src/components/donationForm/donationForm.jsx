import React, { useContext, useState } from 'react';
import axios from 'axios';
import { Context } from '../../context/Context';


const DonationForm = () => {
  const [foodItemType, setFoodItemType] = useState('veg');
  const [quantity, setQuantity] = useState('');
  const [pickupDate, setPickupDate] = useState('');
  const [pickupTime, setPickupTime] = useState('');
  const [pickupLocation, setPickupLocation] = useState('');
  const [mealSize, setMealSize] = useState('children');

const { user } = useContext(Context);
const token = user?.token;

  const handleFoodItemTypeChange = (e) => {
    setFoodItemType(e.target.value);
  };

  const handleMealSize = (e) => {
    setMealSize(e.target.value);
  };


  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      foodItemType,
      quantity,
      pickupDate,
      pickupTime,
      pickupLocation,
      mealSize,
    };

    try {
      const response = await axios.post('/donation', formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          },
          }
          );
      console.log(response.data);
      
      // Reset the form or perform any additional actions
    } catch (error) {
      console.error(error);
      // Handle error
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          <input
            type="radio"
            name="foodItemType"
            value="veg"
            checked={foodItemType === 'veg'}
            onChange={handleFoodItemTypeChange}
          />
          Veg
        </label>
        <label>
          <input
            type="radio"
            name="foodItemType"
            value="nonveg"
            checked={foodItemType === 'nonveg'}
            onChange={handleFoodItemTypeChange}
          />
          Non-Veg
        </label>
      </div>
      <div>
        <label>
          Quantity:
          <input
            type="number"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          Pickup Date:
          <input
            type="text"
            value={pickupDate}
            onChange={(e) => setPickupDate(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          Pickup Time:
          <input
            type="text"
            value={pickupTime}
            onChange={(e) => setPickupTime(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          Pickup Location:
          <input
            type="text"
            value={pickupLocation}
            onChange={(e) => setPickupLocation(e.target.value)}
          />
        </label>
      </div>
      <div>
      Meal Size:
        <label>
          <input
            type="radio"
            name="mealSize"
            value="children"
            checked={mealSize === 'children'}
            onChange={handleMealSize}
          />Children
        </label>
        <label>
          <input
            type="radio"
            name="mealSize"
            value="adults"
            checked={mealSize === 'adults'}
            onChange={handleMealSize}
          />Adults
        </label>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default DonationForm;

