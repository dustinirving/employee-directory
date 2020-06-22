import React from 'react'

function Dropdown (props) {
  return (
    <div className='dropdown'>
      <button
        className='btn bg-info btn-secondary dropdown-toggle'
        type='button'
        id='dropdownMenuButton'
        data-toggle='dropdown'
        aria-haspopup='true'
        aria-expanded='false'
      >
        Order By
      </button>
      <div className='dropdown-menu' aria-labelledby='dropdownMenuButton'>
        <a
          className='dropdown-item'
          href='#'
          onClick={() => props.orderHandler('id')}
        >
          ID
        </a>
        <a
          className='dropdown-item'
          href='#'
          onClick={() => props.orderHandler('first')}
        >
          First Name
        </a>
        <a
          className='dropdown-item'
          href='#'
          onClick={() => props.orderHandler('last')}
        >
          Last Name
        </a>
        <a
          className='dropdown-item'
          href='#'
          onClick={() => props.orderHandler('department')}
        >
          Department
        </a>
        <a
          className='dropdown-item'
          href='#'
          onClick={() => props.orderHandler('position')}
        >
          Position
        </a>
      </div>
    </div>
  )
}

export default Dropdown
