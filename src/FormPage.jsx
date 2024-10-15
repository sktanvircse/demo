import React, { useState } from 'react';
import Map from './components/Map';

const FormPage = () => {
  const [start, setStart] = useState({ latitude: '', longitude: '' });
  const [end, setEnd] = useState({ latitude: '', longitude: '' });

  const handleStartChange = (event) => {
    const { name, value } = event.target;
    setStart(prevState => ({ ...prevState, [name]: value }));
  };

  const handleEndChange = (event) => {
    const { name, value } = event.target;
    setEnd(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission
    console.log("Start:", start);
    console.log("End:", end);
  };

  return (
    <div>
      <h1>Location Form</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Start Latitude:</label>
          <input
            type="text"
            name="latitude"
            value={start.latitude}
            onChange={handleStartChange}
          />
          <label>Start Longitude:</label>
          <input
            type="text"
            name="longitude"
            value={start.longitude}
            onChange={handleStartChange}
          />
        </div>
        <div>
          <label>End Latitude:</label>
          <input
            type="text"
            name="latitude"
            value={end.latitude}
            onChange={handleEndChange}
          />
          <label>End Longitude:</label>
          <input
            type="text"
            name="longitude"
            value={end.longitude}
            onChange={handleEndChange}
          />
        </div>
        <Map start={start} end={end} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default FormPage;
