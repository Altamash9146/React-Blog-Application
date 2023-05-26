import React from 'react'
import Clogo from '../../../ContentLogo'
import "./Food4.style.css"
import Food4Content from './Food4'
import ContextApi from '../../../Utility/ContextStore/ContextData'
const Food4 = () => {
  return (
    <>
    <Clogo/> 
     <ContextApi>
      <Food4Content/>
    </ContextApi>
    </>
  )
}

export default Food4