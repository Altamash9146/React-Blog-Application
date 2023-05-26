import React from 'react'
import Clogo from '../../../ContentLogo'
import "./Sultan.style.css"
import SultanContent from './Sultan'
import ContextApi from '../../../Utility/ContextStore/ContextData'
const Sultan = () => {
  return (
    <>
    <Clogo/> 
     <ContextApi>
      <SultanContent/>
    </ContextApi>
    </>
  )
}

export default Sultan