// Import React so Babel can transpile the JSX
import React from 'react'

// Create an Employee functional component that takes in props
function Employee ({ id, first, last, department, position }) {
  // Insert the id, first, last, department and positon values into the Table
  return (
    <tr>
      <th scope='row'>{id}</th>
      <td>{first}</td>
      <td>{last}</td>
      <td>{department}</td>
      <td>{position}</td>
    </tr>
  )
}

// Export the Employee Component
export default Employee
