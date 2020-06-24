import React from 'react'

function Dropdown (props) {
  const { orderHandler } = props
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
        <button className='dropdown-item' onClick={() => orderHandler('id')}>
          ID
        </button>
        <button className='dropdown-item' onClick={() => orderHandler('first')}>
          First Name
        </button>
        <button className='dropdown-item' onClick={() => orderHandler('last')}>
          Last Name
        </button>
        <button
          className='dropdown-item'
          onClick={() => orderHandler('department')}
        >
          Department
        </button>
        <button
          className='dropdown-item'
          onClick={() => orderHandler('position')}
        >
          Position
        </button>
      </div>
    </div>
  )
}

export default Dropdown
