import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => {
  return (
    <h1>{props.course}</h1>
  )
}

const Content = (props) => {

  return (
    <div>
      <Part1 props={props.parts[0]} />
      <Part2 props={props.parts[1]} />
      <Part3 props={props.parts[2]} />
    </div>
  )
}

const Part1 = (props) => {
  return (
    <div>
      <p>{props.props.name} {props.props.exercises} </p>
    </div>
  )
}

const Part2 = (props) => {
  return (
    <div>
      <p>{props.props.name} {props.props.exercises} </p>
    </div>
  )
}
const Part3 = (props) => {
  return (
    <div>
      <p>{props.props.name} {props.props.exercises} </p>
    </div>
  )
}
const Total = (props) => {
  console.log(props)
  return (
    <div>
      <p>Number of exercises {props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises}</p>
    </div>
  )
}

const App = () => {

  const course = {
    name: 'Half Stack application development',
    parts: [
      { name: 'Fundamentals of React', exercises: 10 },
      { name: 'Using props to pass data', exercises: 7 },
      { name: 'State of a component', exercises: 14 }
    ]
  }
  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div >
  )
}

ReactDOM.render(<App />, document.getElementById('root'))