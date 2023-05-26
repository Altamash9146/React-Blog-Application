import React from 'react'
import Clogo from '../../../ContentLogo'
import "./Sahoo.style.css"
import SahooContent from './Sahoo'
import ContextApi from '../../../Utility/ContextStore/ContextData'
const Sahoo = () => {
  return (
    <>
    <Clogo/> 
     <ContextApi>
      <SahooContent/>
    </ContextApi>
    </>
  )
}

export default Sahoo