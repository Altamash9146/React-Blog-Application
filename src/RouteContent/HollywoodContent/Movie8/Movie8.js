import React ,{useContext}from "react";
import { Link } from "react-router-dom";
import Store from "../../../Utility/ContextStore/ContextApi";

const  Movie8Content = ()=>{
    const [data] = useContext(Store)
    console.log("DATATTATA",data);
return(
    <>
    <div className="Movie8-line"/>
    <div className="Movie8-Container">
 
         
{data.filter((item)=>item.cat ==='Hollywood-Images').map((d,item)=>{
    return(
        <div key={item}>
       
        <h3 className="Movie8-Heading">!!!{d.title8}!!!</h3>
        <Link to={"/Hollywood"}><button className="Movie8-Back-Button">Let's Explore More Hollywood</button></Link> 
        <div className="Movie8-Media-Container">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXc28Vjal3-9jEdZOGtnVyHNdo4InmpgQo-g&usqp=CAU" alt="Not-Found" className="Movie8-Boy-Logo"/>
            <p className="Movie8-Dimitry">Dimitry Nozhenko</p>
            <p className="Movie8-Date">Jan 28 2019 10 min read</p>
        <img src="https://img.freepik.com/premium-vector/facebook-instagram-twitter-icon_469489-856.jpg" alt="Not-Found"  className="Movie8-Social-Media-Logo"/>
        </div>
     
        <img src={d.img8} alt="Not-Found" className="Movie8-Image"/>
        <div className="Movie8-Image-Name">Image:{d.title8}</div>
        <div className="Movie8-Para-Container">
        <p>{d.hpara1}</p>
        <p>{d.hpara2}</p>
        <p>{d.hpara3}</p>
        </div>
        </div>
    )
 })}    
        
        
        
    </div>
    </>
)
}

export default Movie8Content