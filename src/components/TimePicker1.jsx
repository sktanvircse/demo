import React, { useState } from 'react';
import { TimePicker } from '@mui/lab';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';

function MyTimePicker() {
  const [selectedTime, setSelectedTime] = useState(new Date('2024-01-01T10:00:00'));

  const handleTimeChange = (newTime) => {
    setSelectedTime(newTime);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <TimePicker
        label="Select Time"
        value={selectedTime}
        onChange={handleTimeChange}
        ampm
        minutesStep={1}
      />
    </LocalizationProvider>
  );
}

export default MyTimePicker;
