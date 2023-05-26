import React from 'react'
import Clogo from '../../../ContentLogo'
import "./Tech6.style.css"
import Tech6Content from './Technology6'
import ContextApi from '../../../Utility/ContextStore/ContextData'
const Tech6 = () => {
  return (
    <>
    <Clogo/> 
     <ContextApi>
      <Tech6Content/>
    </ContextApi>
    </>
  )
}

export default Tech6