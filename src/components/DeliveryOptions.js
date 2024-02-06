

import React, { useState } from 'react';

const DeliveryOption = ({ onSelectDelivery }) => {
  const [selectedOption, setSelectedOption] = useState('standard');

  const handleOptionChange = (option) => {
    setSelectedOption(option);
    onSelectDelivery(option); 
  };

  return (
    <div>
      <h2>Delivery Options</h2>
      <label>
        <input
          type="radio"
          value="standard"
          checked={selectedOption === 'standard'}
          onChange={() => handleOptionChange('standard')}
        />
        Standard Delivery
      </label>
      <label>
        <input
          type="radio"
          value="express"
          checked={selectedOption === 'express'}
          onChange={() => handleOptionChange('express')}
        />
        Express Delivery
      </label>

    </div>
  );
};

export default DeliveryOption;
