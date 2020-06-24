import React from 'react'
import Dropdown from '../Dropdown'
import Search from '../Search'

function SearchWrapper (props) {
  const { employees, orderHandler, filterHandler, handleInputChange } = props
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

export default SearchWrapper
