import React from 'react'
import Clogo from '../../../ContentLogo'
import "./Rrr.style.css"
import RrrContent from './Rrr'
import ContextApi from '../../../Utility/ContextStore/ContextData'
const Rrr = () => {
  return (
    <>
    <Clogo/> 
     <ContextApi>
      <RrrContent/>
    </ContextApi>
    </>
  )
}

export default Rrr