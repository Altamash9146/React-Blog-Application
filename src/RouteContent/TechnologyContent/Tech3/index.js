import React from 'react'
import Clogo from '../../../ContentLogo'
import "./Tech3.style.css"
import Tech3Content from './Technology3'
import ContextApi from '../../../Utility/ContextStore/ContextData'
const Tech3 = () => {
  return (
    <>
    <Clogo/> 
     <ContextApi>
      <Tech3Content/>
    </ContextApi>
    </>
  )
}

export default Tech3