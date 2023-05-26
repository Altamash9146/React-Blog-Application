import React from 'react'
import Clogo from '../../../ContentLogo'
import "./Sanju.style.css"
import SanjuContent from './Sanju'
import ContextApi from '../../../Utility/ContextStore/ContextData'
const Sanju = () => {
  return (
    <>
    <Clogo/> 
     <ContextApi>
      <SanjuContent/>
    </ContextApi>
    </>
  )
}

export default Sanju