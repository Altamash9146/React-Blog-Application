import React from "react";
import "./Technology.style.css"
import ColorCombination from "../Home/ColorCombination";
import TechnologyData from "./TechnologyData";
import ContextApi from "../../Utility/ContextStore/ContextData";
import TechnologyTopPost from "./TopPost";
import { Logo,TopNavigation } from "../../Components";
import LogoMobileRoute from "./LogoMobileRoute"
import MobileRouteNavi from "./MobileRouteNavi";
const Technology = () => {
  return (
   <>
      <Logo/>
      <LogoMobileRoute/>
      <MobileRouteNavi/>
      <TopNavigation/>
      <ContextApi>
      <ColorCombination/>
      <TechnologyData/>
      <TechnologyTopPost/>
      </ContextApi>
   </>
  )
}

export default Technology