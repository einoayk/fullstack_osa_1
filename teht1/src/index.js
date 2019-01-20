import React from 'react'
import ReactDOM from 'react-dom'


const Header = (props) => {
  return(
    <div>
      <h1>{props.course.name}</h1>
    </div>
  )
}

const Part = (props) => {
  return(
    <div>
      <p>{props.part1} {props.exercises1}</p> 
      <p>{props.part2} {props.exercises2}</p>
      <p>{props.part3} {props.exercises3}</p>
    </div>
  )
}

const Content = (props) => {
  return(
    <div>
      <Part part1={props.course.parts[0].name} exercises1={props.course.parts[0].exercises}/>
      <Part part2={props.course.parts[1].name} exercises2={props.course.parts[1].exercises}/>
      <Part part3={props.course.parts[2].name} exercises3={props.course.parts[2].exercises}/>  
    </div>
  )
}


const Total = (props) => {
  return(
    <div>
      <p>yhteensä {props.course.parts[0].exercises + props.course.parts[1].exercises + props.course.parts[2].exercises} tehtävää</p>
    </div>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack -sovelluskehitys',
    parts: [
      {
        name: 'Reactin perusteet',
        exercises: 10
      },
      {
        name: 'Tiedonvälitys propseilla',
        exercises: 7
      },
      {
        name: 'Komponenttien tila',
        exercises: 14
      }
    ]
  }


  return (
    <div>
      <Header course={course} />
      <Content  course={course}/>
      <Total course={course} />      
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))