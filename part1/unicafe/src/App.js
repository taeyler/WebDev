import React, { useState } from 'react'


const Header = ({headerName}) => (
    <h1>{headerName}</h1>
)

const Statistics = (props) => {

  const allMin = props.good+props.bad+props.neutral
  const avg = (props.good-props.bad)/(props.good+props.bad+props.neutral)
  const pos = props.good/(props.good+props.bad+props.neutral)*100

  if (allMin === 0) {
    return (
      <div>  
        <br />No feedback given
      </div>
    )
  }
  return(
    <table>
      <tbody>
      <StatisticLine text="good" value ={props.good} />
      <StatisticLine text="neutral" value ={props.neutral} />
      <StatisticLine text="bad" value ={props.bad} />
      <StatisticLine text="ALL MINIONS" value = {allMin}/>
      <StatisticLine text ="average" value = {avg}/>
      <StatisticLine text="Positive" value = {pos}/>
      </tbody>
    </table>
  ) 
}

const StatisticLine = ({text, value}) => (
      <tr>
        <td>{text}</td>
        <td>{value}</td>
      </tr>
)

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)


  const handleGoodClick = () => {
    setGood(good + 1)
  }
  const handleNeutralClick = () => {
    setNeutral(neutral + 1)
  }

  const handleBadClick = () => {
    setBad(bad + 1)
  }

  return (
    <div>
      <Header headerName = 'give feedback'/>
      <Button handleClick={handleGoodClick} text='good' />
      <Button handleClick={handleNeutralClick} text='neutral' />
      <Button handleClick={handleBadClick} text='bad' />
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  )

}

export default App