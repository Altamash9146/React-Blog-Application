import React from 'react'
import Clogo from '../../../ContentLogo'
import "./Tech2.style.css"
import Tech2Content from './Technology2'
import ContextApi from '../../../Utility/ContextStore/ContextData'
const Tech2 = () => {
  return (
    <>
    <Clogo/> 
     <ContextApi>
      <Tech2Content/>
    </ContextApi>
    </>
  )
}

export default Tech2