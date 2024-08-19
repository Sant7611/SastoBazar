import React from "react"; 
import './App.css'

// import styles from './App.css';

function App() {

//Internal styling 1.
  // const styling = {
  //   color:"green",
  //   font:"4rem",
  // };


  // return [
  //    <h1>Hello World</h1>,
  //   <span>This is my new Paragraph</span>
  // ]
  
  // return <div>
  //       <h1>Hello World</h1>
  //      <span>This is my new Paragraph</span>
  // </div>
  
  // return <React.Fragment>
  //       <h1>Hello World</h1>
  //      <span>This is my new Paragraph</span>
  // </React.Fragment>

  // also known as synthetic sugar 
  // return <>
  //       <h1>Hello World</h1>
  //      <span>This is my new Paragraph</span>
  // </>

  // //styling
  // //1. Inline Css
  // return <>
  //   <h1 style={styling}>Hello World</h1>
  // </>

  // 2. className
  return (
    <>
    <h1 className="text-red-500">Hello World</h1>
    </>
  )


  // return   React.createElement("h1", null, "Hello World");
  
}

export default App
