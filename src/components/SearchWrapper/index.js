import React from 'react'
import Dropdown from '../Dropdown'
import Search from '../Search'

function SearchWrapper (props) {
  return (
    <div className='row mb-3'>
      <div className='col-6'>
        <Dropdown
          employees={props.employees}
          orderHandler={props.orderHandler}
        />
      </div>
      <div className='col-6 text-right'>
        <Search
          employees={props.employees}
          filterHandler={props.filterHandler}
          handleInputChange={props.handleInputChange}
        />
      </div>
    </div>
  )
}

export default SearchWrapper
