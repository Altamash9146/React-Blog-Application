import React from "react";
import "./home.style.css"
import "../../Global.css"
import Banner from "./Banner";
import Latest from "./Latest";
import LatestArticle from "./LatestArticle";
import TopPost from "./TopPost";
import LatestStories from "./LatestStories";
import ColorCombination from "./ColorCombination";
import ContextApi from "../../Utility/ContextStore/ContextData";
import { Logo,TopNavigation } from "../../Components";
import MobileN from "../../Components/MobileNavigation1";

const Home = () =>{


return(
<>
<Logo/>
<MobileN/>
<TopNavigation/>
<ContextApi>
<ColorCombination/>
<Banner/>
<Latest/>
<LatestArticle/>
<TopPost/>
<LatestStories/>
</ContextApi>
</>
)
}

export default Home