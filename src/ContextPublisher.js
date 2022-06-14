import React, { createContext,useState,useContext } from "react";
import "./styles.css";

const context=createContext();


export default function App() {
  const[mode,setMode]=useState("light")
  const obj={mode:mode,setMode:setMode}; 
  const styles={
  background:mode === "light" ?"black":"white"
 
  }
  return (
    <context.Provider value={obj}>
      <div style={styles} className="App">
      <List />
    </div>
    </context.Provider>
  );
}

const List = () => (
  <ul>
    <ListItem value="light" />
    <ListItem value="dark" />
  </ul>
);

const ListItem = ({ value }) => (
  <li>
    <Button value={value} />
  </li>
);

const Button = ({value}) => {
const {mode,setMode} = useContext(context);
  const styles={
    background:mode === "dark" ?"black":"white",
    color:mode==="light"?"black":"white"
  };
  return(
     <button style={styles} onClick={()=>setMode(value==="light"?"light":"dark")}>
        {value}</button>
  )};

// Task (Don't delete or edit components)
// 1. Complete with props drilling - 15mins
// 2. Complete with useContext (avoiding props drilling)

// Reference - https://codesandbox.io/s/usecontext-reference-hw839?file=/src/index.js:165-178
// Expected output - https://csb-6qf0y.netlify.app/

// 1. Creating - createContext
// 2. Publisher - provider - context.Provider
// 3. Subscriber - useContext - useContext(context)
