import React from 'react'
import Clogo from '../../../ContentLogo'
import "./Food9.style.css"
import Food9Content from './Food9'
import ContextApi from '../../../Utility/ContextStore/ContextData'
const Food9 = () => {
  return (
    <>
    <Clogo/> 
     <ContextApi>
      <Food9Content/>
    </ContextApi>
    </>
  )
}

export default Food9