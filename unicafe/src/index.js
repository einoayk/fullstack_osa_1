import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Statistics = (props) => {
  const { good, bad, neutral} = props
  const yhteensä = bad + neutral + good

  if(yhteensä === 0){
    return(
      <div>
        <p>Ei yhtään palautetta annettu</p>
      </div>
    )
  }

  return(
        
    <table> 
      <tbody>
        <Statistic name="hyvä" stat={good} />
        <Statistic name="neutraali" stat={neutral} />
        <Statistic name="bad" stat={bad} />
        <Statistic name="yhteensä" stat={yhteensä} />
        <Statistic name="keskiarvo" stat={(good-bad)/yhteensä} />
        <Statistic name="postitiivisia" stat={good/yhteensä} />
      </tbody>
            
    </table>
  )
}

const Statistic = (props) => {
  const {name, stat} = props
  return(
    <tr>
      <td> {name} {stat}</td>
    </tr>
  )
}

const Button = (props) => {
    const {name, handle} = props
    return(
      <button onClick={handle}> {name} </button>
    )    
}

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGoodClick = () => {
    setGood(good +1)
      
  }

  const handleNeutralClick = () => {
    setNeutral(neutral +1)
  }

  const handleBadClick = () => {
    setBad(bad +1)
  }
  return (
    <div>
      <h1>anna palautetta</h1>
      <div>
        <Button name="hyvä" handle={handleGoodClick}/>
        <Button name="neutraali" handle={handleNeutralClick}/>
        <Button name="huono" handle={handleBadClick}/>
      </div>
      
      <h1>statistiikka</h1>
      <Statistics good={good} bad={bad} neutral={neutral} />
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)