import React from 'react'
import Clogo from '../../../ContentLogo'
import "./Food6.style.css"
import Food6Content from './Food6'
import ContextApi from '../../../Utility/ContextStore/ContextData'
const Food6 = () => {
  return (
    <>
    <Clogo/> 
     <ContextApi>
      <Food6Content/>
    </ContextApi>
    </>
  )
}

export default Food6