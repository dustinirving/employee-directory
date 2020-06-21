import React from 'react'

function Employee (props) {
  const { id, first, last, department, position } = props
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

export default Employee
