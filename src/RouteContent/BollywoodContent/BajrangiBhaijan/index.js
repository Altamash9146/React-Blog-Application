import React from 'react'
import Clogo from '../../../ContentLogo'
import "./Bajrangi.style.css"
import BajrangiBhaijanContent from './BajrangiBhaijan'
import ContextApi from '../../../Utility/ContextStore/ContextData'
const BajrangiBhaijan = () => {
  return (
    <>
    <Clogo/> 
     <ContextApi>
      <BajrangiBhaijanContent/>
    </ContextApi>
    </>
  )
}

export default BajrangiBhaijan