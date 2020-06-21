import React from 'react'
import Employee from '../Employee'

function Table () {
  return (
    <table class='table table-striped'>
      <thead>
        <tr>
          <th scope='col'>#</th>
          <th scope='col'>First</th>
          <th scope='col'>Last</th>
          <th scope='col'>Department</th>
          <th scope='col'>Position</th>
        </tr>
      </thead>
      <tbody>
        <Employee />
      </tbody>
    </table>
  )
}

export default Table
