import React from 'react'
import Clogo from '../../../ContentLogo'
import "./Fitness5.style.css"
import Fitness5Content from './Fitness5'
import ContextApi from '../../../Utility/ContextStore/ContextData'
const Fitness5 = () => {
  return (
    <>
    <Clogo/> 
     <ContextApi>
      <Fitness5Content/>
    </ContextApi>
    </>
  )
}

export default Fitness5