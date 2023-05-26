import React from 'react'
import Clogo from '../../../ContentLogo'
import "./Fitness2.style.css"
import Fitness2Content from './Fitness2'
import ContextApi from '../../../Utility/ContextStore/ContextData'
const Fitness2 = () => {
  return (
    <>
    <Clogo/> 
     <ContextApi>
      <Fitness2Content/>
    </ContextApi>
    </>
  )
}

export default Fitness2