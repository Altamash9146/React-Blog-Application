import React from "react";
import "./Hollywood.style.css"
import ColorCombination from "../Home/ColorCombination";
import ContextApi from "../../Utility/ContextStore/ContextData";
import HollywoodData from "./HollywoodData";
import HollywoodTopPost from "./HollywoodTopPost";
import { Logo,TopNavigation } from "../../Components";
import MobileRoute from "./MobileRouteNavi";
import LogoMobileRoute from "./LogoMobileRoute"
const Hollywood = () => {
  return (
   <>
   <Logo/>
   <MobileRoute/>
   <LogoMobileRoute/>
   <TopNavigation/>
      <ContextApi>
        <ColorCombination/>
        < HollywoodData/>
        < HollywoodTopPost/>
      </ContextApi>
   </>
  )
}

export default Hollywood