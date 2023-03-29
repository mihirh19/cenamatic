import React from 'react'
import Movienavbar from '../components/Navbar/Movienavbar'

const Movielayout = (Component) => ({...props}) =>  {
  return (
    <>
      <Movienavbar/>
     <Component {...props}/> 
    </>
  )
}

export default Movielayout