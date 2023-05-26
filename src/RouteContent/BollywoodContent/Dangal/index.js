import React from 'react'
import DangalContent from './Dangal'
import ContextApi from '../../../Utility/ContextStore/ContextData'
import Clogo from '../../../ContentLogo'

const Dangal = () => {
  return (
    <>
    <Clogo/>
   <ContextApi>
    <DangalContent/>
    </ContextApi> 
    
    </>
  )
}

export default Dangal