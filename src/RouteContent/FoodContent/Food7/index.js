import React from 'react'
import Clogo from '../../../ContentLogo'
import "./Food7.style.css"
import Food7Content from './Food7'
import ContextApi from '../../../Utility/ContextStore/ContextData'
const Food7 = () => {
  return (
    <>
    <Clogo/> 
     <ContextApi>
      <Food7Content/>
    </ContextApi>
    </>
  )
}

export default Food7