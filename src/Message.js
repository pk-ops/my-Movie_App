function Message({ pic, name }) {
  return (
    <div>
      <img className='profile-pic' src={pic} alt={name}></img>
      <h1>Hello,{name}</h1>
    </div>);
}
