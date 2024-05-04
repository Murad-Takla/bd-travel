import React, { useState } from 'react';
import './BookingForm.css'; // Import CSS file
import { Link, useNavigate } from 'react-router-dom';

function BookingForm() {

  const navigate = useNavigate()
  const [origin, setOrigin] = useState('');
  const [destination, setDestination] = useState('');
  const [startDate, setStartDate] = useState('');
  const [finishDate, setFinishDate] = useState('');

  const handleOriginChange = (event) => {
    setOrigin(event.target.value);
  };

  const handleDestinationChange = (event) => {
    setDestination(event.target.value);
  };

  const handleStartDateChange = (event) => {
    setStartDate(event.target.value);
  };

  const handleFinishDateChange = (event) => {
    event.preventDefault()
    setFinishDate(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
     
    navigate("/rooms")
  
  };

  return (
    <div className='lg:w-[450px] h-[450px] shadow-md mt-5   '>
      <form onSubmit={handleSubmit} className="booking-form p-4">
        <div  >
          <label className='flex flex-col'>
            <p className='font-bold'> Origin </p>
            <select 
            name='origin'
            className='border mt-2 p-2 rounded text-gray-400 font-semibold' value={origin} onChange={handleOriginChange} required>
              <option value="">Select Origin</option>
              <option value="New York">New York</option>
              <option value="Los Angeles">Los Angeles</option>
              <option value="London">London</option>

            </select>
          </label>
        </div>
        <div className="form-group">
          <div>
            <label className='flex flex-col'>
              <p className='font-bold'> Destination </p>
              <select 
              name='destination'
              className='border mt-2 p-2 rounded text-gray-400 font-semibold' value={destination} onChange={handleDestinationChange} required>
                <option value="">Select Destination</option>
                <option value="Paris">Paris</option>
                <option value="Tokyo">Tokyo</option>
                <option value="Sydney">Sydney</option>
                {/* Add more options as needed */}
              </select>
            </label>
          </div>
        </div>
        <div className=' grid grid-cols-2 gap-4'>
          <div  >
            <label>
              <p className='font-bold'> From</p>
              <input
              name='from'
                className='border mt-2 p-2 rounded text-gray-400 font-semibold'
                type="date"
                value={startDate}
                onChange={handleStartDateChange}
                required
              />
            </label>
          </div>
          <div >
            <label>
              <p className='font-bold'>To</p>
              <input
              name='to'
                type="date"
                className='border mt-2 p-2 rounded text-gray-400 font-semibold'
                value={finishDate}
                onChange={handleFinishDateChange}
                min={startDate} // Set min attribute to start date
                required
              />
            </label>
          </div>
        </div>

        <div >
          <button
           // to='/rooms'
            className="mt-8 mx-auto container  inline-flex items-center justify-center rounded-xl bg-green-600 py-3 px-6 font-dm text-base font-medium text-white shadow-xl shadow-green-400/75 transition-transform duration-200 ease-in-out hover:scale-[1.02]"

          >
            Continue
          </button>
        </div>
      </form>
    </div>
  );
}

export default BookingForm;
