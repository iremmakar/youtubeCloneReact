import React, { useState } from 'react'

const StringArea = ({text,max}) => {

    const [showFullText,setShowFullText] = useState(false);

    let shortText = text;

    if(text.length>max && !showFullText){
        shortText = text.substring(0,max) + "..."
    }

    const handleClick =()=>{
        setShowFullText(!showFullText);
       
    }

  return (
    <p onClick={()=>handleClick}>
        {shortText}
    </p>
  )
}

export default StringArea