import React from "react";
import "./Technology.style.css"
import TechnologyData from "./TechnologyData";
import ContextApi from "../../Utility/ContextStore/ContextData";
import TechnologyTopPost from "./TopPost";
import { Logo,TopNavigation } from "../../Components";
import MobileRouteNavi from "./MobileRouteNavi";
const Technology = () => {
  return (
   <>
      <Logo/>
      <MobileRouteNavi/>
      <TopNavigation/>
      <ContextApi>
      <TechnologyData/>
      <TechnologyTopPost/>
      </ContextApi>
   </>
  )
}

export default Technology