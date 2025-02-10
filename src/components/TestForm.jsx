import React from 'react';

const MultiInputForm = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    console.log('Form data:', data);
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-8 p-6 bg-gray-100 rounded">
      <div className="mb-4">
        <label htmlFor="username" className="block text-gray-700 mb-2">UserName:</label>
        <input
          type="text"
          id="username"
          name="username"
          className="w-full px-3 py-2 border rounded"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="description" className="block text-gray-700 mb-2">Description:</label>
        <input
          type="text"
          id="Description"
          name="Description"
          className="w-full px-3 py-2 border rounded"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="duration" className="block text-gray-700 mb-2">Duration:</label>
        <input
          type="number"
          id="duration"
          name="duration"
          className="w-full px-3 py-2 border rounded"
          min="1"
          required
        />
      </div>      
      <div className="mb-4">
        <label htmlFor="duration" className="block text-gray-700 mb-2">type:</label>
        <input
          type="text"
          id="type"
          name="type"
          className="w-full px-3 py-2 border rounded"
          required
        />
      </div>
      <button id='testSubmit' type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
        Submit
      </button>
    </form>
  );
};

export default MultiInputForm;