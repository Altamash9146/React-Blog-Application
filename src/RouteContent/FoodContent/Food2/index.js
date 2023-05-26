import React from 'react'
import Clogo from '../../../ContentLogo'
import "./Food2.style.css"
import Food2Content from './Food2'
import ContextApi from '../../../Utility/ContextStore/ContextData'
const Food2 = () => {
  return (
    <>
    <Clogo/> 
     <ContextApi>
      <Food2Content/>
    </ContextApi>
    </>
  )
}

export default Food2