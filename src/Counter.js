import { useState } from "react";
import Badge from '@mui/material/Badge';
import * as React from 'react';
import IconButton from '@mui/material/IconButton';



export function Counters() {
  const [like, setLike] = useState(0);
  const [dislike, setDislike]=useState(0);
  const incrementLike=()=>setLike(like+1);
  const incrementdislike=()=>setDislike(dislike+1);
  return (
    <div className="counter-container">
        <IconButton
          className="like-button"
           color="primary"
           onClick={incrementLike}
           aria-label="Movie-details">
              <Badge badgeContent={like} color="primary">
                  👍
                </Badge>     
      </IconButton>
    
      <IconButton
          className="like-button"
           color=""
           onClick={incrementdislike}
           aria-label="Movie-details">
              <Badge badgeContent={dislike} color="error">
              👎 
                </Badge>     
      </IconButton>
      
    </div>
  );
}
