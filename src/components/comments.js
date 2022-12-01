import React, { useEffect } from 'react';
import commentbox from 'commentbox.io';



const Comments = ()=>{
  useEffect(() =>{
    commentbox('5742455538319360-proj', {
      backgroundColor: null,  // default transparent
      textColor: "#222",  // default black
       subtextColor: "#222",  // default grey
   })
  },[])

  return(

  
  

    <div className="commentbox" />
  )

}
  
  export default Comments