import React from 'react'
import Clogo from '../../../ContentLogo'
import "./Tech11.style.css"
import Tech11Content from './Technology11'
import ContextApi from '../../../Utility/ContextStore/ContextData'
const Tech11 = () => {
  return (
    <>
    <Clogo/> 
     <ContextApi>
      <Tech11Content/>
    </ContextApi>
    </>
  )
}

export default Tech11