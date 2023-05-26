import React from 'react'
import Clogo from '../../../ContentLogo'
import "./Food1.style.css"
import Food1Content from './Food1'
import ContextApi from '../../../Utility/ContextStore/ContextData'
const Food1 = () => {
  return (
    <>
    <Clogo/> 
     <ContextApi>
      <Food1Content/>
    </ContextApi>
    </>
  )
}

export default Food1