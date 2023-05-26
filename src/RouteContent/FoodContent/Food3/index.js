import React from 'react'
import Clogo from '../../../ContentLogo'
import "./Food3.style.css"
import Food3Content from './Food3'
import ContextApi from '../../../Utility/ContextStore/ContextData'
const Food3 = () => {
  return (
    <>
    <Clogo/> 
     <ContextApi>
      <Food3Content/>
    </ContextApi>
    </>
  )
}

export default Food3