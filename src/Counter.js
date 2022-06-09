import { useState } from "react";
import Badge from '@mui/material/Badge';

import IconButton from '@mui/material/IconButton';



export function Counter() {
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
              <Badge badgeContent={dislike} color="primary">
              👎 
                </Badge>     
      </IconButton>
      
    </div>
  );
}
