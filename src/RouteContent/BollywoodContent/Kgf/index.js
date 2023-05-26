import React from 'react'
import Clogo from '../../../ContentLogo'
import "./Kgf.style.css"
import KgfContent from './Kgf'
import ContextApi from '../../../Utility/ContextStore/ContextData'
const Kgf = () => {
  return (
    <>
    <Clogo/> 
     <ContextApi>
      <KgfContent/>
    </ContextApi>
    </>
  )
}

export default Kgf