import React from 'react'
import Clogo from '../../../ContentLogo'
import "./Tech5.style.css"
import Tech5Content from './Technology5'
import ContextApi from '../../../Utility/ContextStore/ContextData'
const Tech5 = () => {
  return (
    <>
    <Clogo/> 
     <ContextApi>
      <Tech5Content/>
    </ContextApi>
    </>
  )
}

export default Tech5