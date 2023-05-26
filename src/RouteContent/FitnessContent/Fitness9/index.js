import React from 'react'
import Clogo from '../../../ContentLogo'
import "./Fitness9.style.css"
import Fitness9Content from './Fitness9'
import ContextApi from '../../../Utility/ContextStore/ContextData'
const Fitness9 = () => {
  return (
    <>
    <Clogo/> 
     <ContextApi>
      <Fitness9Content/>
    </ContextApi>
    </>
  )
}

export default Fitness9