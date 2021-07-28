import React, {Fragment}  from "react";
import {Grow,Paper } from '@material-ui/core';



 const ReplyTextAnimation =  props =>
 {
  
const SmallCircle = () =>{
    return(
   <div>
       <svg style={{width:"35px"}}> <circle
       cx="25"
       cy="25"
       r="5"
       fill="#FFFFF1"
       stroke="#FFFFF1"
       strokeWidth="2" />
       </svg>
    </div>
    )
  } 
    return(<Fragment>
      <Grow in={true} timeout={300} > 
      {SmallCircle()}
    </Grow>
    <Grow in={true} timeout={600} > 
      {SmallCircle()}
    </Grow>
    <Grow in={true} timeout={900} > 
      {SmallCircle()}
    </Grow>
    </Fragment>)

 }
 export default ReplyTextAnimation