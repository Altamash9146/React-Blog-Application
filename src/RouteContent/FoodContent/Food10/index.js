import React from 'react'
import Clogo from '../../../ContentLogo'
import "./Food10.style.css"
import Food10Content from './Food10'
import ContextApi from '../../../Utility/ContextStore/ContextData'
const Food10 = () => {
  return (
    <>
    <Clogo/> 
     <ContextApi>
      <Food10Content/>
    </ContextApi>
    </>
  )
}

export default Food10