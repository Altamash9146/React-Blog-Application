import React from 'react'
import Clogo from '../../../ContentLogo'
import "./Fitness6.style.css"
import Fitness6Content from './Fitness6'
import ContextApi from '../../../Utility/ContextStore/ContextData'
const Fitness6 = () => {
  return (
    <>
    <Clogo/> 
     <ContextApi>
      <Fitness6Content/>
    </ContextApi>
    </>
  )
}

export default Fitness6