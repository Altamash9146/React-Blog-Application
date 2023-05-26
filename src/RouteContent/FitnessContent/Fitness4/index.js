import React from 'react'
import Clogo from '../../../ContentLogo'
import "./Fitness4.style.css"
import Fitness4Content from './Fitness4'
import ContextApi from '../../../Utility/ContextStore/ContextData'
const Fitness4 = () => {
  return (
    <>
    <Clogo/> 
     <ContextApi>
      <Fitness4Content/>
    </ContextApi>
    </>
  )
}

export default Fitness4