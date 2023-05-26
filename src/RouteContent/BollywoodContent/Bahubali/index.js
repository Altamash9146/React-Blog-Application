import React from 'react'
import Clogo from '../../../ContentLogo'
import "./Bahubali.style.css"
import BahubaliContent from './BahuBali'
import ContextApi from '../../../Utility/ContextStore/ContextData'
const Bahubali = () => {
  return (
    <>
    <Clogo/> 
     <ContextApi>
      <BahubaliContent/>
    </ContextApi>
    </>
  )
}

export default Bahubali