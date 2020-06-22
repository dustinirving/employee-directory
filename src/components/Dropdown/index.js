import React from 'react'

function Dropdown (props) {
  return (
    <div className='dropdown'>
      <button
        className='btn bg-info btn-secondary dropdown-toggle border-info'
        type='button'
        id='dropdownMenuButton'
        data-toggle='dropdown'
        aria-haspopup='true'
        aria-expanded='false'
      >
        Order By
      </button>
      <div className='dropdown-menu' aria-labelledby='dropdownMenuButton'>
        <button
          className='dropdown-item'
          onClick={() => props.orderHandler('id')}
        >
          ID
        </button>
        <button
          className='dropdown-item'
          onClick={() => props.orderHandler('first')}
        >
          First Name
        </button>
        <button
          className='dropdown-item'
          onClick={() => props.orderHandler('last')}
        >
          Last Name
        </button>
        <button
          className='dropdown-item'
          onClick={() => props.orderHandler('department')}
        >
          Department
        </button>
        <button
          className='dropdown-item'
          onClick={() => props.orderHandler('position')}
        >
          Position
        </button>
      </div>
    </div>
  )
}

export default Dropdown
