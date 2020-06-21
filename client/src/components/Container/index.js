import React, { useState } from 'react'
import Table from '../Table'
import Dropdown from '../Dropdown'
import employeeList from '../../employees.json'

function Container () {
  const [employees, setEmployees] = useState(employeeList)

  const orderHandler = orderBy => {
    const sortedEmployees = employees.sort((a, b) =>
      a[orderBy] > b[orderBy] ? 1 : -1
    )
    setEmployees([...sortedEmployees])
  }

  return (
    <div className='container'>
      <Dropdown employees={employees} orderHandler={orderHandler} />
      <Table employees={employees} />
    </div>
  )
}

export default Container
