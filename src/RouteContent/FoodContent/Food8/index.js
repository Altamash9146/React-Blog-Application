import React from 'react'
import Clogo from '../../../ContentLogo'
import "./Food8.style.css"
import Food8Content from './Food8'
import ContextApi from '../../../Utility/ContextStore/ContextData'
const Food8 = () => {
  return (
    <>
    <Clogo/> 
     <ContextApi>
      <Food8Content/>
    </ContextApi>
    </>
  )
}

export default Food8