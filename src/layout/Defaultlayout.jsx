import React from 'react'
import Navbar from '../components/Navbar/NavbarCom'

const Defaultlayout =  (Component) => ({...props}) =>  {
  return (
    <div>
      <Navbar/>
      <Component {...props}/>
    </div>
  )
}

export default Defaultlayout