import React from 'react'
import Clogo from '../../../ContentLogo'
import "./War.style.css"
import WarContent from './War'
import ContextApi from '../../../Utility/ContextStore/ContextData'
const War = () => {
  return (
    <>
    <Clogo/> 
     <ContextApi>
      <WarContent/>
    </ContextApi>
    </>
  )
}

export default War