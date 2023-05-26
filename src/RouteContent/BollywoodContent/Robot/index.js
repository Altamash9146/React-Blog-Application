import React from 'react'
import Clogo from '../../../ContentLogo'
import "./Robot.style.css"
import RobotContent from './Robot'
import ContextApi from '../../../Utility/ContextStore/ContextData'
const Robot = () => {
  return (
    <>
    <Clogo/> 
     <ContextApi>
      <RobotContent/>
    </ContextApi>
    </>
  )
}

export default Robot