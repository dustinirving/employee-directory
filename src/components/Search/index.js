// Import React to render the JSX
import React from 'react'

// Create a functional component that takes in handleInputChange as a prop
function Search ({ handleInputChange }) {
  // Return an input that has the onChange event listener
  return (
    <div>
      <input
        name='search'
        type='text'
        placeholder='Search...'
        onChange={handleInputChange}
      />
    </div>
  )
}

// Export the Search Component as the default
export default Search
