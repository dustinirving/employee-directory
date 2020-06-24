// Import React to render JSX
import React from 'react'
// Import Dropdown and Search Components
import Dropdown from '../Dropdown'
import Search from '../Search'

// SearchWrapper function takes in props
// Destructure the props
function SearchWrapper ({
  employees,
  orderHandler,
  filterHandler,
  handleInputChange
}) {
  // Pass in employees and orderHandler as props to the Dropdown Component
  // Pass in employees, filterHandler and handleInputChange to the Search Component
  return (
    <div className='row mb-3'>
      <div className='col-6'>
        <Dropdown employees={employees} orderHandler={orderHandler} />
      </div>
      <div className='col-6 text-right'>
        <Search
          employees={employees}
          filterHandler={filterHandler}
          handleInputChange={handleInputChange}
        />
      </div>
    </div>
  )
}

// Export the SearchWrapper functional component
export default SearchWrapper
