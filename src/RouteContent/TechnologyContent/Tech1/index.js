import React from 'react'
import Clogo from '../../../ContentLogo'
import "./Tech1.style.css"
import Tech1Content from './Technology1'
import ContextApi from '../../../Utility/ContextStore/ContextData'
const Tech1 = () => {
  return (
    <>
    <Clogo/> 
     <ContextApi>
      <Tech1Content/>
    </ContextApi>
    </>
  )
}

export default Tech1