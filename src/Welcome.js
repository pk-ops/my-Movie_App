function Welcome(props) {
  console.log(props);
  return (
    <div>
      <h1>Hello,{props.name}</h1>
      {/* <img className='profile-pic' src={props.pic} alt={props.name}></img> */}
    </div>
  );
}
