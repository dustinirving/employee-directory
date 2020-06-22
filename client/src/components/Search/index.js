import React from 'react'

function Search (props) {
  return (
    <div>
      <input
        name='search'
        type='text'
        placeholder='Search...'
        onChange={props.handleInputChange}
      />
    </div>
  )
}

export default Search
