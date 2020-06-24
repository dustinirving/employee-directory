// Import React to render JSX
// Import the useState and useEffect Hooks
import React, { useState, useEffect } from 'react'
// Import the employees from the employees.json file
import employeeList from '../../employees.json'
// Import SearchWrapper and Table components
import SearchWrapper from '../SearchWrapper'
import Table from '../Table'

// This component is the main container and responsible for storing state
function Container () {
  // Use the useState hook to use state in a functional component
  // Employees is initialized as an array and search is an empty string
  const [employees, setEmployees] = useState(employeeList)
  const [search, setSearch] = useState('')

  // Use the useEffect hook to watch for any changes the user types into to the search bar
  useEffect(() => {
    filterHandler(search)
  }, [search])

  // Order handler function to order the table depending on which button the user clicks
  const orderHandler = orderBy => {
    const sortedEmployees = employees.sort((a, b) =>
      a[orderBy] > b[orderBy] ? 1 : -1
    )
    // Set the employees state to the ordered employees
    setEmployees([...sortedEmployees])
  }

  // This function is used to filter the table based on what the user has entered into the search bar
  const filterHandler = search => {
    // Start by changing to lowercase and removing white space
    const lowerSearch = search.toLowerCase().trim()
    // Use the filter method to filter the employees in the table
    const filteredEmployees = employees.filter(employee => {
      // Create an array of all the employee values
      const values = Object.values(employee)
      // Loop through the values and see if any match the search
      // If the search matches a value, include the employee in the table
      for (let value of values) {
        const stringValue = value.toString().toLowerCase()
        if (stringValue.includes(lowerSearch)) {
          return employee
        }
      }
    })
    // Set the employees state to the filtered array
    setEmployees(filteredEmployees)
  }

  // Used to handle input change
  // Initialize employees state back to the original and set the search state to whatever the input is
  const handleInputChange = event => {
    setEmployees(employeeList)
    setSearch(event.target.value)
  }
  // Pass in props to the SearchWrapper child component
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
// Export the Container functional component
export default Container
