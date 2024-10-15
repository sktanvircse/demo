import React from 'react';

const TimePicker = ({ value, onChange }) => {
  const hours = value.getHours().toString().padStart(2, '0');
  const minutes = value.getMinutes().toString().padStart(2, '0');
  const amPm = value.getHours() >= 12 ? 'PM' : 'AM';

  const handleHourChange = (e) => {
    const newHours = parseInt(e.target.value, 10) % 12 || 12; // Ensure hour is between 1 and 12
    const newTime = new Date(value);
    newTime.setHours(e.target.value.includes('PM') ? newHours + 12 : newHours);
    onChange(newTime);
  };

  const handleMinuteChange = (e) => {
    const newTime = new Date(value);
    newTime.setMinutes(e.target.value);
    onChange(newTime);
  };

  const handleAmPmChange = (e) => {
    const newTime = new Date(value);
    const newHours = newTime.getHours() % 12;
    newTime.setHours(e.target.value === 'PM' ? newHours + 12 : newHours);
    onChange(newTime);
  };

  return (
    <div>
      <select value={hours} onChange={handleHourChange}>
        {Array.from({ length: 12 }, (_, i) => i + 1).map((hour) => (
          <option key={hour} value={hour.toString().padStart(2, '0')}>{hour.toString().padStart(2, '0')}</option>
        ))}
      </select>
      :
      <select value={minutes} onChange={handleMinuteChange}>
        {Array.from({ length: 60 }, (_, i) => i).map((minute) => (
          <option key={minute} value={minute.toString().padStart(2, '0')}>{minute.toString().padStart(2, '0')}</option>
        ))}
      </select>
      <select value={amPm} onChange={handleAmPmChange}>
        <option value="AM">AM</option>
        <option value="PM">PM</option>
      </select>
    </div>
  );
};

export default TimePicker;
