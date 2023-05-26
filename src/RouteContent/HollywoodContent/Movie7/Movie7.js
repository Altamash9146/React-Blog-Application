import React ,{useContext}from "react";
import { Link } from "react-router-dom";
import Store from "../../../Utility/ContextStore/ContextApi";

const  Movie7Content = ()=>{
    const [data] = useContext(Store)
    console.log("DATATTATA",data);
return(
    <>
    <div className="Movie7-line"/>
    <div className="Movie7-Container">
 
         
{data.filter((item)=>item.cat ==='Hollywood-Images').map((d,item)=>{
    return(
        <div key={item}>
       
        <h3 className="Movie7-Heading">!!!{d.title7}!!!</h3>
        <Link to={"/Hollywood"}><button className="Movie7-Back-Button">Let's Explore More Hollywood</button></Link> 
        <div className="Movie7-Media-Container">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXc28Vjal3-9jEdZOGtnVyHNdo4InmpgQo-g&usqp=CAU" alt="Not-Found" className="Movie7-Boy-Logo"/>
            <p className="Movie7-Dimitry">Dimitry Nozhenko</p>
            <p className="Movie7-Date">Jan 28 2019 10 min read</p>
        <img src="https://img.freepik.com/premium-vector/facebook-instagram-twitter-icon_469489-856.jpg" alt="Not-Found"  className="Movie7-Social-Media-Logo"/>
        </div>
     
        <img src={d.img7} alt="Not-Found" className="Movie7-Image"/>
        <div className="Movie7-Image-Name">Image:{d.title7}</div>
        <div className="Movie7-Para-Container">
        <p>{d.gpara1}</p>
        <p>{d.gpara2}</p>
        <p>{d.gpara3}</p>
        </div>
        </div>
    )
 })}    
        
        
        
    </div>
    </>
)
}

export default Movie7Content