import { useState } from "react";
import Badge from '@mui/material/Badge';

import IconButton from '@mui/material/IconButton';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';

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
                 <ThumbUpIcon/> 
                </Badge>     
      </IconButton>
    
      <IconButton
          className="like-button"
           color="error"
           onClick={incrementdislike}
           aria-label="Movie-details">
              <Badge badgeContent={dislike} color="error">
                 <ThumbDownIcon/>
                </Badge>     
      </IconButton>

      {/* <button onClick={incrementLike}>👍{like}</button>
      <button onClick={incrementdislike}>👎{dislike}</button> */}

      
    </div>
  );
}
