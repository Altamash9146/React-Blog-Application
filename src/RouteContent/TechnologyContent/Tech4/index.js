import React from 'react'
import Clogo from '../../../ContentLogo'
import "./Tech4.style.css"
import Tech4Content from './Technology4'
import ContextApi from '../../../Utility/ContextStore/ContextData'
const Tech4 = () => {
  return (
    <>
    <Clogo/> 
     <ContextApi>
      <Tech4Content/>
    </ContextApi>
    </>
  )
}

export default Tech4