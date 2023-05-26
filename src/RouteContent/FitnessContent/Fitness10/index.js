import React from 'react'
import Clogo from '../../../ContentLogo'
import "./Fitness10.style.css"
import Fitness10Content from './Fitness10'
import ContextApi from '../../../Utility/ContextStore/ContextData'
const Fitness10 = () => {
  return (
    <>
    <Clogo/> 
     <ContextApi>
      <Fitness10Content/>
    </ContextApi>
    </>
  )
}

export default Fitness10