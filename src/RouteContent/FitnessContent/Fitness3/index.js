import React from 'react'
import Clogo from '../../../ContentLogo'
import "./Fitness3.style.css"
import Fitness3Content from './Fitness3'
import ContextApi from '../../../Utility/ContextStore/ContextData'
const Fitness3 = () => {
  return (
    <>
    <Clogo/> 
     <ContextApi>
      <Fitness3Content/>
    </ContextApi>
    </>
  )
}

export default Fitness3