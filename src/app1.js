function Counter(){
    const [like,setLike]=userState(0);
    return(
        <div>
            <button onClick={()=>setLike(like+1)}>Like</button>
            <p>{like}</p>
            <p>{like}</p>
        </div>
    )
}