import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => {
  return (
    <h1>{props.course}</h1>
  )
}
//// PART 1: Exercise 1.2 REFACTORED CONTENT .  (Content component from exercise 1.1 is below APP component at the end of code)
const Content = (props) => {
  return (
    <div>
      <Part1 part1={props.part1} exercises1={props.exercises1} />
      <Part2 part2={props.part2} exercises2={props.exercises2} />
      <Part3 part3={props.part3} exercises3={props.exercises3} />
    </div>
  )
}
const Part1 = (props) => {
  return (
    <div>
      <p>{props.part1} {props.exercises1} </p>
    </div>
  )
}

const Part2 = (props) => {
  return (
    <div>
      <p>{props.part2} {props.exercises2} </p>
    </div>
  )
}
const Part3 = (props) => {
  return (
    <div>
      <p>{props.part3} {props.exercises3} </p>
    </div>
  )
}
const Total = (props) => {
  return (
    <div>
      <p>Number of exercises {props.exercises1 + props.exercises2 + props.exercises3}</p>
    </div>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header course={course} />

      <Content part1={part1} exercises1={exercises1} part2={part2} exercises2={exercises2} part3={part3} exercises3={exercises3} />
      <Total exercises1={exercises1} exercises2={exercises2} exercises3={exercises3} />

    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))


////// PART 1, EXERCISE 1.1 Content component
// const Content = (props) => {
//   return (
//     <div >
//       <p>
//         {props.part1} {props.exercises1}
//       </p>

//       <p>
//         {props.part2} {props.exercises2}
//       </p>

//       <p>
//         {props.part3} {props.exercises3}
//       </p>
//     </div>
//   )
// }