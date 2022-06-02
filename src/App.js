import logo from './logo.svg';
import './App.css';
import { useState } from "react";

function App() {
  //js starts
  
  //js ends
  //jsx starts
      // <p>Time to complete - {4* time} mins</p>
     const names=["Mayur","Prathamesh","Aniket"]
     const movieList=[
      {
        name: "RRR",
        poster:
        "https://englishtribuneimages.blob.core.windows.net/gallary-content/2021/6/Desk/2021_6$largeimg_977224513.JPG",
        rating: 8.8,
        summary:
        "RRR is an upcoming Indian Telugu-language period action drama film directed by S. S. Rajamouli, and produced by D. V. V. Danayya of DVV Entertainments.",
        
        },
        {
        name: "Iron man 2",
        poster:
        "https://m.media-amazon.com/images/M/MV5BMTM0MDgwNjMyMl5BMl5BanBnXkFtZTcwNTg3NzAzMw@@._V1_FMjpg_UX1000_.jpg",
        rating: 7,
        summary:
        "With the world now aware that he is Iron Man, billionaire inventor Tony Stark (Robert Downey Jr.) faces pressure from all sides to share his technology with the military. He is reluctant to divulge the secrets of his armored suit, fearing the information will fall into the wrong hands. With Pepper Potts (Gwyneth Paltrow) and Rhodes (Don Cheadle) by his side, Tony must forge new alliances and confront a powerful new enemy.",
        
        },
        {
        name: "No Country for Old Men",
        poster:
        "https://upload.wikimedia.org/wikipedia/en/8/8b/No_Country_for_Old_Men_poster.jpg",
        rating: 8.1,
        summary:
        "A hunter's life takes a drastic turn when he discovers two million dollars while strolling through the aftermath of a drug deal. He is then pursued by a psychopathic killer who wants the money.",
        
        },
        {
        name: "Jai Bhim",
        poster:
        "https://m.media-amazon.com/images/M/MV5BY2Y5ZWMwZDgtZDQxYy00Mjk0LThhY2YtMmU1MTRmMjVhMjRiXkEyXkFqcGdeQXVyMTI1NDEyNTM5._V1_FMjpg_UX1000_.jpg",
        summary:
        "A tribal woman and a righteous lawyer battle in court to unravel the mystery around the disappearance of her husband, who was picked up the police on a false case",
        rating: 8.8,
        
        },
        {
        name: "The Avengers",
        rating: 8,
        summary:
        "Marvel's The Avengers (classified under the name Marvel Avengers\n Assemble in the United Kingdom and Ireland), or simply The Avengers, is\n a 2012 American superhero film based on the Marvel Comics superhero team\n of the same name.",
        poster:
        "https://terrigen-cdn-dev.marvel.com/content/prod/1x/avengersendgame_lob_crd_05.jpg",
        
        },
        {
        name: "Interstellar",
        poster: "https://m.media-amazon.com/images/I/A1JVqNMI7UL._SL1500_.jpg",
        rating: 8.6,
        summary:
        "When Earth becomes uninhabitable in the future, a farmer and ex-NASA\n pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team\n of researchers, to find a new planet for humans.",
        
        },
        {
        name: "Baahubali",
        poster: "https://flxt.tmsimg.com/assets/p11546593_p_v10_af.jpg",
        rating: 8,
        summary:
        "In the kingdom of Mahishmati, Shivudu falls in love with a young warrior woman. While trying to woo her, he learns about the conflict-ridden past of his family and his true legacy.",
        
        },
        {
        name: "Ratatouille",
        poster:
        "https://resizing.flixster.com/gL_JpWcD7sNHNYSwI1ff069Yyug=/ems.ZW1zLXByZC1hc3NldHMvbW92aWVzLzc4ZmJhZjZiLTEzNWMtNDIwOC1hYzU1LTgwZjE3ZjQzNTdiNy5qcGc=",
        rating: 8,
        summary:
        "Remy, a rat, aspires to become a renowned French chef. However, he fails to realise that people despise rodents and will never enjoy a meal cooked by him.",
        
        }
        ];
  return (
    <div className="App">
     
    {/* <Message  pic="https://bestprofilepictures.com/wp-content/uploads/2021/04/Cool-Profile-Picture-768x798.jpg"/> */}
   
   {/* [{
      name:"Mayur",
      pic:"https://bestprofilepictures.com/wp-content/uploads/2021/04/Cool-Profile-Picture-768x798.jpg",
      },
      {
        name:"Prathamesh",
        pic:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1vGNp0RJxy8o1b_KKaehr6kXf8zxQZugdQg&usqp=CAU"
      },
      {
        name:"Aniket",
        pic:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQnVF6kPOwLxFmwHuLQIn-_f6lLFACKWYdCw&usqp=CAU"
      }
] */}
   
   {/* MAP FUNCTION */}
   {/* {  names.map((nm)=>(
    <Welcome name={nm}/>
    ))}

    {name.map((ns)=>(
      <Message name={ns.name} pic={ns.pic}/>
    ))} */}


   {/* <Counter/>  */}

   {/* <Welcome name="abay"/> */}
    <div className="movie-List"> 
    {movieList.map((nm)=>(<Movie movie={nm}/>)
    )}
    </div>
    



    </div>
  );
  //JSX ends 
}

export default App;


// function Message({pic, name}){
//   return ( 
//   <div>
//     <img className='profile-pic' src={pic} alt={name}></img>
//     <h1>Hello,{name}</h1>
//     </div>);
// }

// function Counter(){
//     const [like,setLike]=useState(0);
//     return(
//         <div>
//             <button onClick={()=>setLike(like+1)}>Like</button>
//             <p>{like}</p>
//             <p>{like}</p>
//         </div>
//     )
// }


// function Welcome(props){
// console.log(props);
// return(
//   <div>
//     <h1>Hello,{props.name}</h1>
//     {/* <img className='profile-pic' src={props.pic} alt={props.name}></img> */}
//   </div>
// )
// }


function Movie({movie}){
  const Style={
    color:movie.rating>8?"green":"red"
  }
  const [show,setShow]=useState(true);
  const paraStyle={
    display:show?"block":"none"
  }
  return(
    <div className="movie-container">
      <img src={movie.poster} alt={movie.name} className="movie-poster"></img>
      <div className="movie-specs">
        <h2 className="movie-name">{movie.name}</h2>
        <p style={Style} className="movie-rating">🌟{movie.rating}</p>
      </div>
      
      <button onClick={()=>setShow(!show)}>Toggle Button</button>
      {/* Hook + conditional logic */}
      {/* <p  style={paraStyle} className="movie-summary">{movie.summary}</p> */}
    
    {/* conditional Rendering */}
    {show ? <p   className="movie-summary">{movie.summary}</p>:null}

    </div>
  )
}