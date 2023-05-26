import React from 'react'
import Clogo from '../../../ContentLogo'
import "./Food11.style.css"
import Food11Content from './Food11'
import ContextApi from '../../../Utility/ContextStore/ContextData'
const Food11 = () => {
  return (
    <>
    <Clogo/> 
     <ContextApi>
      <Food11Content/>
    </ContextApi>
    </>
  )
}

export default Food11