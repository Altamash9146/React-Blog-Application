import React from 'react'
import Clogo from '../../../ContentLogo'
import "./Tech7.style.css"
import Tech7Content from './Technology7'
import ContextApi from '../../../Utility/ContextStore/ContextData'
const Tech7 = () => {
  return (
    <>
    <Clogo/> 
     <ContextApi>
      <Tech7Content/>
    </ContextApi>
    </>
  )
}

export default Tech7