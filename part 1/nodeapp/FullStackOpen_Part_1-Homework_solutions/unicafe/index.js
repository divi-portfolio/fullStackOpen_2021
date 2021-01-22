import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = (props) => {
  return <button onClick={props.handleClick}>{props.feedback}</button>
}

const Stat_avg = ({ good, neutral, bad, text }) => {
  return (
    <tr>
      <td> {text} </td>
      <td> {(good - bad) / (good + neutral + bad)} </td>
    </tr>
  )
}

const Stat_all = ({ good, neutral, bad, text }) => {
  return (
    <tr>
      <td> {text} </td>
      <td>{(good + bad + neutral)} % </td>
    </tr>
  )
}

const Stat_positive = ({ good, neutral, bad, text }) => {
  return (
    <tr>
      <td> {text} </td>
      <td>{(good * 100) / (good + bad + neutral)} % </td>
    </tr>
  )
}

const Stat_val = ({ value, text }) => {
  return (
    <tr>
      <td> {text} </td>
      <td> {value}</td>
    </tr>
  )
}

const Statistics = ({ good, neutral, bad }) => {
  if ((good + neutral + bad) === 0) {
    return (
      <div>
        <h1>Statistics</h1>
        No feedback given
      </div>
    )
  }

  return (
    <div>
      <h1>Statistics</h1>
      <table>
        <Stat_val text="good" value={good} />
        <Stat_val text="neutral" value={neutral} />
        <Stat_val text="bad" value={bad} />
        <Stat_positive good={good} neutral={neutral} bad={bad} text="positive" />
        <Stat_all good={good} neutral={neutral} bad={bad} text="all" />
        <Stat_avg good={good} neutral={neutral} bad={bad} text="average" />

      </table>
    </div>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>Give Feedback</h1>
      <Button handleClick={() => setGood(good + 1)} feedback="good" />
      <Button handleClick={() => setNeutral(neutral + 1)} feedback="neutral" />
      <Button handleClick={() => setBad(bad + 1)} feedback="bad" />

      <Statistics good={good} neutral={neutral} bad={bad} />
    </div >
  )
}