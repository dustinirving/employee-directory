import React from 'react'
import Employee from '../Employee'

// Create a functional Component called Table that takes in employees as a prop
function Table ({ employees }) {
  // Create a table and dynamically insert employees into by using the map method and the Employee Component
  return (
    <table className='table'>
      <thead>
        <tr>
          <th scope='col'>ID</th>
          <th scope='col'>First</th>
          <th scope='col'>Last</th>
          <th scope='col'>Department</th>
          <th scope='col'>Position</th>
        </tr>
      </thead>
      <tbody>
        {employees.map(employee => (
          <Employee
            id={employee.id}
            key={employee.id}
            first={employee.first}
            last={employee.last}
            department={employee.department}
            position={employee.position}
          />
        ))}
      </tbody>
    </table>
  )
}

// Export the Table Component
export default Table
