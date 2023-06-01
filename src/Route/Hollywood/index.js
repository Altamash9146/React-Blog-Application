import React from "react";
import "./Hollywood.style.css"
import ContextApi from "../../Utility/ContextStore/ContextData";
import HollywoodData from "./HollywoodData";
import HollywoodTopPost from "./HollywoodTopPost";
import { Logo,TopNavigation } from "../../Components";
import MobileRoute from "./MobileRouteNavi";
const Hollywood = () => {
  return (
   <>
   <Logo/>
   <MobileRoute/>
   <TopNavigation/>
    <ContextApi>
    < HollywoodData/>
    < HollywoodTopPost/>
      </ContextApi>
   </>
  )
}

export default Hollywood