import React ,{useContext}from "react";
import { Link } from "react-router-dom";
import Store from "../../../Utility/ContextStore/ContextApi";

const  Movie4Content = ()=>{
    const [data] = useContext(Store)
    console.log("DATATTATA",data);
return(
    <>
    <div className="Movie4-line"/>
    <div className="Movie4-Container">
 
         
{data.filter((item)=>item.cat ==='Hollywood-Images').map((d,item)=>{
    return(
        <div key={item}>
       
        <h3 className="Movie4-Heading">!!!{d.title4}!!!</h3>
        <Link to={"/Hollywood"}><button className="Movie4-Back-Button">Let's Explore More Hollywood</button></Link> 
        <div className="Movie4-Media-Container">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXc28Vjal3-9jEdZOGtnVyHNdo4InmpgQo-g&usqp=CAU" alt="Not-Found" className="Movie4-Boy-Logo"/>
            <p className="Movie4-Dimitry">Dimitry Nozhenko</p>
            <p className="Movie4-Date">Jan 28 2019 10 min read</p>
        <img src="https://img.freepik.com/premium-vector/facebook-instagram-twitter-icon_469489-856.jpg" alt="Not-Found"  className="Movie4-Social-Media-Logo"/>
        </div>
     
        <img src={d.img4} alt="Not-Found" className="Movie4-Image"/>
        <div className="Movie4-Image-Name">Image:{d.title4}</div>
        <div className="Movie4-Para-Container">
        <p>{d.dpara1}</p>
        <p>{d.dpara2}</p>
        <p>{d.dpara3}</p>
        </div>
        </div>
    )
 })}    
        
        
        
    </div>
    </>
)
}

export default Movie4Content