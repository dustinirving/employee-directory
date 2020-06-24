// Import React to render JSX
import React from 'react'

// Create a Header Component to be inserted into the Home Page
function Header () {
  return (
    <div className='jumbotron jumbotron-fluid text-center bg-info text-white'>
      <h1 style={{ fontWeight: 'bold' }}>Employee Directory</h1>
    </div>
  )
}
// Export the Header component as the default
export default Header
