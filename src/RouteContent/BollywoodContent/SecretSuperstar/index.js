import React from 'react'
import Clogo from '../../../ContentLogo'
import "./Secret.style.css"
import SecretContent from './SecretSuperstar'
import ContextApi from '../../../Utility/ContextStore/ContextData'
const Secret = () => {
  return (
    <>
    <Clogo/> 
     <ContextApi>
      <SecretContent/>
    </ContextApi>
    </>
  )
}

export default Secret