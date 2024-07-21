import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Empty() {
  return (
    <div>
      <h1 className='not-available'>You have not saved any movie here.</h1>
      <h1 className='not-available'>
        Go to <NavLink className="not-available" to="/movies">Movies</NavLink> to add them in your list.
      </h1>
    </div>
  )
}
