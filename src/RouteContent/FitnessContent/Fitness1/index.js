import React from 'react'
import Clogo from '../../../ContentLogo'
import "./Fitness1.style.css"
import Fitness1Content from './Fitness1'
import ContextApi from '../../../Utility/ContextStore/ContextData'
const Fitness1 = () => {
  return (
    <>
    <Clogo/> 
     <ContextApi>
      <Fitness1Content/>
    </ContextApi>
    </>
  )
}

export default Fitness1