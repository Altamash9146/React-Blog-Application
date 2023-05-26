import React from 'react'
import Clogo from '../../../ContentLogo'
import "./Food5.style.css"
import Food5Content from './Food5'
import ContextApi from '../../../Utility/ContextStore/ContextData'
const Food5 = () => {
  return (
    <>
    <Clogo/> 
     <ContextApi>
      <Food5Content/>
    </ContextApi>
    </>
  )
}

export default Food5