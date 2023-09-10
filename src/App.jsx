import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todo from './todo'
import Actor from './Actor'
import Singers from './Singers'


function App() {
  const [count, setCount] = useState(0)
  const actors = ['Sakib','Raj','Josim','Milu','Salman Shah'];
  const singers = [
    {name: "ali raz", age:59},
    {name: "kodom Mia", age:43},
    {name: "Halim Ratri", age:32},
    {name: "Elven Shilpa", age:23},
    {name: "Rickardo Drod", age:38},
]

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>

      <h1>Vite + React</h1>

      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>

      {
        singers.map(singer => <Singers singer={singer}></Singers>)
      }

      <Actor name="BappaRaz"></Actor>
      {
        actors.map(actor => <Actor name={actor}></Actor>)
      }
      <br />
      




      <Todo task="Learn React" isDone={true}></Todo>
      <Todo task="Explore Core Concepts" isDone={false}></Todo>
      <Todo task="Try Jsx" isDone={true}></Todo>
      
      <Device name="Leptop" price="55"></Device>
      <Device name="Mobile" price="15"></Device>
      <Device name="watch" price="3"></Device>
      <Person></Person>
      <Student grade="7" score="99"></Student>
      <Student grade={12} score="64"></Student>
      <Student></Student>
      <Developer></Developer>

    </>
  )
}

function Device(props){
  console.log(props)
  const DeviceStyle = {
    border: '2px solid blue',
    borderRadius: '20px'
  }

  return <p style={DeviceStyle}>device name: {props.name}, price:{props.price} </p>
}

function Person(){
  const age = 25;
  const money = 20;
  const person2 = {name:"sakib",age:12};
  return <h3>I am {person2.name} person with age: {person2.age}</h3>
}
//create functions for html and return it.
const {grade, score} = {grade: '5',score: '59'};

function Student({grade=1,score=0}){
  console.log(grade,score);
  return(<div className='student'>
    <h3>This is a student</h3>
    <p>Name:{grade} </p>
    <p>Age:{score} </p>
  </div>
  )
}

function Developer(){
  const developerStyle = {
    margin:'20px',
    border: '3px solid green',
    padding: '20px',
    borderRadius: '15px'

  }
  return(
    <div style={developerStyle}>
      <h5>Devo devo</h5>
      <p>Coding: </p>
    </div>
  )
}

export default App
