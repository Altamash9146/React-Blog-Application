import React from 'react'
import Clogo from '../../../ContentLogo'
import "./Fitness7.style.css"
import Fitness7Content from './Fitness7'
import ContextApi from '../../../Utility/ContextStore/ContextData'
const Fitness7 = () => {
  return (
    <>
    <Clogo/> 
     <ContextApi>
      <Fitness7Content/>
    </ContextApi>
    </>
  )
}

export default Fitness7