import React from 'react'
import Clogo from '../../../ContentLogo'
import "./Tech9.style.css"
import Tech9Content from './Technology9'
import ContextApi from '../../../Utility/ContextStore/ContextData'
const Tech9 = () => {
  return (
    <>
    <Clogo/> 
     <ContextApi>
      <Tech9Content/>
    </ContextApi>
    </>
  )
}

export default Tech9