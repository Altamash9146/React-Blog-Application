import React from 'react'
import Clogo from '../../../ContentLogo'
import "./Tech8.style.css"
import Tech8Content from './Technology8'
import ContextApi from '../../../Utility/ContextStore/ContextData'
const Tech8 = () => {
  return (
    <>
    <Clogo/> 
     <ContextApi>
      <Tech8Content/>
    </ContextApi>
    </>
  )
}

export default Tech8