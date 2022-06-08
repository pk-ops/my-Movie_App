import { useState } from "react";

function Counter() {
  const [like, setLike] = useState(0);
  return (
    <div>
      <button onClick={() => setLike(like + 1)}>Like</button>
      <p>{like}</p>
      <p>{like}</p>
    </div>
  );
}
