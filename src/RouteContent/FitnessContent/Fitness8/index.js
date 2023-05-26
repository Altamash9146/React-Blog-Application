import React from 'react'
import Clogo from '../../../ContentLogo'
import "./Fitness8.style.css"
import Fitness8Content from './Fitness8'
import ContextApi from '../../../Utility/ContextStore/ContextData'
const Fitness8 = () => {
  return (
    <>
    <Clogo/> 
     <ContextApi>
      <Fitness8Content/>
    </ContextApi>
    </>
  )
}

export default Fitness8