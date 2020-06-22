import React from 'react'
import Employee from '../Employee'

function Table (props) {
  return (
    <table className='table'>
      <thead>
        <tr>
          <th scope='col'>ID #</th>
          <th scope='col'>First</th>
          <th scope='col'>Last</th>
          <th scope='col'>Department</th>
          <th scope='col'>Position</th>
        </tr>
      </thead>
      <tbody>
        {props.employees.map(employee => (
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

export default Table
