import React, { useState } from 'react';
import TimePicker from './components/TimePicker';

const Time = () => {
  const [time, setTime] = useState(new Date());

  const handleTimeChange = (newTime) => {
    setTime(newTime);
  };

  return (
    <div>
      <label>Choose Time:</label>
      <TimePicker value={time} onChange={handleTimeChange} />
    </div>
  );
};

export default Time;
