import React from "react";
import {Link, Outlet} from "react-router-dom";


class WomanPage extends React.Component{
  render(){
    return(
      <>
      <div className="header_item nav">
        <ul>
        <li><Link to='dresses'>Dresses</Link></li>
        <li><Link to='bags'>Bags</Link></li>
        </ul>
      </div>
        
        <div className="content">
          <Outlet/>
          <img alt="" className="header_img" src={require("../storage/womanPageHeader.jpg")}/>
        </div>  
      </>
    )
  }
}

export default WomanPage