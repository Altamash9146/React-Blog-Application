import React from 'react'
import Clogo from '../../../ContentLogo'
import "./Tech10.style.css"
import Tech1Content from './Technology10'
import ContextApi from '../../../Utility/ContextStore/ContextData'
const Tech10 = () => {
  return (
    <>
    <Clogo/> 
     <ContextApi>
      <Tech1Content/>
    </ContextApi>
    </>
  )
}

export default Tech10