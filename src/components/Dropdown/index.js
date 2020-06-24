// Import React to render JSX
import React from 'react'

// Create a functional component Dropdown that takes in props
// Pull out orderHandler from the props
function Dropdown ({ orderHandler }) {
  // Create a Dropdown to order the table
  // The dropdown has orderby: id, first, last, department and position
  // Attach the orderHandler function to the onClick event listeners in the dropdown
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

// Export the Dropdown function as the default
export default Dropdown
