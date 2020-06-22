import React, { useState, useEffect } from 'react'
import employeeList from '../../employees.json'
import SearchWrapper from '../SearchWrapper'
import Table from '../Table'

function Container () {
  const [employees, setEmployees] = useState(employeeList)

  const [search, setSearch] = useState('')

  useEffect(() => {
    filterHandler(search)
  }, [search])

  const orderHandler = orderBy => {
    const sortedEmployees = employees.sort((a, b) =>
      a[orderBy] > b[orderBy] ? 1 : -1
    )
    setEmployees([...sortedEmployees])
  }

  const filterHandler = search => {
    const filteredEmployees = employees.filter(employee => {
      const values = Object.values(employee)
      for (let value of values) {
        const stringValue = value.toString()
        if (stringValue.includes(search)) {
          return employee
        }
      }
    })
    setEmployees(filteredEmployees)
  }

  const handleInputChange = event => {
    setEmployees(employeeList)
    setSearch(event.target.value)
  }

  return (
    <div className='container'>
      <SearchWrapper
        employees={employees}
        orderHandler={orderHandler}
        filterHandler={filterHandler}
        handleInputChange={handleInputChange}
      />
      <Table employees={employees} />
    </div>
  )
}

export default Container
